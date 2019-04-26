everyone = [], users = [], voices = [], halfops = [], ops = [], everyoneLc = [], usersLc = [], voicesLc = [], halfopsLc = [], opsLc = [], everyoneLcString = [];
time = [], ticksecs = [], afk = [], uptime = '', hopm = [], totalshutdown = '';
pentime = [], pensecs = [], role1time = [], role1secs = [], role2time = [], role2secs = [], flagtime = [], flagsecs = [], actime = [], acsecs = [];

//TEMP VARIABLES FOR MEMBER PROFILE KEYS
memlist = [], tempkey = [], upsecs = [], upmins = [], uphrs = [], completesecs = [], completemins = [], viewkey = [];

//TEMP VARIABLES FOR MEMBER & BUG REPORTS
memreportmins = [], memreportsecs = [], bugreportmins = [], bugreportsecs = [];

//TEMP VARIABLES FOR MEMBER GAME WARNINGS
gwmins = [], gwsecs = [];

//TEMP VARIABLE FOR CREATING CWE PROFILE
justadded = [];

//TEMP VARIABLE FOR USERS WITH NEW IRC ACCESS
newaccess = [];

//TEMP VARIABLE FOR RE-REGISTER IRC NICKNAME
reregister = [];


var Common = require('./common.js');

console.log('Connecting to ' + Common.config.server + ' as '
  + Common.config.botName + '.');

Common.bot.setMaxListeners(13)

