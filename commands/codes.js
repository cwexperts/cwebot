Commands.activepromocodes = function(Common, from, to, message) {
	if (to == '#cwexperts') {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	} else {
		Common.bot.say(to, "6Active promotional codes:13 nov2018");
	}
};

Commands.apc = function(Common, from, to, message) {
	Commands.activepromocodes(Common, from, to, message);
};

Commands.cc = function(Common, from, to, message) {
	Commands.claimcode(Common, from, to, message);
};

Commands.claimcode = function(Common, from, to, message) {
	if (to == '#cwexperts') {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	} else {
	if (Common.utils.msg(message)) {
		name = Common.utils.toDb(from);
		var code = message.match(/\S+/g);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "Main RSN " + name + " not found. Use !addAlt ALT_RSN_HERE to link your main RSN with the RSN of your level 90+ combat alt.");
			} else if (user.claimCodeTest == code[1] || user.oct2018 == code[1] || user.nov2018 == code[1] || user.nov1st2018sl == code[1]) {
				Common.bot.say(to, "5" + from + ", you have already claimed this code: " + code[1] + ".");
			} else if (code[1] == 'oct2018') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Thu Nov 01 2018 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'nov1st2018sl') {
				Common.bot.say(to, "5Sorry " + from + ", this code expired on Sun Nov 04 2018 00:00:00 UTC: " + code[1] + ".");
			} else if (code[1] == 'nov2018') {
//				Common.db.users.find({nov2018: code[1]}, function(err, users) {
//					var codes = 0;
//					users.forEach(function(nov2018) {
//						codes++;
//					});
//					if (codes == 1) {
//						Common.bot.say(to, "5Sorry " + from + ", this code has been claimed the maximum number of times: " + code[1] + ".");
//					} else {
						Common.db.users.update({name: name}, {$set: {nov2018: code[1]}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "3" + from + ", you have successfully claimed this code: " + code[1] + ". You have unlocked the November 2018 command: tba");
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
				Common.bot.say(to, "working");
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
				Common.bot.say(to, "working");
			} else {
				Common.bot.say(to, "5This command may be unlocked by claiming the promotion code for November 2018.");
			}
		}
	});
};
