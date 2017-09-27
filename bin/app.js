const takeSurvey = require('../survey/take_survey');
const debug = require('debug')('app');
const pino = require('pino')();

pino.info('Application started...');
takeSurvey.execute().then(function () {
    pino.info('... Application ended.');
});
