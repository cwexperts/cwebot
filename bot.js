everyone = [], users = [], voices = [], halfops = [], ops = [], time = [], ticksecs = [], afk = []. uptime = "";
pentime = [], pensecs = [], role1time = [], role1secs = [], role2time = [], role2secs = [], flagtime = [], flagsecs = [], actime = [], acsecs = [];
everyoneLc = [], usersLc = [], voicesLc = [], halfopsLc = [], opsLc = [];
lead = [], salt = [], et1 = [], et2 = [], et3 = [], coor = [], flag = [];
hopm = [];

//TEMP VARIABLES FOR MEMBER PROFILE KEYS
memlist = [], tempkey = [], justadded = [], upsecs = [], upmins = [], uphrs = [];

//TEMP VARIABLE FOR MEMBER & BUG REPORTS
memreportmins = [], memreportsecs = [], bugreportmins = [], bugreportsecs = [];

//TEMP VARIABLE FOR RE-REGISTER NICKNAME
reregister = [];

var Common = require('./common.js');

console.log('Connecting to ' + Common.config.server + ' as '
  + Common.config.botName + '.');

Common.bot.setMaxListeners(13)

Common.bot.addListener('registered', function(message) {
  console.log('Identifying...');
  Common.bot.send('NS', 'identify', process.env.IRC_PASSWORD);
  setTimeout(function() {
    Common.bot.join('#key');
    Common.bot.join('#cwexperts.staff');
    Common.bot.join('#cwexperts2');
    Common.bot.join('#cwexperts1');
    Common.bot.join('#cwexperts');
    Common.bot.send('MODE', Common.config.botName, '+B');
    console.log('Identified successfully and connected.');
  }, 5000);
  uptime = new Date();
});

// Reminders
// Common.utils.cacheReminder(Common, 'cache', true);

Common.bot.addListener('names', function(channel, nicks) {
  everyone[channel] = [], users[channel] = [], voices[channel] = [], halfops[channel] = [], ops[channel] = [];
  everyoneLc[channel] = [], usersLc[channel] = [], voicesLc[channel] = [], halfopsLc[channel] = [], opsLc[channel] = [];
  
  for (var nick in nicks) {
    if (nick != Common.config.botName && nick.indexOf('RuneScript') == -1 
        && nick.indexOf('ChanStat') == -1 && nick.indexOf('Anna') == -1) {
      everyone[channel].push(nick);
      if (channel == '#cwegames') {
        if (nicks[nick] != '@') {
          users[channel] += nick+' ';
        }
      } else {
        if (nicks[nick] == '+' || nicks[nick] == '%') {
          users[channel] += nick + ' ';
          usersLc[channel] += Common.utils.toLc(nick) + ' ';
        }
      }
      
      if (nicks[nick] == '+') {
        voices[channel].push(nick);
      }
      
      if (nicks[nick] == '%') {
        halfops[channel].push(nick);
      }
      
      if (nicks[nick] == '@') {
        ops[channel].push(nick);
      }
    }
    
    everyoneLc[channel].push(Common.utils.toLc(nick));
    if (nicks[nick] == '+') {
      voicesLc[channel].push(Common.utils.toLc(nick));
    }
    
    if (nicks[nick] == '%') {
      halfopsLc[channel].push(Common.utils.toLc(nick));
    }
    
    if (nicks[nick] == '@') {
      opsLc[channel].push(Common.utils.toLc(nick));
    }
  }
});

Common.bot.addListener('message', function(from, to, message) {
  var command = Common.utils.getCmd(message).toLowerCase();

  if (from == "Dxnxex7" && Common.wdym[to]) {
    Common.bot.say(to, "4What do you mean, Dxnxex7?")
    return
  }

  if (Common.utils.isCmd(message) && typeof(Common.commands[command]) === 'function') {
    Common.commands[command](Common, from, to, message);
  } else if (Common.utils.isCmd(message) && typeof(Common.commands[command]) !== 'function') {
    //Common.bot.say(to, "Sorry, this command doesn't exist!");
  }
});

Common.bot.addListener('invite', function(channel, from, message) {
  if (from.substring(0, 5) == 'Abdel') {
    Common.bot.join(channel);
  }
});

