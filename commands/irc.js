Commands.plusops = function(Common, from, to, message) {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
	} else if (perms.status == 'Owner') {
		if (memlist[member] != 5 || perms.key === undefined) {
			if (to == '#cwexperts.staff') {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			}
		} else {
		Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', 'Abdel', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', 'Hanna', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', 'Abdel', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', 'Hanna', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', 'Abdel', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', 'Hanna', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts.staff', 'ADD', 'Abdel', '9999');
		Common.bot.send('CS', 'ACCESS', '#cwexperts.staff', 'ADD', 'Hanna', '9999');
		Common.bot.send('CS', 'ACCESS', '#key', 'ADD', 'Abdel', '9999');
		Common.bot.send('CS', 'ACCESS', '#key', 'ADD', 'Hanna', '9999');
		if (to == '#cwexperts.staff') {
			Common.bot.say(to, "3Success.");
		}
		}
	}
	});
};

Commands.minusops = function(Common, from, to, message) {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
	} else if (perms.status == 'Owner') {
		if (memlist[member] != 5 || perms.key === undefined) {
			if (to == '#cwexperts.staff') {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			}
		} else {
		Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', 'Abdel', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', 'Hanna', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', 'Abdel', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', 'Hanna', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', 'Abdel', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', 'Hanna', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts.staff', 'ADD', 'Abdel', '9998');
		Common.bot.send('CS', 'ACCESS', '#cwexperts.staff', 'ADD', 'Hanna', '9998');
		Common.bot.send('CS', 'ACCESS', '#key', 'ADD', 'Abdel', '9998');
		Common.bot.send('CS', 'ACCESS', '#key', 'ADD', 'Hanna', '9998');
		if (to == '#cwexperts.staff') {
			Common.bot.say(to, "3Success.");
		}
		}
	}
	});
};

//REMOVE ALL RANKS

function removeallnonick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (opsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length - 1;
		}
	} else {
		newplayers = 0;
	}
	if (opsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	} else {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2" + from + " is no longer playing games. Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	}
	Common.bot.send('MODE', to, '-o', from);
	Common.bot.send('MODE', to, '-h', from);
	Common.bot.send('MODE', to, '-v', from);
};

function removeallwnick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (opsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length - 1;
		}
	} else {
		newplayers = 0;
	}
	if (opsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	} else {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2" + nick[1] + " is no longer playing games. Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	}
	Common.bot.send('MODE', to, '-o', nick[1]);
	Common.bot.send('MODE', to, '-h', nick[1]);
	Common.bot.send('MODE', to, '-v', nick[1]);
};

Commands.d = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	if (Common.utils.msg(message)) {	 
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (everyoneLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
				if (opsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1 || halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1 || voicesLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							removeallwnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							removeallwnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						removeallwnick(Common, from, to, message);
					}
				} else {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							Common.bot.say(to, "5" + nick[1] + ", you do not have any ranks in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							Common.bot.say(to, "5" + nick[1] + ", you do not have any ranks in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						Common.bot.say(to, "5" + nick[1] + " does not have any ranks in this channel.");
					}
				}
			} else {
				Common.bot.say(to, "5" + nick[1] + " is not a user in this channel.");
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		}
		});
	} else {
		if (opsLc[to].indexOf(Common.utils.toLc(from)) > -1 || halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1 || voicesLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			removeallnonick(Common, from, to, message);
		} else {
			Common.bot.say(to, "5" + from + ", you do not have any ranks in this channel.");
		}
	}	
};

Commands.devoice = function(Common, from, to, message) {
	var data = message.match(/\S+/g);
	if (data[0].charAt(0) == '.') {
		Commands.d(Common, from, to, message);
	}
};

//REMOVE ALL RANKS AND GIVE VOICE

function removeallplusvoicenonick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length + 1;
		}
	} else {
		newplayers = 1;
	}
	if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	} else {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2" + from + " is now playing games! Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	}
	Common.bot.send('MODE', to, '-o', from);
	Common.bot.send('MODE', to, '-h', from);
	Common.bot.send('MODE', to, '+v', from);
};

function removeallplusvoicewnick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length + 1;
		}
	} else {
		newplayers = 1;
	}
	if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	} else {
		setTimeout(function() {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				Common.bot.say(to, "2Active user count: " + newplayers + "");
			} else if (channel.games !== 0) {
				Common.bot.say(to, "2" + nick[1] + " is now playing games! Active player count: " + newplayers + "");
			} else {
				Common.bot.say(to, "2Active member count: " + newplayers + "");
			}
		});
		}, 1000);
	}
	Common.bot.send('MODE', to, '-o', nick[1]);
	Common.bot.send('MODE', to, '-h', nick[1]);
	Common.bot.send('MODE', to, '+v', nick[1]);
};

