Commands = function Constructor(){}

require('fs').readdirSync('./commands').forEach(function(file) {
  require('./commands/' + file)
})

module.exports = Commands
