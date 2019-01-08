Commands.activepromocodes = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.bot.say(to, "6Active promotional codes:13 dec28th2018sl, jan2019");
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.apc = function(Common, from, to, message) {
	Commands.activepromocodes(Common, from, to, message);
};

Commands.cc = function(Common, from, to, message) {
	Commands.claimcode(Common, from, to, message);
};

Commands.claimcode = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	if (Common.utils.msg(message)) {
		name = Common.utils.toDb(from);
		var code = message.match(/\S+/g);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "Main RSN " + name + " not found. Use !addAlt ALT_RSN_HERE to link your main RSN with the RSN of your level 90+ combat alt.");
			} else if (user.claimCodeTest == code[1] || user.oct2018 == code[1] || user.nov2018 == code[1] || user.nov1st2018sl == code[1] || user.dec2018 == code[1] || user.dec1st2018sl == code[1] || user.dec28th2018sl == code[1] || user.jan2019 == code[1]) {
				Common.bot.say(to, "5" + from + ", you have already claimed this code: " + code[1] + ".");
			} else if (code[1] == 'oct2018') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Thu Nov 01 2018 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'nov1st2018sl') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Sun Nov 04 2018 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'nov2018') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Sat Dec 01 2018 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'dec1st2018sl') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Tue Dec 04 2018 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'dec2018') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Tue Jan 01 2019 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'jan2019') {
//				Common.db.users.find({jan2019: code[1]}, function(err, users) {
//					var codes = 0;
//					users.forEach(function(jan2019) {
//						codes++;
//					});
//					if (codes == 1) {
//						Common.bot.say(to, "5Sorry " + from + ", this code has been claimed the maximum number of times: " + code[1] + ".");
//					} else {
						Common.db.users.update({name: name}, {$set: {jan2019: code[1]}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "3" + from + ", you have successfully claimed this code: " + code[1] + ". You have unlocked the January 2019 command: tba");
							}
						});
//					}
//				});
			} else if (code[1] == 'dec28th2018sl') {
//				Common.db.users.find({dec28th2018sl: code[1]}, function(err, users) {
//					var codes = 0;
//					users.forEach(function(dec28th2018sl) {
//						codes++;
//					});
//					if (codes == 1) {
//						Common.bot.say(to, "5Sorry " + from + ", this code has been claimed the maximum number of times: " + code[1] + ".");
//					} else {
						Common.db.users.update({name: name}, {$set: {dec28th2018sl: code[1]}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "3" + from + ", you have successfully claimed this code: " + code[1] + ". You have been marked as participating in this Castle Wars spotlight: Fri Dec 28th-Mon Dec 31st 2018 00:00 GT");
							}
						});
//					}
//				});
			} else {
				Common.bot.say(to, "5This is not a valid code: " + code[1] + ". Use the format !claimCode CODE_HERE to claim a code - codes are case-sensitive.");
			}
		});
	} else {
		Common.bot.say(to, "5You must enter a promotional code when using this command. Use the format !claimCode CODE_HERE to claim a code - codes are case-sensitive.");
	}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.oct2018 = function(Common, from, to, message) {
	name = Common.utils.toDb(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for October 2018.");
		} else {
			if (user.oct2018 == 'oct2018') {
				Common.bot.say(to, "working!!");
			} else {
				Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for October 2018.");
			}
		}
	});
};

Commands.nov2018 = function(Common, from, to, message) {
	name = Common.utils.toDb(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for November 2018.");
		} else {
			if (user.nov2018 == 'nov2018') {
				Common.bot.say(to, "working!!");
			} else {
				Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for November 2018.");
			}
		}
	});
};

Commands.dec2018 = function(Common, from, to, message) {
	name = Common.utils.toDb(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for December 2018.");
		} else {
			if (user.dec2018 == 'dec2018') {
				Common.bot.say(to, "working!!");
			} else {
				Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for December 2018.");
			}
		}
	});
};

Commands.jan2019 = function(Common, from, to, message) {
	name = Common.utils.toDb(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for January 2019.");
		} else {
			if (user.jan2019 == 'jan2019') {
				Common.bot.say(to, "working!!");
			} else {
				Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for January 2019.");
			}
		}
	});
};
