function register(Common, from, to, message) {
	if (Common.utils.msg(message)) {
		Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !register to display the instructions for registering a SwiftIRC nickname, or use /join #cwexperts1 to join the #CwExperts games channel.");
	} else {
		Common.bot.say(to, "Hello " + from + ", we're glad you want to join #CwExperts! Once you're ready, follow the steps below and enter all information into SwiftIRC to register your nickname. Use !faq, !resources, !rules, or !guides for more information.");
		Common.bot.say(to, "1. Check that you meet our requirements and read our rules");
		Common.bot.say(to, "Go to: http://cwexperts.org/how-to-join/ and http://cwexperts.org/rules/");
		Common.bot.say(to, "2. Change your nickname to your main RSN or something similar");
		Common.bot.say(to, "Type: /nick NEW_NICKNAME");
		Common.bot.say(to, "3. Register your current nickname; choose a secure password and use an email with 2-step authentication");
		Common.bot.say(to, "4Microsoft is currently preventing all SwiftIRC emails from being received, so please use a different provider.");
		Common.bot.say(to, "Type: /ns register PASSWORD EMAIL");
		Common.bot.say(to, "4. You will receive an email with a confirmation code; enter this code");
		Common.bot.say(to, "Type: /ns confirm CODE");
		Common.bot.say(to, "5. You must now identify yourself whenever you connect to SwiftIRC; use the same password you used to register");
		Common.bot.say(to, "Type: /ns id PASSWORD");
		Common.bot.say(to, "6. Now that you're registered and identified, ask for an add to #CwExperts");
		Common.bot.say(to, "Type: !joinNow");
	}
};

Commands.register = function(Common, from, to, message) {
	if (to == '#cwexperts') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			register(Common, from, to, message);
		} else if (perms.status == 'Owner' || reregister[member] == 1) {
			register(Common, from, to, message);
		} else {
			Common.bot.say(to, "5This command may only be used by non-members and inactive SwiftIRC users to display the instructions for registering a SwiftIRC nickname.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel to display the instructions for registering a SwiftIRC nickname.");
	}
};

Commands.join = function(Common, from, to, message) {
	Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !register in the lobby channel to display the instructions for registering a SwiftIRC nickname, or use /join CHANNEL_HERE to join another SwiftIRC channel.");
};

function joinnow(Common, from, to, message) {
	var filtered_ops = Common.utils.removeByValue(ops[to], 'Abdel')
	var filtered_hops = Common.utils.removeByValue(halfops[to], 'Abdel')
	var hl_list = filtered_ops.join(' ') + ' ' + filtered_hops.join(' ')
	if (Common.utils.msg(message)) {
		Common.bot.say(to, "4Are you sure you want to do that, " + from + "? Use !joinNow to ask for an add to #CwExperts, or use /join #cwexperts1 to join the #CwExperts games channel.");
	} else {
		Common.bot.say(to, "" + from + " has registered their SwiftIRC nickname and is ready to join #CwExperts! Please wait patiently - a staff member will add you momentarily.");
		if (hl_list != ' ') {
			Common.bot.say(to, hl_list);
		}
	}
};

Commands.joinnow = function(Common, from, to, message) {
	if (to == '#cwexperts') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			joinnow(Common, from, to, message);
		} else if (perms.status == 'Owner' || reregister[member] == 1) {
			joinnow(Common, from, to, message);
		} else {
			Common.bot.say(to, "5This command may only be used by non-members and inactive SwiftIRC users to ask for an add to #CwExperts.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel to ask for an add to #CwExperts.");
	}
};

