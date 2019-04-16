Commands.profilekey = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff' || to == '#key') {
		var name = Common.utils.toDb(from);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.key === undefined) {
				var key = Math.random().toString(36).substring(2, 17) + Math.random().toString(36).substring(2, 17);
				Common.db.users.update({name: name}, {$set: {key: key}}, {upsert: false}, function(err, updated) {
					if (err || !updated) {
						console.log('Error', err);
					} else {
						Common.bot.say(to, "2" + name + ", a unique profile key has been sent to your private messages. Use !editProfileKey to edit your profile key.");
						Common.bot.notice(from, "2YOUR PROFILE KEY: " + key);
						Common.bot.notice(from, "2You will not be able to view your profile key again - please save your profile key somewhere you won't forget, and do not share your profile key with anyone. Your profile key is required to edit your and other member's profiles. You may edit your profile key at a later date.");
					}
				});
			} else {
				Common.bot.say(to, "5" + name + ", your profile key has already been set - you may not view your profile key again. Use !editProfileKey to edit your profile key.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels and the profile key channel to display member-only information.");
	}
};
					
Commands.pk = function(Common, from, to, message) {
	Commands.profilekey(Common, from, to, message);
};

Commands.editprofilekey = function(Common, from, to, message) {
	var name = Common.utils.toDb(from);
	var userkey1 = '';
	var userkey2 = '';
	var userkey3 = '';
	if (to == '#key') {
		var prof = message.match(/\S+/g);
		if (prof[1] !== undefined) {
			var pk = prof[1];
			var conf = Common.utils.toLc(prof[1]);
		}
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else {
				if (user.key !== undefined) {
					if (memlist[name] === undefined || memlist[name] === 0 || memlist[name] === 5) {
						memlist[name] = 1;
						tempkey[name] = 0;
						Common.bot.say(to, "2[1/5]: " + name + ", your request to edit your profile key has been recognised. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
					} else if (memlist[name] === 1) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								memlist[name] = 0;
								tempkey[name] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (pk == user.key) {
								memlist[name] = 2;
								tempkey[name] = 0;
								Common.bot.say(to, "2[2/5]: " + name + ", your profile key was accepted. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							} else {
								Common.bot.say(to, "4[1/5]: " + name + ", your profile key was incorrect. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "5[1/5]: " + name + ", you must enter your current profile key to edit your profile key. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					} else if (memlist[name] === 2) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								memlist[name] = 0;
								tempkey[name] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (pk.length < 10) {
								Common.bot.say(to, "4[2/5]: " + name + ", your new profile key was rejected - it must contain at least 10 characters. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							} else {
								memlist[name] = 3;
								tempkey[name] = pk;
								Common.bot.say(to, "2[3/5]: " + name + ", enter your new profile key again to confirm your new profile key. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "5[2/5]: " + name + ", you must enter a new profile key to edit your profile key. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					} else if (memlist[name] === 3) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								memlist[name] = 0;
								tempkey[name] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (tempkey[name] == pk) {
								memlist[name] = 4;
								Common.bot.say(to, "2[4/5]: " + name + ", are you sure you want to edit your profile key to: " + pk + "? Use !editProfileKey YES to advance your request, or use !editProfileKey NO to abandon your request.");
							} else {
								Common.bot.say(to, "4[3/5]: " + name + ", your new profile key was incorrect. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "5[3/5]: " + name + ", you must enter your new profile key again to edit your profile key. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					} else if (memlist[name] === 4) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								memlist[name] = 0;
								tempkey[name] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (conf == 'yes') {
								if (name == 'abdel' || name == 'dxnxex7' || name == 'hanna') {
									Common.bot.say(to, "3[5/5]: " + name + ", your profile key has been successfully edited - please save your profile key somewhere you won't forget.");
								} else {
									Common.bot.say(to, "3[5/5]: " + name + ", your profile key has been successfully edited - please save your profile key somewhere you won't forget, and then leave this channel.");
								}
								var newkey = tempkey[name];
								Common.db.users.update({name: name}, {$set: {key: newkey}}, {upsert: false}, function(err, updated) {
									if (err || !updated) {
										console.log('Error', err);
									} else {
										memlist[name] = 0;
										tempkey[name] = 0;
									}
								});
							} else {
								Common.bot.say(to, "2[4/5]: " + name + ", are you sure you want to edit your profile key to: " + tempkey['#cwexperts.key'] + "? Use !editProfileKey YES to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "2[4/5]: " + name + ", are you sure you want to edit your profile key to: " + tempkey['#cwexperts.key'] + "? Use !editProfileKey YES to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					}
				} else {
					Common.bot.say(to, "5" + name + ", your profile key has not been set. Use !profileKey to set your profile key.");
				}
			}
		});
	} else if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.bot.say(to, "5This command may only be used in the profile key channel to edit your profile key. Use /join #key to join the #CwExperts profile key channel, and then use !editProfileKey for further instructions.");
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels and the profile key channel to display member-only information.");
	}
};
					
Commands.epk = function(Common, from, to, message) {
	Commands.editprofilekey(Common, from, to, message);
};

Commands.unlockprofile = function(Common, from, to, message) {
	if (totalshutdown == 'true') {
		if (to == '#key') {
			var name = Common.utils.toDb(from);
			var prof = message.match(/\S+/g);
			if (prof[1] !== undefined) {
				var pk = prof[1];
				var conf = Common.utils.toLc(prof[1]);
			}
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					console.log(err);
					Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
				} else if ((user.status == 'Admin' || user.status == 'Owner') && user.key !== undefined) {
					if (prof[1] !== undefined) {
						if (memlist[name] === 5) {
							Common.bot.say(to, "5" + name + ", your profile is already unlocked! Use !lockProfile to lock your profile.");
						} else if (memlist[name] === undefined || memlist[name] === 0) {
							if (pk == user.key) {
								memlist[name] = 5;
								Common.utils.unlockProfileTimer(Common, to, 'up', 0, 60, 24, name);
								if (user.status == 'Owner') {
									Common.bot.say(to, "3" + name + ", your profile has been temporarily unlocked. Use !lockProfile to lock your profile.");
								} else {
									Common.bot.say(to, "3" + name + ", your profile has been temporarily unlocked - please leave this channel. Use !lockProfile to lock your profile when you are done playing games.");
								}
							} else {
								Common.bot.say(to, "4" + name + ", your profile key was incorrect. Use !unlockProfile CURRENT_PROFILE_KEY to unlock your profile.");
							}
						}
					} else if (memlist[name] === 5) {
						Common.bot.say(to, "5" + name + ", your profile is already unlocked! Use !lockProfile to lock your profile.");
					} else {
						Common.bot.say(to, "5" + name + ", you must enter your profile key to unlock your profile. Use !unlockProfile CURRENT_PROFILE_KEY to unlock your profile.");
					}
				} else {
					Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
				}
			});
		} else {
			Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
		}
	} else {
	if (to == '#key') {
		var name = Common.utils.toDb(from);
		var prof = message.match(/\S+/g);
		if (prof[1] !== undefined) {
			var pk = prof[1];
			var conf = Common.utils.toLc(prof[1]);
		}
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.key !== undefined) {
				if (prof[1] !== undefined) {
					if (memlist[name] === 5) {
						Common.bot.say(to, "5" + name + ", your profile is already unlocked! Use !lockProfile to lock your profile.");
					} else if (memlist[name] === 1 || memlist[name] === 2 || memlist[name] === 3 || memlist[name] === 4) {
						if (conf == 'no') {
							memlist[name] = 0;
							Common.bot.say(to, "2" + name + ", your request to edit your profile key has been abandoned - use !unlockProfile CURRENT_PROFILE_KEY to unlock your profile.");
						} else {
							Common.bot.say(to, "5" + name + ", you were in the process of editing your profile key - use !unlockProfile NO to unlock your profile, or use !editProfileKey to edit your profile key.");
						}
					} else if (memlist[name] === undefined || memlist[name] === 0) {
						if (pk == user.key) {
							memlist[name] = 5;
							Common.utils.unlockProfileTimer(Common, to, 'up', 0, 60, 24, name);
							if (user.status == 'Owner') {
								Common.bot.say(to, "3" + name + ", your profile has been temporarily unlocked. Use !lockProfile to lock your profile.");
							} else {
								Common.bot.say(to, "3" + name + ", your profile has been temporarily unlocked - please leave this channel. Use !lockProfile to lock your profile when you are done playing games.");
							}
						} else {
							Common.bot.say(to, "4" + name + ", your profile key was incorrect. Use !unlockProfile CURRENT_PROFILE_KEY to unlock your profile.");
						}
					}
				} else if (memlist[name] === 5) {
					Common.bot.say(to, "5" + name + ", your profile is already unlocked! Use !lockProfile to lock your profile.");
				} else if (memlist[name] === 1 || memlist[name] === 2 || memlist[name] === 3 || memlist[name] === 4) {
					Common.bot.say(to, "5" + name + ", you were in the process of editing your profile key - use !unlockProfile NO to unlock your profile, or use !editProfileKey to edit your profile key.");
				} else {
					Common.bot.say(to, "5" + name + ", you must enter your profile key to unlock your profile. Use !unlockProfile CURRENT_PROFILE_KEY to unlock your profile.");
				}
			} else {
				Common.bot.say(to, "5" + name + ", your profile key has not been set. Use !profileKey to set your profile key.");
			}
		});
	} else if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.bot.say(to, "5This command may only be used in the profile key channel to unlock your profile. Use /join #key to join the #CwExperts profile key channel, and then use !unlockProfile for further instructions.");
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels and the profile key channel to display member-only information.");
	}
	}
};

