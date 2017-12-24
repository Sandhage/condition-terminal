// const debug = require('debug')('take_survey');
const pino = require('pino')();
const Promise = require('bluebird');
const readline = require('readline');
const validation = require('../validation/validation');
const save = require('./save_survey');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const record = {};

exports.execute = function () {
    pino.info('survey running...');

    askQuestion('What is your resting heart rate currently? (per minute) \n', validation.validateRestingHeart)
        .then(resp => {
            record.heart_rate = resp;

            return askQuestion('How many calories have you eaten today? \n', validation.validateCalories)
                .then(resp => {
                    record.calories = resp;

                    return askQuestion('How would you describe your day? (140 characters or less) \n', validation.validateDayDescription)
                        .then(resp => {
                            record.day_description = resp;

                            closeSurvey();
                        });
                });
        });
};

function askQuestion(prompt, validation) {
    return new Promise(function (resolve, reject) {
        rl.question(prompt, (answer) => {
            let valid = validation(answer);

            if (valid.pass) {
                resolve(answer);
            } else {
                console.log('Sorry, that answer could not be recorded: ' + valid.error + '\n     <3 Please provide a valid answer <3');
                return askQuestion(prompt, validation)
                    .then(answer => {
                        resolve(answer)
                    });
            }
        });
    });
}

function closeSurvey() {
    console.log('Thank you for taking this brief survey! \n You provided the following answers:');
    console.log('Your resting heart rate is: %s', record.heart_rate);
    console.log('You ate %d calories today', record.calories);
    console.log('Here is how you described your day: \n %s', record.day_description);
    
    save.save(JSON.stringify(record));

    rl.close();
}