Commands.add = function(Common, from, to, message) {
	var access = message.match(/\S+/g);
	var accmsg = '';
	if (to == '#cwexperts') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to add a member to the #CwExperts SwiftIRC access list.");
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (Common.utils.msg(message)) {
				var name = Common.utils.toLc(access[1]);
				if (access[2] !== undefined) {
				var level = Common.utils.toLc(access[2]);
				Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						console.log(err);
						if (level == '3' || level == 'three') {
							if (level == 'three') {
								level = '3';
							}
							newaccess[name] = 1;
							Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', access[1], level);
      							Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', access[1], level);
    							Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', access[1], level);
							Common.bot.send('CS', 'ACCESS', '#key', 'ADD', access[1], level);
							Common.bot.say(to, "3" + access[1] + ", you have been added to the #CwExperts SwiftIRC access list at level 3. You're almost done, you just have to set up your profile now!");
							Common.bot.say(to, "1. Join the games channel - You should edit your IRC settings to auto perform these functions; learn more by reading our IRC guides found here: http://cwexperts.org/how-to-irc/");
							Common.bot.say(to, "Type: /join #cwexperts1");
							Common.bot.say(to, "2. Link the RSN of your main account and your level 90+ combat alt to your profile, and then you will be added to the CwExperts Friends Chat");
							Common.bot.say(to, "Type: !addMain MAIN_RSN_HERE");
							Common.bot.say(to, "Type: !addAlt ALT_RSN_HERE");
							Common.bot.say(to, "3. Link your Discord ID to your profile - You should ensure that you can receive direct messages if you wish to be sent an invite to the Discord server");
							Common.bot.say(to, "Type: !addDiscordID EXAMPLE_NAME # 0 0 0 0");
							Common.bot.say(to, "4. Link your recruiter to your profile - If no one recruited you, add the member who helped you the most to join");
							Common.bot.say(to, "Type: !addRecruiter IRC_NICKNAME_HERE");
							Common.bot.say(to, "5. Link your primary Castle Wars goal to your profile - Examples: task, thaler, halo, hybrid, trim, 500cape, 1kcape, 5kcape, ranks");
							Common.bot.say(to, "Type: !addGoal GOAL_HERE");
							Common.bot.say(to, "6. Join the Discord server - You must set your Discord nickname to your main RSN, and then ask for an add in the #cwexperts_lobby channel");
							Common.bot.say(to, "Go to: http://bit.ly/CWE-DISCORD");
							Common.bot.say(to, "7. Learn how to play games and familiarize yourself with all of the content found on our website: http://cwexperts.org/how-to-play");
							Common.bot.say(to, "Type: !guides or !basics");
						} else {
							Common.bot.say(to, "5" + "IRC Nickname '" + name + "' does not have a #CwExperts profile and therefore may not be added at an access level higher than 3 for official #CwExperts SwiftIRC channels. Use the format !add IRC_NICKNAME_HERE 3 to add a new member to the #CwExperts SwiftIRC access list at level 3.");
						}
					} else if (name == member) {
						Common.bot.say(to, "5Permission denied - " + member + ", you may not change your own member status or access level for official #CwExperts SwiftIRC channels.");
					} else if (user.status == 'Owner') {
						Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status or access level for official #CwExperts SwiftIRC channels of a member with Owner member status.");
					} else {
   						if (level == '5' || level == 'five') {
							if (perms.status == 'Owner') {
								if (memlist[member] != 5 || perms.key === undefined) {
									Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
								} else {
									if (level == 'five') {
										level = '5';
									}
									Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', access[1], level);
									Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', access[1], level);
		 							Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', access[1], level);
									Common.bot.send('CS', 'ACCESS', '#cwexperts.staff', 'ADD', access[1], level);
									Common.bot.send('CS', 'ACCESS', '#key', 'ADD', access[1], '3');
									accmsg = "3" + access[1] + ", you have been added to the #CwExperts SwiftIRC access list at level 5.";
									if (user.status != 'Admin') {
										Common.db.users.update({name: name}, {$set: {status: 'Admin'}}, {upsert: false}, function(err, updated) {
											accmsg += " Congratulations, your member status has been changed to: Admin";
											Common.bot.say(to, accmsg);
											Common.bot.say(to, "Just remember, Base_Tank is kick/ban on sight.");
										});
									} else {
										Common.bot.say(to, accmsg);
									}
/*									if (everyoneLc['#cwexperts'].indexOf(Common.utils.toLc(access[1])) > -1) {
										Common.bot.send('MODE', '#cwexperts', '+o', access[1]);
										Common.bot.send('MODE', '#cwexperts', '-h', access[1]);
										Common.bot.send('MODE', '#cwexperts', '-v', access[1]);
									} if (everyoneLc['#cwexperts1'].indexOf(Common.utils.toLc(access[1])) > -1) {
										Common.bot.send('MODE', '#cwexperts1', '+o', access[1]);
										Common.bot.send('MODE', '#cwexperts1', '-h', access[1]);
										Common.bot.send('MODE', '#cwexperts1', '-v', access[1]);
									} if (everyoneLc['#cwexperts2'].indexOf(Common.utils.toLc(access[1])) > -1) {
										Common.bot.send('MODE', '#cwexperts2', '+o', access[1]);
										Common.bot.send('MODE', '#cwexperts2', '-h', access[1]);
										Common.bot.send('MODE', '#cwexperts2', '-v', access[1]);
									} if (everyoneLc['#cwexperts.staff'].indexOf(Common.utils.toLc(access[1])) > -1) {
										Common.bot.send('MODE', '#cwexperts.staff', '+o', access[1]);
										Common.bot.send('MODE', '#cwexperts.staff', '-h', access[1]);
										Common.bot.send('MODE', '#cwexperts.staff', '-v', access[1]);
									}
*/								}
							} else {
								Common.bot.say(to, "5This command may only be used by members with Owner member status to add a member to the #CwExperts SwiftIRC access list at level 5.");
							}
						} else if (level == '4' || level == 'four') {
							if (perms.status == 'Admin' || perms.status == 'Owner') {
								if (memlist[member] != 5 || perms.key === undefined) {
									Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
								} else {
									if (level == 'four') {
										level = '4';
									}
									if (perms.status == 'Admin' && user.status == 'Admin') {
										Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status or access level for official #CwExperts SwiftIRC channels of a member with Admin or Owner member status.");
									} else {
										Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', access[1], level);
										Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', access[1], level);
										Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', access[1], level);
										Common.bot.send('CS', 'ACCESS', '#cwexperts.staff', 'ADD', access[1], level);
										Common.bot.send('CS', 'ACCESS', '#key', 'ADD', access[1], '3');
										accmsg = "3" + access[1] + ", you have been added to the #CwExperts SwiftIRC access list at level 4.";
										function accmsg1(Common, from, to, message) {
											Common.bot.say(to, "You must follow the steps below to ensure that you’re prepared to handle your new position:");
											Common.bot.say(to, "1. Review the ranks, permissions, and responsibilities applicable to all staff members");
											Common.bot.say(to, "Go to: http://cwexperts.org/management/");
											Common.bot.say(to, "2. Review the staff-only CWEBot commands, as well as other SwiftIRC commands restricted to half-operator+");
											Common.bot.say(to, "Go to: http://cwexperts.org/bot-commands/");
										}
										if (user.status != 'Staff') {
											if (user.status == 'Admin') {
												accmsg += " Unfortunately, your member status has been lowered to: Staff";
											} else {
												accmsg += " Congratulations, your member status has been changed to: Staff";
											}
											Common.db.users.update({name: name}, {$set: {status: 'Staff'}}, {upsert: false}, function(err, updated) {
												Common.bot.say(to, accmsg);
												accmsg1(Common, from, to, message);
											});
										} else {
											Common.bot.say(to, accmsg);
										}
/*										if (everyoneLc['#cwexperts'].indexOf(Common.utils.toLc(access[1])) > -1) {
											Common.bot.send('MODE', '#cwexperts', '-o', access[1]);
											Common.bot.send('MODE', '#cwexperts', '+h', access[1]);
											Common.bot.send('MODE', '#cwexperts', '-v', access[1]);
										} if (everyoneLc['#cwexperts1'].indexOf(Common.utils.toLc(access[1])) > -1) {
											Common.bot.send('MODE', '#cwexperts1', '-o', access[1]);
											Common.bot.send('MODE', '#cwexperts1', '+h', access[1]);
											Common.bot.send('MODE', '#cwexperts1', '-v', access[1]);
										} if (everyoneLc['#cwexperts2'].indexOf(Common.utils.toLc(access[1])) > -1) {
											Common.bot.send('MODE', '#cwexperts2', '-o', access[1]);
											Common.bot.send('MODE', '#cwexperts2', '+h', access[1]);
											Common.bot.send('MODE', '#cwexperts2', '-v', access[1]);
										} if (everyoneLc['#cwexperts.staff'].indexOf(Common.utils.toLc(access[1])) > -1) {
											Common.bot.send('MODE', '#cwexperts.staff', '-o', access[1]);
											Common.bot.send('MODE', '#cwexperts.staff', '+h', access[1]);
											Common.bot.send('MODE', '#cwexperts.staff', '-v', access[1]);
										}
*/									}
								}
							} else {
								Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to add a member to the #CwExperts SwiftIRC access list at level 4.");
							}
						} else if (level == '3' || level == 'three') {
							if (level == 'three') {
								level = '3';
							}
							if (perms.status == 'Admin' && user.status == 'Admin') {
								Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status or access level for official #CwExperts SwiftIRC channels of a member with Admin or Owner member status.");
							} else if (perms.status == 'Staff' && (user.status == 'Staff' || user.status == 'Admin')) {
								Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status or access level for official #CwExperts SwiftIRC channels of a member with Staff, Admin, or Owner member status.");
							} else {
								function acc3(Common, from, to, message) {
									Common.bot.send('CS', 'ACCESS', '#cwexperts', 'ADD', access[1], level);
      									Common.bot.send('CS', 'ACCESS', '#cwexperts1', 'ADD', access[1], level);
    									Common.bot.send('CS', 'ACCESS', '#cwexperts2', 'ADD', access[1], level);
									Common.bot.send('CS', 'ACCESS', '#key', 'ADD', access[1], '3');
								}
								accmsg = "3" + access[1] + ", you have been added to the #CwExperts SwiftIRC access list at level 3.";
								function accmsg2(Common, from, to, message) {
									Common.bot.say(to, "1. Join the games channel - You should edit your IRC settings to auto perform these functions; learn more by reading our IRC guides found here: http://cwexperts.org/how-to-irc/");
									Common.bot.say(to, "Type: /join #cwexperts1");
									Common.bot.say(to, "2. Link the RSN of your main account and your level 90+ combat alt to your profile, and then you will be added to the CwExperts Friends Chat");
									Common.bot.say(to, "Type: !addMain MAIN_RSN_HERE");
									Common.bot.say(to, "Type: !addAlt ALT_RSN_HERE");
									Common.bot.say(to, "3. Link your Discord ID to your profile - You should ensure that you can receive direct messages if you wish to be sent an invite to the Discord server");
									Common.bot.say(to, "Type: !addDiscordID EXAMPLE_NAME # 0 0 0 0");
									Common.bot.say(to, "4. Link your recruiter to your profile - If no one recruited you, add the member who helped you the most to join");
									Common.bot.say(to, "Type: !addRecruiter IRC_NICKNAME_HERE");
									Common.bot.say(to, "5. Link your primary Castle Wars goal to your profile - Examples: task, thaler, halo, hybrid, trim, 500cape, 1kcape, 5kcape, ranks");
									Common.bot.say(to, "Type: !addGoal GOAL_HERE");
									Common.bot.say(to, "6. Join the Discord server - You must set your Discord nickname to your main RSN, and then ask for an add in the #cwexperts_lobby channel");
									Common.bot.say(to, "Go to: http://bit.ly/CWE-DISCORD");
									Common.bot.say(to, "7. Learn how to play games and familiarize yourself with all of the content found on our website: http://cwexperts.org/how-to-play");
									Common.bot.say(to, "Type: !guides or !basics");		
								}
								if (user.status === undefined) {
									Common.db.users.update({name: name}, {$set: {status: 'Normal'}}, {upsert: false}, function(err, updated) {
										accmsg += " You're almost done, you just have to complete your profile now!";
										acc3(Common, from, to, message);
										Common.bot.say(to, accmsg);
										accmsg2(Common, from, to, message);
									});
								} else if (user.status != 'Normal') {
									if (user.status == 'Staff' || user.status == 'Admin') {
										if (memlist[member] != 5 || perms.key === undefined) {
											Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
										} else {
											Common.db.users.update({name: name}, {$set: {status: 'Normal'}}, {upsert: false}, function(err, updated) {
												accmsg += " Unfortunately, your member status has been lowered to: Normal";
												acc3(Common, from, to, message);
												Common.bot.say(to, accmsg);
											});
										}
									} else {
										Common.db.users.update({name: name}, {$set: {status: 'Normal'}}, {upsert: false}, function(err, updated) {
											accmsg += " Congratulations, your member status has been changed to: Normal";
											acc3(Common, from, to, message);
											Common.bot.say(to, accmsg);
										});
									}
								} else {
									acc3(Common, from, to, message);
									Common.bot.say(to, accmsg);
								}
/*								if (everyoneLc['#cwexperts'].indexOf(Common.utils.toLc(access[1])) > -1) {
									Common.bot.send('MODE', '#cwexperts', '-o', access[1]);
									Common.bot.send('MODE', '#cwexperts', '-h', access[1]);
									Common.bot.send('MODE', '#cwexperts', '+v', access[1]);
								} if (everyoneLc['#cwexperts1'].indexOf(Common.utils.toLc(access[1])) > -1) {
									Common.bot.send('MODE', '#cwexperts1', '-o', access[1]);
									Common.bot.send('MODE', '#cwexperts1', '-h', access[1]);
									Common.bot.send('MODE', '#cwexperts1', '+v', access[1]);
								} if (everyoneLc['#cwexperts2'].indexOf(Common.utils.toLc(access[1])) > -1) {
									Common.bot.send('MODE', '#cwexperts2', '-o', access[1]);
									Common.bot.send('MODE', '#cwexperts2', '-h', access[1]);
									Common.bot.send('MODE', '#cwexperts2', '+v', access[1]);
								}
								var kick_msg = "You were added at an access level lower than what is required for the official #CwExperts Staff SwiftIRC channel.";
								Common.bot.send("CS", "ACCESS", "#cwexperts.staff", "DEL", access[1]);
								Common.bot.send("CS", "KICK", "#cwexperts.staff", access[1], kick_msg);
*/							}
						} else {
							if (perms.status == 'Owner') {
								Common.bot.say(to, "5You must specify an authorized level to add a member to the #CwExperts SwiftIRC access list when using this command: 3, 4, or 5. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
							} else if (perms.status == 'Admin') {
								Common.bot.say(to, "5You must specify an authorized level to add a member to the #CwExperts SwiftIRC access list when using this command: 3 or 4. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
							} else {
								Common.bot.say(to, "5You must specify an authorized level to add a member to the #CwExperts SwiftIRC access list when using this command: 3. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
							}
						}
					}
				});
				} else {
					if (perms.status == 'Owner') {
						Common.bot.say(to, "5You must specify an authorized level to add a member to the #CwExperts SwiftIRC access list when using this command: 3, 4, or 5. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
					} else if (perms.status == 'Admin') {
						Common.bot.say(to, "5You must specify an authorized level to add a member to the #CwExperts SwiftIRC access list when using this command: 3 or 4. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
					} else {
						Common.bot.say(to, "5You must specify an authorized level to add a member to the #CwExperts SwiftIRC access list when using this command: 3. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
					}
				}
			} else {
				Common.bot.say(to, "5You must specify a member to add to the #CwExperts SwiftIRC access list when using this command. Use the format !add IRC_NICKNAME_HERE LEVEL_HERE.");
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to add a member to the #CwExperts SwiftIRC access list.");
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel to add a member to the #CwExperts SwiftIRC access list.");
	}
};

Commands.del = function(Common, from, to, message) {
	var access = message.match(/\S+/g);
	if (to == '#cwexperts') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Owner member status to delete a member from the #CwExperts SwiftIRC access list.");
	} else if (perms.status == 'Owner') {
		if (memlist[member] != 5 || perms.key === undefined) {
			Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			if (Common.utils.msg(message)) {
				var kick_msg = "You were deleted from the #CwExperts SwiftIRC access list.";
				Common.bot.send("CS", "ACCESS", "#cwexperts.staff", "DEL", access[1]);
				Common.bot.send("CS", "ACCESS", "#cwexperts", "DEL", access[1]);
				Common.bot.send("CS", "ACCESS", "#cwexperts1", "DEL", access[1]);
				Common.bot.send("CS", "ACCESS", "#cwexperts2", "DEL", access[1]);
				Common.bot.send("CS", "ACCESS", "#key", "DEL", access[1]);
				Common.bot.send("CS", "KICK", "#cwexperts.staff", access[1], kick_msg);
				Common.bot.send("CS", "KICK", "#cwexperts", access[1], kick_msg);
				Common.bot.send("CS", "KICK", "#cwexperts1", access[1], kick_msg);
				Common.bot.send("CS", "KICK", "#cwexperts2", access[1], kick_msg);
				Common.bot.send("CS", "KICK", "#key", access[1], kick_msg);
				Common.bot.say(to, "4" + from + " has deleted " + access[1] + " from the #CwExperts SwiftIRC access list. Cya hick!");
			} else {
				Common.bot.say(to, "5You must specify a member to delete from the #CwExperts SwiftIRC access list when using this command. Use the format !del IRC_NICKNAME_HERE.");
			}
		}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Owner member status to delete a member from the #CwExperts SwiftIRC access list.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel to delete a member from the #CwExperts SwiftIRC access list.");
	}
};

Commands.hl = function(Common, from, to, message) {
     Common.bot.say(to, "Hey " + from + " are your highlights working?");
};

Commands.web = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	if (typeof nick[1] != 'undefined') {
		Common.bot.say(to, "4Do you have any questions about #CwExperts, " + nick[1] + "? If so, please try to find an answer on our website here: http://cwexperts.org/. If you are unable to find an answer, explain in detail to a staff member what information you are trying to find and where you have already looked.");
	} else {
		Common.bot.say(to, "4If you have any questions about #CwExperts, please try to find an answer on our website here: http://cwexperts.org/. If you are unable to find an answer, explain in detail to a staff member what information you are trying to find and where you have already looked.");
	}
};

Commands.irc = function(Common, from, to, message) {
	var nick = message.match(/\S+/g);
	if (typeof nick[1] != 'undefined') {
		Common.bot.say(to, "3Would you like a free personalized CWEBot command, " + nick[1] + "? All #CwExperts members are entitled to one simple CWEBot command - contact a member with Owner members status and provide the message that you would like your command to say.");
	} else {
		Common.bot.say(to, "3All #CwExperts members are entitled to one simple CWEBot command - contact a member with Owner members status and provide the message that you would like your command to say.");
	}
};

Commands.faq = function(Common, from, to, message) {
     Common.bot.say(to, "#CwExperts frequently asked questions:");
     Common.bot.say(to, "FAQ > http://cwexperts.org/faq/");
};
		
Commands.spotlightlinks = function(Common, from, to, message) {
     Common.bot.say(to, "#CwExperts spotlight information:");
     Common.bot.say(to, "Website > http://cwexperts.org/spotlight/");
     Common.bot.say(to, "Outdated Thaler (Smfd Chippy) > https://gyazo.com/ccea7c049aa7207ea851e28c6f47e606");
     Common.bot.say(to, "Unofficial Calendar (BaseDaTard) > https://burritosoft.net/minigames/");
};

Commands.sllinks = function(Common, from, to, message) {
	Commands.spotlightlinks(Common, from, to, message);
};

Commands.support = function(Common, from, to, message) {
  Common.bot.say(to, "Support #CwExperts today!");
  Common.bot.say(to, "Donations > http://cwexperts.org/support-us/");
  Common.bot.say(to, "Partnerships > http://cwexperts.org/support-us/");
  Common.bot.say(to, "Official Events > http://cwexperts.org/events/");
};

Commands.resources = function(Common, from, to, message) {
  Common.bot.say(to, "#CwExperts resources:");
  Common.bot.say(to, "Website > http://cwexperts.org/ - Everything you need to know");
  Common.bot.say(to, "SwiftIRC > #cwexperts - Recruit new members, play games, and have fun here :)");
  Common.bot.say(to, "Discord > http://bit.ly/CWE-DISCORD - Talk to fellow members and check when games are active");
  Common.bot.say(to, "Twitter > http://bit.ly/CWE-TWITTER - Follow for updates and notifications for when games are active");
  Common.bot.say(to, "YouTube > http://bit.ly/CWE-YOUTUBE - Watch tutorials and share them with new members");
  Common.bot.say(to, "Email > superboosting.at.cwexperts@gmail.com - Send us your suggestions and concerns");
  Common.bot.say(to, "Advert > http://puu.sh/9zfPV.jpg - It’s a few years old but it’ll do");
};

Commands.rules = function(Common, from, to, message) {
  Common.bot.say(to, "#CwExperts rules:");
  Common.bot.say(to, "General > http://cwexperts.org/rules/");
  Common.bot.say(to, "Anti-Crash > http://cwexperts.org/how-to-anti-crash/");
  Common.bot.say(to, "Spotlight > http://cwexperts.org/spotlight/");
  Common.bot.say(to, "Privacy > http://cwexperts.org/privacy/");
  Common.bot.say(to, "Warning System > http://cwexperts.org/management/");
  Common.bot.say(to, "Retirement Policies > http://cwexperts.org/how-to-retire/");
};

Commands.guides = function(Common, from, to, message) {
  Common.bot.say(to, "#CwExperts guides:");
  Common.bot.say(to, "How To Join > http://cwexperts.org/how-to-join/");
  Common.bot.say(to, "How To Play > http://cwexperts.org/how-to-play/");
  Common.bot.say(to, "How To Anti-Crash > http://cwexperts.org/how-to-anti-crash/");
  Common.bot.say(to, "How To IRC > http://cwexperts.org/how-to-irc/");
  Common.bot.say(to, "Bot Commands > http://cwexperts.org/bot-commands/");
  Common.bot.say(to, "How to Retire > http://cwexperts.org/how-to-retire/");
};

Commands.basics = function(Common, from, to, message) {
  Common.bot.say(to, "How to play games with #CwExperts - The Absolute Basics");
  Common.bot.say(to, "1. Join the games channel #cwexperts1 on SwiftIRC and type !world to find the current world information");
  Common.bot.say(to, "2. Go to the current world - put your main in the Saradomin portal and your alt in the Zamorak portal");
  Common.bot.say(to, "3. Once you are in the portals, wait for the messages to join the game and join immediately");
  Common.bot.say(to, "4. As soon as your main joins the game on Saradomin, you must lobby to allow others to get in");
  Common.bot.say(to, "5. Remain lobbied on your main until the lead calls !unlobby - always unlobby at 10 minutes remaining");
  Common.bot.say(to, "6. The lead will then call !hopw to notify you when to hop your alt to the next world - the game must first tick (5+ accounts required on each team)");
  Common.bot.say(to, "7. Your alt must have joined the game on Zamorak before it hops worlds, otherwise it will not be placed in the Zamorak portal and instead outside in the Castle Wars lobby");
  Common.bot.say(to, "8. The new world will start 3 minutes after hopping your alt, and you must move your alt out of the Zamorak pen - type !pentoggle to be automatically notified of this");
  Common.bot.say(to, "9. Once the previous world ends, hop to the current world and put your main in the Saradomin portal");
  Common.bot.say(to, "Continue to follow steps 3-9 every game and you will be successfully playing games with #CwExperts!");
};

Commands.pick = function(Common, from, to, message) {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5This command may only be used by God.");
		}
	} else if (perms.status == 'Owner') {
		var channel = message.match(/\S+/g);
		if (typeof channel[1] != 'undefined' && typeof channel[2] != 'undefined' && typeof channel[3] != 'undefined') {
			if (channel[2] == channel[3] && typeof channel[4] == 'undefined' && to == '#cwexperts.staff') {
				Common.bot.say(to, "5The first part of the action must not match the name you are assigning to the action - this only applies when the action is only one part. Use the format !pick CHANNEL_HERE NAME_HERE ACTION HERE.");
			} else {
		if (Common.utils.toLc(channel[1]) == 'cwexperts' || Common.utils.toLc(channel[1]) == 'cwexperts1' || Common.utils.toLc(channel[1]) == 'cwexperts2' || Common.utils.toLc(channel[1]) == '#cwexperts' || Common.utils.toLc(channel[1]) == '#cwexperts1' || Common.utils.toLc(channel[1]) == '#cwexperts2' || 
		    (channel[1]) == '0' || (channel[1]) == '1' || (channel[1]) == '2') {
			var chanl = Common.utils.toLc(channel[1]);
			if (Common.utils.toLc(channel[1]) == 'cwexperts') {
				chanl = '#cwexperts';
			} if (Common.utils.toLc(channel[1]) == 'cwexperts1') {
				chanl = '#cwexperts1';
			} if (Common.utils.toLc(channel[1]) == 'cwexperts2') {
				chanl = '#cwexperts2';
			} if (channel[1] == '0') {
				chanl = '#cwexperts';
			} if (channel[1] == '1') {
				chanl = '#cwexperts1';
			} if (channel[1] == '2') {
				chanl = '#cwexperts2';
			}
			Common.bot.say(chanl, "4The gods have picked " + channel[2] + " to " + Common.utils.msg(Common.utils.msg(Common.utils.msg(message))) + "!");
		} else if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5This command may only be used to tease peasants in the lobby channel or the games channels. Use the format !pick CHANNEL_HERE NAME_HERE ACTION HERE.");
		}
			}
		} else if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5That's not how you tease the peasants! Use the format !pick CHANNEL_HERE NAME_HERE ACTION HERE.");
		}
				       
	} else if (to == '#cwexperts.staff') {
		Common.bot.say(to, "5This command may only be used by God.");
	}
	});
};