Commands.unlockp = function(Common, from, to, message) {
	Commands.unlockprofile(Common, from, to, message);
};

Commands.up = function(Common, from, to, message) {
	Commands.unlockprofile(Common, from, to, message);
};

Commands.lockprofile = function(Common, from, to, message) {
	if (totalshutdown == 'true') {
		if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff' || to == '#key') {
			var name = Common.utils.toDb(from);
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					console.log(err);
					Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
				} else if (user.status == 'Admin' || user.status == 'Owner') {
					if (memlist[name] === 5) {
						memlist[name] = 0;
						upsecs[name] = 0;
						upmins[name] = 0;
						uphrs[name] = 0;
						Common.bot.say(to, "4" + name + ", your profile has been locked. Use !unlockProfile to unlock your profile.");
					} else {
						Common.bot.say(to, "5" + name + ", your profile is already locked! Use !unlockProfile to unlock your profile.");
					}
				} else {
					Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
				}
			});
		} else {
			Common.bot.notice(from, "Sorry " + from + ", CWEBot is currently offline.");
		}
	} else {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff' || to == '#key') {
		var name = Common.utils.toDb(from);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.key !== undefined) {
				if (memlist[name] === 5) {
					memlist[name] = 0;
					upsecs[name] = 0;
					upmins[name] = 0;
					uphrs[name] = 0;
					Common.bot.say(to, "4" + name + ", your profile has been locked. Use !unlockProfile to unlock your profile.");
				} else {
					Common.bot.say(to, "5" + name + ", your profile is already locked! Use !unlockProfile to unlock your profile.");
				}		
			} else {
				Common.bot.say(to, "5" + name + ", your profile key has not been set. Use !profileKey to set your profile key.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels and the profile key channel to display member-only information.");
	}
	}
};
					
