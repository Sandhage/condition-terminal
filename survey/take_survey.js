// const debug = require('debug')('take_survey');
const pino = require('pino')();
const Promise = require('bluebird');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let record = new Object();
let emptyError = "Response cannot be empty";

exports.execute = function () {
    pino.info('survey running...');

    askDadName()
        .then(response => {
            record.dads_name = response;
            console.log(`%s ... OF COURSE YES THIS IS IT YES`, record.dads_name);

            return askFeelings()
            .then(response => {
                record.feeling = response;
                console.log('%s ... YES THANK YOU.', response);
                console.log('%o', record);
            })
            .then(function() {
                rl.close();
            });
        
        });
};

function askDadName() {
    return new Promise(function (resolve, reject) {
        rl.question('TELL ME THE DAD\'S NAME SO THAT I MAY BECOME DJYNN: \n', (answer) => {
            resolve(answer);
        });
    });
}

function askFeelings() {
    return new Promise(function (resolve, reject) {
        rl.question('TELL ME NOW DO YOU FEEL: \n', (answer) => {
            if (answer.length > 0) {
                resolve(answer);
            } else {
                console.log(emptyError);
                return askFeelings()
                    .then( answer => {
                        resolve(answer);
                    });
            }
        });
    });
}

// make one generic question prompt function that can accept a question and custom validation