Commands.psa = function(Common, from, to, message) {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5This command may only be used by God.");
		}
	} else if (perms.status == 'Owner') {
		var channel = message.match(/\S+/g);
		if (typeof channel[1] != 'undefined' && typeof channel[2] != 'undefined') {
			if (channel[1] == channel[2] && typeof channel[3] == 'undefined' && to == '#cwexperts.staff') {
				Common.bot.say(to, "5The first part of the announcement must not match the channel you are sending the announcement to - this only applies when the announcement is only one part. Use the format !msg CHANNEL_HERE ANNOUNCEMENT HERE.");
			} else {
		if (Common.utils.toLc(channel[1]) == 'cwexperts' || Common.utils.toLc(channel[1]) == 'cwexperts1' || Common.utils.toLc(channel[1]) == 'cwexperts2' || Common.utils.toLc(channel[1]) == '#cwexperts' || Common.utils.toLc(channel[1]) == '#cwexperts1' || Common.utils.toLc(channel[1]) == '#cwexperts2' || 
		    (channel[1]) == '0' || (channel[1]) == '1' || (channel[1]) == '2') {
			var chanl = Common.utils.toLc(channel[1]);
			if (Common.utils.toLc(channel[1]) == 'cwexperts') {
				chanl = '#cwexperts';
			} if (Common.utils.toLc(channel[1]) == 'cwexperts1') {
				chanl = '#cwexperts1';
			} if (Common.utils.toLc(channel[1]) == 'cwexperts2') {
				chanl = '#cwexperts2';
			} if (channel[1] == '0') {
				chanl = '#cwexperts';
			} if (channel[1] == '1') {
				chanl = '#cwexperts1';
			} if (channel[1] == '2') {
				chanl = '#cwexperts2';
			}
			Common.bot.say(chanl, users[chanl]);
			Common.bot.say(chanl, "4Announcement from your Supreme Leader: " + Common.utils.msg(Common.utils.msg(message)));    
		} else if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5This command may only be used to make an announcement in the lobby channel or the games channels. Use the format !psa CHANNEL_HERE ANNOUNCEMENT HERE.");
		}
			}
		} else if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5That's not how you make an announcement! Use the format !psa CHANNEL_HERE ANNOUNCEMENT HERE.");
		}
				       
	} else if (to == '#cwexperts.staff') {
		Common.bot.say(to, "5This command may only be used by God.");
	}
	});
};