Commands.lockp = function(Common, from, to, message) {
	Commands.lockprofile(Common, from, to, message);
};

Commands.lp = function(Common, from, to, message) {
	Commands.lockprofile(Common, from, to, message);
};

Commands.remindprofile = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toDb(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to force start the 'complete profile' reminder for a new member.");
			} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
				if (memlist[member] != 5 || perms.key === undefined) {
					Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else {
					if (Common.utils.msg(message)) {
						var name = message.match(/\S+/g);
						name = Common.utils.toLc(name[1]);
						Common.db.users.findOne({name: name}, function(err, user) {
							if (err || !user) {
								console.log(err);
								Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
							} else if (user.key === undefined || user.main === undefined || user.main === 0 || user.alt === undefined || user.alt === 0 || user.discord === undefined || user.discord == 'unknown' || user.recruiter === undefined || user.recruiter === 0 || user.goal === undefined || user.goal === 0 || user.joinDate === undefined || user.joinDate == 'unknown') {
								if (justadded[name] == 1
									if (everyoneLc['#cwexperts1'].indexOf(name) > -1 || everyoneLc['#cwexperts2'].indexOf(name) > -1) {
										var rp = "2" + member + " has force started the 'complete profile' reminder for " + name + "."
										justadded[name] = 0;
										Common.utils.completeProfileTimer(Common, to, 'complete', 60, 5, name);
										if (everyoneLc['#cwexperts1'].indexOf(name) > -1) {
											Common.bot.say('#cwexperts1', rp);
										}
										if (everyoneLc['#cwexperts2'].indexOf(name) > -1) {
											Common.bot.say('#cwexperts2', rp);
										}
										if (to == '#cwexperts.staff') {
											Common.bot.say(to, rp);
										}
									} else {
										justadded[name] = 0;
										Common.bot.say(to, "5" + member + ", you may not force start the 'complete profile' reminder for " + name + " because they are not present in a games channel, however their immunity has been removed and it will now start automatically when appropriate.");
									}
								} else if (everyoneLc['#cwexperts1'].indexOf(name) > -1 || everyoneLc['#cwexperts2'].indexOf(name) > -1) {
									Common.bot.say(to, "5The 'complete profile' reminder for " + name + " is already active.");
								} else {
									Common.bot.say(to, "5" + member + ", you may not force start the 'complete profile' reminder for " + name + " because it will start automatically when appropriate.");
								}
							} else {
								Common.bot.say(to, "5" + name + "'s profile is already complete - the 'complete profile' reminder may not be force started for them.");
							}
						});
					} else {
						Common.bot.say(to, "5You must specify a member to force start the 'complete profile' reminder for when using this command. Use the format !remindProfile IRC_NICKNAME_HERE to force start the 'complete profile' reminder for a new member.");
					}
				}
			} else {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to force start the 'complete profile' reminder for a new member.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.remindp = function(Common, from, to, message) {
	Commands.remindprofile(Common, from, to, message);
};

Commands.rp = function(Common, from, to, message) {
	Commands.remindprofile(Common, from, to, message);
};