Common.bot.addListener('join', function(channel, nick, message) {
  Common.bot.send("NAMES", channel);
  if (Common.utils.toLc(nick) == 'cwebot') {
//     if (channel == '#cwexperts1' || channel == '#cwexperts2') {
//       Common.bot.say(channel, "12Hello! I am CWEBot. 4Operating Manual12: http://cwexperts.org/bot-commands/. 3Thank you for playing with #CwExperts12.");
//     } else if (channel == '#cwexperts') {
//       Common.bot.say(channel, "12Hello! I am CWEBot. 4How To Join12: http://cwexperts.org/how-to-join/. 3Thank you for visiting #CwExperts12.");
//     } else if (channel == '#cwexperts.staff') {
//       Common.bot.say(channel, "12Hello! I am CWEBot. 4Operating Manual12: http://cwexperts.org/bot-commands/. 3Thank you for supporting #CwExperts12.");
//     }
  } else if (channel == '#cwexperts') {
//     setTimeout(function() {
//       if (ops[channel].indexOf(nick) > -1 || halfops[channel].indexOf(nick) > -1 || voices[channel].indexOf(nick) > -1) {
//       } else {
//         Common.bot.say(channel, "12Hello " + nick + "! 4How To Join12: http://cwexperts.org/how-to-join/. 4Type 7!join 4for instructions12.");
//       }
//     }, 10000);
	Common.db.users.findOne({name: nick}, function(err, user) {
		if (err || !user) {
			console.log(err);
		} else {
			//var exp = user.lastSeen + 5184000000
			var exp = user.lastSeen + 60000
			var timenow = new Date();
			if (timenow > exp) {
				reregister[nick] = 1;
				Common.bot.say(channel, "3Welcome back " + nick + "! You have been gone for more than 2 months which has resulted in your SwiftIRC nickname becoming unregistered. Use !register to display the instructions for reregistering your SwiftIRC nickname.");
			}
		}
	});
  } else if (channel == '#cwexperts1' || channel == '#cwexperts2') {
    if (Common.utils.toLc(nick) != 'abdel' && Common.utils.toLc(nick) != 'hanna' && Common.utils.toLc(nick) != 'alan_' 
        && Common.utils.toLc(nick) != 'alan__' && Common.utils.toLc(nick) != 'base_tank' 
        && Common.utils.toLc(nick) != 'fable' && Common.utils.toLc(nick) != 'ipso') {
      var greetmsg = "4[GREET]: 2" + nick + " has arrived! 4P7A8R9T11Y 12T6I13M4E 7B8I9T11C12H6E13S4!";
      var players = [];
      setTimeout(function() {
          if (everyoneLc[channel].indexOf(Common.utils.toLc(nick)) > -1) {
            if (users[channel] != '') {
              players = users[channel].match(/\S+/g);
            }
            Common.db.channels.findOne({channel: channel}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for " + channel);
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  if (ch.world === 0) {
                    greetmsg += " 2- 2Current world: unknown";
                  } else {
                    greetmsg += " 2- 2Current world: " + ch.world + "";
                  }
                  
                  if (time[channel] == undefined) {
                    greetmsg += ", ticks left: unknown";
                  } else if (time[channel] == 2) {
                    greetmsg += ", ticks left: 7" + time[channel] + "2";
                  } else if (time[channel] == 1 || time[channel] == 0) {
                    greetmsg += ", ticks left: 4" + time[channel] + "2";
                  } else {
                    greetmsg += ", ticks left: 3" + time[channel] + "2";
                  }
                  
                  if (ch.cycle === 2) {
                    greetmsg += " - World cycle: Two";
                  } else if (ch.cycle === 3) {
                    greetmsg += " - World cycle: Three";
                  }
                  
                  if (ch.team == 'saradomin') {
                    greetmsg += " - Winning team: 10Saradomin";
                  } else if (ch.team == 'zamorak') {
                    greetmsg += " - Winning team: 4Zamorak";
                  }
                  greetmsg += " 2- Active player count: " + players.length;
                } else {
                  greetmsg += " 2- Active member count: " + players.length;
                }
               
                Common.bot.say(channel, greetmsg);
              }
            });
          }
      }, 2000);
    }
	setTimeout(function() {
		if (everyoneLc[channel].indexOf(Common.utils.toLc(nick)) > -1) {
		nick = Common.utils.toLc(nick);
		Common.db.users.findOne({name: nick}, function(err, user) {
			if (err || !user) {
				console.log(err);
			} else if (justadded[nick] != 1) {
			if (user.key === undefined) {
				Common.bot.say(channel, "2" + nick + ", please use !profileKey to set up your profile key and secure your profile.");
			}
			if (user.discord === undefined || user.discord == 'unknown') {
				Common.bot.say(channel, "2" + nick + ", please use !addDiscordID EXAMPLE_NAME # 0 0 0 0 to complete your profile.");
			}
			if (user.recruiter === undefined || user.recruiter === 0) {
				Common.bot.say(channel, "2" + nick + ", please use !addRecruiter MEMBER_HERE to complete your profile.");
			}
			if (user.joinDate === undefined || user.joinDate == 'unknown') {
				Common.bot.say(channel, "2" + nick + ", please inform a member with Owner member status the date you joined to complete your profile.");
			}
			}
		});
		}
	}, 2000);
  } else if (channel == '#cwexperts.staff') {
//     4red 7orange 8yellow 9lightgreen 10cyan 11lightcyan 12lightblue 2blue 6purple 13pink 3green
  } else if (channel == '#key') {
     if (Common.utils.toLc(nick) != 'abdel' && Common.utils.toLc(nick) != 'dxnxex7' && Common.utils.toLc(nick) != 'hanna') {
       Common.bot.say(channel, "4[WARNING]: Do not enter your profile key if there are other users present in this channel - ask a member with Owner member status for guidance!");
     }
  }
});

