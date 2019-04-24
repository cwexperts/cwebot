Commands.masshl = function(Common, from, to, message) {
	var msg = message.match(/\S+/g);
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			if (channel.games === 1) {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to highlight all active players in this channel.");
			} else {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to highlight all active members in this channel.");
			}
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (msg[1] !== undefined || users[to] != '') {
				if (Common.utils.msg(message)) {
					Common.bot.say(to, " 14*** ( 4@!@!@!@ " + from + " HAS AN IMPORANT MESSAGE FOR EVERYONE! PLEASE READ! @!@!@!@ 14) ***");
				}
				Common.bot.say(to, users[to]);
				if (Common.utils.msg(message)) {
					Common.bot.say(to, "4Message: " + Common.utils.msg(message));
				}
			} else {
				if (channel.games === 1) {
					Common.bot.say(to, "5There are no active players to highlight in this channel.");
				} else {
					Common.bot.say(to, "5There are no active members to highlight in this channel.");
				}
			}
		} else {
			if (channel.games === 1) {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to highlight all active players in this channel.");
			} else {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to highlight all active members in this channel.");
			}
		}
		});
	});
};

Commands.mhl = function(Common, from, to, message) {
	Commands.masshl(Common, from, to, message);
};

Commands.masshleveryone = function(Common, from, to, message) {
	var msg = message.match(/\S+/g);
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to highlight all users in this channel.");
	} else if (perms.status == 'Admin' || perms.status == 'Owner') {
		if (msg[1] !== undefined || everyoneLc[to] != '') {
			var everyone = everyoneLc[to];
			everyone = everyone.toString()
			everyone = everyone.split(',').join(' ');
			if (Common.utils.msg(message)) {
				Common.bot.say(to, " 14*** ( 4@!@!@!@ " + from + " HAS AN IMPORANT MESSAGE FOR EVERYONE! PLEASE READ! @!@!@!@ 14) ***");
			}
			if (everyone != '') {
				Common.bot.say(to, everyone);
			}
			if (Common.utils.msg(message)) {
				Common.bot.say(to, "4Message: " + Common.utils.msg(message));
			}
		} else {
			Common.bot.say(to, "5There are no users to highlight in this channel.");
		}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to highlight all users in this channel.");
	}
	});
};

Commands.mhle = function(Common, from, to, message) {
	Commands.masshleveryone(Common, from, to, message);
};

Commands.masshlstaff = function(Common, from, to, message) {
	var msg = message.match(/\S+/g);
	var filtered_ops = Common.utils.removeByValue(ops[to], 'Abdel')
	var filtered_hops = Common.utils.removeByValue(halfops[to], 'Abdel')
	var hl_list = filtered_ops.join(' ') + ' ' + filtered_hops.join(' ')
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to highlight all staff members in this channel.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		if (msg[1] !== undefined || hl_list != ' ') {
			if (Common.utils.msg(message)) {
				Common.bot.say(to, " 14*** ( 4@!@!@!@ ATTENTION ALL STAFF MEMBERS! PLEASE READ! @!@!@!@ 14) ***");
			}
			if (hl_list != ' ') {
				Common.bot.say(to, hl_list);
			}
			if (Common.utils.msg(message)) {
				Common.bot.say(to, "4Message: " + Common.utils.msg(message));
			}
		} else {
			Common.bot.say(to, "5There are no staff members to highlight in this channel.");
		}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to highlight all staff members in this channel.");
	}
	});
};

Commands.mhls = function(Common, from, to, message) {
	Commands.masshlstaff(Common, from, to, message);
};

