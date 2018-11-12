Commands.profilekey = function(Common, from, to, message) {
	if (to == '#cwexperts') {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	} else {
		name = Common.utils.toDb(from);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "Main RSN " + name + " not found. Use !addAlt ALT_RSN_HERE to link your main RSN with the RSN of your level 90+ combat alt.");
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
	if (to == '#cwexperts') {
		Common.bot.say(to, "5This command may only be used in the games channels and the profile key channel to display member-only information.");
	} else if (to == '#key') {
		var prof = message.match(/\S+/g);
		if (prof[1] !== undefined) {
			var pk = prof[1];
			var conf = Common.utils.toLc(prof[1]);
		}
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "Main RSN " + name + " not found. Use !addAlt ALT_RSN_HERE to link your main RSN with the RSN of your level 90+ combat alt.");
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
							} else if (conf == 'yes') {
								Common.bot.say(to, "4[2/5]: " + name + ", your profile key was rejected. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
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
								Common.bot.say(to, "4[3/5]: " + name + ", your profile key was incorrect. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
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
								Common.bot.say(to, "3[5/5]: " + name + ", your profile key has been successfully edited - please save your profile key somewhere you won't forget, and then leave this channel.");
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
	} else {
		Common.bot.say(to, "5This command may only be used in the profile key channel to edit your profile key. Use /join #key to join the #CwExperts profile key channel, and then use !editProfileKey for further instructions.");
	}
};
					
Commands.epk = function(Common, from, to, message) {
	Commands.editprofilekey(Common, from, to, message);
};

Commands.confirmprofilekey = function(Common, from, to, message) {
	if (to == '#cwexperts') {
		Common.bot.say(to, "5This command may only be used in the games channels and the profile key channel to display member-only information.");
	} else if (to == '#key') {
		var name = Common.utils.toDb(from);
		var prof = message.match(/\S+/g);
		if (prof[1] !== undefined) {
			var pk = prof[1];
			var conf = Common.utils.toLc(prof[1]);
		}
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "Main RSN " + name + " not found. Use !addAlt ALT_RSN_HERE to link your main RSN with the RSN of your level 90+ combat alt.");
			} else if (user.key !== undefined) {
				if (prof[1] !== undefined) {
					if (memlist[name] === 5) {
						Common.bot.say(to, "5" + name + ", your profile is already unlocked! Use !lockProfile to lock your profile.");
					} else if (memlist[name] === 1 || memlist[name] === 2 || memlist[name] === 3 || memlist[name] === 4) {
						if (conf == 'no') {
							memlist[name] = 0;
							Common.bot.say(to, "2" + name + ", your request to edit your profile key has been abandoned - use !confirmProfileKey CURRENT_PROFILE_KEY to unlock your profile.");
						} else {
							Common.bot.say(to, "5" + name + ", you were in the process of editing your profile key - use !confirmProfileKey NO to unlock your profile, or use !editProfileKey to edit your profile key.");
						}
					} else if (memlist[name] === undefined || memlist[name] === 0) {
						if (pk == user.key) {
							Common.bot.say(to, "3" + name + ", your profile has been unlocked. Use !lockProfile to lock your profile.");
						} else {
							Common.bot.say(to, "4" + name + ", your profile key was incorrect. Use !confirmProfileKey CURRENT_PROFILE_KEY to unlock your profile, or use !editProfileKey to edit your profile key.");
						}
					}
				} else if (memlist[name] === 5) {
					Common.bot.say(to, "5" + name + ", your profile is already unlocked! Use !lockProfile to lock your profile.");
				} else if (memlist[name] === 1 || memlist[name] === 2 || memlist[name] === 3 || memlist[name] === 4) {
					Common.bot.say(to, "5" + name + ", you were in the process of editing your profile key - use !confirmProfileKey NO to unlock your profile, or use !editProfileKey to edit your profile key.");
				} else {
					Common.bot.say(to, "5" + name + ", you must enter your current profile key to unlock your profile. Use !confirmProfileKey CURRENT_PROFILE_KEY to unlock your profile, or use !editProfileKey to edit your profile key.");
				}
			} else {
				Common.bot.say(to, "5" + name + ", your profile key has not been set. Use !profileKey to set your profile key.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the profile key channel to unlock your profile. Use /join #key to join the #CwExperts profile key channel, and then use !confirmProfileKey for further instructions.");
	}
};
					
Commands.cpk = function(Common, from, to, message) {
	Commands.confirmprofilekey(Common, from, to, message);
};
