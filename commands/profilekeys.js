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
						Common.bot.say(to, "2" + name + ", a unique profile key has been sent to your private messages.");
						Common.bot.notice(from, "2YOUR PROFILE KEY: " + key);
						Common.bot.notice(from, "2You will not be able to view your profile key again - please save your profile key somewhere you won't forget, and do not share your profile key with anyone. Your profile key is required to edit your and other member's profiles. You may change your profile key at a later date.");
					}
				});
			} else {
				Common.bot.say(to, "5" + name + ", your profile key has already been set - you may not view your profile key again.");
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
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	} else if (to == '#cwexperts.key') {
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
/*				if (name == 'dxnxex7') {
					userkey1 = dxnxex7['#cwexperts.key'];
					userkey2 = function(Common, from, to, message) {
						dxnxex7['#cwexperts.key']++;
					}
					userkey3 = function(Common, from, to, message) {
						dxnxex7['#cwexperts.key'] = 0;
					}
				}
					if (userkey1 === undefined || userkey1 === 0 || userkey1 === 5) {
						userkey3(Common, from, to, message);
						userkey2(Common, from, to, message);
						tempkey['#cwexperts.key'] = 0;
						Common.bot.say(to, "2[1/5]: " + name + ", your request to edit your profile key has been recognised. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
					} else if (userkey1 === 1) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								userkey3(Common, from, to, message);
								tempkey['#cwexperts.key'] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (pk == user.key) {
								userkey2(Common, from, to, message);
								tempkey['#cwexperts.key'] = 0;
								Common.bot.say(to, "2[2/5]: " + name + ", your profile key was accepted. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							} else {
								Common.bot.say(to, "4[1/5]: " + name + ", your profile key was rejected. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "5[1/5]: " + name + ", you must enter your current profile key to edit your profile key. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					} else if (dxnxex7['#cwexperts.key'] === 2) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								dxnxex7['#cwexperts.key'] = 0;
								tempkey['#cwexperts.key'] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else {
								dxnxex7['#cwexperts.key'] = 3;
								tempkey['#cwexperts.key'] = pk;
								Common.bot.say(to, "2[3/5]: " + name + ", enter your new profile key again to confirm your new profile key. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "5[2/5]: " + name + ", you must enter a new profile key to edit your profile key. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					} else if (dxnxex7['#cwexperts.key'] === 3) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								dxnxex7['#cwexperts.key'] = 0;
								tempkey['#cwexperts.key'] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (tempkey['#cwexperts.key'] == pk) {
								dxnxex7['#cwexperts.key'] = 4;
								Common.bot.say(to, "2[4/5]: " + name + ", are you sure you want to edit your profile key to: " + pk + "? Use !editProfileKey YES to advance your request, or use !editProfileKey NO to abandon your request.");
							} else {
								Common.bot.say(to, "4[3/5]: " + name + ", your profile key was rejected. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "5[3/5]: " + name + ", you must enter your new profile key again to edit your profile key. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					} else if (dxnxex7['#cwexperts.key'] === 4) {
						if (prof[1] !== undefined) {
							if (conf == 'no') {
								dxnxex7['#cwexperts.key'] = 0;
								tempkey['#cwexperts.key'] = 0;
								Common.bot.say(to, "4" + name + ", your request to edit your profile key has been abandoned.");
							} else if (conf == 'yes') {
								Common.bot.say(to, "3[5/5]: " + name + ", your profile key has been successfully edited.");
								var newkey = tempkey['#cwexperts.key'];
								Common.db.users.update({name: name}, {$set: {key: newkey}}, {upsert: false}, function(err, updated) {
									if (err || !updated) {
										console.log('Error', err);
									} else {
										dxnxex7['#cwexperts.key'] = 0;
										tempkey['#cwexperts.key'] = 0;
									}
								});
							} else {
								Common.bot.say(to, "2[4/5]: " + name + ", are you sure you want to edit your profile key to: " + tempkey['#cwexperts.key'] + "? Use !editProfileKey YES to advance your request, or use !editProfileKey NO to abandon your request.");
							}
						} else {
							Common.bot.say(to, "2[4/5]: " + name + ", are you sure you want to edit your profile key to: " + tempkey['#cwexperts.key'] + "? Use !editProfileKey YES to advance your request, or use !editProfileKey NO to abandon your request.");
						}
					}
*/
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
								Common.bot.say(to, "4[1/5]: " + name + ", your profile key was rejected. Use !editProfileKey CURRENT_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
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
								Common.bot.say(to, "4[3/5]: " + name + ", your profile key was rejected. Use !editProfileKey NEW_PROFILE_KEY to advance your request, or use !editProfileKey NO to abandon your request.");
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
								Common.bot.say(to, "3[5/5]: " + name + ", your profile key has been successfully edited.");
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
*/				} else {
					Common.bot.say(to, "5" + name + ", your profile key has not been set. Use !profileKey to set your profile key.");
				}
			}
		});
	} else {
		Common.bot.say(to, "5" + name + ", if you wish to edit your profile key, please ask a member with Owner member status for an invitation to join the #cwexperts.key channel, and then use !editProfileKey for further instructions.");
	}
};
					
Commands.epk = function(Common, from, to, message) {
	Commands.editprofilekey(Common, from, to, message);
};
