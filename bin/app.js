const takeSurvey = require('../survey/take_survey');
const debug = require('debug')('app');
const pino = require('pino')();

takeSurvey.execute();
