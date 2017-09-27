// const debug = require('debug')('take_survey');
const pino = require('pino')();
const Promise = require('bluebird');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let record = new Object();

exports.execute = function () {
    pino.info('survey running...');
    askDadName().then(response => {
        console.log(`${response} ... OF COURSE YES THIS IS IT YES`);
        
        askFeelings().then(resp => {
            console.log(`${resp} ... SO THAT IS FEELING. YES.`);

            console.log('HERE IS WHAT I KNOW ABOUT DAD: %o', record.dads_name);
            console.log('HERE IS WHAT FEELING IS: %o', record.feeling);
            pino.info('... survey ended.');
        })
    });
};

function askDadName() {
    return new Promise(function (resolve, reject) {
        rl.question('TELL ME THE DAD\'S NAME SO THAT I MAY BECOME DJYNN: \n', (answer) => {
            record.dads_name = answer;

            rl.close();

            resolve(answer);
        });
    });
}

function askFeelings() {
    return new Promise(function (resolve, reject) {
        rl.question('TELL ME NOW DO YOU FEEL: \n', (answer) => {
            record.feeling = answer;

            rl.close();

            resolve(answer);
        });
    });
}