if (process.env.HEROKU !== 'true') {
  require('dotenv').config()
}

var irc = require('irc');
var mongojs = require('mongojs');

var config = {
  server: process.env.IRC_SERVER,
  botName: process.env.IRC_USERNAME,
};

module.exports = {
  db: mongojs(process.env.MONGO_URL, ['users', 'channels', 'crashers', 'complaints']),
  bot: new irc.Client(config.server, config.botName, {
    userName: config.botName,
    realName: config.botName,
    showErrors: true,
    autoRejoin: true, 
    autoConnect: true,
    retryCount: 1000
  }),

  utils: require('./utils.js'),
  commands: require('./commands.js'),

  env: process.env.ENVIRONMENT,
  config: config,

  wdym: []
};
