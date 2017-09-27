// const debug = require('debug')('take_survey');
const pino = require('pino')();
const Promise = require('bluebird');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


exports.execute = function () {
    pino.debug('survey running...');
    return new Promise(function (resolve, reject) {
        rl.question('TELL ME THE DAD\'S NAME SO THAT I MAY BECOME DJYNN:', (answer) => {
            console.log(`${answer} ... OF COURSE YES THIS IS IT YES`);
            
            pino.debug('... survey ended.');
            rl.close();

            resolve(answer);
        });
    });

 
};