Common.bot.addListener('registered', function(message) {
  console.log('Identifying...');
  Common.bot.send('NS', 'identify', process.env.IRC_PASSWORD);
  setTimeout(function() {
    Common.bot.join('#cwexperts');
    Common.bot.join('#cwexperts1');
    Common.bot.join('#cwexperts2');
    Common.bot.join('#cwexperts.staff');
    Common.bot.join('#key');
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
  everyoneLcString[channel] = [];
  
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
    everyoneLcString[channel] += Common.utils.toLc(nick) + ' ';
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

  if ((from == "Dxnxex7" && Common.wdym[to]) && totalshutdown != 'true') {
    Common.bot.say(to, "4What do you mean, Dxnxex7?")
    return
  }

  if (totalshutdown == 'true' && command != 'kill' && command != 'unlockprofile' && command != 'unlockp' && command != 'up' && command != 'lockprofile' && command != 'lockp' && command != 'lp' && (Common.utils.isCmd(message) && typeof(Common.commands[command]) === 'function')) {
	Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
  } else if (Common.utils.isCmd(message) && typeof(Common.commands[command]) === 'function') {
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
	if (totalshutdown != 'true') {
  Common.bot.send("NAMES", channel);
  if (Common.utils.toLc(nick) == 'cwebot') {
	Common.db.channels.findOne({channel: channel}, function(err, ch) {
		if (err || !ch) {
			console.log("Error: Unable to fetch world for " + channel);
			console.log(err);
		} else {
			if (ch.games !== 0) {
				Common.bot.say(channel, "0,1Connection lost. Please wait - attempting to reestablish. Use !connectionLost to learn more.");
			if (ch.seconds !== 0 || ch.minutes !== 0 || ch.hours !== 0 || ch.days !== 0) {
				Common.bot.say(channel, "2CWEBot has restarted the playtime counters for this channel.");
				var gtdays = 0;
				var gthours = 0;
				var gtminutes = 0;
				var gtseconds = 0;
				var thdays = 0;
				var thhours = 0;
				var thminutes = 0;
				var thseconds = 0;
				if (ch.days != 0) {
					gtdays = ch.days * 216;
					thdays = ch.days * 244.8;
				} if (ch.hours != 0) {
					gthours = ch.hours * 9;
					thhours = ch.hours * 10.2;
				} if (ch.minutes != 0) {
					gtminutes = ch.minutes * 0.15;
					thminutes = ch.minutes * 0.17;
				} if (ch.seconds != 0) {
					gtseconds = ch.seconds * 0.0025;
					thseconds = ch.seconds * 0.00283;
				}
				var gtall = gtdays + gthours + gtminutes + gtseconds;
				var gtallen = gtall * 2;
				var thall = thdays + thhours + thminutes + thseconds;
				var thallsl = thall * 5;
				Common.bot.say(channel, "2Current session playtime:10 " + ch.days + "d " + ch.hours + "h " + ch.minutes + "m " + ch.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
				Common.utils.remindPlaytime(Common, channel, 1, 'playtime');
			}
			}
		}
	});
	function findProfile(item) {
		item = item.toString();
		Common.db.users.findOne({name: item}, function(err, user) {
			if (err || !user) {
				console.log(err);
			} else if (user.key === undefined || user.main === undefined || user.main === 0 || user.alt === undefined || user.alt === 0 || user.discord === undefined || user.discord == 'unknown' || user.recruiter === undefined || user.recruiter === 0 || user.goal === undefined || user.goal === 0 || user.joinDate === undefined || user.joinDate == 'unknown') {
				Common.utils.completeProfileTimer(Common, channel, 'complete', 60, 5, item);
			}
		});
	};
	setTimeout(function() {
		if (channel == '#cwexperts1' || channel == '#cwexperts2') {
			if (everyoneLcString[channel] != '') {
				var chanlist = everyoneLcString[channel].toLowerCase();
				chanlist = chanlist.split(" ");
				chanlist.forEach(findProfile);
			}
		}
	}, 5000);
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
	var name = Common.utils.toLc(nick);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(channel, "3Welcome " + nick + "! You are new around here, if you would like to join #CwExperts you may use !register to display the instructions for registering a SwiftIRC nickname.");
		} else if (user.lastSeen == 'unknown' || user.lastSeen == undefined) {
			reregister[name] = 1;
			Common.bot.say(channel, "3Welcome back " + nick + "! You have been absent for an unknown amount of time, possibly resulting in your SwiftIRC nickname becoming unregistered. Use !register to display the instructions for reregistering your SwiftIRC nickname.");
		} else {
			var lastSeenMs = user.lastSeen.getTime();
			var exp = lastSeenMs + 5184000000;
			var timenow = new Date();
			timenow = timenow.getTime();
			if (timenow > exp) {
				reregister[name] = 1;
				var diff = timenow - exp;
				var lastSeenDays = diff / 86400000;
				lastSeenDays = lastSeenDays.toFixed(0);
				Common.bot.say(channel, "3Welcome back " + nick + "! You have been absent for " + lastSeenDays + " days, possibly resulting in your SwiftIRC nickname becoming unregistered. Use !register to display the instructions for reregistering your SwiftIRC nickname.");
			}
		}
	});
  } else if (channel == '#cwexperts1' || channel == '#cwexperts2') {
	var nickver = Common.utils.toLc(nick);
	var nickcaps = nick;
	if (nickver != 'abdel' && nickver != 'hanna' && nickver != 'alan_' && nickver != 'alan__' && nickver != 'base_tank' && nickver != 'fable' && nickver != 'ipso' && nickver != 'anna' && nickver != 'runescript' && nickver != 'chanstat-01' && nickver != 'chanstat-02' && nickver != 'chanstat-03' && nickver != 'chanstat-04' && nickver != 'chanstat-05' && nickver != 'chanstat-06' && nickver != 'chanstat-07' && nickver != 'chanstat-08' && nickver != 'chanstat-09' && nickver != 'chanstat-10' 
		&& nickver != 'chanstat-11' && nickver != 'chanstat-12' && nickver != 'chanstat-13' && nickver != 'chanstat-14' && nickver != 'chanstat-15' && nickver != 'chanstat-16' && nickver != 'chanstat-17' && nickver != 'chanstat-18' && nickver != 'chanstat-19' && nickver != 'chanstat-20' 
		&& nickver != 'chanstat-21' && nickver != 'chanstat-22' && nickver != 'chanstat-23' && nickver != 'chanstat-24' && nickver != 'chanstat-25' && nickver != 'chanstat-26' && nickver != 'chanstat-27' && nickver != 'chanstat-28' && nickver != 'chanstat-29' && nickver != 'chanstat-30') {
      var greetmsg = "4[GREET]: 2" + nickcaps + " has arrived! 4P7A8R9T11Y 12T6I13M4E 7B8I9T11C12H6E13S4!";
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
		if (ch.unlobCheck == 1 && ch.world !== 0 && time[channel] !== undefined && time[channel] != 0) {
			var tickcolor = '';
			if (time[channel] == 2) {
				tickcolor = "7" + time[channel] + "2";
			} else if (time[channel] == 1) {
				tickcolor = "4" + time[channel] + "2";
			} else {
				tickcolor = "3" + time[channel] + "2";
			}
			if (time[channel] == 1) {
				Common.bot.say(channel, "2" + nickcaps + ", all mains have unlobbied but there is still " + tickcolor + " tick left on world " + ch.world + " - you may use !lobby if you wish to join, but hurry!");
			} else {
				Common.bot.say(channel, "2" + nickcaps + ", all mains have unlobbied but there are still " + tickcolor + " ticks left on world " + ch.world + " - you may use !lobby if you wish to join.");
			}
		}
              }
            });
          }
      }, 2000);
    }
	var nick = Common.utils.toLc(nick);
	if (nick != 'anna' && nick != 'runescript' && nick != 'chanstat-01' && nick != 'chanstat-02' && nick != 'chanstat-03' && nick != 'chanstat-04' && nick != 'chanstat-05' && nick != 'chanstat-06' && nick != 'chanstat-07' && nick != 'chanstat-08' && nick != 'chanstat-09' && nick != 'chanstat-10' 
		&& nick != 'chanstat-11' && nick != 'chanstat-12' && nick != 'chanstat-13' && nick != 'chanstat-14' && nick != 'chanstat-15' && nick != 'chanstat-16' && nick != 'chanstat-17' && nick != 'chanstat-18' && nick != 'chanstat-19' && nick != 'chanstat-20' 
		&& nick != 'chanstat-21' && nick != 'chanstat-22' && nick != 'chanstat-23' && nick != 'chanstat-24' && nick != 'chanstat-25' && nick != 'chanstat-26' && nick != 'chanstat-27' && nick != 'chanstat-28' && nick != 'chanstat-29' && nick != 'chanstat-30') {
		setTimeout(function() {
			if (everyoneLc[channel].indexOf(nick) > -1) {
				Common.db.users.findOne({name: nick}, function(err, user) {
					if (err || !user) {
						console.log(err);
						if (newaccess[nick] != 1) {
							Common.bot.say(channel, "2" + nick + ", please use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile, and then ask a member with Staff, Admin, or Owner member status for guidance to complete your profile.");
						}
					} else if (justadded[nick] != 1) {
						if (user.key === undefined) {
							Common.bot.say(channel, "2" + nick + ", please use !profileKey to set up your profile key and secure your profile.");
						}
						if (user.main === undefined || user.main === 0) {
							Common.bot.say(channel, "2" + nick + ", please use !addMain MAIN_RSN_HERE to complete your profile.");
						}
						if (user.alt === undefined || user.alt === 0) {
							Common.bot.say(channel, "2" + nick + ", please use !addAlt ALT_RSN_HERE to complete your profile.");
						}
						if (user.discord === undefined || user.discord == 'unknown') {
							Common.bot.say(channel, "2" + nick + ", please use !addDiscordID EXAMPLE_NAME # 0 0 0 0 to complete your profile.");
						}
						if (user.recruiter === undefined || user.recruiter === 0) {
							Common.bot.say(channel, "2" + nick + ", please use !addRecruiter IRC_NICKNAME_HERE to complete your profile.");
						}
						if (user.goal === undefined|| user.goal === 0) {
							Common.bot.say(channel, "2" + nick + ", please use !addGoal GOAL_HERE to complete your profile.");
						}
						if (user.joinDate === undefined || user.joinDate == 'unknown') {
							Common.bot.say(channel, "2" + nick + ", please inform a member with Owner member status of the date you joined to complete your profile.");
						}
						if (user.key === undefined || user.main === undefined || user.main === 0 || user.alt === undefined || user.alt === 0 || user.discord === undefined || user.discord == 'unknown' || user.recruiter === undefined || user.recruiter === 0 || user.goal === undefined || user.goal === 0 || user.joinDate === undefined || user.joinDate == 'unknown') {
							Common.utils.completeProfileTimer(Common, channel, 'complete', 60, 5, nick);
						}
					}
				});
			}
		}, 2000);
	}
  } else if (channel == '#cwexperts.staff') {
//     4red 7orange 8yellow 9lightgreen 10cyan 11lightcyan 12lightblue 2blue 6purple 13pink 3green
  } else if (channel == '#key') {
	var nick = Common.utils.toLc(nick);
	setTimeout(function() {
		if (everyoneLc[channel].indexOf(nick) > -1) {
			if (nick != 'abdel' && nick != 'dxnxex7' && nick != 'hanna' && nick != 'alexis' && nick != 'anna' && nick != 'runescript' && nick != 'chanstat-01' && nick != 'chanstat-02' && nick != 'chanstat-03' && nick != 'chanstat-04' && nick != 'chanstat-05' && nick != 'chanstat-06' && nick != 'chanstat-07' && nick != 'chanstat-08' && nick != 'chanstat-09' && nick != 'chanstat-10' 
		 	  && nick != 'chanstat-11' && nick != 'chanstat-12' && nick != 'chanstat-13' && nick != 'chanstat-14' && nick != 'chanstat-15' && nick != 'chanstat-16' && nick != 'chanstat-17' && nick != 'chanstat-18' && nick != 'chanstat-19' && nick != 'chanstat-20' 
		 	  && nick != 'chanstat-21' && nick != 'chanstat-22' && nick != 'chanstat-23' && nick != 'chanstat-24' && nick != 'chanstat-25' && nick != 'chanstat-26' && nick != 'chanstat-27' && nick != 'chanstat-28' && nick != 'chanstat-29' && nick != 'chanstat-30') {
				Common.bot.say(channel, "4[WARNING]: Do not enter your profile key if there are other users present in this channel - use !unlockProfile CURRENT_PROFILE_KEY to unlock your profile.");
			}
		}
	}, 2000);
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
	if (totalshutdown != 'true') {
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
	}
});