Common.bot.addListener('+mode', function(channel, by, mode, argument, message) {
  Common.bot.send("NAMES", channel);
});

Common.bot.addListener('-mode', function(channel, by, mode, argument, message) {
  Common.bot.send("NAMES", channel);
});

Common.bot.addListener('part', function(channel, by, mode, argument, message) {
  Common.bot.send("NAMES", channel);
});

Common.bot.addListener('kick', function(channel, nick, by, reason, message) {
  Common.bot.send("NAMES", channel);
  Common.db.channels.findOne({channel: '#cwexperts1'}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for #cwexperts1");
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  Common.bot.say('#cwexperts1', "4[KICK]: 2" + nick + " has been kicked from " + channel + ". [" + reason + "]");
                }
              }
  });
  Common.db.channels.findOne({channel: '#cwexperts2'}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for #cwexperts1");
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  Common.bot.say('#cwexperts2', "4[KICK]: 2" + nick + " has been kicked from " + channel + ". [" + reason + "]");
                }
              }
  });
});

Common.bot.addListener('nick', function(oldnick, newnick, channels, message) {
  for (var i = 0; i < channels.length; i++) {
    Common.bot.send("NAMES", channels[i]);
  }
  
  if (Common.utils.toLc(oldnick) != 'abdel' && Common.utils.toLc(oldnick) != 'dxnxex7' && Common.utils.toLc(oldnick) != 'hanna' && Common.utils.toLc(newnick) != 'abdel' && Common.utils.toLc(newnick) != 'dxnxex7' && Common.utils.toLc(newnick) != 'hanna') {
    Common.bot.notice(newnick, "4[WARNING]: 2You are receiving this message because you are present in an official #CwExperts SwiftIRC channel and you have just changed your nickname from " + oldnick + " to " + newnick + ". " + 
  "If " + newnick + " is not identical or similar to your main RSN, and/or if you do not have " + newnick + " grouped with your main nickname, then please use /ns group NICKNAME PASSWORD or change your nickname back to your main RSN immediately.");	
  }
});

Common.bot.addListener('quit', function(nick, reason, channels, message) {
  for (var i = 0; i < channels.length; i++) {
    Common.bot.send("NAMES", channels[i]);
  }
	Common.db.users.findOne({name: nick}, function(err, user) {
		if (err || !user) {
			console.log(err);
		} else {
			var timedate = new Date();
			Common.db.users.update({name: nick}, {$set: {lastSeen: timedate}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
					console.log('Error', err);
				}
			});
		}
	});
  Common.db.channels.findOne({channel: '#cwexperts1'}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for #cwexperts1");
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  Common.bot.say('#cwexperts1', "4[FAREWELL]: 2" + nick + " has quit SwiftIRC. [" + reason + "]");
                }
              }
  });
  Common.db.channels.findOne({channel: '#cwexperts2'}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for #cwexperts1");
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  Common.bot.say('#cwexperts2', "4[FAREWELL]: 2" + nick + " has quit SwiftIRC. [" + reason + "]");
                }
              }
  });
});

Common.bot.addListener('kill', function(nick, reason, channels, message) {
  for (var i = 0; i < channels.length; i++) {
    Common.bot.send("NAMES", channels[i]);
  }
  Common.db.channels.findOne({channel: '#cwexperts1'}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for #cwexperts1");
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  Common.bot.say('#cwexperts1', "4[KILL]: 2" + nick + " has been killed. [" + reason + "]");
                }
              }
  });
  Common.db.channels.findOne({channel: '#cwexperts2'}, function(err, ch) {
              if (err || !ch) {
                console.log("Error: Unable to fetch world for #cwexperts1");
                console.log(err);
              } else {
                if (ch.games !== 0) {
                  Common.bot.say('#cwexperts2', "4[KILL]: 2" + nick + " has been killed. [" + reason + "]");
                }
              }
  });
});

Common.bot.addListener('error', function(message) {
  console.log('[', new Date().toString(), ']', 'error: ', message);

  if (message.args[2].indexOf('No external channel messages') === -1) {
    var error_msg = '4[WARNING]: 8,1CWEBOT CRITICAL ERROR OCCURED - use !critError to learn more.';
    Common.bot.say('#cwexperts', error_msg);
    Common.bot.say('#cwexperts1', error_msg);
    Common.bot.say('#cwexperts2', error_msg);
    Common.bot.say('#cwexperts.staff', error_msg);
    Common.bot.say('#key', error_msg);
  }
});
