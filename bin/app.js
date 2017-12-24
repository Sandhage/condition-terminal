const takeSurvey = require('../survey/take_survey');
const save = require('../survey/save_survey');
const debug = require('debug')('app');
const pino = require('pino')();

takeSurvey.execute();
//save.save();