Common.bot.addListener('nick', function(oldnick, newnick, channels, message) {
  for (var i = 0; i < channels.length; i++) {
    Common.bot.send("NAMES", channels[i]);
  }
	if (totalshutdown != 'true') {
  if (Common.utils.toLc(oldnick) != 'abdel' && Common.utils.toLc(oldnick) != 'dxnxex7' && Common.utils.toLc(oldnick) != 'hanna' && Common.utils.toLc(newnick) != 'abdel' && Common.utils.toLc(newnick) != 'dxnxex7' && Common.utils.toLc(newnick) != 'hanna') {
    Common.bot.notice(newnick, "4[WARNING]: 2You are receiving this message because you are present in an official #CwExperts SwiftIRC channel and you have just changed your nickname from " + oldnick + " to " + newnick + ". " + 
  "If " + newnick + " is not identical or similar to your main RSN, and/or if you do not have " + newnick + " grouped with your main nickname, then please use /ns group NICKNAME PASSWORD or change your nickname back to your main RSN immediately.");	
  }
	}
});

Common.bot.addListener('quit', function(nick, reason, channels, message) {
  for (var i = 0; i < channels.length; i++) {
    Common.bot.send("NAMES", channels[i]);
  }
	if (totalshutdown != 'true') {
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
	setTimeout(function() {
		nick = Common.utils.toLc(nick);
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
	}, 1000);
	}
});

Common.bot.addListener('kill', function(nick, reason, channels, message) {
  for (var i = 0; i < channels.length; i++) {
    Common.bot.send("NAMES", channels[i]);
  }
	if (totalshutdown != 'true') {
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
	}
});

Common.bot.addListener('error', function(message) {
  console.log('[', new Date().toString(), ']', 'error: ', message);
	if (totalshutdown != 'true') {
  if (message.args[2].indexOf('No external channel messages') === -1) {
    var error_msg = '4[WARNING]: 8,1CWEBOT CRITICAL ERROR OCCURED - use !criticalError to learn more.';
    Common.bot.say('#cwexperts', error_msg);
    Common.bot.say('#cwexperts1', error_msg);
    Common.bot.say('#cwexperts2', error_msg);
    Common.bot.say('#cwexperts.staff', error_msg);
    Common.bot.say('#key', error_msg);
  }
	}
});