Commands.v = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	if (Common.utils.msg(message)) {	 
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (everyoneLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
				if (voicesLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							Common.bot.say(to, "5" + nick[1] + ", you already have the voice rank in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							Common.bot.say(to, "5" + nick[1] + ", you already have the voice rank in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						Common.bot.say(to, "5" + nick[1] + " already has the voice rank in this channel.");
					}
				} else {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							removeallplusvoicewnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							removeallplusvoicewnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						removeallplusvoicewnick(Common, from, to, message);
					}
				}
			} else {
				Common.bot.say(to, "5" + nick[1] + " is not a user in this channel.");
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		}
		});
	} else {
		if (voicesLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			Common.bot.say(to, "5" + from + ", you already have the voice rank in this channel.");
		} else {
			removeallplusvoicenonick(Common, from, to, message);
		}
	}	
};

Commands.voice = function(Common, from, to, message) {
	var data = message.match(/\S+/g);
	if (data[0].charAt(0) == '.') {
		Commands.v(Common, from, to, message);
	}
};

//REMOVE ALL RANKS AND GIVE HALFOP

function removeallplushalfopnonick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (voicesLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length + 1;
		}
	} else {
		newplayers = 1;
	}
	if (voicesLc[to].indexOf(Common.utils.toLc(from)) > -1) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
					} else {
						newplayers = newplayers - 1;
					}
					Common.bot.say(to, "2Active player count: " + newplayers + "");
				}, 2000);
			} else {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
					} else {
						newplayers = newplayers - 1;
					}
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
						Common.bot.say(to, "2" + from + " is now playing games! Active player count: " + newplayers + "");
					} else {
						newplayers = newplayers - 1;
						Common.bot.say(to, "2Active player count: " + newplayers + "");
					}
				}, 2000);
			} else {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
					} else {
						newplayers = newplayers - 1;
					}
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	}
	Common.bot.send('MODE', to, '-o', from);
	Common.bot.send('MODE', to, '+h', from);
	Common.bot.send('MODE', to, '-v', from);
	setTimeout(function() {
		if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
		} else {
			Common.bot.say(to, "5Permission denied - " + from + ", you may not give yourself the half-operator rank in this channel.");
		}
	}, 2000);
};

function removeallplushalfopwnick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (voicesLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length + 1;
		}
	} else {
		newplayers = 1;
	}
	if (voicesLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					} else {
						newplayers = newplayers - 1;
					}
					Common.bot.say(to, "2Active player count: " + newplayers + "");
				}, 2000);
			} else {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					} else {
						newplayers = newplayers - 1;
					}
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
						Common.bot.say(to, "2" + nick[1] + " is now playing games! Active player count: " + newplayers + "");
					} else {
						newplayers = newplayers - 1;
						Common.bot.say(to, "2Active player count: " + newplayers + "");
					}
				}, 2000);
			} else {
				setTimeout(function() {
					if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					} else {
						newplayers = newplayers - 1;
					}
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	}
	Common.bot.send('MODE', to, '-o', nick[1]);
	Common.bot.send('MODE', to, '+h', nick[1]);
	Common.bot.send('MODE', to, '-v', nick[1]);
	setTimeout(function() {
		if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
		} else {
			Common.bot.say(to, "5Permission denied - " + nick[1] + " may not be given the half-operator rank in this channel.");
		}
	}, 2000);
};

Commands.h = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	if (Common.utils.msg(message)) {	 
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (everyoneLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
				if (halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							Common.bot.say(to, "5" + nick[1] + ", you already have the half-operator rank in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							Common.bot.say(to, "5" + nick[1] + ", you already have the half-operator rank in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						Common.bot.say(to, "5" + nick[1] + " already has the half-operator in this channel.");
					}
				} else {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							removeallplushalfopwnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							removeallplushalfopwnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						removeallplushalfopwnick(Common, from, to, message);
					}
				}
			} else {
				Common.bot.say(to, "5" + nick[1] + " is not a user in this channel.");
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		}
		});
	} else {
		if (halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			Common.bot.say(to, "5" + from + ", you already have the half-operator rank in this channel.");
		} else {
			removeallplushalfopnonick(Common, from, to, message);
		}
	}	
};

Commands.halfop = function(Common, from, to, message) {
	var data = message.match(/\S+/g);
	if (data[0].charAt(0) == '.') {
		Commands.h(Common, from, to, message);
	}
};

//REMOVE ALL RANKS AND GIVE OP