Commands.msg = function(Common, from, to, message) {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5This command may only be used by God.");
		}
	} else if (perms.status == 'Owner') {
		var channel = message.match(/\S+/g);
		if (typeof channel[1] != 'undefined' && typeof channel[2] != 'undefined') {
			if (channel[1] == channel[2] && typeof channel[3] == 'undefined' && to == '#cwexperts.staff') {
				Common.bot.say(to, "5The first part of the message must not match the channel you are sending the message to - this only applies when the message is only one part. Use the format !msg CHANNEL_HERE MESSAGE HERE.");
			} else {
		if (Common.utils.toLc(channel[1]) == 'cwexperts' || Common.utils.toLc(channel[1]) == 'cwexperts1' || Common.utils.toLc(channel[1]) == 'cwexperts2' || Common.utils.toLc(channel[1]) == '#cwexperts' || Common.utils.toLc(channel[1]) == '#cwexperts1' || Common.utils.toLc(channel[1]) == '#cwexperts2' || 
		    (channel[1]) == '0' || (channel[1]) == '1' || (channel[1]) == '2') {
			var chanl = Common.utils.toLc(channel[1]);
			if (Common.utils.toLc(channel[1]) == 'cwexperts') {
				chanl = '#cwexperts';
			} if (Common.utils.toLc(channel[1]) == 'cwexperts1') {
				chanl = '#cwexperts1';
			} if (Common.utils.toLc(channel[1]) == 'cwexperts2') {
				chanl = '#cwexperts2';
			} if (channel[1] == '0') {
				chanl = '#cwexperts';
			} if (channel[1] == '1') {
				chanl = '#cwexperts1';
			} if (channel[1] == '2') {
				chanl = '#cwexperts2';
			}
			Common.bot.say(chanl, Common.utils.msg(Common.utils.msg(message)));    
		} else if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5This command may only be used to send a message to the lobby channel or the games channels. Use the format !msg CHANNEL_HERE MESSAGE HERE.");
		}
			}
		} else if (to == '#cwexperts.staff') {
			Common.bot.say(to, "5That's not how you send a message! Use the format !msg CHANNEL_HERE MESSAGE HERE.");
		}
				       
	} else if (to == '#cwexperts.staff') {
		Common.bot.say(to, "5This command may only be used by God.");
	}
	});
};