function anticrash(Common, from, to, message) {
	if (to != '#cwexperts1' && to != '#cwexperts2') {
		Common.bot.say(to, " 14*** ( 4CRASHER ALERT! PREPARE TO ANTI-CRASH! 14) ***");
		Common.bot.say(to, " 14*** ( 4CRASHER ALERT! PREPARE TO ANTI-CRASH! 14) ***");
		Common.bot.say(to, " 14*** ( 4PMS OFF - LEAVE CHATS - GEAR UP - CAP FLAG 14) ***");
		Common.bot.say(to, " 14*** ( 4PMS OFF - LEAVE CHATS - GEAR UP - CAP FLAG 14) ***");
		Common.bot.say(to, " 14*** ( 4MORE INFO: http://cwexperts.org/how-to-anti-crash/ 14) ***");
		Common.bot.say(to, users[to]);
		if (Common.utils.msg(message)) {
	  		Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
		Common.utils.remindAc(Common, to, 60, 'ac', 0);
	}
	to = '#cwexperts1';
	Common.bot.say(to, " 14*** ( 4CRASHER ALERT! PREPARE TO ANTI-CRASH! 14) ***");
	Common.bot.say(to, " 14*** ( 4CRASHER ALERT! PREPARE TO ANTI-CRASH! 14) ***");
	Common.bot.say(to, " 14*** ( 4PMS OFF - LEAVE CHATS - GEAR UP - CAP FLAG 14) ***");
	Common.bot.say(to, " 14*** ( 4PMS OFF - LEAVE CHATS - GEAR UP - CAP FLAG 14) ***");
	Common.bot.say(to, " 14*** ( 4MORE INFO: http://cwexperts.org/how-to-anti-crash/ 14) ***");
	Common.bot.say(to, users[to]);
	if (Common.utils.msg(message)) {
	  	Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
	Common.utils.remindAc(Common, to, 60, 'ac', 0);
	to = '#cwexperts2';
	Common.bot.say(to, " 14*** ( 4CRASHER ALERT! PREPARE TO ANTI-CRASH! 14) ***");
	Common.bot.say(to, " 14*** ( 4CRASHER ALERT! PREPARE TO ANTI-CRASH! 14) ***");
	Common.bot.say(to, " 14*** ( 4PMS OFF - LEAVE CHATS - GEAR UP - CAP FLAG 14) ***");
	Common.bot.say(to, " 14*** ( 4PMS OFF - LEAVE CHATS - GEAR UP - CAP FLAG 14) ***");
	Common.bot.say(to, " 14*** ( 4MORE INFO: http://cwexperts.org/how-to-anti-crash/ 14) ***");
	Common.bot.say(to, users[to]);
	if (Common.utils.msg(message)) {
	  	Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
	Common.utils.remindAc(Common, to, 60, 'ac', 0);
};

Commands.anticrash = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Admin' || perms.status == 'Owner') {
					anticrash(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						anticrash(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							anticrash(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						anticrash(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				anticrash(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.ac = function(Common, from, to, message) {
	Commands.anticrash(Common, from, to, message);
};

Commands.world = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
    Common.db.channels.findOne({channel: to}, function(err, channel) {
        if (err || !channel) {
           	console.log("Error: Unable to fetch world for " + channel);
		console.log(err);
        } else {
            if (channel.games !== 0) {
		var players = [];
		if (users[to] != '') {
		    players = users[to].match(/\S+/g);
		}
		var world_msg = "2Current world: ";
		if (channel.world === 0) {
			world_msg += "unknown";
		} else {
			world_msg += "" + channel.world + "";
		}
		if (time[to] == undefined) {
			world_msg += ", ticks left: unknown";
		} else if (time[to] == 2) {
			world_msg += ", ticks left: 7" + time[to] + "2";
		} else if (time[to] == 1 || time[to] == 0) {
			world_msg += ", ticks left: 4" + time[to] + "2";
		} else {
			world_msg += ", ticks left: 3" + time[to] + "2";
		}
                if (channel.prev_world !== 0) {
                    world_msg += " - Previous world: " + channel.prev_world + "";
		}
		if (channel.prev_world2 !== 0) {
                    world_msg += " - Grandprevious world: " + channel.prev_world2 + "";
		}
		if (channel.cycle === 2) {
			world_msg += " - World cycle: Two";
		} else if (channel.cycle === 3) {
			world_msg += " - World cycle: Three";
		}
		if (channel.team == 'saradomin') {
			world_msg += " - Winning team: 10Saradomin";
		} else if (channel.team == 'zamorak') {
			world_msg += " - Winning team: 4Zamorak";
		}
		world_msg += " 2- Active player count: " + players.length;
                Common.bot.say(to, world_msg);
            } else {
               	Common.bot.say(to, "2" + "A world has not been set; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
            }
        }
    });
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.w = function(Common, from, to, message) {
    Commands.world(Common, from, to, message);
};

function setworlds(Common, from, to, message) {
	if (Common.utils.msg(message)) {
		var sw = message.match(/\S+/g);
		var swmsg = '';
		var wone = '';
		var wonechan = '';
		var wtwo = '';
		var wtwochan = '';
		var wthree = '';
		var wthreechan = '';
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			}
			if (channel.games === 0) {
				Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
				     	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						Common.utils.remindPlaytime(Common, to, 1, 'playtime');
					}
				});
			}
			Common.db.channels.update({channel: to}, {$set: {world: sw[1]}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				}
			});
			if (sw[2] !== undefined) {
				Common.db.channels.update({channel: to}, {$set: {prev_world: sw[2]}}, function(err, updated) {
					if (err || !updated) {
						console.log("Channel not updated!");
					}
				});
			}
			if (sw[3] !== undefined) {
				Common.db.channels.update({channel: to}, {$set: {prev_world2: sw[3]}}, function(err, updated) {
					if (err || !updated) {
						console.log("Channel not updated!");
					}
				});
			}
			swmsg += "2" + from + " has set the current world to: " + sw[1] + "";
			if (sw[2] !== undefined) {
				if (sw[3] !== undefined) {
					swmsg += ", the previous world to: " + sw[2] + ", and the grandprevious world to: " + sw[3] + "";
				} else {
					swmsg += ", and the previous world to " + sw[2] + "";
				}
			}
			swmsg += ".";
			wone = sw[1]
			wone = wone.toString();
			wone = Common.utils.toLc(wone);
			wonechan = channel.world;
			wonechan = wonechan.toString();
			wonechan = Common.utils.toLc(wonechan);
			if (sw[2] !== undefined) {
				wtwo = sw[2]
				wtwo = wtwo.toString();
				wtwo = Common.utils.toLc(wtwo);
				wtwochan = channel.prev_world;
				wtwochan = wtwochan.toString();
				wtwochan = Common.utils.toLc(wtwochan);
			}
			if (sw[3] !== undefined) {
				wthree = sw[3]
				wthree = wthree.toString();
				wthree = Common.utils.toLc(wthree);
				wthreechan = channel.prev_world2;
				wthreechan = wthreechan.toString();
				wthreechan = Common.utils.toLc(wthreechan);
			}
			if (sw[2] === undefined && sw[3] === undefined && channel.world !== 0 && wone == wonechan) {
				Common.bot.say(to, "5The current world is already set to: " + sw[1] + ".");
			} else if (sw[2] !== undefined && sw[3] === undefined && channel.world !== 0 && channel.prev_world !== 0 && wone == wonechan && wtwo == wtwochan) {
				Common.bot.say(to, "5The current world is already set to: " + sw[1] + ", and the previous world is already set to: " + sw[2] + ".");
			} else if (sw[2] !== undefined && sw[3] !== undefined && channel.world !== 0 && channel.prev_world !== 0 && channel.prev_world2 !== 0 && wone == wonechan && wtwo == wtwochan && wthree == wthreechan) {
				Common.bot.say(to, "5The current world is already set to: " + sw[1] + ", the previous world is already set to: " + sw[2] + ", and the grandprevious world is already set to: " + sw[3] + ".");
			} else {
				Common.bot.say(to, swmsg);
			}
		});
	} else {
		Common.bot.say(to, "5You must specify a world to set an active world to when using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
	}
};

Commands.setworlds = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					setworlds(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						setworlds(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							setworlds(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						setworlds(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				setworlds(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.sw = function(Common, from, to, message) {
	Commands.setworlds(Common, from, to, message);
};

Commands.games = function(Common, from, to, message) {
    Commands.world(Common, from, to, message);
};

function hopm(Common, from, to, message) {
    Common.db.channels.findOne({channel: to}, function(err, channel) {
        if (err || !channel) {
           	console.log("Error: Unable to fetch world for " + channel);
		console.log(err);
        } else {
            if (channel.world !== 0) {
            	if (typeof time[to] === 'undefined') {
            		time[to] = 0;
            	}

            	Common.bot.say(to, " 14*** ( 12HOP MAINS TO WORLD "+channel.world+"! 14) ***");
		Common.bot.say(to, " 14*** ( 12HOP MAINS TO WORLD "+channel.world+"! 14) ***");
		Common.bot.say(to, users[to]);	
            }
        }
    });
};

Commands.hopm = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					hopm(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						hopm(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							hopm(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						hopm(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				hopm(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

// Commands.togglehopm = function(Common, from, to, message) {
//     var data = message.match(/\S+/g);
//     hopm[to].push_back(from);
//     Common.utils.goingAfk(Common, to, time, from, 'afk');
//     Common.bot.say(to, from + ', you will be notified in '+time+' minute(s).');
// };

Commands.ticksleft = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else {
				if (channel.games !== 0) {
					var world_msg = "2Current world: ";
					if (channel.world === 0) {
						world_msg += "unknown";
					} else {
						world_msg += "" + channel.world + "";
					}
					if (time[to] == undefined) {
						world_msg += ", ticks left: unknown";
					} else if (time[to] == 2) {
						world_msg += ", ticks left: 7" + time[to] + "2";
					} else if (time[to] == 1 || time[to] == 0) {
						world_msg += ", ticks left: 4" + time[to] + "2";
					} else {
						world_msg += ", ticks left: 3" + time[to] + "2";
					}
					Common.bot.say(to, world_msg);
				} else {
					Common.bot.say(to, "2" + "A world has not been set; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
				}
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.tl = function(Common, from, to, message) {
	Commands.ticksleft(Common, from, to, message);
};

function setticksleft(Common, from, to, message) {
	if (Common.utils.msg(message)) {
		var stl = message.match(/\S+/g);
		if (stl[1] == '1' || stl[1] == '2' || stl[1] == '3' || stl[1] == '4' || stl[1] == '5' || stl[1] == '6' || stl[1] == '7' || stl[1] == '8' || stl[1] == '9' || stl[1] == '10' || stl[1] == '11' || stl[1] == '12' || stl[1] == '13') {
			Common.db.channels.findOne({channel: to}, function(err, channel) {
				if (err || !channel) {
					console.log("Error: Unable to fetch world for " + channel);
					console.log(err);
				} else {
					if (channel.games !== 0) {
						var theworld = '';
						var ticksleft = '';
						if (channel.world !== 0) {
							theworld = "" + channel.world + "";
						} else {
							theworld = "unknown";
						}
						if (stl[1] == '2') {
							ticksleft = "7" + stl[1];
						} else if (stl[1] == '1' || stl[1] == '0') {
							ticksleft = "4" + stl[1];
						} else {
							ticksleft = "3" + stl[1];
						}
						if (stl[1] == time[to]) {
							if (stl[1] == '1') {
								Common.bot.say(to, "5There is already " + ticksleft + " 5tick left for world " + theworld + ".");
							} else {
								Common.bot.say(to, "5There are already " + ticksleft + " 5ticks left for world " + theworld + ".");
							}
						} else {
							Common.utils.startGame(Common, to, stl[1], 'hopw', 0);	       
							Common.bot.say(to, "2" + from + " has set the ticks left for world " +  theworld + " to: " + ticksleft + "2.");
						}
					} else {
						Common.bot.say(to, "2" + "A world has not been set; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
					}
				}
			});
		} else {
			Common.bot.say(to, "5You must specify a valid number of minutes to set the ticks left for the current world to when using this command: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, or 13. Use the format !setTicksLeft TICKS_LEFT.");
		}
	} else {
		Common.bot.say(to, "5You must specify a valid number of minutes to set the ticks left for the current world to when using this command: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, or 13. Use the format !setTicksLeft TICKS_LEFT.");
	}
};

Commands.setticksleft = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					setticksleft(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						setticksleft(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							setticksleft(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						setticksleft(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				setticksleft(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.stl = function(Common, from, to, message) {
	Commands.setticksleft(Common, from, to, message);
};

Commands.count = function(Common, from, to, message) {
	var players = [];
	if (everyoneLc[to] != '' && (to != "#cwexperts1" && to != "#cwexperts2" && to != "#cwexperts.staff")) {
		players = everyoneLc[to];
	} else if (users[to] != '') {
		players = users[to].match(/\S+/g);
	}
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
				Common.bot.say(to, "2Active user count: " + players.length + "");
			} else {
				if (to == "#cwexperts1" || to == "#cwexperts2" || to == "#cwexperts.staff") {
					if (channel.games === 1) {
						Common.bot.say(to, "2Active player count: " + players.length + "");
					} else {
						Common.bot.say(to, "2Active member count: " + players.length + "; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
					}
				} else {
					Common.bot.say(to, "2Active user count: " + players.length + "");
				}
			}
		});
};

Commands.c = function(Common, from, to, message) {
	Commands.count(Common, from, to, message);
};

function teamtoggle(Common, from, to, message) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else {
			   	var winteam = channel.team;
			   	if (winteam == 'saradomin') {
			       	winteam = 'zamorak';
			   	} else {
			       	winteam = 'saradomin';
			   	}
			   	Common.db.channels.update({channel: to}, {$set: {team: winteam}}, function(err, updated) {
			       	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						if (winteam == 'saradomin') {
					  		Common.bot.say(to, "2" + from + " has changed the winning team to: 10Saradomin2.");
						} else if (winteam == 'zamorak') {
					  		Common.bot.say(to, "2" + from + " has changed the winning team to: 4Zamorak2.");
						}
			                }
			   	});
			}
		});
};

Commands.teamtoggle = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					teamtoggle(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						teamtoggle(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							teamtoggle(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						teamtoggle(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				teamtoggle(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.teamt = function(Common, from, to, message) {
	Commands.teamtoggle(Common, from, to, message);
};

Commands.team = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");
			} else if (channel.team != 'saradomin' && channel.team != 'zamorak') {
				Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					if (channel.games === 0) {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
					} else {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
					}
				}
				});
			} else if (channel.games === 0 && channel.team == 'saradomin') {
				Common.bot.say(to, "2" + "Winning team: 10Saradomin2; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
			} else if (channel.games === 0 && channel.team == 'zamorak') {
				Common.bot.say(to, "2" + "Winning team: 4Zamorak2; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, "2" + "Winning team: 10Saradomin");
			} else if (channel.team == 'zamorak') {
				Common.bot.say(to, "2" + "Winning team: 4Zamorak");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};


function worldcycletoggle(Common, from, to, message) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else {
			   	var wcycle = channel.cycle;
			   	if (wcycle == 2) {
			     	  	wcycle = 3;
			   	} else {
			       		wcycle = 2;
			   	}
			   	Common.db.channels.update({channel: to}, {$set: {cycle: wcycle}}, function(err, updated) {
			       	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						if (wcycle == 2) {
					  		Common.bot.say(to, "2" + from + " has changed the world cycle to: Two.");
						} else if (wcycle == 3) {
					  		Common.bot.say(to, "2" + from + " has changed the world cycle to: Three.");
						}
			                }
			   	});
			}
		});
};

Commands.worldcycletoggle = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					worldcycletoggle(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						worldcycletoggle(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							worldcycletoggle(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						worldcycletoggle(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				worldcycletoggle(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.wct = function(Common, from, to, message) {
	Commands.worldcycletoggle(Common, from, to, message);
};

Commands.worldcycle = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");
			} else if (channel.cycle !== 2 && channel.cycle !== 3) {
				Common.db.channels.update({channel: to}, {$set: {cycle: 2}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					if (channel.games === 0) {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the world cycle to: Two; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
					} else {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the world cycle to: Two.");
					}
				}
				});
			} else if (channel.games === 0 && channel.cycle === 2) {
				Common.bot.say(to, "2" + "World cycle: Two; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
			} else if (channel.games === 0 && channel.cycle === 3) {
				Common.bot.say(to, "2" + "World cycle: Three; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
			} else if (channel.cycle === 2) {
				Common.bot.say(to, "2" + "World cycle: Two");
			} else if (channel.cycle === 3) {
				Common.bot.say(to, "2" + "World cycle: Three");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};
		
Commands.wc = function(Common, from, to, message) {
	Commands.worldcycle(Common, from, to, message);
};

function startplaytime(Common, from, to, message) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Channel not found: " + channel);
			console.log(err);
		} else {
			if (channel.games === 0) {
				Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
			     		if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						Common.utils.remindPlaytime(Common, to, 1, 'playtime');
						Common.bot.say(to, "2" + from + " has started the playtime counters for this channel.");
					}
				});
			} else {
				Common.bot.say(to, "5The playtime counters are already active for this channel - use !playtime to view the current playtime, or use !playtimeTotal to view the total playtime.");	
			}
		}
	});
};

Commands.startplaytime = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					startplaytime(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						startplaytime(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							startplaytime(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						startplaytime(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				startplaytime(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};
			
Commands.startpt = function(Common, from, to, message) {
	Commands.startplaytime(Common, from, to, message);
};

Commands.spt = function(Common, from, to, message) {
	Commands.startplaytime(Common, from, to, message);
};

function restartplaytime(Common, from, to, message) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Channel not found: " + channel);
			console.log(err);
		} else {
			if (channel.games === 0) {
				Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
			     		if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						Common.utils.remindPlaytime(Common, to, 1, 'playtime');
						Common.bot.say(to, "2" + from + " has started the playtime counters for this channel.");
					}
				});
			} else {
				var seconds1 = channel.seconds;
				setTimeout(function() {
					Common.db.channels.findOne({channel: to}, function(err, channel) {
						if (err || !channel) {
							console.log("Channel not found: " + channel);
							console.log(err);
						} else {
							var seconds2 = channel.seconds;
							if (seconds1 == seconds2) {
								Common.bot.say(to, "2" + from + " has restarted the playtime counters for this channel.");
								if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
									var gtdays = 0;
									var gthours = 0;
									var gtminutes = 0;
									var gtseconds = 0;
									var thdays = 0;
									var thhours = 0;
									var thminutes = 0;
									var thseconds = 0;
									if (channel.days != 0) {
										gtdays = channel.days * 216;
										thdays = channel.days * 244.8;
									} if (channel.hours != 0) {
										gthours = channel.hours * 9;
										thhours = channel.hours * 10.2;
									} if (channel.minutes != 0) {
										gtminutes = channel.minutes * 0.15;
										thminutes = channel.minutes * 0.17;
									} if (channel.seconds != 0) {
										gtseconds = channel.seconds * 0.0025;
										thseconds = channel.seconds * 0.00283;
									}
									var gtall = gtdays + gthours + gtminutes + gtseconds;
									var gtallen = gtall * 2;
									var thall = thdays + thhours + thminutes + thseconds;
									var thallsl = thall * 5;
									Common.bot.say(to, "2Current session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
								}
								Common.utils.remindPlaytime(Common, to, 1, 'playtime');
							} else {
								Common.bot.say(to, "2" + from + " has reset the playtime counters for this channel.");
								if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
									var gtdays = 0;
									var gthours = 0;
									var gtminutes = 0;
									var gtseconds = 0;
									var thdays = 0;
									var thhours = 0;
									var thminutes = 0;
									var thseconds = 0;
									if (channel.days != 0) {
										gtdays = channel.days * 216;
										thdays = channel.days * 244.8;
									} if (channel.hours != 0) {
										gthours = channel.hours * 9;
										thhours = channel.hours * 10.2;
									} if (channel.minutes != 0) {
										gtminutes = channel.minutes * 0.15;
										thminutes = channel.minutes * 0.17;
									} if (channel.seconds != 0) {
										gtseconds = channel.seconds * 0.0025;
										thseconds = channel.seconds * 0.00283;
									}
									var gtall = gtdays + gthours + gtminutes + gtseconds;
									var gtallen = gtall * 2;
									var thall = thdays + thhours + thminutes + thseconds;
									var thallsl = thall * 5;
									Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
									Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
										if (err || !updated) {
											console.log("Error: Playtime not updated!");
										}
									});
								}
							}
						}
					});
				}, 2000);
			}
		}
	});
};

Commands.restartplaytime = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world for " + channel);
				console.log(err);
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					restartplaytime(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						restartplaytime(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							restartplaytime(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						restartplaytime(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				restartplaytime(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};
			
Commands.restartpt = function(Common, from, to, message) {
	Commands.restartplaytime(Common, from, to, message);
};

Commands.rspt = function(Common, from, to, message) {
	Commands.restartplaytime(Common, from, to, message);
};

Commands.playtime = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found: " + channel);
				console.log(err);
			}
			if (channel.games === 0 && channel.days === 0 && channel.hours === 0 && channel.minutes === 0 && channel.seconds === 0) {
				Common.bot.say(to, "2" + "The playtime counters have not started; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
			} else {
				var gtdays = 0;
				var gthours = 0;
				var gtminutes = 0;
				var gtseconds = 0;
				var thdays = 0;
				var thhours = 0;
				var thminutes = 0;
				var thseconds = 0;
				if (channel.days != 0) {
					gtdays = channel.days * 216;
					thdays = channel.days * 244.8;
				} if (channel.hours != 0) {
					gthours = channel.hours * 9;
					thhours = channel.hours * 10.2;
				} if (channel.minutes != 0) {
					gtminutes = channel.minutes * 0.15;
					thminutes = channel.minutes * 0.17;
				} if (channel.seconds != 0) {
					gtseconds = channel.seconds * 0.0025;
					thseconds = channel.seconds * 0.00283;
				}
				var gtall = gtdays + gthours + gtminutes + gtseconds;
				var gtallen = gtall * 2;
				var thall = thdays + thhours + thminutes + thseconds;
				var thallsl = thall * 5;
				Common.bot.say(to, "2Current session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.pt = function(Common, from, to, message) {
	Commands.playtime(Common, from, to, message);
};

Commands.playtimetotal = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found: " + channel);
				console.log(err);
			} else {
				var gtdays = 0;
				var gthours = 0;
				var gtminutes = 0;
				var gtseconds = 0;
				var thdays = 0;
				var thhours = 0;
				var thminutes = 0;
				var thseconds = 0;
				if (channel.daysTotal != 0) {
					gtdays = channel.daysTotal * 216;
					thdays = channel.daysTotal * 244.8;
				} if (channel.hoursTotal != 0) {
					gthours = channel.hoursTotal * 9;
					thhours = channel.hoursTotal * 10.2;
				} if (channel.minutesTotal != 0) {
					gtminutes = channel.minutesTotal * 0.15;
					thminutes = channel.minutesTotal * 0.17;
				} if (channel.secondsTotal != 0) {
					gtseconds = channel.secondsTotal * 0.0025;
					thseconds = channel.secondsTotal * 0.00283;
				}
				var gtall = gtdays + gthours + gtminutes + gtseconds;
				var gtallen = gtall * 2;
				var thall = thdays + thhours + thminutes + thseconds;
				var thallsl = thall * 5;
				Common.bot.say(to, "2All-time " + to + " playtime:10 " + channel.daysTotal + "d " + channel.hoursTotal + "h " + channel.minutesTotal + "m " + channel.secondsTotal + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.ptt = function(Common, from, to, message) {
	Commands.playtimetotal(Common, from, to, message);
};

Commands.spotlight = function(Common, from, to, message) {
	var today = new Date();
	var slEndPrev = new Date("2019-04-15T00:00:00Z");
	var slStart = new Date("2019-05-12T00:00:00Z");
	var slEnd = new Date("2019-05-15T00:00:00Z");
	var slStart2 = new Date("2019-06-08T00:00:00Z");
	var slEnd2 = new Date("2019-06-11T00:00:00Z");
	var slDays = '';
	var slHours = '';
	var slMinutes = '';
	var slSeconds = '';
	var slMilliseconds = '';
	var slCountdown = '';
	var slEndedAgo = '';
	var secTics = 1000;
	var minTics = 60 * secTics;
	var hourTics = 60 * minTics;
	var dayTics = 24 * hourTics;
	var millisecsLeft = 0;
	var millisecsRound = 0;
	var millisecsRemain = 0;
	var secsLeft = 0;
	var secsRound = 0;
	var secsRemain = 0;
	var minsLeft = 0;
	var minsRound = 0;
	var minsRemain = 0;
	var hoursLeft = 0;
	var hoursRound = 0;
	var hoursRemain = 0;
	var daysLeft = 0;
	var daysRound = 0;
	var daysRemain = 0;
	var sldate = '';
	var prevsldate = '';
	var startmath1 = '';
	var startmath2 = '';
	var endmath1 = '';
	var endmath2 = '';
	var currentmath1 = '';
	var currentmath2 = '';
	var introtext = '';
	if (today<slStart) {
		startmath1 = slStart;
		startmath2 = today;
	} else if (today<slStart2) {
		startmath1 = slStart2;
		startmath2 = today;
	}
	if (today<slEnd) {
		currentmath1 = slEnd
		currentmath2 = today
	} else if (today<slEnd2) {
		currentmath1 = slEnd2
		currentmath2 = today
	}
	if ((today>slStart && today<slEnd) || (today>slStart2 && today<slEnd2)) {
		millisecsLeft = (currentmath1 - currentmath2) / secTics;
		millisecsRound = Math.floor(millisecsLeft);
		millisecsRemain = millisecsLeft - millisecsRound;
		millisecsRemain = (millisecsRemain < 0) ? millisecsRemain = 1000 - ((millisecsRound - millisecsLeft) * 1000) : millisecsRemain = ((millisecsLeft - millisecsRound) * 1000);
		millisecsRemain = millisecsRemain.toFixed(12);
		millisecsRemain = millisecsRemain.toString();
		slMilliseconds = millisecsRemain.substr(0, millisecsRemain.length-13);
		secsLeft = (currentmath1 - currentmath2) / minTics;
		secsRound = Math.floor(secsLeft);
		secsRemain = secsLeft - secsRound;
		secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = ((secsLeft - secsRound) * 60);
		secsRemain = secsRemain.toFixed(4);
		secsRemain = secsRemain.toString();
		slSeconds = secsRemain.substr(0, secsRemain.length-5);
		minsLeft = (currentmath1 - currentmath2) / hourTics;
		minsRound = Math.floor(minsLeft);
		minsRemain = minsLeft - minsRound;
		minsRemain = (minsRemain < 0) ? minsRemain = 60 - ((minsRound - minsLeft)  * 60) : minsRemain = ((minsLeft - minsRound) * 60);
		minsRemain = minsRemain.toFixed(4);
		minsRemain = minsRemain.toString();
		slMinutes = minsRemain.substr(0, minsRemain.length-5);
		hoursLeft = (currentmath1 - currentmath2) / dayTics;
		hoursRound = Math.floor(hoursLeft);
		hoursRemain = hoursLeft - hoursRound;
		hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
		hoursRemain = hoursRemain.toFixed(4);
		hoursRemain = hoursRemain.toString();
		slHours = hoursRemain.substr(0, hoursRemain.length-5);
		daysLeft = (currentmath1 - currentmath2) / dayTics;
		daysRound = daysLeft.toFixed(4);
		daysRemain = daysRound.toString();
		daysRemain = daysRemain.substr(0, daysRemain.length-5);
		slDays = daysRemain;
		introtext = "2Current CW SL:10 ";
		slCountdown = "remaining: 10" + slDays + "d " + slHours + "h " + slMinutes + "m " + slSeconds + "s " + slMilliseconds + "ms";
	} else if (today>slEnd2) {
		introtext = "2Next CW SL:10 ";
		slCountdown = "countdown: 10unknown";
	} else {
		millisecsLeft = (startmath1 - startmath2) / secTics;
		millisecsRound = Math.floor(millisecsLeft);
		millisecsRemain = millisecsLeft - millisecsRound;
		millisecsRemain = (millisecsRemain < 0) ? millisecsRemain = 1000 - ((millisecsRound - millisecsLeft) * 1000) : millisecsRemain = ((millisecsLeft - millisecsRound) * 1000);
		millisecsRemain = millisecsRemain.toFixed(12);
		millisecsRemain = millisecsRemain.toString();
		slMilliseconds = millisecsRemain.substr(0, millisecsRemain.length-13);
		secsLeft = (startmath1 - startmath2) / minTics;
		secsRound = Math.floor(secsLeft);
		secsRemain = secsLeft - secsRound;
		secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = ((secsLeft - secsRound) * 60);
		secsRemain = secsRemain.toFixed(4);
		secsRemain = secsRemain.toString();
		slSeconds = secsRemain.substr(0, secsRemain.length-5);
		minsLeft = (startmath1 - startmath2) / hourTics;
		minsRound = Math.floor(minsLeft);
		minsRemain = minsLeft - minsRound;
		minsRemain = (minsRemain < 0) ? minsRemain = 60 - ((minsRound - minsLeft)  * 60) : minsRemain = ((minsLeft - minsRound) * 60);
		minsRemain = minsRemain.toFixed(4);
		minsRemain = minsRemain.toString();
		slMinutes = minsRemain.substr(0, minsRemain.length-5);
		hoursLeft = (startmath1 - startmath2) / dayTics;
		hoursRound = Math.floor(hoursLeft);
		hoursRemain = hoursLeft - hoursRound;
		hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
		hoursRemain = hoursRemain.toFixed(4);
		hoursRemain = hoursRemain.toString();
		slHours = hoursRemain.substr(0, hoursRemain.length-5);
		daysLeft = (startmath1 - startmath2) / dayTics;
		daysRound = daysLeft.toFixed(4);
		daysRemain = daysRound.toString();
		daysRemain = daysRemain.substr(0, daysRemain.length-5);
		slDays = daysRemain;
		introtext = "2Next CW SL:10 ";
		slCountdown = "countdown: 10" + slDays + "d " + slHours + "h " + slMinutes + "m " + slSeconds + "s " + slMilliseconds + "ms";
	}
	if (today<slEnd) {
		endmath1 = today
		endmath2 = slEndPrev
		sldate = "Sun May 12th-Wed May 15th 2019 00:00 GT";
		prevsldate = "Fri Apr 12th-Mon Apr 15th 2019 00:00 GT";
	} else if (today<slEnd2) {
		endmath1 = today
		endmath2 = slEnd
		sldate = "Sat Jun 8th-Tue Jun 11th 2019 00:00 GT";
		prevsldate = "Sun May 12th-Wed May 15th 2019 00:00 GT";
	} else if (today>slEnd2) {
		endmath1 = today
		endmath2 = slEnd2
		sldate = "unknown";
		prevsldate = "Sat Jun 8th-Tue Jun 11th 2019 00:00 GT";
	}
		millisecsLeft = (endmath1 - endmath2) / secTics;
		millisecsRound = Math.floor(millisecsLeft);
		millisecsRemain = millisecsLeft - millisecsRound;
		millisecsRemain = (millisecsRemain < 0) ? millisecsRemain = 1000 - ((millisecsRound - millisecsLeft) * 1000) : millisecsRemain = ((millisecsLeft - millisecsRound) * 1000);
		millisecsRemain = millisecsRemain.toFixed(12);
		millisecsRemain = millisecsRemain.toString();
		slMilliseconds = millisecsRemain.substr(0, millisecsRemain.length-13);
		secsLeft = (endmath1 - endmath2) / minTics;
		secsRound = Math.floor(secsLeft);
		secsRemain = secsLeft - secsRound;
		secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = ((secsLeft - secsRound) * 60);
		secsRemain = secsRemain.toFixed(4);
		secsRemain = secsRemain.toString();
		slSeconds = secsRemain.substr(0, secsRemain.length-5);
		minsLeft = (endmath1 - endmath2) / hourTics;
		minsRound = Math.floor(minsLeft);
		minsRemain = minsLeft - minsRound;
		minsRemain = (minsRemain < 0) ? minsRemain = 60 - ((minsRound - minsLeft)  * 60) : minsRemain = ((minsLeft - minsRound) * 60);
		minsRemain = minsRemain.toFixed(4);
		minsRemain = minsRemain.toString();
		slMinutes = minsRemain.substr(0, minsRemain.length-5);
		hoursLeft = (endmath1 - endmath2) / dayTics;
		hoursRound = Math.floor(hoursLeft);
		hoursRemain = hoursLeft - hoursRound;
		hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
		hoursRemain = hoursRemain.toFixed(4);
		hoursRemain = hoursRemain.toString();
		slHours = hoursRemain.substr(0, hoursRemain.length-5);
		daysLeft = (endmath1 - endmath2) / dayTics;
		daysRound = daysLeft.toFixed(4);
		daysRemain = daysRound.toString();
		daysRemain = daysRemain.substr(0, daysRemain.length-5);
		slDays = daysRemain;
		slEndedAgo = slDays + "d " + slHours + "h " + slMinutes + "m " + slSeconds + "s " + slMilliseconds + "ms";
	Common.bot.say(to, introtext + sldate + "2, " + slCountdown + "2 - Previous CW SL:10 " + prevsldate + "2, ended: 10" + slEndedAgo);
};

Commands.sl = function(Common, from, to, message) {
	Commands.spotlight(Common, from, to, message);
};

Commands.cwsl = function(Common, from, to, message) {
	Commands.spotlight(Common, from, to, message);
};

function tick(Common, from, to, message) {
	var tick = message.match(/\S+/g);
	if (time[to] == 1 || time[to] == 0 || tick[1] == "now" || tick[1] == "NOW" || tick[1] == "Now" || tick[1] == "NOw" || tick[1] == "NoW" || tick[1] == "nOw" || tick[1] == "nOW" || tick[1] == "noW") {
		Common.bot.say(to, " 14*** ( 13THE CURRENT WORLD HAS TICKED! 14) ***");
		Common.bot.say(to, " 14*** ( 13THE CURRENT WORLD HAS TICKED! 14) ***");
		Common.bot.say(to, users[to]);
		if (tick[1] == "now" || tick[1] == "NOW" || tick[1] == "Now" || tick[1] == "NOw" || tick[1] == "NoW" || tick[1] == "nOw" || tick[1] == "nOW" || tick[1] == "noW") {
			if (typeof tick[2] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
		} else if (Common.utils.msg(message)) {
	  		Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		var tick_roles = '';
		if (channel.lead !== 0) {
			tick_roles += channel.lead + ' ';
		} if (channel.salt !== 0) {
			tick_roles += channel.salt + ' ';
		} if (channel.et1 !== 0) {
			tick_roles += channel.et1 + ' ';
		} if (channel.et2 !== 0) {
			tick_roles += channel.et2 + ' ';
		} if (channel.et3 !== 0) {
			tick_roles += channel.et3;
		}
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, " 14*** ( 13WE EARLY TICKED 1- 4SALTS GO TO ZWR! 14) ***");
				Common.bot.say(to, " 14*** ( 13WE EARLY TICKED 1- 4SALTS GO TO ZWR! 14) ***");
				Common.bot.say(to, tick_roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				Common.bot.say(to, " 14*** ( 13WE EARLY TICKED 1- 10ZALTS GO TO SWR! 14) ***");
				Common.bot.say(to, " 14*** ( 13WE EARLY TICKED 1- 10ZALTS GO TO SWR! 14) ***");
				Common.bot.say(to, tick_roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
	}
};

Commands.tick = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					tick(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						tick(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							tick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						tick(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				tick(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.t = function(Common, from, to, message) {
	Commands.tick(Common, from, to, message);
};

function notick(Common, from, to, message) {
	var notick = message.match(/\S+/g);
	if (time[to] == 4 || time[to] == 3 || time[to] == 2 || time[to] == 1 || time[to] == 0 || notick[1] == "now" || notick[1] == "NOW" || notick[1] == "Now" || notick[1] == "NOw" || notick[1] == "NoW" || notick[1] == "nOw" || notick[1] == "nOW" || notick[1] == "noW") {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		var notick_roles = '';
		if (channel.lead !== 0) {
			notick_roles += channel.lead + ' ';
		} if (channel.salt !== 0) {
			notick_roles += channel.salt + ' ';
		} if (channel.et1 !== 0) {
			notick_roles += channel.et1 + ' ';
		} if (channel.et2 !== 0) {
			notick_roles += channel.et2 + ' ';
		} if (channel.et3 !== 0) {
			notick_roles += channel.et3;
		}
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, " 14*** ( 4ABANDON 13EARLY TICK 1- 4SALTS GO TO ZWR! 14) ***");
				Common.bot.say(to, " 14*** ( 4ABANDON 13EARLY TICK 1- 4SALTS GO TO ZWR! 14) ***");
				Common.bot.say(to, notick_roles);
				if (notick[1] == "now" || notick[1] == "NOW" || notick[1] == "Now" || notick[1] == "NOw" || notick[1] == "NoW" || notick[1] == "nOw" || notick[1] == "nOW" || notick[1] == "noW") {
					if (typeof notick[2] != 'undefined') {
						Common.bot.say(to, "Message: " + Common.utils.msg(message));
					}
				} else if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				Common.bot.say(to, " 14*** ( 4ABANDON 13EARLY TICK 1- 10ZALTS GO TO SWR! 14) ***");
				Common.bot.say(to, " 14*** ( 4ABANDON 13EARLY TICK 1- 10ZALTS GO TO SWR! 14) ***");
				Common.bot.say(to, notick_roles);
				if (notick[1] == "now" || notick[1] == "NOW" || notick[1] == "Now" || notick[1] == "NOw" || notick[1] == "NoW" || notick[1] == "nOw" || notick[1] == "nOW" || notick[1] == "noW") {
					if (typeof notick[2] != 'undefined') {
						Common.bot.say(to, "Message: " + Common.utils.msg(message));
					}
				} else if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
	} else {
		Common.bot.say(to, " 14*** ( 4WE DID NOT TICK 1- 4GET YOUR ALTS IN! 14) ***");
		Common.bot.say(to, " 14*** ( 4WE DID NOT TICK 1- 4GET YOUR ALTS IN! 14) ***");
		Common.bot.say(to, users[to]);
		if (Common.utils.msg(message)) {
	  		Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
	}
};

Commands.notick = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					notick(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						notick(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							notick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						notick(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				notick(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.nt = function(Common, from, to, message) {
	Commands.notick(Common, from, to, message);
};

function guthix(Common, from, to, message) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, " 14*** ( 3MAINS ENTER GUTHIX 1- 4SALTS GO TO ZWR! 14) ***");
				Common.bot.say(to, " 14*** ( 3MAINS ENTER GUTHIX 1- 4SALTS GO TO ZWR! 14) ***");
				Common.bot.say(to, users[to]);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else if (channel.team == 'zamorak') {
				Common.bot.say(to, " 14*** ( 3MAINS ENTER GUTHIX 1- 10ZALTS GO TO SWR! 14) ***");
				Common.bot.say(to, " 14*** ( 3MAINS ENTER GUTHIX 1- 10ZALTS GO TO SWR! 14) ***");
				Common.bot.say(to, users[to]);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
};

Commands.guthix = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					guthix(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						guthix(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							guthix(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						guthix(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
			});
			} else {
				guthix(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.guth = function(Common, from, to, message) {
	Commands.guthix(Common, from, to, message);
};

function order(Common, from, to, message) {
	if (Common.utils.msg(message)) {
					var msg = message.match(/\S+/g);
					var order = "(1) " + msg[1];
					if (typeof msg[2] != 'undefined') {
						order += " (2) " + msg[2];
					} if (typeof msg[3] != 'undefined') {
						order += " (3) " + msg[3];
					} if (typeof msg[4] != 'undefined') {
						order += " (4) " + msg[4];
					} if (typeof msg[5] != 'undefined') {
						order += " (5) " + msg[5];
					} if (typeof msg[6] != 'undefined') {
						order += " (6) " + msg[6];
					} if (typeof msg[7] != 'undefined') {
						order += " (7) " + msg[7];
					} if (typeof msg[8] != 'undefined') {
						order += " (8) " + msg[8];
					} if (typeof msg[9] != 'undefined') {
						order += " (9) " + msg[9];
					} if (typeof msg[10] != 'undefined') {
						order += " (10) " + msg[10];
					} if (typeof msg[11] != 'undefined') {
						order += " (11) " + msg[11];
					} if (typeof msg[12] != 'undefined') {
						order += " (12) " + msg[12];
					} if (typeof msg[13] != 'undefined') {
						order += " (13) " + msg[13];
					} if (typeof msg[14] != 'undefined') {
						order += " (14) " + msg[14];
					} if (typeof msg[15] != 'undefined') {
						order += " (15) " + msg[15];
					} if (typeof msg[16] != 'undefined') {
						order += " (16) " + msg[16];
					} if (typeof msg[17] != 'undefined') {
						order += " (17) " + msg[17];
					} if (typeof msg[18] != 'undefined') {
						order += " (18) " + msg[18];
					} if (typeof msg[19] != 'undefined') {
						order += " (19) " + msg[19];
					} if (typeof msg[20] != 'undefined') {
						order += " (20) " + msg[20];
					} if (typeof msg[21] != 'undefined') {
						order += " - 5You may only set an order of a maximum of 20 members.";
					}
	}
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, " 14*** ( 10SWR OVERFLOW 1- 2TAKE TURNS 1- 7COOR CALLS ORDER! 14) ***");
				Common.bot.say(to, " 14*** ( 10SWR OVERFLOW 1- 2TAKE TURNS 1- 7COOR CALLS ORDER! 14) ***");
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, " 14*** ( 3ACCEPT MESSAGE IN ORDER BELOW 1- 4LOBBY IMMEDIATELY! 14) ***");
					Common.bot.say(to, order);
				} else {
					Common.bot.say(to, users[to]);
				}
			} else if (channel.team == 'zamorak') {
				Common.bot.say(to, " 14*** ( 4ZWR OVERFLOW 1- 2TAKE TURNS 1- 7COOR CALLS ORDER! 14) ***");
				Common.bot.say(to, " 14*** ( 4ZWR OVERFLOW 1- 2TAKE TURNS 1- 7COOR CALLS ORDER! 14) ***");
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, " 14*** ( 3ACCEPT MESSAGE IN ORDER BELOW 1- 4LOBBY IMMEDIATELY! 14) ***");
					Common.bot.say(to, order);
				} else {
					Common.bot.say(to, users[to]);
				}
			}
		});
};

Commands.order = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					order(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						order(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							order(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						order(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				order(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function tie(Common, from, to, message) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Channel not found.");    
		} else {
			var flag = '';
			var roles = '';
			if (channel.team == 'saradomin') {
				flag = "10SARADOMIN";
			} else if (channel.team == 'zamorak') {
				flag = "4ZAMORAK";
			}
			if (channel.salt !== 0) {
				roles += channel.salt;
			} if (channel.salt !== 0 && channel.flag !== 0) {
				roles += " ";
			} if (channel.flag !== 0) {
				roles += channel.flag;
			}
			if (channel.prev_world !== 0) {
				Common.bot.say(to, " 14*** ( 2WE TIED ON WORLD " + channel.prev_world + " 1- 7DID NOT SCORE THE " + flag + " 7FLAG! 14) ***");
				Common.bot.say(to, roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else if (channel.world !== 0) {
				Common.bot.say(to, " 14*** ( 2WE TIED ON WORLD " + channel.world + " 1- 7DID NOT SCORE THE " + flag + " 7FLAG! 14) ***");
				Common.bot.say(to, roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				Common.bot.say(to, " 14*** ( 2WE TIED ON PREVIOUS WORLD 1- 7DID NOT SCORE THE " + flag + " 7FLAG! 14) ***");
				Common.bot.say(to, roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		}
	});
};

Commands.tie = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					tie(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						tie(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							tie(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						tie(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				tie(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function lobby(Common, from, to, message) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Error: Unable to fetch world");
		} else {
			Common.db.channels.update({channel: to}, {$set: {unlobCheck: 0}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				}
			});
		}
	});
	Common.bot.say(to, " 14*** ( 4LOBBY MAIN ACCOUNTS! 14) ***");
	Common.bot.say(to, " 14*** ( 4LOBBY MAIN ACCOUNTS! 14) ***");
	Common.bot.say(to, users[to]);
	if (Common.utils.msg(message)) {
	  	Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
};

Commands.lobby = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					lobby(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						lobby(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							lobby(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						lobby(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				lobby(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.l = function(Common, from, to, message) {
	Commands.lobby(Common, from, to, message);
};

Commands.lobbymains = function(Common, from, to, message) {
	Commands.lobby(Common, from, to, message);
};

Commands.lm = function(Common, from, to, message) {
	Commands.lobby(Common, from, to, message);
};

function ls(Common, from, to, message) {
	var all = message.match(/\S+/g);
	if (all[1] == "all" || all[1] == "ALL" || all[1] == "All" || all[1] == "ALl" || all[1] == "AlL" || all[1] == "aLl" || all[1] == "aLL" || all[1] == "alL") {
		Common.bot.say(to, " 14*** ( 4LOBBY ALL 10SARADOMIN 4ACCOUNTS! 14) ***");
		Common.bot.say(to, " 14*** ( 4LOBBY ALL 10SARADOMIN 4ACCOUNTS! 14) ***");
		Common.bot.say(to, users[to]);
		if (typeof all[2] != 'undefined') {
			Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		var ls_roles = '';
		if (channel.lead !== 0) {
			ls_roles += channel.lead + ' ';
		} if (channel.salt !== 0) {
			ls_roles += channel.salt + ' ';
		} if (channel.et1 !== 0) {
			ls_roles += channel.et1 + ' ';
		} if (channel.et2 !== 0) {
			ls_roles += channel.et2 + ' ';
		} if (channel.et3 !== 0) {
			ls_roles += channel.et3;
		}
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, " 14*** ( 4LOBBY 10SARADOMIN 4ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 4LOBBY 10SARADOMIN 4ALTS! 14) ***");
				Common.bot.say(to, ls_roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				var filter = [channel.lead, channel.salt, channel.et1, channel.et2, channel.et3];
				var ls_filter = '';
				if (users[to] != '') {
					ls_filter = Common.utils.filterUsers(usersLc[to].match(/\S+/g), filter);
					if (ls_filter != '') {
						ls_filter = ls_filter.toString()
						ls_filter = ls_filter.split(',').join(' ');
					}
				}
				Common.bot.say(to, " 14*** ( 4LOBBY 10SARADOMIN 4ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 4LOBBY 10SARADOMIN 4ALTS! 14) ***");
				Common.bot.say(to, ls_filter);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
	}
};

Commands.ls = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					ls(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						ls(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							ls(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						ls(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				ls(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function lz(Common, from, to, message) {
	var all = message.match(/\S+/g);
	if (all[1] == "all" || all[1] == "ALL" || all[1] == "All" || all[1] == "ALl" || all[1] == "AlL" || all[1] == "aLl" || all[1] == "aLL" || all[1] == "alL") {
		Common.bot.say(to, " 14*** ( 4LOBBY ALL ZAMORAK ACCOUNTS! 14) ***");
		Common.bot.say(to, " 14*** ( 4LOBBY ALL ZAMORAK ACCOUNTS! 14) ***");
		Common.bot.say(to, users[to]);
		if (typeof all[2] != 'undefined') {
			Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		var lz_roles = '';
		if (channel.lead !== 0) {
			lz_roles += channel.lead + ' ';
		} if (channel.salt !== 0) {
			lz_roles += channel.salt + ' ';
		} if (channel.et1 !== 0) {
			lz_roles += channel.et1 + ' ';
		} if (channel.et2 !== 0) {
			lz_roles += channel.et2 + ' ';
		} if (channel.et3 !== 0) {
			lz_roles += channel.et3;
		}
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				var filter = [channel.lead, channel.salt, channel.et1, channel.et2, channel.et3];
				var lz_filter = '';
				if (users[to] != '') {
					lz_filter = Common.utils.filterUsers(usersLc[to].match(/\S+/g), filter);
					if (lz_filter != '') {
						lz_filter = lz_filter.toString()
						lz_filter = lz_filter.split(',').join(' ');
					}
				}
				Common.bot.say(to, " 14*** ( 4LOBBY ZAMORAK ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 4LOBBY ZAMORAK ALTS! 14) ***");
				Common.bot.say(to, lz_filter);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				Common.bot.say(to, " 14*** ( 4LOBBY ZAMORAK ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 4LOBBY ZAMORAK ALTS! 14) ***");
				Common.bot.say(to, lz_roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
	}
};

Commands.lz = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					lz(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						lz(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							lz(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						lz(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				lz(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function unlobby(Common, from, to, message) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Error: Unable to fetch world");
		} else {
			Common.db.channels.update({channel: to}, {$set: {unlobCheck: 1}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				}
			});
		}
	});
	Common.bot.say(to, " 14*** ( 3UNLOBBY ALL ACCOUNTS! 14) ***");
	Common.bot.say(to, " 14*** ( 3UNLOBBY ALL ACCOUNTS! 14) ***");
	Common.bot.say(to, users[to]);
	if (Common.utils.msg(message)) {
	  	Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
};

Commands.unlobby = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					unlobby(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						unlobby(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							unlobby(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						unlobby(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				unlobby(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.ul = function(Common, from, to, message) {
	Commands.unlobby(Common, from, to, message);
};

function uls(Common, from, to, message) {
	var all = message.match(/\S+/g);
	if (all[1] == "all" || all[1] == "ALL" || all[1] == "All" || all[1] == "ALl" || all[1] == "AlL" || all[1] == "aLl" || all[1] == "aLL" || all[1] == "alL") {
		Common.bot.say(to, " 14*** ( 3UNLOBBY ALL 10SARADOMIN 3ACCOUNTS! 14) ***");
		Common.bot.say(to, " 14*** ( 3UNLOBBY ALL 10SARADOMIN 3ACCOUNTS! 14) ***");
		Common.bot.say(to, users[to]);
		if (typeof all[2] != 'undefined') {
			Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		var uls_roles = '';
		if (channel.lead !== 0) {
			uls_roles += channel.lead + ' ';
		} if (channel.salt !== 0) {
			uls_roles += channel.salt + ' ';
		} if (channel.et1 !== 0) {
			uls_roles += channel.et1 + ' ';
		} if (channel.et2 !== 0) {
			uls_roles += channel.et2 + ' ';
		} if (channel.et3 !== 0) {
			uls_roles += channel.et3;
		}
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				Common.bot.say(to, " 14*** ( 3UNLOBBY 10SARADOMIN 3ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 3UNLOBBY 10SARADOMIN 3ALTS! 14) ***");
				Common.bot.say(to, uls_roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				var filter = [channel.lead, channel.salt, channel.et1, channel.et2, channel.et3];
				var uls_filter = '';
				if (users[to] != '') {
					uls_filter = Common.utils.filterUsers(usersLc[to].match(/\S+/g), filter);
					if (uls_filter != '') {
						uls_filter = uls_filter.toString()
						uls_filter = uls_filter.split(',').join(' ');
					}
				}
				Common.bot.say(to, " 14*** ( 3UNLOBBY 10SARADOMIN 3ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 3UNLOBBY 10SARADOMIN 3ALTS! 14) ***");
				Common.bot.say(to, uls_filter);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
	}
};

Commands.uls = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					uls(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						uls(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							uls(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						uls(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				uls(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function ulz(Common, from, to, message) {
	var all = message.match(/\S+/g);
	if (all[1] == "all" || all[1] == "ALL" || all[1] == "All" || all[1] == "ALl" || all[1] == "AlL" || all[1] == "aLl" || all[1] == "aLL" || all[1] == "alL") {
		Common.bot.say(to, " 14*** ( 3UNLOBBY ALL 4ZAMORAK 3ACCOUNTS! 14) ***");
		Common.bot.say(to, " 14*** ( 3UNLOBBY ALL 4ZAMORAK 3ACCOUNTS! 14) ***");
		Common.bot.say(to, users[to]);
		if (typeof all[2] != 'undefined') {
			Common.bot.say(to, "Message: " + Common.utils.msg(message));
		}
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		var ulz_roles = '';
		if (channel.lead !== 0) {
			ulz_roles += channel.lead + ' ';
		} if (channel.salt !== 0) {
			ulz_roles += channel.salt + ' ';
		} if (channel.et1 !== 0) {
			ulz_roles += channel.et1 + ' ';
		} if (channel.et2 !== 0) {
			ulz_roles += channel.et2 + ' ';
		} if (channel.et3 !== 0) {
			ulz_roles += channel.et3;
		}
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else if (channel.team == 'saradomin') {
				var filter = [channel.lead, channel.salt, channel.et1, channel.et2, channel.et3];
				var ulz_filter = '';
				if (users[to] != '') {
					ulz_filter = Common.utils.filterUsers(usersLc[to].match(/\S+/g), filter);
					if (ulz_filter != '') {
						ulz_filter = ulz_filter.toString()
						ulz_filter = ulz_filter.split(',').join(' ');
					}
				}
				Common.bot.say(to, " 14*** ( 3UNLOBBY 4ZAMORAK 3ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 3UNLOBBY 4ZAMORAK 3ALTS! 14) ***");
				Common.bot.say(to, ulz_filter);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			} else {
				Common.bot.say(to, " 14*** ( 3UNLOBBY 4ZAMORAK 3ALTS! 14) ***");
				Common.bot.say(to, " 14*** ( 3UNLOBBY 4ZAMORAK 3ALTS! 14) ***");
				Common.bot.say(to, ulz_roles);
				if (Common.utils.msg(message)) {
	  				Common.bot.say(to, "Message: " + Common.utils.msg(message));
				}
			}
		});
	}
};

Commands.ulz = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					ulz(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						ulz(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							ulz(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						ulz(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				ulz(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function hopw(Common, from, to, message) {
	if (Common.utils.msg(message)) {
	var world = message.match(/\S+/g);
	var world_msg = world[1];
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Error: Unable to fetch world");
		} else if (channel.team != 'saradomin' && channel.team != 'zamorak') {
			Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					setTimeout(function() {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
					}, 2000);
				}
			});
		}
		if (channel.world === 0) {
		Common.db.channels.update({channel: to}, {$set: {world: world[1], prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
			if (err || !updated) {
				console.log("Error: World not updated!");
			}
			Common.db.channels.findOne({channel: to}, function(err, channel) {
				if (err || !channel) {
					console.log("Error: Unable to fetch world");
				} else if (channel.games === 0) {
					Common.utils.remindPlaytime(Common, to, 1, 'playtime');
					Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
						if (err || !updated) {
							console.log("Error: Games variable not updated!");
						}
					});
				}
			});
		});
		} else {
			var wone = world[1];
			wone = wone.toString();
			var wonechan = channel.world
			wonechan =  wonechan.toString();
			if (wone != wonechan) {
				Common.db.channels.update({channel: to}, {$set: {world: world[1], prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			}
		}
	});
	Common.utils.startGame(Common, to, 13, 'hopw', 0);
	Common.utils.remindPen(Common, to, 7, 'hopw', 0);
	Common.utils.remindRole1(Common, to, 2, 'hopw', 0);
	Common.utils.remindRole2(Common, to, 9, 'hopw', 0);
	Common.utils.remindFlag(Common, to, 14, 'hopw', 0);
	Common.bot.say(to, " 14*** ( 12HOP ALTS TO WORLD " + world_msg + "! 14) ***");
	Common.bot.say(to, " 14*** ( 12HOP ALTS TO WORLD " + world_msg + "! 14) ***");
	Common.bot.say(to, users[to]);
	if (typeof world[2] != 'undefined') {
		Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
	} else {
	Common.bot.say(to, "5You must specify a world for alts to hop to when using this command.");
	}
};

Commands.hopw = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					hopw(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						hopw(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							hopw(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						hopw(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				hopw(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.hw = function(Common, from, to, message) {
	Commands.hopw(Common, from, to, message);
};

function lh(Common, from, to, message) {
	var world = message.match(/\S+/g);
	var world_msg = world[1];
	if (Common.utils.msg(message)) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Error: Unable to fetch world");
		} else if (channel.team != 'saradomin' && channel.team != 'zamorak') {
			Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					setTimeout(function() {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
					}, 2000);
				}
			});
		}
		if (channel.world === 0) {
		Common.db.channels.update({channel: to}, {$set: {world: world[1], prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
			if (err || !updated) {
				console.log("Error: World not updated!");
			}
			Common.db.channels.findOne({channel: to}, function(err, channel) {
				if (err || !channel) {
					console.log("Error: Unable to fetch world");
				} else if (channel.games === 0) {
					Common.utils.remindPlaytime(Common, to, 1, 'playtime');
					Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
						if (err || !updated) {
							console.log("Error: Games variable not updated!");
						}
					});
				}
			});
		});
		} else {
			var wone = world[1];
			wone = wone.toString();
			var wonechan = channel.world
			wonechan =  wonechan.toString();
			if (wone != wonechan) {
				Common.db.channels.update({channel: to}, {$set: {world: world[1], prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			}
		}
	});
	}
	var lh_msg = " 14*** ( 4LOBBY MAIN ACCOUNTS";
	if (Common.utils.msg(message)) {
		lh_msg += " 1- 12HOP ALTS TO WORLD " + world_msg;
	}
	lh_msg += "! 14) ***";
	if (Common.utils.msg(message)) {
	Common.utils.startGame(Common, to, 13, 'hopw', 0);
	Common.utils.remindPen(Common, to, 7, 'hopw', 0);
	Common.utils.remindRole1(Common, to, 2, 'hopw', 0);
	Common.utils.remindRole2(Common, to, 9, 'hopw', 0);
	Common.utils.remindFlag(Common, to, 14, 'hopw', 0);
	}
	Common.bot.say(to, lh_msg);
	Common.bot.say(to, lh_msg);
	Common.bot.say(to, users[to]);
	if (typeof world[2] != 'undefined') {
		Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
	if (typeof world[1] == 'undefined') {
		Common.bot.say(to, "5You must specify a world for alts to hop to when using this command.");
	}
};

Commands.lh = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					lh(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						lh(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							lh(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						lh(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				lh(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function uh(Common, from, to, message) {
	var world = message.match(/\S+/g);
	var world_msg = world[1];
	if (Common.utils.msg(message)) {
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Error: Unable to fetch world");
		} else if (channel.team != 'saradomin' && channel.team != 'zamorak') {
			Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			       	if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					setTimeout(function() {
						Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
					}, 2000);
				}
			});
		}
		if (channel.world === 0) {
		Common.db.channels.update({channel: to}, {$set: {world: world[1], prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
			if (err || !updated) {
				console.log("Error: World not updated!");
			}
			Common.db.channels.findOne({channel: to}, function(err, channel) {
				if (err || !channel) {
					console.log("Error: Unable to fetch world");
				} else if (channel.games === 0) {
					Common.utils.remindPlaytime(Common, to, 1, 'playtime');
					Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
						if (err || !updated) {
							console.log("Error: Games variable not updated!");
						}
					});
				}
			});
		});
		} else {
			var wone = world[1];
			wone = wone.toString();
			var wonechan = channel.world
			wonechan =  wonechan.toString();
			if (wone != wonechan) {
				Common.db.channels.update({channel: to}, {$set: {world: world[1], prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			}
		}
	});
	}
	var uh_msg = " 14*** ( 3UNLOBBY ALL ACCOUNTS";
	if (Common.utils.msg(message)) {
		uh_msg += " 1- 12HOP ALTS TO WORLD " + world_msg;
	}
	uh_msg += "! 14) ***";
	if (Common.utils.msg(message)) {
	Common.utils.startGame(Common, to, 13, 'hopw', 0);
	Common.utils.remindPen(Common, to, 7, 'hopw', 0);
	Common.utils.remindRole1(Common, to, 2, 'hopw', 0);
	Common.utils.remindRole2(Common, to, 9, 'hopw', 0);
	Common.utils.remindFlag(Common, to, 14, 'hopw', 0);
	}
	Common.bot.say(to, uh_msg);
	Common.bot.say(to, uh_msg);
	Common.bot.say(to, users[to]);
	if (typeof world[2] != 'undefined') {
		Common.bot.say(to, "Message: " + Common.utils.msg(message));
	}
	if (typeof world[1] == 'undefined') {
		Common.bot.say(to, "5You must specify a world for alts to hop to when using this command.");
	}
};

Commands.uh = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					uh(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						uh(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							uh(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						uh(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				uh(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function hopnextw(Common, from, to, message) {
	var world = message.match(/\S+/g);
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (channel.cycle === 2 && channel.prev_world === 0) {
			Common.bot.say(to, "5You must set an active previous world before using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
		} else if (channel.cycle === 3 && channel.prev_world2 === 0) {
			Common.bot.say(to, "5You must set an active grandprevious world before using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
		} else {
			if (channel.team != 'saradomin' && channel.team != 'zamorak') {
				Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			      	 	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						setTimeout(function() {
							Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
						}, 2000);
					}
				});
			}
			if (channel.cycle === 2) {
				Common.db.channels.update({channel: to}, {$set: {world: channel.prev_world, prev_world: channel.world, prev_world2: 0, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			} else if (channel.cycle === 3) {
				Common.db.channels.update({channel: to}, {$set: {world: channel.prev_world2, prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			}
			if (channel.games === 0) {
				Common.utils.remindPlaytime(Common, to, 1, 'playtime');
				Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: Games variable not updated!");
					}
				});
			}
			Common.utils.startGame(Common, to, 13, 'hopw', 0);
			Common.utils.remindPen(Common, to, 7, 'hopw', 0);
			Common.utils.remindRole1(Common, to, 2, 'hopw', 0);
			Common.utils.remindRole2(Common, to, 9, 'hopw', 0);
			Common.utils.remindFlag(Common, to, 14, 'hopw', 0);
			if (channel.cycle === 2) {
				Common.bot.say(to, " 14*** ( 12HOP ALTS TO WORLD " + channel.prev_world + "! 14) ***");
				Common.bot.say(to, " 14*** ( 12HOP ALTS TO WORLD " + channel.prev_world + "! 14) ***");
			} else if (channel.cycle === 3) {
				Common.bot.say(to, " 14*** ( 12HOP ALTS TO WORLD " + channel.prev_world2 + "! 14) ***");
				Common.bot.say(to, " 14*** ( 12HOP ALTS TO WORLD " + channel.prev_world2 + "! 14) ***");
			}
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
		}
	});
};

Commands.hopnextw = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					hopnextw(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						hopnextw(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							hopnextw(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						hopnextw(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				hopnextw(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.hnw = function(Common, from, to, message) {
	Commands.hopnextw(Common, from, to, message);
};

Commands.hn = function(Common, from, to, message) {
	Commands.hopnextw(Common, from, to, message);
};

function lhnw(Common, from, to, message) {
	var world = message.match(/\S+/g);
	var lhnw_msg = " 14*** ( 4LOBBY MAIN ACCOUNTS";
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (channel.cycle === 2 && channel.prev_world === 0) {
			lhnw_msg += "! 14) ***";
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
			setTimeout(function() {
				Common.bot.say(to, "5You must set an active previous world before using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
			}, 1000);
		} else if (channel.cycle === 3 && channel.prev_world2 === 0) {
			lhnw_msg += "! 14) ***";
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
			setTimeout(function() {
				Common.bot.say(to, "5You must set an active grandprevious world before using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
			}, 1000);
		} else {
			if (channel.team != 'saradomin' && channel.team != 'zamorak') {
				Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			      	 	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						setTimeout(function() {
							Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
						}, 2000);
					}
				});
			}
			if (channel.cycle === 2) {
				Common.db.channels.update({channel: to}, {$set: {world: channel.prev_world, prev_world: channel.world, prev_world2: 0, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			} else if (channel.cycle === 3) {
				Common.db.channels.update({channel: to}, {$set: {world: channel.prev_world2, prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			}
			if (channel.games === 0) {
				Common.utils.remindPlaytime(Common, to, 1, 'playtime');
				Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: Games variable not updated!");
					}
				});
			}
			lhnw_msg += " 1- 12HOP ALTS TO WORLD ";
			if (channel.cycle === 2) {
				lhnw_msg += channel.prev_world;
			} else if (channel.cycle === 3) {
				lhnw_msg += channel.prev_world2;
			}
			lhnw_msg += "! 14) ***";
			Common.utils.startGame(Common, to, 13, 'hopw', 0);
			Common.utils.remindPen(Common, to, 7, 'hopw', 0);
			Common.utils.remindRole1(Common, to, 2, 'hopw', 0);
			Common.utils.remindRole2(Common, to, 9, 'hopw', 0);
			Common.utils.remindFlag(Common, to, 14, 'hopw', 0);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
		}
	});
};

Commands.lhnw = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					lhnw(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						lhnw(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							lhnw(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						lhnw(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				lhnw(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.lhn = function(Common, from, to, message) {
	Commands.lhnw(Common, from, to, message);
};

Commands.ln = function(Common, from, to, message) {
	Commands.lhnw(Common, from, to, message);
};

function uhnw(Common, from, to, message) {
	var world = message.match(/\S+/g);
	var lhnw_msg = " 14*** ( 3UNLOBBY ALL ACCOUNTS";
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (channel.cycle === 2 && channel.prev_world === 0) {
			lhnw_msg += "! 14) ***";
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
			setTimeout(function() {
				Common.bot.say(to, "5You must set an active previous world before using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
			}, 1000);
		} else if (channel.cycle === 3 && channel.prev_world2 === 0) {
			lhnw_msg += "! 14) ***";
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
			setTimeout(function() {
				Common.bot.say(to, "5You must set an active grandprevious world before using this command. Use the format !setWorlds CURRENT_WORLD PREVIOUS_WORLD GRANDPREVIOUS_WORLD.");
			}, 1000);
		} else {
			if (channel.team != 'saradomin' && channel.team != 'zamorak') {
				Common.db.channels.update({channel: to}, {$set: {team: 'saradomin'}}, function(err, updated) {
			      	 	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						setTimeout(function() {
							Common.bot.say(to, "4[FORCE UPDATE " + to + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
						}, 2000);
					}
				});
			}
			if (channel.cycle === 2) {
				Common.db.channels.update({channel: to}, {$set: {world: channel.prev_world, prev_world: channel.world, prev_world2: 0, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			} else if (channel.cycle === 3) {
				Common.db.channels.update({channel: to}, {$set: {world: channel.prev_world2, prev_world: channel.world, prev_world2: channel.prev_world, unlobCheck: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: World not updated!");
					}
				});
			}
			if (channel.games === 0) {
				Common.utils.remindPlaytime(Common, to, 1, 'playtime');
				Common.db.channels.update({channel: to}, {$set: {games: 1}}, function(err, updated) {
					if (err || !updated) {
						console.log("Error: Games variable not updated!");
					}
				});
			}
			lhnw_msg += " 1- 12HOP ALTS TO WORLD ";
			if (channel.cycle === 2) {
				lhnw_msg += channel.prev_world;
			} else if (channel.cycle === 3) {
				lhnw_msg += channel.prev_world2;
			}
			lhnw_msg += "! 14) ***";
			Common.utils.startGame(Common, to, 13, 'hopw', 0);
			Common.utils.remindPen(Common, to, 7, 'hopw', 0);
			Common.utils.remindRole1(Common, to, 2, 'hopw', 0);
			Common.utils.remindRole2(Common, to, 9, 'hopw', 0);
			Common.utils.remindFlag(Common, to, 14, 'hopw', 0);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, lhnw_msg);
			Common.bot.say(to, users[to]);
			if (typeof world[1] != 'undefined') {
				Common.bot.say(to, "Message: " + Common.utils.msg(message));
			}
		}
	});
};

Commands.uhnw = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Error: Unable to fetch world");
			} else if (channel.game_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					uhnw(Common, from, to, message);
				} else if (channel.lead !== 0) {
					if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
						uhnw(Common, from, to, message);
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							uhnw(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else if (channel.coor !== 0) {
					if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
						uhnw(Common, from, to, message);
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
				} else {
					Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
				}
				});
			} else {
				uhnw(Common, from, to, message);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.uhn = function(Common, from, to, message) {
	Commands.uhnw(Common, from, to, message);
};

Commands.un = function(Common, from, to, message) {
	Commands.uhnw(Common, from, to, message);
};

Commands.et = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			} else if (channel.role_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					if (Common.utils.msg(message)) {
						Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !et to pick 3 random members to early tick, or use !et1 NAME, !et2 NAME, or !et3 NAME to force set a member to an early tick role.");
					} else {
						Common.utils.pickUser(Common, to, 'et123', 'et');
					}
				} else {
					Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
				}
				});
			} else {
				if (Common.utils.msg(message)) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !et to pick 3 random members to early tick, or use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !et to pick 3 random members to early tick, or use !et1 NAME, !et2 NAME, or !et3 NAME to force set a member to an early tick role.");
					} else {
						Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !et to pick 3 random members to early tick, or use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					Common.utils.pickUser(Common, to, 'et123', 'et');
				}
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.earlytick = function(Common, from, to, message) {
	Commands.et(Common, from, to, message);
};

function role_picker(Common, from, to, message, role_type) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			} else if (channel.role_lock == 1) {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					var nick  = message.match(/\S+/g);
					if ((role_type == 'lead' && channel.lead === 0) || (role_type == 'salt' && channel.salt === 0) || (role_type == 'zalt' && channel.salt === 0) || (role_type == 'flag' && channel.flag === 0) || 
					   (role_type == 'et1' && channel.et1 === 0) || (role_type == 'et2' && channel.et2 === 0) || (role_type == 'et3' && channel.et3 === 0) || (role_type == 'coor' && channel.coor === 0)) {
						if (typeof nick[1] == 'undefined') {
							from = 'random';
							Common.utils.pickUser(Common, to, role_type, from);
						} else {
							from = nick[1];
							Common.utils.pickUser(Common, to, role_type, from);
						}
					} else if (typeof nick[1] != 'undefined') {
					if (role_type == 'lead' && Common.utils.toLc(channel.lead) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the lead role!");
					} else if (role_type == 'salt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the salt role!");
					} else if (role_type == 'zalt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the zalt role!");
					} else if (role_type == 'flag' && Common.utils.toLc(channel.flag) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the flag role!");
					} else if (role_type == 'et1' && Common.utils.toLc(channel.et1) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the et1 role!");
					} else if (role_type == 'et2' && Common.utils.toLc(channel.et2) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the et2 role!");
					} else if (role_type == 'et3' && Common.utils.toLc(channel.et3) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the et3 role!");
					} else if (role_type == 'coor' && Common.utils.toLc(channel.coor) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the coordinator role!");
					} else {
						from = nick[1];
						Common.utils.pickUser(Common, to, role_type, from);
					}
					} else {
						from = 'random';
						Common.utils.pickUser(Common, to, role_type, from);
					}
				} else {
					Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
				}
				});
			} else {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					var nick  = message.match(/\S+/g);
					if (typeof nick[1] != 'undefined') {
						Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to force set a role to a specified member. Use !ROLE_HERE to set a role randomly, or use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else {
						from = 'random';
						Common.utils.pickUser(Common, to, role_type, from);
					}
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					var nick  = message.match(/\S+/g);
					if ((role_type == 'lead' && channel.lead === 0) || (role_type == 'salt' && channel.salt === 0) || (role_type == 'zalt' && channel.salt === 0) || (role_type == 'flag' && channel.flag === 0) || 
					   (role_type == 'et1' && channel.et1 === 0) || (role_type == 'et2' && channel.et2 === 0) || (role_type == 'et3' && channel.et3 === 0) || (role_type == 'coor' && channel.coor === 0)) {
						if (typeof nick[1] == 'undefined') {
							from = 'random';
							Common.utils.pickUser(Common, to, role_type, from);
						} else {
							from = nick[1];
							Common.utils.pickUser(Common, to, role_type, from);
						}
					} else if (typeof nick[1] != 'undefined') {
					if (role_type == 'lead' && Common.utils.toLc(channel.lead) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the lead role!");
					} else if (role_type == 'salt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the salt role!");
					} else if (role_type == 'zalt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the zalt role!");
					} else if (role_type == 'flag' && Common.utils.toLc(channel.flag) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the flag role!");
					} else if (role_type == 'et1' && Common.utils.toLc(channel.et1) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the et1 role!");
					} else if (role_type == 'et2' && Common.utils.toLc(channel.et2) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the et2 role!");
					} else if (role_type == 'et3' && Common.utils.toLc(channel.et3) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the et3 role!");
					} else if (role_type == 'coor' && Common.utils.toLc(channel.coor) == Common.utils.toLc(nick[1])) {
						Common.bot.say(to, "5" + nick[1] + " is already assigned the coordinator role!");
					} else {
						from = nick[1];
						Common.utils.pickUser(Common, to, role_type, from);
					}
					} else {
						from = 'random';
						Common.utils.pickUser(Common, to, role_type, from);
					}
				} else {
					var nick  = message.match(/\S+/g);
					if (typeof nick[1] != 'undefined') {
						Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to force set a role to a specified member. Use !ROLE_HERE to set a role randomly, or use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else {
						from = 'random';
						Common.utils.pickUser(Common, to, role_type, from);
					}
				}
				});
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
}

Commands.et1 = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'et1')
};

Commands.et2 = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'et2')
};

Commands.et3 = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'et3')
};

Commands.lead = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'lead')
};

Commands.salt = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'salt')
};

Commands.zalt = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'zalt')
};

Commands.flag = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'flag')
};

Commands.coor = function(Common, from, to, message) {
	role_picker(Common, from, to, message, 'coor')
};

Commands.roles = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.utils.getRoles(Common, from, to);
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.rolerequest = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var filtered_ops = Common.utils.removeByValue(ops[to], 'Abdel')
	var filtered_hops = Common.utils.removeByValue(halfops[to], 'Abdel')
	var hl_list = filtered_ops.join(' ') + ' ' + filtered_hops.join(' ')
	var role = message.match(/\S+/g);
		Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Channel not found.");
		} else if (typeof role[1] != 'undefined') {
			if (typeof role[2] != 'undefined') {
			if (Common.utils.toLc(role[1]) == 'lead' && channel.lead === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the lead role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'salt' && channel.salt === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the salt role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'zalt' && channel.salt === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the zalt role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'flag' && channel.flag === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the flag role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'et1' && channel.et1 === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the et1 role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'et2' && channel.et2 === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the et2 role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'et3' && channel.et3 === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the et3 role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'coor' && channel.coor === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the coordinator role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'lead' && Common.utils.toLc(channel.lead) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the lead role!");
			} else if (Common.utils.toLc(role[1]) == 'salt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the salt role!");
			} else if (Common.utils.toLc(role[1]) == 'zalt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the zalt role!");
			} else if (Common.utils.toLc(role[1]) == 'flag' && Common.utils.toLc(channel.flag) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the flag role!");
			} else if (Common.utils.toLc(role[1]) == 'et1' && Common.utils.toLc(channel.et1) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the et1 role!");
			} else if (Common.utils.toLc(role[1]) == 'et2' && Common.utils.toLc(channel.et2) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the et2 role!");
			} else if (Common.utils.toLc(role[1]) == 'et3' && Common.utils.toLc(channel.et3) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the et3 role!");
			} else if (Common.utils.toLc(role[1]) == 'coor' && Common.utils.toLc(channel.coor) == Common.utils.toLc(role[2])) {
				Common.bot.say(to, "5" + role[2] + " is already assigned the coordinator role!");
			} else if (Common.utils.toLc(role[1]) == 'coor') {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the coordinator role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'lead' || Common.utils.toLc(role[1]) == 'salt' || Common.utils.toLc(role[1]) == 'zalt' || Common.utils.toLc(role[1]) == 'flag' || Common.utils.toLc(role[1]) == 'et1' || Common.utils.toLc(role[1]) == 'et2' || Common.utils.toLc(role[1]) == 'et3') {
				Common.bot.say(to, "7" + from + " is requesting that " + role[2] + " be assigned the " + Common.utils.toLc(role[1]) + " role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else {
				Common.bot.say(to, "5You must specify a role to request to be assigned to a member when using this command: lead, salt, zalt, flag, et1, et2, et3, or coor. Use the format !rolerequest ROLE_HERE NAME.");
			}
		} else {
			if (Common.utils.toLc(role[1]) == 'lead' && channel.lead === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the lead role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'salt' && channel.salt === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the salt role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'zalt' && channel.salt === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the zalt role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'flag' && channel.flag === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the flag role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'et1' && channel.et1 === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the et1 role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'et2' && channel.et2 === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the et2 role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'et3' && channel.et3 === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the et3 role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'coor' && channel.coor === 0) {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the coordinator role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'lead' && Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the lead role!");
			} else if (Common.utils.toLc(role[1]) == 'salt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the salt role!");
			} else if (Common.utils.toLc(role[1]) == 'zalt' && Common.utils.toLc(channel.salt) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the zalt role!");
			} else if (Common.utils.toLc(role[1]) == 'flag' && Common.utils.toLc(channel.flag) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the flag role!");
			} else if (Common.utils.toLc(role[1]) == 'et1' && Common.utils.toLc(channel.et1) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the et1 role!");
			} else if (Common.utils.toLc(role[1]) == 'et2' && Common.utils.toLc(channel.et2) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the et2 role!");
			} else if (Common.utils.toLc(role[1]) == 'et3' && Common.utils.toLc(channel.et3) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the et3 role!");
			} else if (Common.utils.toLc(role[1]) == 'coor' && Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
				Common.bot.say(to, "5" + from + ", you are already assigned the coordinator role!");
			} else if (Common.utils.toLc(role[1]) == 'coor') {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the coordinator role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else if (Common.utils.toLc(role[1]) == 'lead' || Common.utils.toLc(role[1]) == 'salt' || Common.utils.toLc(role[1]) == 'zalt' || Common.utils.toLc(role[1]) == 'flag' || Common.utils.toLc(role[1]) == 'et1' || Common.utils.toLc(role[1]) == 'et2' || Common.utils.toLc(role[1]) == 'et3') {
				Common.bot.say(to, "7" + from + " is requesting that " + from + " be assigned the " + Common.utils.toLc(role[1]) + " role.");
				if (hl_list != ' ') {
					Common.bot.say(to, hl_list);
				}
			} else {
				Common.bot.say(to, "5You must specify a role to request to be assigned to a member when using this command: lead, salt, zalt, flag, et1, et2, et3, or coor. Use the format !rolerequest ROLE_HERE NAME.");
			}
		}
		} else {
			Common.bot.say(to, "5You must specify a role to request to be assigned to a member when using this command: lead, salt, zalt, flag, et1, et2, et3, or coor. Use the format !rolerequest ROLE_HERE NAME.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.rolerq = function(Common, from, to, message) {
	Commands.rolerequest(Common, from, to, message);
};

Commands.gamewarn = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var time = message.match(/\S+/g);
	var from1 = Common.utils.toLc(from);
	Common.db.channels.findOne({channel: to}, function(err, channel) {
		if (err || !channel) {
			console.log("Channel not found.");
		} else if (channel.games == 1) {
			if (typeof time[1] != 'undefined') {
				var gw = time[1];
				if (time[1] == '0' || time[1] == '1' || Common.utils.toLc(time[1]) == 'now') {
					Common.utils.gameWarning(Common, to, from1, 'gw', '13', '60', '1', from);
					Common.bot.say(to, "2" + from + " must leave games immediately due to a matter of urgency - use !d when you leave games, and reassign roles if necessary.");
				} else if (Common.utils.toLc(time[1]) == 'soon') {
					Common.utils.gameWarning(Common, to, from1, 'gw', '26', '60', '2', from);
					Common.bot.say(to, "2" + from + " plans to leave games sometime soon - use !gw again to give your official 2 game warning, use !d when you leave games, and reassign roles if necessary.");
				} else {
					var gwmins = gw * 2;
					if (!isNaN(gwmins)) {
						Common.utils.gameWarning(Common, to, from1, 'gw', gwmins, '60', gw, from);
						Common.bot.say(to, "2" + from + " plans to leave games after " + time[1] + " more worlds - use !d when you leave games, and reassign roles if necessary.");
					} else {
						Common.bot.say(to, "5You must specify the number of games you plan to leave after when using this command. Use the format !gameWarn NUMBER_HERE to give your game warning.");
					}
				}
			} else {
				Common.utils.gameWarning(Common, to, from1, 'gw', '26', '60', '2', from);
	  			Common.bot.say(to, "2" + from + " plans to leave games after 2 more worlds - use !d when you leave games, and reassign roles if necessary.");
			}
		} else {
			Common.bot.say(to, "2There is no reason to give a game warning; there are currently no games in this channel. You may start games by using !hopw WORLD_HERE.");
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};
		
		
Commands.gw = function(Common, from, to, message) {
	Commands.gamewarn(Common, from, to, message);
};

function noticks(Common, from, to, message) {
	if (time[to] == 0 || time[to] == undefined) {
		time[to] = 0;
		ticksecs[to] = 0;
		Common.bot.say(to, "5The ticks left for the current world are already cleared in this channel.");
	} else {
		time[to] = 0;
		ticksecs[to] = 0;
		Common.bot.say(to, "2" + from + " has cleared the ticks left for the current world in this channel.");
	}
};

Commands.no = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var game = message.match(/\S+/g);
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");
			} else if (Common.utils.msg(message)) {
			if (Common.utils.toLc(game[1]) == 'lead') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.lead === 0) {
							Common.bot.say(to, "5The lead role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {lead: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the lead role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.lead === 0) {
						Common.bot.say(to, "5The lead role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {lead: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the lead role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'salt') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.salt === 0) {
							Common.bot.say(to, "5The salt role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {salt: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the salt role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.salt === 0) {
						Common.bot.say(to, "5The salt role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {salt: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the salt role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'zalt') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.salt === 0) {
							Common.bot.say(to, "5The zalt role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {salt: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the zalt role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.salt === 0) {
						Common.bot.say(to, "5The zalt role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {salt: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the zalt role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'et1') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.et1 === 0) {
							Common.bot.say(to, "5The et1 role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {et1: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the et1 role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.et1 === 0) {
						Common.bot.say(to, "5The et1 role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {et1: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the et1 role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'et2') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.et2 === 0) {
							Common.bot.say(to, "5The et2 role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {et2: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the et2 role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.et2 === 0) {
						Common.bot.say(to, "5The et2 role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {et2: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the et2 role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'et3') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.et3 === 0) {
							Common.bot.say(to, "5The et3 role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {et3: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the et3 role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.et3 === 0) {
						Common.bot.say(to, "5The et3 role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {et3: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the et3 role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'et') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0) {
							Common.bot.say(to, "5Early ticking is already ended - there are no set early tick roles in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {et1: 0, et2: 0, et3: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has ended early ticking - all early tick roles have been cleared in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0) {
						Common.bot.say(to, "5Early ticking is already ended - there are no set early tick roles in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {et1: 0, et2: 0, et3: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has ended early ticking - all early tick roles have been cleared in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'flag') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.flag === 0) {
							Common.bot.say(to, "5The flag role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {flag: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								if (channel.salt !== 0) {
									if (channel.salt == channel.flag) {
										Common.bot.say(to, "2" + from + " has cleared the flag role in this channel.");
									} else {
										Common.bot.say(to, "2" + from + " has cleared the flag role in this channel - " + channel.salt + " is no longer a piece of shit.");
									}
								} else {
									if (channel.team == 'saradomin') {
										Common.bot.say(to, "2" + from + " has cleared the flag role in this channel.");
									} else if (channel.team == 'zamorak') {
										Common.bot.say(to, "2" + from + " has cleared the flag role in this channel.");
									}
								}
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.flag === 0) {
						Common.bot.say(to, "5The flag role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {flag: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							if (channel.salt !== 0) {
								if (channel.salt == channel.flag) {
									Common.bot.say(to, "2" + from + " has cleared the flag role in this channel.");
								} else {
									Common.bot.say(to, "2" + from + " has cleared the flag role in this channel - " + channel.salt + " is no longer a piece of shit.");
								}
							} else {
								if (channel.team == 'saradomin') {
									Common.bot.say(to, "2" + from + " has cleared the flag role in this channel.");
								} else if (channel.team == 'zamorak') {
									Common.bot.say(to, "2" + from + " has cleared the flag role in this channel.");
								}
							}
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'coor') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.coor === 0) {
							Common.bot.say(to, "5The coordinator role is already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {coor: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the coordinator role in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.coor === 0) {
						Common.bot.say(to, "5The coordinator role is already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {coor: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the coordinator role in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'roles') {
				if (channel.role_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
							Common.bot.say(to, "5All roles are already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared all roles in this channel.");
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
						Common.bot.say(to, "5All roles are already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared all roles in this channel.");
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'games') {
				if (channel.game_lock == 1 && channel.role_lock == 0) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
							time[to] = 0;
							ticksecs[to] = 0;
							Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Error: World not updated!");
							} else {
								time[to] = 0;
								ticksecs[to] = 0;
								Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
								if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
									var gtdays = 0;
									var gthours = 0;
									var gtminutes = 0;
									var gtseconds = 0;
									var thdays = 0;
									var thhours = 0;
									var thminutes = 0;
									var thseconds = 0;
									if (channel.days != 0) {
										gtdays = channel.days * 216;
										thdays = channel.days * 244.8;
									} if (channel.hours != 0) {
										gthours = channel.hours * 9;
										thhours = channel.hours * 10.2;
									} if (channel.minutes != 0) {
										gtminutes = channel.minutes * 0.15;
										thminutes = channel.minutes * 0.17;
									} if (channel.seconds != 0) {
										gtseconds = channel.seconds * 0.0025;
										thseconds = channel.seconds * 0.00283;
									}
									var gtall = gtdays + gthours + gtminutes + gtseconds;
									var gtallen = gtall * 2;
									var thall = thdays + thhours + thminutes + thseconds;
									var thallsl = thall * 5;
									Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
									Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
										if (err || !updated) {
											console.log("Error: Playtime not updated!");
										}
									});
								}
							}
							});
						}
					} else if (channel.lead !== 0) {
						if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
							if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
								time[to] = 0;
								ticksecs[to] = 0;
								Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
							} else {
								Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
								if (err || !updated) {
									console.log("Error: World not updated!");
								} else {
									time[to] = 0;
									ticksecs[to] = 0;
									Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
									if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
										var gtdays = 0;
										var gthours = 0;
										var gtminutes = 0;
										var gtseconds = 0;
										var thdays = 0;
										var thhours = 0;
										var thminutes = 0;
										var thseconds = 0;
										if (channel.days != 0) {
											gtdays = channel.days * 216;
											thdays = channel.days * 244.8;
										} if (channel.hours != 0) {
											gthours = channel.hours * 9;
											thhours = channel.hours * 10.2;
										} if (channel.minutes != 0) {
											gtminutes = channel.minutes * 0.15;
											thminutes = channel.minutes * 0.17;
										} if (channel.seconds != 0) {
											gtseconds = channel.seconds * 0.0025;
											thseconds = channel.seconds * 0.00283;
										}
										var gtall = gtdays + gthours + gtminutes + gtseconds;
										var gtallen = gtall * 2;
										var thall = thdays + thhours + thminutes + thseconds;
										var thallsl = thall * 5;
										Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
										Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
											if (err || !updated) {
												console.log("Error: Playtime not updated!");
											}
										});
									}
								}
								});
							}
						} else if (channel.coor !== 0) {
							if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
								if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
									time[to] = 0;
									ticksecs[to] = 0;
									Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
								} else {
									Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
									if (err || !updated) {
										console.log("Error: World not updated!");
									} else {
										time[to] = 0;
										ticksecs[to] = 0;
										Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
										if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
											var gtdays = 0;
											var gthours = 0;
											var gtminutes = 0;
											var gtseconds = 0;
											var thdays = 0;
											var thhours = 0;
											var thminutes = 0;
											var thseconds = 0;
											if (channel.days != 0) {
												gtdays = channel.days * 216;
												thdays = channel.days * 244.8;
											} if (channel.hours != 0) {
												gthours = channel.hours * 9;
												thhours = channel.hours * 10.2;
											} if (channel.minutes != 0) {
												gtminutes = channel.minutes * 0.15;
												thminutes = channel.minutes * 0.17;
											} if (channel.seconds != 0) {
												gtseconds = channel.seconds * 0.0025;
												thseconds = channel.seconds * 0.00283;
											}
											var gtall = gtdays + gthours + gtminutes + gtseconds;
											var gtallen = gtall * 2;
											var thall = thdays + thhours + thminutes + thseconds;
											var thallsl = thall * 5;
											Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
											Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
												if (err || !updated) {
													console.log("Error: Playtime not updated!");
												}
											});
										}
									}
									});
								}
							} else {
								Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
							}
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
								time[to] = 0;
								ticksecs[to] = 0;
								Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
							} else {
								Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
								if (err || !updated) {
									console.log("Error: World not updated!");
								} else {
									time[to] = 0;
									ticksecs[to] = 0;
									Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
									if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
										var gtdays = 0;
										var gthours = 0;
										var gtminutes = 0;
										var gtseconds = 0;
										var thdays = 0;
										var thhours = 0;
										var thminutes = 0;
										var thseconds = 0;
										if (channel.days != 0) {
											gtdays = channel.days * 216;
											thdays = channel.days * 244.8;
										} if (channel.hours != 0) {
											gthours = channel.hours * 9;
											thhours = channel.hours * 10.2;
										} if (channel.minutes != 0) {
											gtminutes = channel.minutes * 0.15;
											thminutes = channel.minutes * 0.17;
										} if (channel.seconds != 0) {
											gtseconds = channel.seconds * 0.0025;
											thseconds = channel.seconds * 0.00283;
										}
										var gtall = gtdays + gthours + gtminutes + gtseconds;
										var gtallen = gtall * 2;
										var thall = thdays + thhours + thminutes + thseconds;
										var thallsl = thall * 5;
										Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
										Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
											if (err || !updated) {
												console.log("Error: Playtime not updated!");
											}
										});
									}
								}
								});
							}
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
					});
				} else if (channel.role_lock == 1 && channel.game_lock == 0) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
							time[to] = 0;
							ticksecs[to] = 0;
							Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Error: World not updated!");
							} else {
								time[to] = 0;
								ticksecs[to] = 0;
								Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
								if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
									var gtdays = 0;
									var gthours = 0;
									var gtminutes = 0;
									var gtseconds = 0;
									var thdays = 0;
									var thhours = 0;
									var thminutes = 0;
									var thseconds = 0;
									if (channel.days != 0) {
										gtdays = channel.days * 216;
										thdays = channel.days * 244.8;
									} if (channel.hours != 0) {
										gthours = channel.hours * 9;
										thhours = channel.hours * 10.2;
									} if (channel.minutes != 0) {
										gtminutes = channel.minutes * 0.15;
										thminutes = channel.minutes * 0.17;
									} if (channel.seconds != 0) {
										gtseconds = channel.seconds * 0.0025;
										thseconds = channel.seconds * 0.00283;
									}
									var gtall = gtdays + gthours + gtminutes + gtseconds;
									var gtallen = gtall * 2;
									var thall = thdays + thhours + thminutes + thseconds;
									var thallsl = thall * 5;
									Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
									Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
										if (err || !updated) {
											console.log("Error: Playtime not updated!");
										}
									});
								}
							}
							});
						}
					} else {
						Common.bot.say(to, "5The role lock is enabled - use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else if (channel.role_lock == 1 && channel.game_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The game lock and role lock are enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands | use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
							time[to] = 0;
							ticksecs[to] = 0;
							Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Error: World not updated!");
							} else {
								time[to] = 0;
								ticksecs[to] = 0;
								Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
								if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
									var gtdays = 0;
									var gthours = 0;
									var gtminutes = 0;
									var gtseconds = 0;
									var thdays = 0;
									var thhours = 0;
									var thminutes = 0;
									var thseconds = 0;
									if (channel.days != 0) {
										gtdays = channel.days * 216;
										thdays = channel.days * 244.8;
									} if (channel.hours != 0) {
										gthours = channel.hours * 9;
										thhours = channel.hours * 10.2;
									} if (channel.minutes != 0) {
										gtminutes = channel.minutes * 0.15;
										thminutes = channel.minutes * 0.17;
									} if (channel.seconds != 0) {
										gtseconds = channel.seconds * 0.0025;
										thseconds = channel.seconds * 0.00283;
									}
									var gtall = gtdays + gthours + gtminutes + gtseconds;
									var gtallen = gtall * 2;
									var thall = thdays + thhours + thminutes + thseconds;
									var thallsl = thall * 5;
									Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
									Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
										if (err || !updated) {
											console.log("Error: Playtime not updated!");
										}
									});
								}
							}
							});
						}
					} else {
						Common.bot.say(to, "5The game lock and role lock are enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands | use !rolerequest ROLE_HERE NAME to request a role to be assigned to a member.");
					}
					});
				} else {
					if (channel.games === 0 && (time[to] == 0 || time[to] == undefined) && channel.world === 0 && channel.lead === 0 && channel.salt === 0 && channel.flag === 0 && channel.et1 === 0 && channel.et2 === 0 && channel.et3 === 0 && channel.coor === 0) {
						time[to] = 0;
						ticksecs[to] = 0;
						Common.bot.say(to, "5Games are already ended - there is no game information for this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {games: 0, world: 0, prev_world: 0, prev_world2: 0, lead: 0, salt: 0, flag: 0, et1: 0, et2: 0, et3: 0, coor: 0, unlobCheck: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Error: World not updated!");
						} else {
							time[to] = 0;
							ticksecs[to] = 0;
							Common.bot.say(to, "2" + from + " has ended games - all game information has been cleared for this channel.");
							if (channel.days !== 0 || channel.hours !== 0 || channel.minutes !== 0 || channel.seconds !== 0) {
								var gtdays = 0;
								var gthours = 0;
								var gtminutes = 0;
								var gtseconds = 0;
								var thdays = 0;
								var thhours = 0;
								var thminutes = 0;
								var thseconds = 0;
								if (channel.days != 0) {
									gtdays = channel.days * 216;
									thdays = channel.days * 244.8;
								} if (channel.hours != 0) {
									gthours = channel.hours * 9;
									thhours = channel.hours * 10.2;
								} if (channel.minutes != 0) {
									gtminutes = channel.minutes * 0.15;
									thminutes = channel.minutes * 0.17;
								} if (channel.seconds != 0) {
									gtseconds = channel.seconds * 0.0025;
									thseconds = channel.seconds * 0.00283;
								}
								var gtall = gtdays + gthours + gtminutes + gtseconds;
								var gtallen = gtall * 2;
								var thall = thdays + thhours + thminutes + thseconds;
								var thallsl = thall * 5;
								Common.bot.say(to, "2Ended session playtime:10 " + channel.days + "d " + channel.hours + "h " + channel.minutes + "m " + channel.seconds + "s2 - Max gold tickets earned: 10" + gtall + "2; with enhancers: 10" + gtallen + "2 - Max thaler earned: 10" + thall + "2; on spotlight: 10" + thallsl);
								Common.db.channels.update({channel: to}, {$set: {days: 0, hours: 0, minutes: 0, seconds: 0}}, function(err, updated) {
									if (err || !updated) {
										console.log("Error: Playtime not updated!");
									}
								});
							}
						}
						});
					}
				}
			} else if (Common.utils.toLc(game[1]) == 'ticks') {
				if (channel.game_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						noticks(Common, from, to, message);
					} else if (channel.lead !== 0) {
						if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
							noticks(Common, from, to, message);
						} else if (channel.coor !== 0) {
							if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
								noticks(Common, from, to, message);
							} else {
								Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
							}
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							noticks(Common, from, to, message);
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
					});
				} else {
					noticks(Common, from, to, message);
				}
			} else if (Common.utils.toLc(game[1]) == 'worlds') {
				if (channel.game_lock == 1) {
					var member = Common.utils.toLc(from);
					Common.db.users.findOne({name: member}, function(err, perms) {
					if (err || !perms) {
						console.log(err);
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
						if (channel.world === 0) {
							Common.bot.say(to, "5The active worlds are already cleared in this channel.");
						} else {
							Common.db.channels.update({channel: to}, {$set: {world: 0, prev_world: 0, prev_world2: 0}}, function(err, updated) {
							if (err || !updated) {
								console.log("Error: World not updated!");
							} else {
								Common.bot.say(to, "2" + from + " has cleared the active worlds in this channel.");
							}
							});
						}
					} else if (channel.lead !== 0) {
						if (Common.utils.toLc(channel.lead) == Common.utils.toLc(from)) {
							if (channel.world === 0) {
								Common.bot.say(to, "5The active worlds are already cleared in this channel.");
							} else {
								Common.db.channels.update({channel: to}, {$set: {world: 0, prev_world: 0, prev_world2: 0}}, function(err, updated) {
								if (err || !updated) {
									console.log("Error: World not updated!");
								} else {
									Common.bot.say(to, "2" + from + " has cleared the active worlds in this channel.");
								}
								});
							}
						} else if (channel.coor !== 0) {
							if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
								if (channel.world === 0) {
									Common.bot.say(to, "5The active worlds are already cleared in this channel.");
								} else {
									Common.db.channels.update({channel: to}, {$set: {world: 0, prev_world: 0, prev_world2: 0}}, function(err, updated) {
									if (err || !updated) {
										console.log("Error: World not updated!");
									} else {
										Common.bot.say(to, "2" + from + " has cleared the active worlds in this channel.");
									}
									});
								}
							} else {
								Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
							}
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else if (channel.coor !== 0) {
						if (Common.utils.toLc(channel.coor) == Common.utils.toLc(from)) {
							if (channel.world === 0) {
								Common.bot.say(to, "5The active worlds are already cleared in this channel.");
							} else {
								Common.db.channels.update({channel: to}, {$set: {world: 0, prev_world: 0, prev_world2: 0}}, function(err, updated) {
								if (err || !updated) {
									console.log("Error: World not updated!");
								} else {
									Common.bot.say(to, "2" + from + " has cleared the active worlds in this channel.");
								}
								});
							}
						} else {
							Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
						}
					} else {
						Common.bot.say(to, "5The game lock is enabled - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may use game commands.");
					}
					});
				} else {
					if (channel.world === 0) {
						Common.bot.say(to, "5The active worlds are already cleared in this channel.");
					} else {
						Common.db.channels.update({channel: to}, {$set: {world: 0, prev_world: 0, prev_world2: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Error: World not updated!");
						} else {
							Common.bot.say(to, "2" + from + " has cleared the active worlds in this channel.");
						}
						});
					}
				}
			} else {
				Common.bot.say(to, "5You must specify game information to clear when using this command: lead, salt, zalt, flag, et1, et2, et3, et, coor, roles, ticks, worlds, or games. Use the format !no GAME_INFO_HERE.");
			}
			} else {
				Common.bot.say(to, "5You must specify game information to clear when using this command: lead, salt, zalt, flag, et1, et2, et3, et, coor, roles, ticks, worlds, or games. Use the format !no GAME_INFO_HERE.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};


Commands.clear = function(Common, from, to, message) {
	Commands.no(Common, from, to, message);
};

Commands.end = function(Common, from, to, message) {
	Commands.no(Common, from, to, message);
};