function removeallplusopnonick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (voicesLc[to].indexOf(Common.utils.toLc(from)) > -1 || halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length - 1;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		}
	} else {
		newplayers = 0;
	}
	if (voicesLc[to].indexOf(Common.utils.toLc(from)) > -1 || halfopsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					Common.bot.say(to, "2" + from + " is no longer playing games. Active player count: " + newplayers + "");
				}, 2000);
			} else {
				setTimeout(function() {
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					Common.bot.say(to, "2Active player count: " + newplayers + "");
				}, 2000);
			} else {
				setTimeout(function() {
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	}
	Common.bot.send('MODE', to, '+o', from);
	Common.bot.send('MODE', to, '-h', from);
	Common.bot.send('MODE', to, '-v', from);
	setTimeout(function() {
		if (opsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
		} else {
			Common.bot.say(to, "5Permission denied - " + from + ", you may not give yourself the operator rank in this channel.");
		}
	}, 2000);
};

function removeallplusopwnick(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var players = [];
	var newplayers = [];
	if (everyoneLc[to] != '' && to == "#cwexperts") {
		players = everyoneLc[to];
		newplayers = players.length;
	} else if (users[to] != '') {
		if (voicesLc[to].indexOf(Common.utils.toLc(nick[1])) > -1 || halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
			players = users[to].match(/\S+/g);
			newplayers = players.length - 1;
		} else {
			players = users[to].match(/\S+/g);
			newplayers = players.length;
		}
	} else {
		newplayers = 0;
	}
	if (voicesLc[to].indexOf(Common.utils.toLc(nick[1])) > -1 || halfopsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					Common.bot.say(to, "2" + nick[1] + " is no longer playing games. Active player count: " + newplayers + "");
				}, 2000);
			} else {
				setTimeout(function() {
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	} else {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
				console.log("Channel not found.");    
			}
			if (to == "#cwexperts") {
				setTimeout(function() {
					Common.bot.say(to, "2Active user count: " + newplayers + "");
				}, 2000);
			} else if (channel.games !== 0) {
				setTimeout(function() {
					Common.bot.say(to, "2Active player count: " + newplayers + "");
				}, 2000);
			} else {
				setTimeout(function() {
					Common.bot.say(to, "2Active member count: " + newplayers + "");
				}, 2000);
			}
		});
	}
	Common.bot.send('MODE', to, '+o', nick[1]);
	Common.bot.send('MODE', to, '-h', nick[1]);
	Common.bot.send('MODE', to, '-v', nick[1]);
	setTimeout(function() {
		if (opsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
		} else {
			Common.bot.say(to, "5Permission denied - " + nick[1] + " may not be given the operator rank in this channel.");
		}
	}, 2000);
};

Commands.o = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	if (Common.utils.msg(message)) {	 
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (everyoneLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
				if (opsLc[to].indexOf(Common.utils.toLc(nick[1])) > -1) {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							Common.bot.say(to, "5" + nick[1] + ", you already have the operator rank in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							Common.bot.say(to, "5" + nick[1] + ", you already have the operator rank in this channel.");
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						Common.bot.say(to, "5" + nick[1] + " already has the operator rank in this channel.");
					}
				} else {
					if (Common.utils.toLc(nick[1]) == "anna") {
						Common.bot.say(to, "5Permission denied - you may not change Anna's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "cwebot") {
						Common.bot.say(to, "5Permission denied - you may not change CWEBot's ranks in this channel.");
					} else if (Common.utils.toLc(nick[1]) == "abdel") {
						if (Common.utils.toLc(from) == "abdel") {
							removeallplusopwnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Abdel's ranks in this channel.");
						}
					} else if (Common.utils.toLc(nick[1]) == "dxnxex7") {
						if (Common.utils.toLc(from) == "dxnxex7") {
							removeallplusopwnick(Common, from, to, message);
						} else {
							Common.bot.say(to, "5Permission denied - you may not change Dxnxex7's ranks in this channel.");
						}
					} else {
						removeallplusopwnick(Common, from, to, message);
					}
				}
			} else {
				Common.bot.say(to, "5" + nick[1] + " is not a user in this channel.");
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the SwiftIRC ranks for a member.");
		}
		});
	} else {
		if (opsLc[to].indexOf(Common.utils.toLc(from)) > -1) {
			Common.bot.say(to, "5" + from + ", you already have the operator rank in this channel.");
		} else {
			removeallplusopnonick(Common, from, to, message);
		}
	}	
};

Commands.op = function(Common, from, to, message) {
	var data = message.match(/\S+/g);
	if (data[0].charAt(0) == '.') {
		Commands.o(Common, from, to, message);
	}
};

Commands.i = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to invite a user to this channel. 4DO NOT SEND INVALID INVITATIONS!");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		if (typeof nick[1] != 'undefined') {
				if (Common.utils.toLc(nick[1]) == 'rs') {
					Common.bot.say(to, "3Attempting to send an invitation for " + to + " to RuneScript...");
					Common.bot.send('INVITE', 'RUNESCRIPT', to);
				} else if (Common.utils.toLc(nick[1]) == 'cs') {
					Common.bot.say(to, "3Attempting to send an invitation for " + to + " to ChanStat...");
					Common.bot.send('INVITE', 'CHANSTAT', to);
				} else {
					Common.bot.say(to, "3Attempting to send an invitation for " + to + " to " + nick[1] + "...");
					Common.bot.send('INVITE', nick[1], to);
				}
		} else {
			Common.bot.say(to, "5You must specify a user to invite to this channel when using this command. 4DO NOT SEND INVALID INVITATIONS!");
		}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to invite a user to this channel. 4DO NOT SEND INVALID INVITATIONS!");
	}
	});
};