Commands.criterror = function(Common, from, to, message) {
	Common.bot.say(to, "4When a critical error occurs, CWEBot may be prevented from fully functioning as intended, and a notification will be sent to all official #CwExperts SwiftIRC channels. " +
		"If you have reason to believe that your actions may have lead to a critical error, please contact a member with Owner member status and provide as much context as you can. Some critical errors can not be avoided.");
	Common.bot.notice(from, "4When a critical error occurs, CWEBot may be prevented from fully functioning as intended, and a notification will be sent to all official #CwExperts SwiftIRC channels. " +
		"If you have reason to believe that your actions may have lead to a critical error, please contact a member with Owner member status and provide as much context as you can. Some critical errors can not be avoided.");
};

Commands.criticalerror = function(Common, from, to, message) {
	Commands.criterror(Common, from, to, message);
};

Commands.ce = function(Common, from, to, message) {
	Commands.criterror(Common, from, to, message);
};

Commands.connectionlost = function(Common, from, to, message) {
	Common.bot.say(to, "4When CWEBot disconnects, all temporary data is lost, including game reminders and unlocked profile variables. The disconnects are most likely either due to lag from the hosting provider, or a manual restart for maintenance to CWEBot. We apologize for any inconvenience this may cause.");
	Common.bot.notice(from, "4When CWEBot disconnects, all temporary data is lost, including game reminders and unlocked profile variables. The disconnects are most likely either due to lag from the hosting provider, or a manual restart for maintenance to CWEBot. We apologize for any inconvenience this may cause.");
};

Commands.cl = function(Common, from, to, message) {
	Commands.connectionlost(Common, from, to, message);
};

Commands.afk = function(Common, from, to, message) {
  var data = message.match(/\S+/g);
  var time = ((data[1] % 1 === 0) ? data[1] : 4);
  Common.utils.goingAfk(Common, to, time, from, 'afk');
	if (data[1] == 1) {
		Common.bot.say(to, "4" + from + ", you will be highlighted in " + time + " minute.");
	} else {
		Common.bot.say(to, "4" + from + ", you will be highlighted in " + time + " minutes.");
	}
};

Commands.cache = function(Common, from, to, message) {
  var data = message.match(/\S+/g);
  var hours = Common.utils.nextCache(new Date()) / (1E3 * 60 * 60);
  var minutes = Common.utils.nextCache(new Date()) / (1E3 * 60);
  hours = Math.floor(hours % 60);
  minutes = Math.floor(minutes % 60);
  message = 'Next Cache: 10'+hours+'hr '+minutes+'mins';
  if ((hours == 0 && minutes == 0) || (hours == 2 && minutes >= 50)) {
    message = '3Guthixian Cache is open! 1| '+message;
  }
  message = '*** [ 10GUTHIXIAN CACHE 1]: '+message;

  if (data[0].charAt(0) == '.') {
    Common.bot.notice(from, message);
  } else {
    Common.bot.say(to, message);
  }
};

Commands.uptime = function(Common, from, to, message) {
  Common.bot.say(to, "CWEBot has been connected since: " + uptime);
};
