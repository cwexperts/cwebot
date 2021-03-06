var name, alt;

Commands.setmemberstatus = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the member status of a member.");
		} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
			if (Common.utils.msg(message)) {
				var status = message.match(/\S+/g);
				var name = Common.utils.toLc(status[1]);
				if (status[2] !== undefined) {
					if (status[2] == '1' || status[2] == '2' || status[2] == '3' || status[2] == '4' || status[2] == '5' || status[2] == '6' || status[2] == '7' || status[2] == '8' ||Common.utils.toLc(status[2]) == 'angry' || Common.utils.toLc(status[2]) == 'normal' || Common.utils.toLc(status[2]) == 'vet' || Common.utils.toLc(status[2]) == 'veteran' || Common.utils.toLc(status[2]) == 'staff' || Common.utils.toLc(status[2]) == 'admin' || Common.utils.toLc(status[2]) == 'owner' || Common.utils.toLc(status[2]) == 'mediocre' || Common.utils.toLc(status[2]) == 'supreme') {
						var stat = Common.utils.toLc(status[2]);
						if (stat == '1' || stat == 'angry') {
							stat = 'Angry Gamer';
						} else if (stat == '2' || stat == 'normal') {
							stat = 'Normal';
						} else if (stat == '3' || stat == 'vet' || stat == 'veteran') {
							stat = 'Veteran';
						} else if (stat == '4' || stat == 'staff') {
							stat = 'Staff';
						} else if (stat == '5' || stat == 'admin') {
							stat = 'Admin';
						} else if (stat == '6' || stat == 'owner') {
							stat = 'Owner';
						} else if (stat == '7' || stat == 'mediocre') {
							stat = 'Mediocre Egirl';
						} else if (stat == '8' || stat == 'supreme') {
							stat = 'Supreme Egirl';
						}
						Common.db.users.findOne({name: name}, function(err, user) {
							if (err || !user) {
								console.log(err);
								Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
							} else {
								if (stat == 'Owner') {
									if (perms.status == 'Owner') {
										if (member == name) {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change your own member status.");
										} else if (user.status == 'Owner') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Owner member status.");
										} else if (user.status != stat) {
											Common.bot.say(to, "5Permission denied - the ability to assign Owner member status is currently disabled.");
//											Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
//												if (err || !updated) {
//													console.log('Error', err);
//												} else {
//													Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + ".");
//												}
//											});
										}
									} else {
										Common.bot.say(to, "5This command may only be used by members with Owner member status to change the member status of a member to Owner.");
									}
								} else if (stat == 'Admin') {
									if (perms.status == 'Owner') {
										if (member == name) {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change your own member status.");
										} else if (user.status == 'Owner') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Owner member status.");
										} else if (user.status != stat) {
											Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
												if (err || !updated) {
													console.log('Error', err);
												} else {
													Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + "");
												}
											});
										} else {
											Common.bot.say(to, "5The member status of " + name + " is already set to: " + stat + "");
										}
									} else {
										Common.bot.say(to, "5This command may only be used by members with Owner member status to change the member status of a member to Admin.");
									}
								} else if (stat == 'Staff') {
									if (perms.status == 'Admin' || perms.status == 'Owner') {
										if (member == name) {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change your own member status.");
										} else if (user.status == 'Owner') {
											if (perms.status == 'Owner') {
												Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Owner member status.");
											} else if (perms.status == 'Admin') {
												Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Admin or Owner member status.");
											}
										} else if (user.status == 'Admin') {
											if (perms.status == 'Owner') {
												Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
													if (err || !updated) {
														console.log('Error', err);
													} else {
														Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + "");
													}
												});
											} else if (perms.status == 'Admin') {
												Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Admin or Owner member status.");
											}
										} else if (user.status != stat) {
											Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
												if (err || !updated) {
													console.log('Error', err);
												} else {
													Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + "");
												}
											});
										} else {
											Common.bot.say(to, "5The member status of " + name + " is already set to: " + stat + "");
										}
									} else {
										Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to change the member status of a member to Staff.");
									}
								} else {
									if (member == name) {
										Common.bot.say(to, "5Permission denied - " + member + ", you may not change your own member status.");
									} else if (user.status == 'Owner') {
										if (perms.status == 'Owner') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Owner member status.");
										} else if (perms.status == 'Admin') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Admin or Owner member status.");
										} else if (perms.status == 'Staff') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Staff, Admin, or Owner member status.");
										}
									} else if (user.status == 'Admin') {
										if (perms.status == 'Owner') {
											Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
												if (err || !updated) {
													console.log('Error', err);
												} else {
													Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + "");
												}
											});
										} else if (perms.status == 'Admin') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Admin or Owner member status.");
										} else if (perms.status == 'Staff') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Staff, Admin, or Owner member status.");
										}
									} else if (user.status == 'Staff') {
										if (perms.status == 'Admin' || perms.status == 'Owner') {
											Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
												if (err || !updated) {
													console.log('Error', err);
												} else {
													Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + "");
												}
											});
										} else if (perms.status == 'Staff') {
											Common.bot.say(to, "5Permission denied - " + member + ", you may not change the member status of a member with Staff, Admin, or Owner member status.");
										}
									} else if (user.status != stat) {
										Common.db.users.update({name: name}, {$set: {status: stat}}, {upsert: false}, function(err, updated) {
											if (err || !updated) {
												console.log('Error', err);
											} else {
												Common.bot.say(to, "2" + member + " has changed the member status of " + name + " to: " + stat + "");
											}
										});
									} else {
										Common.bot.say(to, "5The member status of " + name + " is already set to: " + stat + "");
									}
								}
							}
						});
					} else if (perms.status == 'Owner') {
						Common.bot.say(to, '5You must specify a valid member status to change the member status of a member to when using this command: 1 (angry), 2 (normal), 3 (veteran), 4 (staff), 5 (admin), 6 (owner), 7 (mediocre), or 8 (supreme). Use the format !setMemberStatus MEMBER_HERE MEMBER_STATUS_HERE to change the member status of a member.');
					} else if (perms.status == 'Admin') {
						Common.bot.say(to, '5You must specify a valid member status to change the member status of a member to when using this command: 1 (angry), 2 (normal), 3 (veteran), 4 (staff), 7 (mediocre), or 8 (supreme). Use the format !setMemberStatus MEMBER_HERE MEMBER_STATUS_HERE to change the member status of a member.');
					} else {
						Common.bot.say(to, '5You must specify a valid member status to change the member status of a member to when using this command: 1 (angry), 2 (normal), 3 (veteran), 7 (mediocre), or 8 (supreme). Use the format !setMemberStatus MEMBER_HERE MEMBER_STATUS_HERE to change the member status of a member.');
					}
				} else if (perms.status == 'Owner') {
					Common.bot.say(to, '5You must specify a valid member status to change the member status of a member to when using this command: 1 (angry), 2 (normal), 3 (veteran), 4 (staff), 5 (admin), 6 (owner), 7 (mediocre), or 8 (supreme). Use the format !setMemberStatus MEMBER_HERE MEMBER_STATUS_HERE to change the member status of a member.');
				} else if (perms.status == 'Admin') {
					Common.bot.say(to, '5You must specify a valid member status to change the member status of a member to when using this command: 1 (angry), 2 (normal), 3 (veteran), 4 (staff), 7 (mediocre), or 8 (supreme). Use the format !setMemberStatus MEMBER_HERE MEMBER_STATUS_HERE to change the member status of a member.');
				} else {
					Common.bot.say(to, '5You must specify a valid member status to change the member status of a member to when using this command: 1 (angry), 2 (normal), 3 (veteran), 7 (mediocre), or 8 (supreme). Use the format !setMemberStatus MEMBER_HERE MEMBER_STATUS_HERE to change the member status of a member.');
				}
			} else {
				Common.bot.say(to, '5You must specify a member to change the member status of when using this command. Use the format !setMemberStatus IRC_NICKNAME_HERE MEMBER_STATUS_HERE to change the member status of a member.');
			}
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to change the member status of a member.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.sms = function(Common, from, to, message) {
	Commands.setmemberstatus(Common, from, to, message);
};

Commands.memberstatus = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var name = message.match(/\S+/g);
	name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
		} else if (user.status === undefined) {
			Common.db.users.update({name: name}, {$set: {status: 'Normal'}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
					console.log('Error', err);
				} else {
					if (user.retired === 1) {
						Common.bot.say(to, "2" + name + "'s member status is set to: Normal & Retired");
					} else if (user.retired === undefined) {
						Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "2" + name + "'s member status is set to: Normal");
							}
						});
					} else {
						Common.bot.say(to, "2" + name + "'s member status is set to: Normal");
					}
				}
			});
		} else {
			if (user.retired === 1) {
				Common.bot.say(to, "2" + name + "'s member status is set to: " + user.status + " & Retired");
			} else if (user.retired === undefined) {
				Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
					if (err || !updated) {
						console.log('Error', err);
					} else {
						Common.bot.say(to, "2" + name + "'s member status is set to: " + user.status + "");
					}
				});
			} else {
				Common.bot.say(to, "2" + name + "'s member status is set to: " + user.status + "");
			}
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.ms = function(Common, from, to, message) {
	Commands.memberstatus(Common, from, to, message);
};

Commands.retire = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	if (Common.utils.msg(message)) {
		var who = message.match(/\S+/g);
		who = Common.utils.toLc(who[1]);
		var member = Common.utils.toLc(from);
		if (who == member) {
			var name = Common.utils.toLc(from);
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else if (memlist[name] != 5 || user.key === undefined) {
					Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else {
					if (user.retired === undefined || user.retired === 0) {
						Common.db.users.update({name: name}, {$set: {retired: 1}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "2" + name + ", you have been given Retired member status.");
							}
						});
					} else if (user.retired === 1) {
						Common.bot.say(to, "5" + name + ", you are already retired! Use !unretire to remove your Retired member status.");
					}
				}
			});
		} else {
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to add Retired member status to a member.");
		} else if (perms.status == 'Admin' || perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
				var name = message.match(/\S+/g);
				name = Common.utils.toLc(name[1]);
				Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else if (user.retired === undefined || user.retired === 0) {
						Common.db.users.update({name: name}, {$set: {retired: 1}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "2" + name + " has been given Retired member status.");
							}
						});
					} else if (user.retired === 1) {
						Common.bot.say(to, "5" + name + " is already retired! Use !unretire MEMBER_HERE to remove Retired member status from a member.");
					}
				});
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to add Retired member status to a member.");
		}
		});
		}
	} else {
	var name = Common.utils.toLc(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
		} else if (memlist[name] != 5 || user.key === undefined) {
			Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			if (user.retired === undefined || user.retired === 0) {
				Common.db.users.update({name: name}, {$set: {retired: 1}}, {upsert: false}, function(err, updated) {
					if (err || !updated) {
						console.log('Error', err);
					} else {
						Common.bot.say(to, "2" + name + ", you have been given Retired member status.");
					}
				});
			} else if (user.retired === 1) {
				Common.bot.say(to, "5" + name + ", you are already retired! Use !unretire to remove your Retired member status.");
			}
		}
	});
	}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};


Commands.unretire = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	if (Common.utils.msg(message)) {
		var who = message.match(/\S+/g);
		who = Common.utils.toLc(who[1]);
		var member = Common.utils.toLc(from);
		if (who == member) {
			var name = Common.utils.toLc(from);
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else if (memlist[name] != 5 || user.key === undefined) {
					Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else {
					if (user.retired === 1) {
						Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "2" + name + ", your Retired member status has been removed.");
							}
						});
					} else if (user.retired === undefined || user.retired === 0) {
						if (user.retired === undefined) {
							Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
								if (err || !updated) {
									console.log('Error', err);
								}
							});
						}
						Common.bot.say(to, "5" + name + ", you are already unretired! Use !retire to give yourself Retired member status.");
					}
				}
			});
		} else {
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to remove Retired member status from a member.");
		} else if (perms.status == 'Admin' || perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
				var name = message.match(/\S+/g);
				name = Common.utils.toLc(name[1]);
				Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else if (user.retired === 1) {
						Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.bot.say(to, "2" + name + " has had their Retired member status removed.");
							}
						});
					} else if (user.retired === undefined || user.retired === 0) {
						if (user.retired === undefined) {
							Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
								if (err || !updated) {
									console.log('Error', err);
								}
							});
						}
						Common.bot.say(to, "5" + name + " is already unretired! Use !retire MEMBER_HERE to add Retired member status to a member.");
					}
				});
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to remove Retired member status from a member.");
		}
		});
		}
	} else {
	var name = Common.utils.toLc(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
		} else if (memlist[name] != 5 || user.key === undefined) {
			Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			if (user.retired === 1) {
				Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
					if (err || !updated) {
						console.log('Error', err);
					} else {
						Common.bot.say(to, "2" + name + ", your Retired member status has been removed.");
					}
				});
			} else if (user.retired === undefined || user.retired === 0) {
				if (user.retired === undefined) {
					Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
						if (err || !updated) {
							console.log('Error', err);
						}
					});
				}
				Common.bot.say(to, "5" + name + ", you are already unretired! Use !retire to give yourself Retired member status.");
			}
		}
	});
	}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.addmain = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
        name = Common.utils.toDb(from);
	main = message.match(/\S+/g);
	var timedate = new Date();
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			Common.db.blacklists.findOne({identity: name}, function(err, bluser) {
				if (err || !bluser || bluser.blacklistType === undefined || bluser.blacklistType === 0) {
					if (Common.utils.msg(message)) {
						var main_1 = Common.utils.toLc(main[1]);
						if (name == 'unknown' || name == 'undefined' || name == 'n/a' || main_1 == 'unknown' || main_1 == 'undefined' || main_1 == 'n/a') {
							Common.bot.say(to, '5You may not create your profile using the following invalid names: n/a, undefined, unknown. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.');
						} else {
							var key = Math.random().toString(36).substring(2, 17) + Math.random().toString(36).substring(2, 17);
							Common.db.users.save({name: name, main: main_1, main2: 0, main3: 0, main4: 0, main5: 0, alt: 0, alt2: 0, alt3: 0, alt4: 0, alt5: 0, alt6: 0, alt7: 0, alt8: 0, alt9: 0, alt10: 0, discord: 'unknown', status: 'Normal', retired: 0, recruiter: 0, recruits: 0, goal: 0, goal2: 0, warns: 0, pen: 1, idiot: 1, cache: 0, joinDate: timedate, leaveDate: 0, lastSeen: timedate, smemreports: 0, rmemreports: 0, sbugreports: 0, key: key, viewedKey: 0, blacklistType: 0, blacklistReason: 0, blacklistComment: 0, blacklistRetires: 0, blacklistedBy: 0, blacklistDate: 0}, function(err, saved) {
								if (err || !saved) {
									console.log('Error', err)
								} else {
									memlist[name] = 5;
									justadded[name] = 1;
									Common.bot.say(to, "2" + name + ", your profile has been created and a unique profile key has been sent to your private messages. Your main has been set to: " + main_1 + "");
									Common.bot.notice(from, "2YOUR PROFILE KEY: " + key);
									Common.bot.notice(from, "2You may not be able to view your profile key again - please save your profile key somewhere you won't forget, and do not share your profile key with anyone. Your profile key is required to edit your and other member's profiles. You may change your profile key at a later date.");
								}
							});
						}
					} else {
						Common.bot.say(to, "5You must specify the RSN of your main account when using this command. Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.");
					}
				} else {
					Common.bot.say(to, "5The identity '" + name + "' is currently on the non-member blacklist. If you believe this is a mistake, please contact a member with Admin or Owner member status for assistance, or if you believe you share an identity with this non-member, you should use /nick NEW_IRC_NICKNAME_HERE and /ns group IRC_NICKNAME PASSWORD to change and then group your IRC nickname.");
				}
			});
		} else if (user.main != undefined && user.main != 0) {
			if (user.key === undefined) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !profileKey to set up your profile key and secure your profile.");
			} else if (user.alt === undefined || user.alt === 0) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.");
			} else if (user.discord === undefined || user.discord == 'unknown') {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
			} else if (user.recruiter === undefined|| user.recruiter === 0) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addRecruiter IRC_NICKNAME_HERE to link your recruiter to your profile.");
			} else if (user.goal === undefined|| user.goal === 0) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addGoal GOAL_HERE to link your primary Castle Wars goal to your profile.");
			} else if (user.joinDate === undefined || user.joinDate == 'unknown') {
				Common.bot.say(to, "5" + name + ", you have already created a profile! You must inform a member with Owner member status of the date you joined to complete your profile.");
			} else {
				if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
					Common.bot.say(to, "5" + name + ", you have already created a profile! Use !editMain MAIN_RSN_HERE to link the new RSNs of your main accounts to your profile.");
				} else {
					Common.bot.say(to, "5" + name + ", you have already created a profile! Use !editMain MAIN_RSN_HERE in the games channels to link the new RSNs of your main accounts to your profile.");
				}
			}
		} else if (memlist[name] != 5 || user.key === undefined) {
			Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			if (Common.utils.msg(message)) {
				var main_1 = Common.utils.toLc(main[1]);
				if (main_1 == 'unknown' || main_1 == 'undefined' || main_1 == 'n/a') {
					Common.bot.say(to, '5You may not link the following invalid names to your profile: n/a, undefined, unknown. Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.');
				} else {
					Common.db.users.update({name: name}, {$set: {main: main_1}}, {upsert: false}, function(err, updated) {
						if (err || !updated) {
							console.log('Error', err)
						} else {
							Common.bot.say(to, "2" + name + ", your main has been set to: " + main_1 + "");
						}
					});
				}
			} else {
				Common.bot.say(to, "5You must specify the RSN of your main account when using this command. Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.");
			}
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.addalt = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
        name = Common.utils.toDb(from);
	alt = message.match(/\S+/g);
	var timedate = new Date();
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			Common.db.blacklists.findOne({identity: name}, function(err, bluser) {
				if (err || !bluser || bluser.blacklistType === undefined || bluser.blacklistType === 0) {
					if (Common.utils.msg(message)) {
						var alt_1 = Common.utils.toLc(alt[1]);
						if (name == 'unknown' || name == 'undefined' || name == 'n/a' || alt_1 == 'unknown' || alt_1 == 'undefined' || alt_1 == 'n/a') {
							Common.bot.say(to, '5You may not create your profile using the following invalid names: n/a, undefined, unknown. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.');
						} else {
							var key = Math.random().toString(36).substring(2, 17) + Math.random().toString(36).substring(2, 17);
							Common.db.users.save({name: name, main: 0, main2: 0, main3: 0, main4: 0, main5: 0, alt: alt_1, alt2: 0, alt3: 0, alt4: 0, alt5: 0, alt6: 0, alt7: 0, alt8: 0, alt9: 0, alt10: 0, discord: 'unknown', status: 'Normal', retired: 0, recruiter: 0, recruits: 0, goal: 0, goal2: 0, warns: 0, pen: 1, idiot: 1, cache: 0, joinDate: timedate, leaveDate: 0, lastSeen: timedate, smemreports: 0, rmemreports: 0, sbugreports: 0, key: key, viewedKey: 0, blacklistType: 0, blacklistReason: 0, blacklistComment: 0, blacklistRetires: 0, blacklistedBy: 0, blacklistDate: 0}, function(err, saved) {
								if (err || !saved) {
									console.log('Error', err)
								} else {
									memlist[name] = 5;
									justadded[name] = 1;
									Common.bot.say(to, "2" + name + ", your profile has been created and a unique profile key has been sent to your private messages. Your alt has been set to: " + alt_1 + "");
									Common.bot.notice(from, "2YOUR PROFILE KEY: " + key);
									Common.bot.notice(from, "2You may not be able to view your profile key again - please save your profile key somewhere you won't forget, and do not share your profile key with anyone. Your profile key is required to edit your and other member's profiles. You may change your profile key at a later date.");
								}
							});
						}
					} else {
						Common.bot.say(to, "5You must specify the RSN of your level 90+ combat alt when using this command. Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.");

					}
				} else {
					Common.bot.say(to, "5The identity '" + name + "' is currently on the non-member blacklist. If you believe this is a mistake, please contact a member with Admin or Owner member status for assistance, or if you believe you share an identity with this non-member, you should use /nick NEW_IRC_NICKNAME_HERE and /ns group IRC_NICKNAME PASSWORD to change and then group your IRC nickname.");
				}
			});
		} else if (user.alt != undefined && user.alt != 0) {
			if (user.key === undefined) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !profileKey to set up your profile key and secure your profile.");
			} else if (user.main === undefined || user.main === 0) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.");
			} else if (user.discord === undefined || user.discord == 'unknown') {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
			} else if (user.recruiter === undefined|| user.recruiter === 0) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addRecruiter IRC_NICKNAME_HERE to link your recruiter to your profile.");
			} else if (user.goal === undefined|| user.goal === 0) {
				Common.bot.say(to, "5" + name + ", you have already created a profile! Use !addGoal GOAL_HERE to link your primary Castle Wars goal to your profile.");
			} else if (user.joinDate === undefined || user.joinDate == 'unknown') {
				Common.bot.say(to, "5" + name + ", you have already created a profile! You must inform a member with Owner member status of the date you joined to complete your profile.");
			} else {
				if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
					Common.bot.say(to, "5" + name + ", you have already created a profile! Use !editAlt ALT_RSN_HERE to link the new RSNs of your level 90+ combat alts to your profile.");
				} else {
					Common.bot.say(to, "5" + name + ", you have already created a profile! Use !editAlt ALT_RSN_HERE in the games channels to link the new RSNs of your level 90+ combat alts to your profile.");
				}
			}
		} else if (memlist[name] != 5 || user.key === undefined) {
			Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			if (Common.utils.msg(message)) {
				var alt_1 = Common.utils.toLc(alt[1]);
				if (alt_1 == 'unknown' || alt_1 == 'undefined' || alt_1 == 'n/a') {
					Common.bot.say(to, '5You may not link the following invalid names to your profile: n/a, undefined, unknown. Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.');
				} else {
					Common.db.users.update({name: name}, {$set: {alt: alt_1}}, {upsert: false}, function(err, updated) {
						if (err || !updated) {
							console.log('Error', err)
						} else {
							Common.bot.say(to, "2" + name + ", your alt has been set to: " + alt_1 + "");
						}
					});
				}
			} else {
				Common.bot.say(to, "5You must specify the RSN of your level 90+ combat alt when using this command. Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.");
			}
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.editmain = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var name = Common.utils.toDb(from);
		var main = message.match(/\S+/g);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (memlist[name] != 5 || user.key === undefined) {
				Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else if (Common.utils.msg(message)) {
				var invalidname = '';
				var main_1 = Common.utils.toLc(main[1]);
				if (main_1 == 'unknown' || main_1 == 'undefined' || main_1 == 'n/a') {
					invalidname = invalidname + 1;
				}
				if (main[2] !== undefined) {
					var main_2 = Common.utils.toLc(main[2]);
					if (main_2 == 'unknown' || main_2 == 'undefined' || main_2 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (main[3] !== undefined) {
					var main_3 = Common.utils.toLc(main[3]);
					if (main_3 == 'unknown' || main_3 == 'undefined' || main_3 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (main[4] !== undefined) {
					var main_4 = Common.utils.toLc(main[4]);
					if (main_4 == 'unknown' || main_4 == 'undefined' || main_4 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (main[5] !== undefined) {
					var main_5 = Common.utils.toLc(main[5]);
					if (main_5 == 'unknown' || main_5 == 'undefined' || main_5 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (invalidname == '') {
					var main_msg = "2" + name + ", your mains have been changed to: " + main_1 + "";
					Common.db.users.update({name: name}, {$set: {main: main_1}}, {upsert: false}, function(err, updated) {
						if (err || !updated) {
							console.log('Error', err);
						}
					});
					if (main[2] !== undefined) {
						main_msg += ", " + main_2 + "";
						Common.db.users.update({name: name}, {$set: {main2: main_2}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {main2: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (main[3] !== undefined) {
						main_msg += ", " + main_3 + "";
						Common.db.users.update({name: name}, {$set: {main3: main_3}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {main3: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (main[4] !== undefined) {
						main_msg += ", " + main_4 + "";
						Common.db.users.update({name: name}, {$set: {main4: main_4}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {main4: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (main[5] !== undefined) {
						main_msg += ", " + main_5 + "";
						Common.db.users.update({name: name}, {$set: {main5: main_5}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {main5: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (main[6] !== undefined) {
						main_msg += " 5- You may only link a maximum of 5 main RSNs to your profile.";
					}
					Common.bot.say(to, main_msg);
				} else {
					Common.bot.say(to, '5You may not link the following invalid names to your profile: n/a, undefined, unknown. Use !editMain MAIN_RSN_HERE to link the new RSNs of your main accounts to your profile.');
				}
			} else {
				Common.bot.say(to, '5You must specify the RSNs of your main accounts (maximum of 5) when using this command. Use !editMain MAIN_RSN_HERE to link the new RSNs of your main accounts to your profile.');
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.editalt = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var name = Common.utils.toDb(from);
		var alt = message.match(/\S+/g);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (memlist[name] != 5 || user.key === undefined) {
				Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else if (Common.utils.msg(message)) {
				var invalidname = '';
				var alt_1 = Common.utils.toLc(alt[1]);
				if (alt_1 == 'unknown' || alt_1 == 'undefined' || alt_1 == 'n/a') {
					invalidname = invalidname + 1;
				}
				if (alt[2] !== undefined) {
					var alt_2 = Common.utils.toLc(alt[2]);
					if (alt_2 == 'unknown' || alt_2 == 'undefined' || alt_2 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[3] !== undefined) {
					var alt_3 = Common.utils.toLc(alt[3]);
					if (alt_3 == 'unknown' || alt_3 == 'undefined' || alt_3 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[4] !== undefined) {
					var alt_4 = Common.utils.toLc(alt[4]);
					if (alt_4 == 'unknown' || alt_4 == 'undefined' || alt_4 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[5] !== undefined) {
					var alt_5 = Common.utils.toLc(alt[5]);
					if (alt_5 == 'unknown' || alt_5 == 'undefined' || alt_5 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[6] !== undefined) {
					var alt_6 = Common.utils.toLc(alt[6]);
					if (alt_6 == 'unknown' || alt_6 == 'undefined' || alt_6 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[7] !== undefined) {
					var alt_7 = Common.utils.toLc(alt[7]);
					if (alt_7 == 'unknown' || alt_7 == 'undefined' || alt_7 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[8] !== undefined) {
					var alt_8 = Common.utils.toLc(alt[8]);
					if (alt_8 == 'unknown' || alt_8 == 'undefined' || alt_8 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[9] !== undefined) {
					var alt_9 = Common.utils.toLc(alt[9]);
					if (alt_9 == 'unknown' || alt_9 == 'undefined' || alt_9 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (alt[10] !== undefined) {
					var alt_10 = Common.utils.toLc(alt[10]);
					if (alt_10 == 'unknown' || alt_10 == 'undefined' || alt_10 == 'n/a') {
						invalidname = invalidname + 1;
					}
				}
				if (invalidname == '') {
					var alt_msg = "2" + name + ", your alts have been changed to: " + alt_1 + "";
					Common.db.users.update({name: name}, {$set: {alt: alt_1}}, {upsert: false}, function(err, updated) {
						if (err || !updated) {
							console.log('Error', err);
						}
					});
					if (alt[2] !== undefined) {
						alt_msg += ", " + alt_2 + "";
						Common.db.users.update({name: name}, {$set: {alt2: alt_2}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt2: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[3] !== undefined) {
						alt_msg += ", " + alt_3 + "";
						Common.db.users.update({name: name}, {$set: {alt3: alt_3}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt3: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[4] !== undefined) {
						alt_msg += ", " + alt_4 + "";
						Common.db.users.update({name: name}, {$set: {alt4: alt_4}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt4: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[5] !== undefined) {
						alt_msg += ", " + alt_5 + "";
						Common.db.users.update({name: name}, {$set: {alt5: alt_5}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt5: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[6] !== undefined) {
						alt_msg += ", " + alt_6 + "";
						Common.db.users.update({name: name}, {$set: {alt6: alt_6}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt6: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[7] !== undefined) {
						alt_msg += ", " + alt_7 + "";
						Common.db.users.update({name: name}, {$set: {alt7: alt_7}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt7: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[8] !== undefined) {
						alt_msg += ", " + alt_8 + "";
						Common.db.users.update({name: name}, {$set: {alt8: alt_8}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt8: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[9] !== undefined) {
						alt_msg += ", " + alt_9 + "";
						Common.db.users.update({name: name}, {$set: {alt9: alt_9}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt9: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[10] !== undefined) {
						alt_msg += ", " + alt_10 + "";
						Common.db.users.update({name: name}, {$set: {alt10: alt_10}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					} else {
						Common.db.users.update({name: name}, {$set: {alt10: 0}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
					}
					if (alt[11] !== undefined) {
						alt_msg += " 5- You may only link a maximum of 10 alt RSNs to your profile.";
					}
					Common.bot.say(to, alt_msg);
				} else {
					Common.bot.say(to, '5You may not link the following invalid names to your profile: n/a, undefined, unknown. Use !editAlt ALT_RSN_HERE to link the new RSNs of your level 90+ combat alts to your profile.');
				}
			} else {
				Common.bot.say(to, '5You must specify the RSNs of your level 90+ combat alts (maximum of 10) when using this command. Use !editAlt ALT_RSN_HERE to link the new RSNs of your level 90+ combat alts to your profile.');
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.adddiscordid = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var name = Common.utils.toDb(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
		} else if (user.discord != undefined && user.discord != 'unknown') {
			if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
				Common.bot.say(to, "5" + name + ", you have already linked a Discord ID! Use the format !editDiscordID EXAMPLE_NAME # 0 0 0 0 to link your new Discord ID to your profile.");
			} else {
				Common.bot.say(to, "5" + name + ", you have already linked a Discord ID! Use the format !editDiscordID EXAMPLE_NAME # 0 0 0 0 in the games channels to link your new Discord ID to your profile.");
			}
		} else if (memlist[name] != 5 || user.key === undefined) {
			Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			var disc = message.match(/\S+/g);
			var discname = '';
			if (disc[1] !== undefined && disc[2] !== undefined) {
				if (disc[2] == '#' && disc[3] !== undefined && disc[4] !== undefined && disc[5] !== undefined && disc[6] !== undefined) {
					if ((disc[3] == '0' || disc[3] == '1' || disc[3] == '2' || disc[3] == '3' || disc[3] == '4' || disc[3] == '5' || disc[3] == '6' || disc[3] == '7' || disc[3] == '8' || disc[3] == '9') && 
				 	    (disc[4] == '0' || disc[4] == '1' || disc[4] == '2' || disc[4] == '3' || disc[4] == '4' || disc[4] == '5' || disc[4] == '6' || disc[4] == '7' || disc[4] == '8' || disc[4] == '9') && 
				  	    (disc[5] == '0' || disc[5] == '1' || disc[5] == '2' || disc[5] == '3' || disc[5] == '4' || disc[5] == '5' || disc[5] == '6' || disc[5] == '7' || disc[5] == '8' || disc[5] == '9') && 
					    (disc[6] == '0' || disc[6] == '1' || disc[6] == '2' || disc[6] == '3' || disc[6] == '4' || disc[6] == '5' || disc[6] == '6' || disc[6] == '7' || disc[6] == '8' || disc[6] == '9')) {
						disc1 = Common.utils.toLc(disc[1]);
						disc1 = disc1.toString();
						disc2 = disc[2].toString();
						disc3 = disc[3].toString();
						disc4 = disc[4].toString();
						disc5 = disc[5].toString();
						disc6 = disc[6].toString();
						discname = disc1 + disc2 + disc3 + disc4 + disc5 + disc6;
						Common.db.users.update({name: name}, {$set: {discord: discname}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
						Common.bot.say(to, "2" + name + ", your Discord ID has been set to: " + discname + "");
					} else {
						Common.bot.say(to, '5You must specify a valid Discord ID when using this command. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.');
					}
				} else {
					Common.bot.say(to, '5You must specify a valid Discord ID when using this command. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.');
				}
			} else {
				Common.bot.say(to, '5You must specify a valid Discord ID when using this command. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.');
			}
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.adddid = function(Common, from, to, message) {
	Commands.adddiscordid(Common, from, to, message);
};

Commands.editdiscordid = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var name = Common.utils.toDb(from);
	Common.db.users.findOne({name: name}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
		} else if (memlist[name] != 5 || user.key === undefined) {
			Common.bot.say(to, "5" + name + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
			var disc = message.match(/\S+/g);
			var discname = '';
			if (disc[1] !== undefined && disc[2] !== undefined) {
				if (disc[2] == '#' && disc[3] !== undefined && disc[4] !== undefined && disc[5] !== undefined && disc[6] !== undefined) {
					if ((disc[3] == '0' || disc[3] == '1' || disc[3] == '2' || disc[3] == '3' || disc[3] == '4' || disc[3] == '5' || disc[3] == '6' || disc[3] == '7' || disc[3] == '8' || disc[3] == '9') && 
				 	    (disc[4] == '0' || disc[4] == '1' || disc[4] == '2' || disc[4] == '3' || disc[4] == '4' || disc[4] == '5' || disc[4] == '6' || disc[4] == '7' || disc[4] == '8' || disc[4] == '9') && 
				  	    (disc[5] == '0' || disc[5] == '1' || disc[5] == '2' || disc[5] == '3' || disc[5] == '4' || disc[5] == '5' || disc[5] == '6' || disc[5] == '7' || disc[5] == '8' || disc[5] == '9') && 
					    (disc[6] == '0' || disc[6] == '1' || disc[6] == '2' || disc[6] == '3' || disc[6] == '4' || disc[6] == '5' || disc[6] == '6' || disc[6] == '7' || disc[6] == '8' || disc[6] == '9')) {
						disc1 = Common.utils.toLc(disc[1]);
						disc1 = disc1.toString();
						disc2 = disc[2].toString();
						disc3 = disc[3].toString();
						disc4 = disc[4].toString();
						disc5 = disc[5].toString();
						disc6 = disc[6].toString();
						discname = disc1 + disc2 + disc3 + disc4 + disc5 + disc6;
						Common.db.users.update({name: name}, {$set: {discord: discname}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} 
						});
						Common.bot.say(to, "2" + name + ", your Discord ID has been changed to: " + discname + "");
					} else {
						Common.bot.say(to, '5You must specify a valid Discord ID when using this command. Use the format !editDiscordID EXAMPLE_NAME # 0 0 0 0 to link your new Discord ID to your profile.');
					}
				} else {
					Common.bot.say(to, '5You must specify a valid Discord ID when using this command. Use the format !editDiscordID EXAMPLE_NAME # 0 0 0 0 to link your new Discord ID to your profile.');
				}
			} else {
				Common.bot.say(to, '5You must specify a valid Discord ID when using this command. Use the format !editDiscordID EXAMPLE_NAME # 0 0 0 0 to link your new Discord ID to your profile.');
			}
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};
	
Commands.editdid = function(Common, from, to, message) {
	Commands.editdiscordid(Common, from, to, message);
};

function main(Common, from, to, message) {
	var alt = message.match(/\S+/g);
	var final_list = '';
			Common.db.users.find({alt: Common.utils.toDb(alt[1])}, function(err, users) {
			var main_list1 = '';
			var un_list1 = '';
			users.forEach(function(alt) {
				if (alt.main !== 0 && alt.main !== undefined) {
					main_list1 += '' + alt.main + ', ';
				} else {
					un_list1 += '1, ';
				}
				if (alt.main2 !== 0 && alt.main2 !== undefined) {
					main_list1 += '' + alt.main2 + ', ';
				}
				if (alt.main3 !== 0 && alt.main3 !== undefined) {
					main_list1 += '' + alt.main3 + ', ';
				}
				if (alt.main4 !== 0 && alt.main4 !== undefined) {
					main_list1 += '' + alt.main4 + ', ';
				}
				if (alt.main5 !== 0 && alt.main5 !== undefined) {
					main_list1 += '' + alt.main5 + ', ';
				}
			});
				Common.db.users.find({alt2: Common.utils.toDb(alt[1])}, function(err, users) {
				var main_list2 = '';
				var un_list2 = '';
				users.forEach(function(alt2) {
					if (alt2.main !== 0 && alt2.main !== undefined) {
						main_list2 += '' + alt2.main + ', ';
					} else {
						un_list2 += '1, ';
					}
					if (alt2.main2 !== 0 && alt2.main2 !== undefined) {
						main_list2 += '' + alt2.main2 + ', ';
					}
					if (alt2.main3 !== 0 && alt2.main3 !== undefined) {
						main_list2 += '' + alt2.main3 + ', ';
					}
					if (alt2.main4 !== 0 && alt2.main4 !== undefined) {
						main_list2 += '' + alt2.main4 + ', ';
					}
					if (alt2.main5 !== 0 && alt2.main5 !== undefined) {
						main_list2 += '' + alt2.main5 + ', ';
					}
				});
					Common.db.users.find({alt3: Common.utils.toDb(alt[1])}, function(err, users) {
					var main_list3 = '';
					var un_list3 = '';
					users.forEach(function(alt3) {
						if (alt3.main !== 0 && alt3.main !== undefined) {
							main_list3 += '' + alt3.main + ', ';
						} else {
							un_list3 += '1, ';
						}
						if (alt3.main2 !== 0 && alt3.main2 !== undefined) {
							main_list3 += '' + alt3.main2 + ', ';
						}
						if (alt3.main3 !== 0 && alt3.main3 !== undefined) {
							main_list3 += '' + alt3.main3 + ', ';
						}
						if (alt3.main4 !== 0 && alt3.main4 !== undefined) {
							main_list3 += '' + alt3.main4 + ', ';
						}
						if (alt3.main5 !== 0 && alt3.main5 !== undefined) {
							main_list3 += '' + alt3.main5 + ', ';
						}
					});
						Common.db.users.find({alt4: Common.utils.toDb(alt[1])}, function(err, users) {
						var main_list4 = '';
						var un_list4 = '';
						users.forEach(function(alt4) {
							if (alt4.main !== 0 && alt4.main !== undefined) {
								main_list4 += '' + alt4.main + ', ';
							} else {
								un_list4 += '1, ';
							}
							if (alt4.main2 !== 0 && alt4.main2 !== undefined) {
								main_list4 += '' + alt4.main2 + ', ';
							}
							if (alt4.main3 !== 0 && alt4.main3 !== undefined) {
								main_list4 += '' + alt4.main3 + ', ';
							}
							if (alt4.main4 !== 0 && alt4.main4 !== undefined) {
								main_list4 += '' + alt4.main4 + ', ';
							}
							if (alt4.main5 !== 0 && alt4.main5 !== undefined) {
								main_list4 += '' + alt4.main5 + ', ';
							}
						});
							Common.db.users.find({alt5: Common.utils.toDb(alt[1])}, function(err, users) {
							var main_list5 = '';
							var un_list5 = '';
							users.forEach(function(alt5) {
								if (alt5.main !== 0 && alt5.main !== undefined) {
									main_list5 += '' + alt5.main + ', ';
								} else {
									un_list5 += '1, ';
								}
								if (alt5.main2 !== 0 && alt5.main2 !== undefined) {
									main_list5 += '' + alt5.main2 + ', ';
								}
								if (alt5.main3 !== 0 && alt5.main3 !== undefined) {
									main_list5 += '' + alt5.main3 + ', ';
								}
								if (alt5.main4 !== 0 && alt5.main4 !== undefined) {
									main_list5 += '' + alt5.main4 + ', ';
								}
								if (alt5.main5 !== 0 && alt5.main5 !== undefined) {
									main_list5 += '' + alt5.main5 + ', ';
								}
							});
								Common.db.users.find({alt6: Common.utils.toDb(alt[1])}, function(err, users) {
								var main_list6 = '';
								var un_list6 = '';
								users.forEach(function(alt6) {
									if (alt6.main !== 0 && alt6.main !== undefined) {
										main_list6 += '' + alt6.main + ', ';
									} else {
										un_list6 += '1, ';
									}
									if (alt6.main2 !== 0 && alt6.main2 !== undefined) {
										main_list6 += '' + alt6.main2 + ', ';
									}
									if (alt6.main3 !== 0 && alt6.main3 !== undefined) {
										main_list6 += '' + alt6.main3 + ', ';
									}
									if (alt6.main4 !== 0 && alt6.main4 !== undefined) {
										main_list6 += '' + alt6.main4 + ', ';
									}
									if (alt6.main5 !== 0 && alt6.main5 !== undefined) {
										main_list6 += '' + alt6.main5 + ', ';
									}
								});
									Common.db.users.find({alt7: Common.utils.toDb(alt[1])}, function(err, users) {
									var main_list7 = '';
									var un_list7 = '';
									users.forEach(function(alt7) {
										if (alt7.main !== 0 && alt7.main !== undefined) {
											main_list7 += '' + alt7.main + ', ';
										} else {
											un_list7 += '1, ';
										}
										if (alt7.main2 !== 0 && alt7.main2 !== undefined) {
											main_list7 += '' + alt7.main2 + ', ';
										}
										if (alt7.main3 !== 0 && alt7.main3 !== undefined) {
											main_list7 += '' + alt7.main3 + ', ';
										}
										if (alt7.main4 !== 0 && alt7.main4 !== undefined) {
											main_list7 += '' + alt7.main4 + ', ';
										}
										if (alt7.main5 !== 0 && alt7.main5 !== undefined) {
											main_list7 += '' + alt7.main5 + ', ';
										}
									});
										Common.db.users.find({alt8: Common.utils.toDb(alt[1])}, function(err, users) {
										var main_list8 = '';
										var un_list8 = '';
										users.forEach(function(alt8) {
											if (alt8.main !== 0 && alt8.main !== undefined) {
												main_list8 += '' + alt8.main + ', ';
											} else {
												un_list8 += '1, ';
											}
											if (alt8.main2 !== 0 && alt8.main2 !== undefined) {
												main_list8 += '' + alt8.main2 + ', ';
											}
											if (alt8.main3 !== 0 && alt8.main3 !== undefined) {
												main_list8 += '' + alt8.main3 + ', ';
											}
											if (alt8.main4 !== 0 && alt8.main4 !== undefined) {
												main_list8 += '' + alt8.main4 + ', ';
											}
											if (alt8.main5 !== 0 && alt8.main5 !== undefined) {
												main_list8 += '' + alt8.main5 + ', ';
											}
										});
											Common.db.users.find({alt9: Common.utils.toDb(alt[1])}, function(err, users) {
											var main_list9 = '';
											var un_list9 = '';
											users.forEach(function(alt9) {
												if (alt9.main !== 0 && alt9.main !== undefined) {
													main_list9 += '' + alt9.main + ', ';
												} else {
													un_list9 += '1, ';
												}
												if (alt9.main2 !== 0 && alt9.main2 !== undefined) {
													main_list9 += '' + alt9.main2 + ', ';
												}
												if (alt9.main3 !== 0 && alt9.main3 !== undefined) {
													main_list9 += '' + alt9.main3 + ', ';
												}
												if (alt9.main4 !== 0 && alt9.main4 !== undefined) {
													main_list9 += '' + alt9.main4 + ', ';
												}
												if (alt9.main5 !== 0 && alt9.main5 !== undefined) {
													main_list9 += '' + alt9.main5 + ', ';
												}
											});
												Common.db.users.find({alt10: Common.utils.toDb(alt[1])}, function(err, users) {
												var main_list10 = '';
												var un_list10 = '';
												users.forEach(function(alt10) {
													if (alt10.main !== 0 && alt10.main !== undefined) {
														main_list10 += '' + alt10.main + ', ';
													} else {
														un_list10 += '1, ';
													}
													if (alt10.main2 !== 0 && alt10.main2 !== undefined) {
														main_list10 += '' + alt10.main2 + ', ';
													}
													if (alt10.main3 !== 0 && alt10.main3 !== undefined) {
														main_list10 += '' + alt10.main3 + ', ';
													}
													if (alt10.main4 !== 0 && alt10.main4 !== undefined) {
														main_list10 += '' + alt10.main4 + ', ';
													}
													if (alt10.main5 !== 0 && alt10.main5 !== undefined) {
														main_list10 += '' + alt10.main5 + ', ';
													}
												});
													Common.db.users.find({name: Common.utils.toDb(alt[1])}, function(err, users) {
													var irc_list = '';
													var un_list11 = '';
													users.forEach(function(name) {
														if (name.main !== 0 && name.main !== undefined) {
															irc_list += '' + name.main + ', ';
														} else {
															un_list11 += '1, ';
														}
														if (name.main2 !== 0 && name.main2 !== undefined) {
															irc_list += '' + name.main2 + ', ';
														}
														if (name.main3 !== 0 && name.main3 !== undefined) {
															irc_list += '' + name.main3 + ', ';
														}
														if (name.main4 !== 0 && name.main4 !== undefined) {
															irc_list += '' + name.main4 + ', ';
														}
														if (name.main5 !== 0 && name.main5 !== undefined) {
															irc_list += '' + name.main5 + ', ';
														}
													});
													var final_list = '';
													if (irc_list != '') {
														final_list += irc_list;
													}
													if (main_list1 != '') {
														final_list += main_list1;
													}
													if (main_list2 != '') {
														final_list += main_list2;
													}
													if (main_list3 != '') {
														final_list += main_list3;
													}
													if (main_list4 != '') {
														final_list += main_list4;
													}
													if (main_list5 != '') {
														final_list += main_list5;
													}
													if (main_list6 != '') {
														final_list += main_list6;
													}
													if (main_list7 != '') {
														final_list += main_list7;
													}
													if (main_list8 != '') {
														final_list += main_list8;
													}
													if (main_list9 != '') {
														final_list += main_list9;
													}
													if (main_list10 != '') {
														final_list += main_list10;
													}
													if (irc_list != '' || main_list1 != '' || main_list2 != '' || main_list3 != '' || main_list4 != '' || main_list5 != '' || main_list6 != '' || main_list7 != '' || main_list8 != '' || main_list9 != '' || main_list10 != '') {
														var nametype = '';
														var newfinal_list = final_list.substr(0, final_list.length-2);
														if (irc_list != '' && (main_list1 != '' || main_list2 != '' || main_list3 != '' || main_list4 != '' || main_list5 != '' || main_list6 != '' || main_list7 != '' || main_list8 != '' || main_list9 != '' || main_list10 != '')) {
															nametype = 'IRC Nickname/Alt RSN';
														} else if (irc_list != '') {
															nametype = 'IRC Nickname';
														} else {
															nametype = 'Alt RSN';
														}
														Common.bot.say(to, "2" + nametype + ": " + Common.utils.toLc(alt[1]) + ", Main RSNs: " + newfinal_list);
													} else if (un_list11 != '' || un_list1 != '' || un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '' || un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '') {
														var nametype = '';
														if (un_list11 != '' && (un_list1 != '' || un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '' || un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '')) {
															nametype = 'IRC Nickname/Alt RSN';
														} else if (un_list11 != '') {
															nametype = 'IRC Nickname';
														} else {
															nametype = 'Alt RSN';
														}
														Common.bot.say(to, "5" + nametype + " '" + Common.utils.toLc(alt[1]) + "' does not have a linked main RSN. Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.");
													} else {
														Common.bot.say(to, "5" + "IRC Nickname/Alt RSN '" + Common.utils.toLc(alt[1]) + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
													}
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
};

Commands.main = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		if (Common.utils.msg(message)) {
			var alt = message.match(/\S+/g);
			var final_list = '';
			if (alt[2] !== undefined) { 
				if (alt[2] == '#') {
					var disc = message.match(/\S+/g);
					var discname = '';
					if (disc[6] !== undefined) {
						if ((disc[3] == '0' || disc[3] == '1' || disc[3] == '2' || disc[3] == '3' || disc[3] == '4' || disc[3] == '5' || disc[3] == '6' || disc[3] == '7' || disc[3] == '8' || disc[3] == '9') && 
				   		  (disc[4] == '0' || disc[4] == '1' || disc[4] == '2' || disc[4] == '3' || disc[4] == '4' || disc[4] == '5' || disc[4] == '6' || disc[4] == '7' || disc[4] == '8' || disc[4] == '9') && 
				  		  (disc[5] == '0' || disc[5] == '1' || disc[5] == '2' || disc[5] == '3' || disc[5] == '4' || disc[5] == '5' || disc[5] == '6' || disc[5] == '7' || disc[5] == '8' || disc[5] == '9') && 
				  		  (disc[6] == '0' || disc[6] == '1' || disc[6] == '2' || disc[6] == '3' || disc[6] == '4' || disc[6] == '5' || disc[6] == '6' || disc[6] == '7' || disc[6] == '8' || disc[6] == '9')) {
							disc1 = Common.utils.toLc(disc[1]);
							disc1 = disc1.toString();
							disc2 = disc[2].toString();
							disc3 = disc[3].toString();
							disc4 = disc[4].toString();
							disc5 = disc[5].toString();
							disc6 = disc[6].toString();
							discname = disc1 + disc2 + disc3 + disc4 + disc5 + disc6;
							Common.db.users.find({discord: discname}, function(err, users) {
								var disc_list = '';
								var un_list = '';
								users.forEach(function(discord) {
									if (discord.main !== 0 && discord.main !== undefined) {
										disc_list += '' + discord.main + ', ';
									} else {
										un_list += '1, ';
									}
									if (discord.main2 !== 0 && discord.main2 !== undefined) {
										disc_list += '' + discord.main2 + ', ';
									}
									if (discord.main3 !== 0 && discord.main3 !== undefined) {
										disc_list += '' + discord.main3 + ', ';
									}
									if (discord.main4 !== 0 && discord.main4 !== undefined) {
										disc_list += '' + discord.main4 + ', ';
									}
									if (discord.main5 !== 0 && discord.main5 !== undefined) {
										disc_list += '' + discord.main5 + ', ';
									}
								});
								if (disc_list != '') {
									disc_list = disc_list.substr(0, disc_list.length-2);
									Common.bot.say(to, "2Discord ID: " + discname + ", Main RSNs: " + disc_list);
								} else if (un_list != '') {
									Common.bot.say(to, "5Discord ID '" + discname + "' does not have a linked main RSN. Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.");
								} else {
									Common.bot.say(to, "5" + "Discord ID '" + discname + "' not found. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
								}
							});
						} else {
							Common.bot.say(to, '5You must specify an IRC nickname, an alt RSN, or a valid Discord ID when using this command. Use !main IRC_NICKNAME_HERE, !main ALT_RSN_HERE, or !main EXAMPLE_NAME # 0 0 0 0 to search for a main RSN.');
						}
					} else {
						Common.bot.say(to, '5You must specify an IRC nickname, an alt RSN, or a valid Discord ID when using this command. Use !main IRC_NICKNAME_HERE, !main ALT_RSN_HERE, or !main EXAMPLE_NAME # 0 0 0 0 to search for a main RSN.');
					}
				} else {
					main(Common, from, to, message);
				}
			} else {
				main(Common, from, to, message);
			}
		} else {
			var name = Common.utils.toLc(from);
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					console.log(err);
					Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else {
					var main_list = '';
					if (user.main !== 0 && user.main !== undefined) {
						main_list += '' + user.main + ', ';
					}
					if (user.main2 !== 0 && user.main2 !== undefined) {
						main_list += '' + user.main2 + ', ';
					}
					if (user.main3 !== 0 && user.main3 !== undefined) {
						main_list += '' + user.main3 + ', ';
					}
					if (user.main4 !== 0 && user.main4 !== undefined) {
						main_list += '' + user.main4 + ', ';
					}
					if (user.main5 !== 0 && user.main5 !== undefined) {
						main_list += '' + user.main5 + ', ';
					}
					if (main_list != '') {
						main_list = main_list.substr(0, main_list.length-2);
						Common.bot.say(to, "2IRC Nickname: " + name + ", Main RSNs: " + main_list);
					} else {
						Common.bot.say(to, "5" + name + ", you do not have a linked main RSN. Use !addMain MAIN_RSN_HERE to link the RSN of your main account to your profile.");
					}
				}
			});
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

function altmsg(Common, from, to, message) {
	var name = message.match(/\S+/g);
	name = Common.utils.toLc(name[1]);
	var final_list = '';
	Common.db.users.find({name: name}, function(err, users) {
	var irc_list = '';
	var un_list1 = '';
	users.forEach(function(name) {
		if (name.alt !== 0 && name.alt !== undefined) {
			irc_list += "" + name.alt + ", ";
		} else {
			un_list1 += '1, ';
		}
		if (name.alt2 !== 0 && name.alt2 !== undefined) {
			irc_list += "" + name.alt2 + ", ";
		}
		if (name.alt3 !== 0 && name.alt3 !== undefined) {
			irc_list += "" + name.alt3 + ", ";
		}
		if (name.alt4 !== 0 && name.alt4 !== undefined) {
			irc_list += "" + name.alt4 + ", ";
		}
		if (name.alt5 !== 0 && name.alt5 !== undefined) {
			irc_list += "" + name.alt5 + ", ";
		}
		if (name.alt6 !== 0 && name.alt6 !== undefined) {
			irc_list += "" + name.alt6 + ", ";
		}
		if (name.alt7 !== 0 && name.alt7 !== undefined) {
			irc_list += "" + name.alt7 + ", ";
		}
		if (name.alt8 !== 0 && name.alt8 !== undefined) {
			irc_list += "" + name.alt8 + ", ";
		}
		if (name.alt9 !== 0 && name.alt9 !== undefined) {
			irc_list += "" + name.alt9 + ", ";
		}
		if (name.alt10 !== 0 && name.alt10 !== undefined) {
			irc_list += "" + name.alt10 + ", ";
		}
	});
		Common.db.users.find({main: name}, function(err, users) {
		var alt_list1 = '';
		var un_list2 = '';
		users.forEach(function(main) {
			if (main.alt !== 0 && main.alt !== undefined) {
				alt_list1 += "" + main.alt + ", ";
			} else {
				un_list2 += '1, ';
			}
			if (main.alt2 !== 0 && main.alt2 !== undefined) {
				alt_list1 += "" + main.alt2 + ", ";
			}
			if (main.alt3 !== 0 && main.alt3 !== undefined) {
				alt_list1 += "" + main.alt3 + ", ";
			}
			if (main.alt4 !== 0 && main.alt4 !== undefined) {
				alt_list1 += "" + main.alt4 + ", ";
			}
			if (main.alt5 !== 0 && main.alt5 !== undefined) {
				alt_list1 += "" + main.alt5 + ", ";
			}
			if (main.alt6 !== 0 && main.alt6 !== undefined) {
				alt_list1 += "" + main.alt6 + ", ";
			}
			if (main.alt7 !== 0 && main.alt7 !== undefined) {
				alt_list1 += "" + main.alt7 + ", ";
			}
			if (main.alt8 !== 0 && main.alt8 !== undefined) {
				alt_list1 += "" + main.alt8 + ", ";
			}
			if (main.alt9 !== 0 && main.alt9 !== undefined) {
				alt_list1 += "" + main.alt9 + ", ";
			}
			if (main.alt10 !== 0 && main.alt10 !== undefined) {
				alt_list1 += "" + main.alt10 + ", ";
			}
		});
			Common.db.users.find({main2: name}, function(err, users) {
			var alt_list2 = '';
			var un_list3 = '';
			users.forEach(function(main2) {
				if (main2.alt !== 0 && main2.alt !== undefined) {
					alt_list2 += "" + main2.alt + ", ";
				} else {
					un_list3 += '1, ';
				}
				if (main2.alt2 !== 0 && main2.alt2 !== undefined) {
					alt_list2 += "" + main2.alt2 + ", ";
				}
				if (main2.alt3 !== 0 && main2.alt3 !== undefined) {
					alt_list2 += "" + main2.alt3 + ", ";
				}
				if (main2.alt4 !== 0 && main2.alt4 !== undefined) {
					alt_list2 += "" + main2.alt4 + ", ";
				}
				if (main2.alt5 !== 0 && main2.alt5 !== undefined) {
					alt_list2 += "" + main2.alt5 + ", ";
				}
				if (main2.alt6 !== 0 && main2.alt6 !== undefined) {
					alt_list2 += "" + main2.alt6 + ", ";
				}
				if (main2.alt7 !== 0 && main2.alt7 !== undefined) {
					alt_list2 += "" + main2.alt7 + ", ";
				}
				if (main2.alt8 !== 0 && main2.alt8 !== undefined) {
					alt_list2 += "" + main2.alt8 + ", ";
				}
				if (main2.alt9 !== 0 && main2.alt9 !== undefined) {
					alt_list2 += "" + main2.alt9 + ", ";
				}
				if (main2.alt10 !== 0 && main2.alt10 !== undefined) {
					alt_list2 += "" + main2.alt10 + ", ";
				}
			});
				Common.db.users.find({main3: name}, function(err, users) {
				var alt_list3 = '';
				var un_list4 = '';
				users.forEach(function(main3) {
					if (main3.alt !== 0 && main3.alt !== undefined) {
						alt_list3 += "" + main3.alt + ", ";
					} else {
						un_list4 += '1, ';
					}
					if (main3.alt2 !== 0 && main3.alt2 !== undefined) {
						alt_list3 += "" + main3.alt2 + ", ";
					}
					if (main3.alt3 !== 0 && main3.alt3 !== undefined) {
						alt_list3 += "" + main3.alt3 + ", ";
					}
					if (main3.alt4 !== 0 && main3.alt4 !== undefined) {
						alt_list3 += "" + main3.alt4 + ", ";
					}
					if (main3.alt5 !== 0 && main3.alt5 !== undefined) {
						alt_list3 += "" + main3.alt5 + ", ";
					}
					if (main3.alt6 !== 0 && main3.alt6 !== undefined) {
						alt_list3 += "" + main3.alt6 + ", ";
					}
					if (main3.alt7 !== 0 && main3.alt7 !== undefined) {
						alt_list3 += "" + main3.alt7 + ", ";
					}
					if (main3.alt8 !== 0 && main3.alt8 !== undefined) {
						alt_list3 += "" + main3.alt8 + ", ";
					}
					if (main3.alt9 !== 0 && main3.alt9 !== undefined) {
						alt_list3 += "" + main3.alt9 + ", ";
					}
					if (main3.alt10 !== 0 && main3.alt10 !== undefined) {
						alt_list3 += "" + main3.alt10 + ", ";
					}
				});
					Common.db.users.find({main4: name}, function(err, users) {
					var alt_list4 = '';
					var un_list5 = '';
					users.forEach(function(main4) {
						if (main4.alt !== 0 && main4.alt !== undefined) {
							alt_list4 += "" + main4.alt + ", ";
						} else {
							un_list5 += '1, ';
						}
						if (main4.alt2 !== 0 && main4.alt2 !== undefined) {
							alt_list4 += "" + main4.alt2 + ", ";
						}
						if (main4.alt3 !== 0 && main4.alt3 !== undefined) {
							alt_list4 += "" + main4.alt3 + ", ";
						}
						if (main4.alt4 !== 0 && main4.alt4 !== undefined) {
							alt_list4 += "" + main4.alt4 + ", ";
						}
						if (main4.alt5 !== 0 && main4.alt5 !== undefined) {
							alt_list4 += "" + main4.alt5 + ", ";
						}
						if (main4.alt6 !== 0 && main4.alt6 !== undefined) {
							alt_list4 += "" + main4.alt6 + ", ";
						}
						if (main4.alt7 !== 0 && main4.alt7 !== undefined) {
							alt_list4 += "" + main4.alt7 + ", ";
						}
						if (main4.alt8 !== 0 && main4.alt8 !== undefined) {
							alt_list4 += "" + main4.alt8 + ", ";
						}
						if (main4.alt9 !== 0 && main4.alt9 !== undefined) {
							alt_list4 += "" + main4.alt9 + ", ";
						}
						if (main4.alt10 !== 0 && main4.alt10 !== undefined) {
							alt_list4 += "" + main4.alt10 + ", ";
						}
					});
						Common.db.users.find({main5: name}, function(err, users) {
						var alt_list5 = '';
						var un_list6 = '';
						users.forEach(function(main5) {
							if (main5.alt !== 0 && main5.alt !== undefined) {
								alt_list5 += "" + main5.alt + ", ";
							} else {
								un_list6 += '1, ';
							}
							if (main5.alt2 !== 0 && main5.alt2 !== undefined) {
								alt_list5 += "" + main5.alt2 + ", ";
							}
							if (main5.alt3 !== 0 && main5.alt3 !== undefined) {
								alt_list5 += "" + main5.alt3 + ", ";
							}
							if (main5.alt4 !== 0 && main5.alt4 !== undefined) {
								alt_list5 += "" + main5.alt4 + ", ";
							}
							if (main5.alt5 !== 0 && main5.alt5 !== undefined) {
								alt_list5 += "" + main5.alt5 + ", ";
							}
							if (main5.alt6 !== 0 && main5.alt6 !== undefined) {
								alt_list5 += "" + main5.alt6 + ", ";
							}
							if (main5.alt7 !== 0 && main5.alt7 !== undefined) {
								alt_list5 += "" + main5.alt7 + ", ";
							}
							if (main5.alt8 !== 0 && main5.alt8 !== undefined) {
								alt_list5 += "" + main5.alt8 + ", ";
							}
							if (main5.alt9 !== 0 && main5.alt9 !== undefined) {
								alt_list5 += "" + main5.alt9 + ", ";
							}
							if (main5.alt10 !== 0 && main5.alt10 !== undefined) {
								alt_list5 += "" + main5.alt10 + ", ";
							}
						});
						var final_list = '';
						if (irc_list != '') {
							final_list += irc_list;
						}
						if (alt_list1 != '') {
							final_list += alt_list1;
						}
						if (alt_list2 != '') {
							final_list += alt_list2;
						}
						if (alt_list3 != '') {
							final_list += alt_list3;
						}
						if (alt_list4 != '') {
							final_list += alt_list4;
						}
						if (alt_list5 != '') {
							final_list += alt_list5;
						}
						if (irc_list != '' || alt_list1 != '' || alt_list2 != '' || alt_list3 != '' || alt_list4 != '' || alt_list5 != '') {
							var nametype = '';
							var newfinal_list = final_list.substr(0, final_list.length-2);
							if (irc_list != '' && (alt_list1 != '' || alt_list2 != '' || alt_list3 != '' || alt_list4 != '' || alt_list5 != '')) {
								nametype = 'IRC Nickname/Main RSN';
							} else if (irc_list != '') {
								nametype = 'IRC Nickname';
							} else {
								nametype = 'Main RSN';
							}
							Common.bot.say(to, "2" + nametype + ": " + name + ", Alt RSNs: " + newfinal_list);
						} else if (un_list1 != '' || un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '') {
							var nametype = '';
							if (un_list1 != '' && (un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '')) {
								nametype = 'IRC Nickname/Main RSN';
							} else if (un_list1 != '') {
								nametype = 'IRC Nickname';
							} else {
								nametype = 'Main RSN';
							}
							Common.bot.say(to, "5" + nametype + " '" + name + "' does not have a linked alt RSN. Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.");
						} else {
							Common.bot.say(to, "5" + "IRC Nickname/Main RSN '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
						}
						});
					});
				});
			});
		});
	});
};
Commands.alt = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		if (Common.utils.msg(message)) {
			var alt = message.match(/\S+/g);
			if (alt[2] !== undefined) { 
				if (alt[2] == '#') {
					var disc = message.match(/\S+/g);
					var discname = '';
					if (disc[6] !== undefined) {
						if ((disc[3] == '0' || disc[3] == '1' || disc[3] == '2' || disc[3] == '3' || disc[3] == '4' || disc[3] == '5' || disc[3] == '6' || disc[3] == '7' || disc[3] == '8' || disc[3] == '9') && 
				   		  (disc[4] == '0' || disc[4] == '1' || disc[4] == '2' || disc[4] == '3' || disc[4] == '4' || disc[4] == '5' || disc[4] == '6' || disc[4] == '7' || disc[4] == '8' || disc[4] == '9') && 
				  		  (disc[5] == '0' || disc[5] == '1' || disc[5] == '2' || disc[5] == '3' || disc[5] == '4' || disc[5] == '5' || disc[5] == '6' || disc[5] == '7' || disc[5] == '8' || disc[5] == '9') && 
				  		  (disc[6] == '0' || disc[6] == '1' || disc[6] == '2' || disc[6] == '3' || disc[6] == '4' || disc[6] == '5' || disc[6] == '6' || disc[6] == '7' || disc[6] == '8' || disc[6] == '9')) {
							disc1 = Common.utils.toLc(disc[1]);
							disc1 = disc1.toString();
							disc2 = disc[2].toString();
							disc3 = disc[3].toString();
							disc4 = disc[4].toString();
							disc5 = disc[5].toString();
							disc6 = disc[6].toString();
							discname = disc1 + disc2 + disc3 + disc4 + disc5 + disc6;
							Common.db.users.find({discord: discname}, function(err, users) {
								var disc_list = '';
								var un_list = '';
								users.forEach(function(discord) {
									if (discord.alt !== 0 && discord.alt !== undefined) {
										disc_list += '' + discord.alt + ', ';
									} else {
										un_list += '1, ';
									}
									if (discord.alt2 !== 0 && discord.alt2 !== undefined) {
										disc_list += '' + discord.alt2 + ', ';
									}
									if (discord.alt3 !== 0 && discord.alt3 !== undefined) {
										disc_list += '' + discord.alt3 + ', ';
									}
									if (discord.alt4 !== 0 && discord.alt4 !== undefined) {
										disc_list += '' + discord.alt4 + ', ';
									}
									if (discord.alt5 !== 0 && discord.alt5 !== undefined) {
										disc_list += '' + discord.alt5 + ', ';
									}
									if (discord.alt6 !== 0 && discord.alt6 !== undefined) {
										disc_list += '' + discord.alt6 + ', ';
									}
									if (discord.alt7 !== 0 && discord.alt7 !== undefined) {
										disc_list += '' + discord.alt7 + ', ';
									}
									if (discord.alt8 !== 0 && discord.alt8 !== undefined) {
										disc_list += '' + discord.alt8 + ', ';
									}
									if (discord.alt9 !== 0 && discord.alt9 !== undefined) {
										disc_list += '' + discord.alt9 + ', ';
									}
									if (discord.alt10 !== 0 && discord.alt10 !== undefined) {
										disc_list += '' + discord.alt10 + ', ';
									}
								});
								if (disc_list != '') {
									disc_list = disc_list.substr(0, disc_list.length-2);
									Common.bot.say(to, "2Discord ID: " + discname + ", Alt RSNs: " + disc_list);
								} else if (un_list != '') {
									Common.bot.say(to, "5Discord ID '" + discname + "' does not have a linked alt RSN. Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.");
								} else {
									Common.bot.say(to, "5" + "Discord ID '" + discname + "' not found. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
								}
							});
						} else {
							Common.bot.say(to, '5You must specify an IRC nickname, a main RSN, or a valid Discord ID when using this command. Use !alt IRC_NICKNAME_HERE, !alt MAIN_RSN_HERE, or !alt EXAMPLE_NAME # 0 0 0 0 to search for an alt RSN.');
						}
					} else {
						Common.bot.say(to, '5You must specify an IRC nickname, a main RSN, or a valid Discord ID when using this command. Use !alt IRC_NICKNAME_HERE, !alt MAIN_RSN_HERE, or !alt EXAMPLE_NAME # 0 0 0 0 to search for an alt RSN.');
					}
				} else {
					altmsg(Common, from, to, message);
				}
			} else {
				altmsg(Common, from, to, message);
			}
		} else {
			var name = Common.utils.toLc(from);
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					console.log(err);
					Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else {
					var alt_list = '';
					if (user.alt !== 0 && user.alt !== undefined) {
						alt_list += "" + user.alt + ", ";
					}
					if (user.alt2 !== 0 && user.alt2 !== undefined) {
						alt_list += "" + user.alt2 + ", ";
					}
					if (user.alt3 !== 0 && user.alt3 !== undefined) {
						alt_list += "" + user.alt3 + ", ";
					}
					if (user.alt4 !== 0 && user.alt4 !== undefined) {
						alt_list += "" + user.alt4 + ", ";
					}
					if (user.alt5 !== 0 && user.alt5 !== undefined) {
						alt_list += "" + user.alt5 + ", ";
					}
					if (user.alt6 !== 0 && user.alt6 !== undefined) {
						alt_list += "" + user.alt6 + ", ";
					}
					if (user.alt7 !== 0 && user.alt7 !== undefined) {
						alt_list += "" + user.alt7 + ", ";
					}
					if (user.alt8 !== 0 && user.alt8 !== undefined) {
						alt_list += "" + user.alt8 + ", ";
					}
					if (user.alt9 !== 0 && user.alt9 !== undefined) {
						alt_list += "" + user.alt9 + ", ";
					}
					if (user.alt10 !== 0 && user.alt10 !== undefined) {
						alt_list += "" + user.alt10 + ", ";
					}
					if (alt_list != '') {
						alt_list = alt_list.substr(0, alt_list.length-2);
						Common.bot.say(to, "2IRC Nickname: " + name + ", Alt RSNs: " + alt_list);
					} else {
						Common.bot.say(to, "5" + name + ", you do not have a linked alt RSN. Use !addAlt ALT_RSN_HERE to link the RSN of your level 90+ combat alt to your profile.");
					}
				}
			});
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.discordid = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	if (Common.utils.msg(message)) {
		var name = message.match(/\S+/g);
		name = Common.utils.toLc(name[1]);
		Common.db.users.find({name: name}, function(err, users) {
		var disc_list1 = '';
		var un_list1 = '';
		users.forEach(function(name) {
			if (name.discord != 'unknown' && name.discord !== undefined) {
				disc_list1 += '' + name.discord + ', ';
			} else {
				un_list1 += '1, ';
			}
		});
			Common.db.users.find({main: name}, function(err, users) {
			var disc_list2 = '';
			var un_list2 = '';
			users.forEach(function(main) {
				if (main.discord != 'unknown' && main.discord !== undefined) {
					disc_list2 += '' + main.discord + ', ';
				} else {
					un_list2 += '1, ';
				}
			});
				Common.db.users.find({main2: name}, function(err, users) {
				var disc_list3 = '';
				var un_list3 = '';
				users.forEach(function(main2) {
					if (main2.discord != 'unknown' && main2.discord !== undefined) {
						disc_list3 += '' + main2.discord + ', ';
					} else {
						un_list3 += '1, ';
					}
				});
					Common.db.users.find({main3: name}, function(err, users) {
					var disc_list4 = '';
					var un_list4 = '';
					users.forEach(function(main3) {
						if (main3.discord != 'unknown' && main3.discord !== undefined) {
							disc_list4 += '' + main3.discord + ', ';
						} else {
							un_list4 += '1, ';
						}
					});
						Common.db.users.find({main4: name}, function(err, users) {
						var disc_list5 = '';
						var un_list5 = '';
						users.forEach(function(main4) {
							if (main4.discord != 'unknown' && main4.discord !== undefined) {
								disc_list5 += '' + main4.discord + ', ';
							} else {
								un_list5 += '1, ';
							}
						});
							Common.db.users.find({main5: name}, function(err, users) {
							var disc_list6 = '';
							var un_list6 = '';
							users.forEach(function(main5) {
								if (main5.discord != 'unknown' && main5.discord !== undefined) {
									disc_list6 += '' + main5.discord + ', ';
								} else {
									un_list6 += '1, ';
								}
							});
								Common.db.users.find({alt: name}, function(err, users) {
								var disc_list7 = '';
								var un_list7 = '';
								users.forEach(function(alt) {
									if (alt.discord != 'unknown' && alt.discord !== undefined) {
										disc_list7 += '' + alt.discord + ', ';
									} else {
										un_list7 += '1, ';
									}
								});
									Common.db.users.find({alt2: name}, function(err, users) {
									var disc_list8 = '';
									var un_list8 = '';
									users.forEach(function(alt2) {
										if (alt2.discord != 'unknown' && alt2.discord !== undefined) {
											disc_list8 += '' + alt2.discord + ', ';
										} else {
											un_list8 += '1, ';
										}
									});
										Common.db.users.find({alt3: name}, function(err, users) {
										var disc_list9 = '';
										var un_list9 = '';
										users.forEach(function(alt3) {
											if (alt3.discord != 'unknown' && alt3.discord !== undefined) {
												disc_list9 += '' + alt3.discord + ', ';
											} else {
												un_list9+= '1, ';
											}
										});
											Common.db.users.find({alt4: name}, function(err, users) {
											var disc_list10 = '';
											var un_list10 = '';
											users.forEach(function(alt4) {
												if (alt4.discord != 'unknown' && alt4.discord !== undefined) {
													disc_list10 += '' + alt4.discord + ', ';
												} else {
													un_list10 += '1, ';
												}
											});
												Common.db.users.find({alt5: name}, function(err, users) {
												var disc_list11 = '';
												var un_list11 = '';
												users.forEach(function(alt5) {
													if (alt5.discord != 'unknown' && alt5.discord !== undefined) {
														disc_list11 += '' + alt5.discord + ', ';
													} else {
														un_list11 += '1, ';
													}
												});
													Common.db.users.find({alt6: name}, function(err, users) {
													var disc_list12 = '';
													var un_list12 = '';
													users.forEach(function(alt6) {
														if (alt6.discord != 'unknown' && alt6.discord !== undefined) {
															disc_list12 += '' + alt6.discord + ', ';
														} else {
															un_list12 += '1, ';
														}
													});
														Common.db.users.find({alt7: name}, function(err, users) {
														var disc_list13 = '';
														var un_list13 = '';
														users.forEach(function(alt7) {
															if (alt7.discord != 'unknown' && alt7.discord !== undefined) {
																disc_list13 += '' + alt7.discord + ', ';
															} else {
																un_list13 += '1, ';
															}
														});
															Common.db.users.find({alt8: name}, function(err, users) {
															var disc_list14 = '';
															var un_list14 = '';
															users.forEach(function(alt8) {
																if (alt8.discord != 'unknown' && alt8.discord !== undefined) {
																	disc_list14 += '' + alt8.discord + ', ';
																} else {
																	un_list14 += '1, ';
																}
															});
																Common.db.users.find({alt9: name}, function(err, users) {
																var disc_list15 = '';
																var un_list15 = '';
																users.forEach(function(alt9) {
																	if (alt9.discord != 'unknown' && alt9.discord !== undefined) {
																		disc_list15 += '' + alt9.discord + ', ';
																	} else {
																		un_list15 += '1, ';
																	}
																});
																	Common.db.users.find({alt10: name}, function(err, users) {
																	var disc_list16 = '';
																	var un_list16 = '';
																	users.forEach(function(alt10) {
																		if (alt10.discord != 'unknown' && alt10.discord !== undefined) {
																			disc_list16 += '' + alt10.discord + ', ';
																		} else {
																			un_list16 += '1, ';
																		}
																	});
																	var final_list = disc_list1 + disc_list2 + disc_list3 + disc_list4 + disc_list5 + disc_list6 + disc_list7 + disc_list8 + disc_list9 + disc_list10 + disc_list11 + disc_list12 + disc_list13 + disc_list14 + disc_list15 + disc_list16;
																	if (disc_list1 != '' || disc_list2 != '' || disc_list3 != '' || disc_list4 != '' || disc_list5 != '' || disc_list6 != '' || disc_list7 != '' || disc_list8 != '' || disc_list9 != '' || disc_list10 != '' || disc_list11 != '' || disc_list12 != '' || disc_list13 != '' || disc_list14 != '' || disc_list15 != '' || disc_list16 != '') {
																		var nametype = '';
																		var newfinal_list = final_list.substr(0, final_list.length-2);
																		if (disc_list1 != '' && (disc_list2 != '' || disc_list3 != '' || disc_list4 != '' || disc_list5 != '' || disc_list6 != '') && (disc_list7 != '' || disc_list8 != '' || disc_list9 != '' || disc_list10 != '' || disc_list11 != '' || disc_list12 != '' || disc_list13 != '' || disc_list14 != '' || disc_list15 != '' || disc_list16 != '')) {
																			nametype = 'IRC Nickname/Main RSN/Alt RSN';
																		} else if (disc_list1 != '' && (disc_list2 != '' || disc_list3 != '' || disc_list4 != '' || disc_list5 != '' || disc_list6 != '')) {
																			nametype = 'IRC Nickname/Main RSN';
																		} else if (disc_list1 != '' && (disc_list7 != '' || disc_list8 != '' || disc_list9 != '' || disc_list10 != '' || disc_list11 != '' || disc_list12 != '' || disc_list13 != '' || disc_list14 != '' || disc_list15 != '' || disc_list16 != '')) {
																			nametype = 'IRC Nickname/Alt RSN';
																		} else if ((disc_list2 != '' || disc_list3 != '' || disc_list4 != '' || disc_list5 != '' || disc_list6 != '') && (disc_list7 != '' || disc_list8 != '' || disc_list9 != '' || disc_list10 != '' || disc_list11 != '' || disc_list12 != '' || disc_list13 != '' || disc_list14 != '' || disc_list15 != '' || disc_list16 != '')) {
																			nametype = 'Main RSN/Alt RSN';
																		} else if (disc_list1 != '') {
																			nametype = 'IRC Nickname';
																		} else if (disc_list2 != '' || disc_list3 != '' || disc_list4 != '' || disc_list5 != '' || disc_list6 != '') {
																			nametype = 'Main RSN';
																		} else if (disc_list7 != '' || disc_list8 != '' || disc_list9 != '' || disc_list10 != '' || disc_list11 != '' || disc_list12 != '' || disc_list13 != '' || disc_list14 != '' || disc_list15 != '' || disc_list16 != '') {
																			nametype = 'Alt RSN';
																		}
																		Common.bot.say(to, "2" + nametype + ": " + name + ", Discord IDs: " + newfinal_list);
																	} else if (un_list1 != '' || un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '' || un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '' || un_list11 != '' || un_list12 != '' || un_list13 != '' || un_list14 != '' || un_list15 != '' || un_list16 != '') {
																		var nametype = '';
																		if (un_list1 != '' && (un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '') && (un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '' || un_list11 != '' || un_list12 != '' || un_list13 != '' || un_list14 != '' || un_list15 != '' || un_list16 != '')) {
																			nametype = 'IRC Nickname/Main RSN/Alt RSN';
																		} else if (un_list1 != '' && (un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '')) {
																			nametype = 'IRC Nickname/Main RSN';
																		} else if (un_list1 != '' && (un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '' || un_list11 != '' || un_list12 != '' || un_list13 != '' || un_list14 != '' || un_list15 != '' || un_list16 != '')) {
																			nametype = 'IRC Nickname/Alt RSN';
																		} else if ((un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '') && (un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '' || un_list11 != '' || un_list12 != '' || un_list13 != '' || un_list14 != '' || un_list15 != '' || un_list16 != '')) {
																			nametype = 'Main RSN/Alt RSN';
																		} else if (un_list1 != '') {
																			nametype = 'IRC Nickname';
																		} else if (un_list2 != '' || un_list3 != '' || un_list4 != '' || un_list5 != '' || un_list6 != '') {
																			nametype = 'Main RSN';
																		} else if (un_list7 != '' || un_list8 != '' || un_list9 != '' || un_list10 != '' || un_list11 != '' || un_list12 != '' || un_list13 != '' || un_list14 != '' || un_list15 != '' || un_list16 != '') {
																			nametype = 'Alt RSN';
																		}
																		Common.bot.say(to, "5" + nametype + " '" + name + "' does not have a linked Discord ID. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
																	} else {
																		Common.bot.say(to, "5" + "IRC Nickname/Main RSN/Alt RSN '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
																	}
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	} else {
		var name = Common.utils.toDb(from);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.discord == 'unknown' || user.discord === undefined) {
				Common.bot.say(to, "5" + name + ", you do not have a linked Discord ID. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
			} else {
				Common.bot.say(to, "2IRC Nickname: " + name + ", Discord ID: " + user.discord + "");
			}
		});
	}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.did = function(Common, from, to, message) {
	Commands.discordid(Common, from, to, message);
};

function ircmsg(Common, from, to, message) {
	var name = message.match(/\S+/g);
	name = Common.utils.toLc(name[1]);
	Common.db.users.find({main: name}, function(err, users) {
	var irc_list1 = '';
	users.forEach(function(main) {
		irc_list1 += '' + main.name + ', ';
	});
		Common.db.users.find({main2: name}, function(err, users) {
		var irc_list2 = '';
		users.forEach(function(main2) {
			irc_list2 += '' + main2.name + ', ';
		});
			Common.db.users.find({main3: name}, function(err, users) {
			var irc_list3 = '';
			users.forEach(function(main3) {
				irc_list3 += '' + main3.name + ', ';
			});
				Common.db.users.find({main4: name}, function(err, users) {
				var irc_list4 = '';
				users.forEach(function(main4) {
					irc_list4 += '' + main4.name + ', ';
				});
					Common.db.users.find({main5: name}, function(err, users) {
					var irc_list5 = '';
					users.forEach(function(main5) {
						irc_list5 += '' + main5.name + ', ';
					});
						Common.db.users.find({alt: name}, function(err, users) {
						var irc_list6 = '';
						users.forEach(function(alt) {
							irc_list6 += '' + alt.name + ', ';
						});
							Common.db.users.find({alt2: name}, function(err, users) {
							var irc_list7 = '';
							users.forEach(function(alt2) {
								irc_list7 += '' + alt2.name + ', ';
							});
								Common.db.users.find({alt3: name}, function(err, users) {
								var irc_list8 = '';
								users.forEach(function(alt3) {
									irc_list8 += '' + alt3.name + ', ';
								});
									Common.db.users.find({alt4: name}, function(err, users) {
									var irc_list9 = '';
									users.forEach(function(alt4) {
										irc_list9 += '' + alt4.name + ', ';
									});
										Common.db.users.find({alt5: name}, function(err, users) {
										var irc_list10 = '';
										users.forEach(function(alt5) {
											irc_list10 += '' + alt5.name + ', ';
										});
											Common.db.users.find({alt6: name}, function(err, users) {
											var irc_list11 = '';
											users.forEach(function(alt6) {
												irc_list11 += '' + alt6.name + ', ';
											});
												Common.db.users.find({alt7: name}, function(err, users) {
												var irc_list12 = '';
												users.forEach(function(alt7) {
													irc_list12 += '' + alt7.name + ', ';
												});
													Common.db.users.find({alt8: name}, function(err, users) {
													var irc_list13 = '';
													users.forEach(function(alt8) {
														irc_list13 += '' + alt8.name + ', ';
													});
														Common.db.users.find({alt9: name}, function(err, users) {
														var irc_list14 = '';
														users.forEach(function(alt9) {
															irc_list14 += '' + alt9.name + ', ';
														});
															Common.db.users.find({alt10: name}, function(err, users) {
															var irc_list15 = '';
															users.forEach(function(alt10) {
																irc_list15 += '' + alt10.name + ', ';
															});
															var final_list = irc_list1 + irc_list2 + irc_list3 + irc_list4 + irc_list5 + irc_list6 + irc_list7 + irc_list8 + irc_list9 + irc_list10 + irc_list11 + irc_list12 + irc_list13 + irc_list14 + irc_list15;
															if (final_list != '') {
																var nametype = '';
																var newfinal_list = final_list.substr(0, final_list.length-2);
																if ((irc_list1 != '' || irc_list2 != '' || irc_list3 != '' || irc_list4 != '' || irc_list5 != '') && (irc_list6 != '' || irc_list7 != '' || irc_list8 != '' || irc_list9 != '' || irc_list10 != '' || irc_list11 != '' || irc_list12 != '' || irc_list13 != '' || irc_list14 != '' || irc_list15 != '')) {
																	nametype = 'Main RSN/Alt RSN';
																} else if (irc_list1 != '' || irc_list2 != '' || irc_list3 != '' || irc_list4 != '' || irc_list5 != '') {
																	nametype = 'Main RSN';
																} else {
																	nametype = 'Alt RSN';
																}
																Common.bot.say(to, "2" + nametype + ": " + name + ", IRC Nicknames: " + newfinal_list);
																	
															} else {
																Common.bot.say(to, "5" + "Main RSN/Alt RSN '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
															}
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
};

Commands.ircnickname = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		if (Common.utils.msg(message)) {
			var alt = message.match(/\S+/g);
			if (alt[2] !== undefined) { 
				if (alt[2] == '#') {
					var disc = message.match(/\S+/g);
					var discname = '';
					if (disc[6] !== undefined) {
						if ((disc[3] == '0' || disc[3] == '1' || disc[3] == '2' || disc[3] == '3' || disc[3] == '4' || disc[3] == '5' || disc[3] == '6' || disc[3] == '7' || disc[3] == '8' || disc[3] == '9') && 
				   		  (disc[4] == '0' || disc[4] == '1' || disc[4] == '2' || disc[4] == '3' || disc[4] == '4' || disc[4] == '5' || disc[4] == '6' || disc[4] == '7' || disc[4] == '8' || disc[4] == '9') && 
				  		  (disc[5] == '0' || disc[5] == '1' || disc[5] == '2' || disc[5] == '3' || disc[5] == '4' || disc[5] == '5' || disc[5] == '6' || disc[5] == '7' || disc[5] == '8' || disc[5] == '9') && 
				  		  (disc[6] == '0' || disc[6] == '1' || disc[6] == '2' || disc[6] == '3' || disc[6] == '4' || disc[6] == '5' || disc[6] == '6' || disc[6] == '7' || disc[6] == '8' || disc[6] == '9')) {
							disc1 = Common.utils.toLc(disc[1]);
							disc1 = disc1.toString();
							disc2 = disc[2].toString();
							disc3 = disc[3].toString();
							disc4 = disc[4].toString();
							disc5 = disc[5].toString();
							disc6 = disc[6].toString();
							discname = disc1 + disc2 + disc3 + disc4 + disc5 + disc6;
							Common.db.users.find({discord: discname}, function(err, users) {
								var disc_list = '';
								users.forEach(function(discord) {
									disc_list += '' + discord.name + ', ';
								});
								if (disc_list != '') {
									disc_list = disc_list.substr(0, disc_list.length-2);
									Common.bot.say(to, "2Discord ID: " + discname + ", IRC Nicknames: " + disc_list);
								} else {
									Common.bot.say(to, "5" + "Discord ID '" + discname + "' not found. Use the format !addDiscordID EXAMPLE_NAME # 0 0 0 0 to link your Discord ID to your profile.");
								}
							});
						} else {
							Common.bot.say(to, '5You must specify a main RSN, an alt RSN, or a valid Discord ID when using this command. Use !ircnickname MAIN_RSN_HERE, !ircnickname ALT_RSN_HERE, or !ircnickname EXAMPLE_NAME # 0 0 0 0 to search for an IRC nickname.');
						}
					} else {
						Common.bot.say(to, '5You must specify a main RSN, an alt RSN, or a valid Discord ID when using this command. Use !ircnickname MAIN_RSN_HERE, !ircnickname ALT_RSN_HERE, or !ircnickname EXAMPLE_NAME # 0 0 0 0 to search for an IRC nickname.');
					}
				} else {
					ircmsg(Common, from, to, message);
				}
			} else {
				ircmsg(Common, from, to, message);
			}
		} else {
			Common.bot.say(to, '5You must specify a main RSN, an alt RSN, or a valid Discord ID when using this command. Use !ircnickname MAIN_RSN_HERE, !ircnickname ALT_RSN_HERE, or !ircnickname EXAMPLE_NAME # 0 0 0 0 to search for an IRC nickname.');
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.ircn = function(Common, from, to, message) {
	Commands.ircnickname(Common, from, to, message);
};

Commands.setjoindate = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to set the join date for a member.");
		} else if (perms.status == 'Admin' || perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
			if (Common.utils.msg(message)) {
				name = message.match(/\S+/g);
				name = Common.utils.toLc(name[1])
				var timedate = new Date();
				timemsg = timedate.toString();
				timemsg = timemsg.substr(0, timemsg.length-14);
				timemsg = timemsg + "UTC";
				Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						console.log(err);
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						if (user.leaveDate === undefined) {
							Common.db.users.update({name: name}, {$set: {joinDate: timedate, leaveDate: 0, retired: 0}}, function(err, updated) {
								if (err || !updated) {
									console.log("User not updated!");
								}
							});
							Common.bot.say(to, "2" + from + " has set the join date for " + name + " to: " + timemsg);
						} else {
							if (user.joinDate === undefined || user.joinDate == 'unknown') {	
								Common.db.users.update({name: name}, {$set: {joinDate: timedate}}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated!");
									}
								});
								Common.bot.say(to, "2" + from + " has set the join date for " + name + " to: " + timemsg);
							} else {
								joind = user.joinDate;
								joind = joind.toString();
								joind = joind.substr(0, joind.length-14);
								joind = joind + "UTC";
								if (perms.status == 'Owner') {
									Common.bot.say(to, "5The join date for " + name + " has already been set to: " + joind + " - use !forceSetJoinDate MEMBER_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS to force set the join date for a member.");
								} else if (perms.status == 'Admin') {
									Common.bot.say(to, "5The join date for " + name + " has already been set to: " + joind + " - you may not change this date.");
								}
							}
						}
					}
				});
			} else {
				Common.bot.say(to, '5You must specify a member to set the join date for when using this command.');
			}
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to set the join date for a member.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.sjd = function(Common, from, to, message) {
	Commands.setjoindate(Common, from, to, message);
};

Commands.setleavedate = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to set the leave date for a member.");
		} else if (perms.status == 'Admin' || perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
			if (Common.utils.msg(message)) {
				name = message.match(/\S+/g);
				name = Common.utils.toLc(name[1])
				var timedate = new Date();
				timemsg = timedate.toString();
				timemsg = timemsg.substr(0, timemsg.length-14);
				timemsg = timemsg + "UTC";
				Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						console.log(err);
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						if (user.joinDate === undefined) {
							Common.db.users.update({name: name}, {$set: {joinDate: 'unknown', leaveDate: timedate, retired: 1}}, function(err, updated) {
								if (err || !updated) {
									console.log("User not updated!");
								}
							});
							Common.bot.say(to, "2" + from + " has set the leave date for " + name + " to: " + timemsg);
						} else {
							if (user.leaveDate === 0 || user.leaveDate == 'unknown') {	
								Common.db.users.update({name: name}, {$set: {leaveDate: timedate, retired: 1}}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated!");
									}
								});
								Common.bot.say(to, "2" + from + " has set the leave date for " + name + " to: " + timemsg);
							} else {
								leaved = user.leaveDate;
								leaved = leaved.toString();
								leaved = leaved.substr(0, leaved.length-14);
								leaved = leaved + "UTC";
								if (perms.status == 'Owner') {
									Common.bot.say(to, "5The leave date for " + name + " has already been set to: " + leaved + " - use !forceSetLeaveDate MEMBER_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS to force set the leave date for a member.");
								} else if (perms.status == 'Admin') {
									Common.bot.say(to, "5The leave date for " + name + " has already been set to: " + leaved + " - you may not change this date.");
								}
							}
						}
					}
				});
			} else {
				Common.bot.say(to, '5You must specify a member to set the leave date for when using this command.');
			}
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to set the leave date for a member.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.sld = function(Common, from, to, message) {
	Commands.setleavedate(Common, from, to, message);
};

Commands.forcesetjoindate = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Owner member status to force set the join date for a member.");
		} else if (perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
			if (Common.utils.msg(message)) {
				var date = message.match(/\S+/g);
				var name = Common.utils.toLc(date[1]);
				if (typeof date[2] != 'undefined') {
				if (typeof date[8] != 'undefined' || Common.utils.toLc(date[2]) == 'unknown') {
					var year = date[2];
					var month = date[3];
					var day = date[4];
					var hours = date[5];
					var minutes = date[6];
					var seconds = date[7];
					var mseconds = date[8];
					var newdate = new Date(year, month, day, hours, minutes, seconds, mseconds);
					if (Common.utils.toLc(date[2]) == 'unknown') {
						newdate = 'unknown';
					}
					Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						console.log(err);
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						if (Common.utils.toLc(date[2]) != 'unknown') {
							var timemsg = newdate.toString();
							timemsg = timemsg.substr(0, timemsg.length-14);
							timemsg = timemsg + "UTC";
						} else {
							var timemsg = 'unknown';
						}
						var datestring = '';
						var newdatestring = newdate.toString();
						if (user.joinDate != undefined) {
							var datestring = user.joinDate;
							datestring = datestring.toString();
						}
						if (datestring == newdatestring) {
							Common.bot.say(to, "5The join date for " + name + " is already set to " + timemsg + ".");
						} else {
						if (newdate != "Invalid Date") {
							if (user.joinDate === undefined) {
								Common.db.users.update({name: name}, {$set: {joinDate: newdate, leaveDate: 'unknown'}}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated!");
									}
								});
							} else {
								Common.db.users.update({name: name}, {$set: {joinDate: newdate}}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated!");
									}
								});
							}
							Common.bot.say(to, "2" + from + " has force set the join date for " + name + " to: " + timemsg);
						} else {
							Common.bot.say(to, '5The date you entered is invalid. Use the format !forceSetJoinDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
						}
						}
					}
					});
				} else {
					Common.bot.say(to, '5You must specify a full date and time to force set the join date for a member to when using this command. Use the format !forceSetJoinDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
				}
				} else {
					Common.bot.say(to, '5You must specify a full date and time to force set the join date for a member to when using this command. Use the format !forceSetJoinDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
				}
			} else {
				Common.bot.say(to, '5You must specify a member to force set the join date for when using this command. Use the format !forceSetJoinDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
			}
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Owner member status to force set the join date for a member.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.fsjd = function(Common, from, to, message) {
	Commands.forcesetjoindate(Common, from, to, message);
};

Commands.forcesetleavedate = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
		if (err || !perms) {
			console.log(err);
			Common.bot.say(to, "5This command may only be used by members with Owner member status to force set the leave date for a member.");
		} else if (perms.status == 'Owner') {
			if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else {
			if (Common.utils.msg(message)) {
				var date = message.match(/\S+/g);
				var name = Common.utils.toLc(date[1]);
				if (typeof date[2] != 'undefined') {
				if (typeof date[8] != 'undefined' || Common.utils.toLc(date[2]) == 'unknown' || date[2] == '0') {
					var year = date[2];
					var month = date[3];
					var day = date[4];
					var hours = date[5];
					var minutes = date[6];
					var seconds = date[7];
					var mseconds = date[8];
					var newdate = new Date(year, month, day, hours, minutes, seconds, mseconds);
					if (Common.utils.toLc(date[2]) == 'unknown') {
						newdate = 'unknown';
					} else if (date[2] == '0') {
						newdate = 0;
					}
					Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						console.log(err);
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						if (Common.utils.toLc(date[2]) != 'unknown' && date[2] != '0') {
							var timemsg = newdate.toString();
							timemsg = timemsg.substr(0, timemsg.length-14);
							timemsg = timemsg + "UTC";
						} else if (Common.utils.toLc(date[2]) == 'unknown') {
							var timemsg = 'unknown';
						} else {
							var timemsg = 'n/a';
						}
						var datestring = '';
						var newdatestring = newdate.toString();
						if (user.leaveDate != undefined) {
							var datestring = user.leaveDate;
							datestring = datestring.toString();
						}
						if (datestring == newdatestring) {
							Common.bot.say(to, "5The leave date for " + name + " is already set to " + timemsg + ".");
						} else {
						if (newdate != "Invalid Date") {
							if (user.joinDate === undefined) {
								Common.db.users.update({name: name}, {$set: {joinDate: 'unknown', leaveDate: newdate}}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated!");
									}
								});
							} else {
								Common.db.users.update({name: name}, {$set: {leaveDate: newdate}}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated!");
									}
								});
							}
							Common.bot.say(to, "2" + from + " has force set the leave date for " + name + " to: " + timemsg);
						} else {
							Common.bot.say(to, '5The date you entered is invalid. Use the format !forceSetLeaveDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
						}
						}
					}
					});
				} else {
					Common.bot.say(to, '5You must specify a full date and time to force set the leave date for a member to when using this command. Use the format !forceSetLeaveDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
				}
				} else {
					Common.bot.say(to, '5You must specify a full date and time to force set the leave date for a member to when using this command. Use the format !forceSetLeaveDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
				}
			} else {
				Common.bot.say(to, '5You must specify a member to force set the leave date for when using this command. Use the format !forceSetLeaveDate IRC_NICKNAME_HERE YEAR MONTH DAY HOURS MINUTES SECONDS MILLISECONDS - you must use numerical date and time values.');
			}
			}
		} else {
			Common.bot.say(to, "5This command may only be used by members with Owner member status to force set the leave date for a member.");
		}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.fsld = function(Common, from, to, message) {
	Commands.forcesetleavedate(Common, from, to, message);
};

Commands.penreminder = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the pen reminder on and off.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else {
			   	var isPenToggled = channel.pen;
			   	if (isPenToggled == 1) {
			       	isPenToggled = 0;
			   	} else {
			       	isPenToggled = 1;
			   	}
			   	Common.db.channels.update({channel: to}, {$set: {pen: isPenToggled}}, function(err, updated) {
			       	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						if (isPenToggled == 1) {
					  		Common.bot.say(to, "6" + from + " has disabled the pen reminder - members will no longer be highlighted 3.5 minutes after !hopw, so please remember to leave the pen!");
						} else {
					  		Common.bot.say(to, "6" + from + " has enabled the pen reminder - members with either the voluntary or idiot pen reminder enabled will now be highlighted 3.5 minutes after !hopw.");
						}
			                }
			   	});
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the pen reminder on and off.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.penr = function(Common, from, to, message) {
	Commands.penreminder(Common, from, to, message);
};

Commands.rolereminder = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the role reminder on and off.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else {
			   	var isRoleToggled = channel.role;
			   	if (isRoleToggled == 1) {
			       	isRoleToggled = 0;
			   	} else {
			       	isRoleToggled = 1;
			   	}
			   	Common.db.channels.update({channel: to}, {$set: {role: isRoleToggled}}, function(err, updated) {
			       	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						if (isRoleToggled == 1) {
					  		Common.bot.say(to, "7" + from + " has disabled the role reminder - members assigned roles will no longer be highlighted, so please remember your roles!");
						} else {
					  		Common.bot.say(to, "7" + from + " has enabled the role reminder - members assigned roles will now be highlighted 20 seconds, 9 minutes, or 14 minutes after !hopw, depending on their role(s).");
						}
			                }
			   	});
			}
		});
	} else { 
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the role reminder on and off.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.roler = function(Common, from, to, message) {
	Commands.rolereminder(Common, from, to, message);
};

Commands.pentoggle = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		if (Common.utils.msg(message)) {
			var who = message.match(/\S+/g);
			if (Common.utils.toLc(who[1]) == Common.utils.toLc(from)) {
				who = Common.utils.toLc(who[1]);
				Common.db.users.findOne({name: Common.utils.toDb(from)}, function(err, user) {
					if (err || !user) {
						console.log("User not found.");
						Common.bot.say(to, "5" + "IRC Nickname '" + Common.utils.toLc(from) + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						var isPenToggled = user.pen;
						if (isPenToggled == 1) {
						isPenToggled = 0;
						} else {
						isPenToggled = 1;
						}
						Common.db.users.update({name: Common.utils.toDb(from)}, {$set: {pen: isPenToggled}}, function(err, updated) {
						if (err || !updated) {
							console.log("User not updated!");
						} else {
							if (isPenToggled == 1) {
							Common.bot.say(to, "6" + Common.utils.toLc(from) + ", you will now be highlighted 3.5 minutes after !hopw with the pen reminder enabled.");
						} else {
							Common.bot.say(to, "6" + Common.utils.toLc(from) + ", you have been removed from the voluntary pen reminder.");
						}
						}
						});
					}
				});
			} else {
				var member = Common.utils.toLc(from);
				Common.db.users.findOne({name: member}, function(err, perms) {
				if (err || !perms) {
					console.log(err);
					Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the voluntary pen reminder on and off for a member.");
				} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
					if (memlist[member] != 5 || perms.key === undefined) {
						Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
					} else {
					Common.db.users.findOne({name: Common.utils.toDb(who[1])}, function(err, user) {
					if (err || !user) {
						console.log("User not found.");
						Common.bot.say(to, "5" + "IRC Nickname '" + Common.utils.toLc(who[1]) + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						var isPenToggled = user.pen;
						if (isPenToggled == 1) {
						isPenToggled = 0;
						} else {
						isPenToggled = 1;
						}
						Common.db.users.update({name: Common.utils.toDb(who[1])}, {$set: {pen: isPenToggled}}, function(err, updated) {
						if (err || !updated) {
							console.log("User not updated!");
						} else {
							if (isPenToggled == 1) {
							Common.bot.say(to, "6" + Common.utils.toLc(who[1]) + ", you will now be highlighted 3.5 minutes after !hopw with the pen reminder enabled.");
						} else {
							Common.bot.say(to, "6" + Common.utils.toLc(who[1]) + ", you have been removed from the voluntary pen reminder.");
						}
						}
						});
					}
					});
					}
				} else {
					Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the voluntary pen reminder on and off for a member.");
				}
				});
			}
		} else {
			var member = Common.utils.toLc(from);
			Common.db.users.findOne({name: Common.utils.toDb(from)}, function(err, user) {
				if (err || !user) {
					console.log("User not found.");
					Common.bot.say(to, "5" + "IRC Nickname '" + Common.utils.toLc(from) + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else {
					var isPenToggled = user.pen;
					if (isPenToggled == 1) {
					isPenToggled = 0;
					} else {
					isPenToggled = 1;
					}
					Common.db.users.update({name: Common.utils.toDb(from)}, {$set: {pen: isPenToggled}}, function(err, updated) {
					if (err || !updated) {
						console.log("User not updated!");
					} else {
						if (isPenToggled == 1) {
						Common.bot.say(to, "6" + Common.utils.toLc(from) + ", you will now be highlighted 3.5 minutes after !hopw with the pen reminder enabled.");
					} else {
						Common.bot.say(to, "6" + Common.utils.toLc(from) + ", you have been removed from the voluntary pen reminder.");
					}
					}
					});
				}
			});
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.pent = function(Common, from, to, message) {
	Commands.pentoggle(Common, from, to, message);
};

Commands.idiot = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to add a member to the idiot list.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		if (memlist[member] != 5 || perms.key === undefined) {
			Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
		} else {
		if (Common.utils.msg(message)) {
		name = message.match(/\S+/g);
		if (name.indexOf("abdel") > -1) {
			Common.bot.say(to, "Nice try, " + from + "! Abdel is the smartest person on the planet!");
		} else {
			Common.db.users.findOne({name: Common.utils.toDb(name[1])}, function(err, user) {
				if (err || !user) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + Common.utils.toLc(name[1]) + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else {
					if (user.idiot == 1) {
						Common.bot.say(to, "5" + Common.utils.toLc(name[1]) + " is already an idiot!");
					} else {
						Common.db.users.update({name: Common.utils.toDb(name[1])}, {$set: {idiot: 1}}, function(err, updated) {
						if (err || !updated) {
							console.log("User not updated");
						} else {
							Common.bot.say(to, "6Congratulations " + Common.utils.toLc(name[1]) + ", you're an idiot! You will now be highlighted 3.5 minutes after !hopw with the pen reminder enabled.");
						}
						});
					}
				}
			});
		}
		} else {
			Common.bot.say(to, '5You must specify a member to add to the idiot list when using this command.');
		}
		}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to add a member to the idiot list.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.genius = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
     var member = Common.utils.toLc(from);
     Common.db.users.findOne({name: member}, function(err, perms) {
     if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to delete a member from the idiot list.");
     } else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
	if (memlist[member] != 5 || perms.key === undefined) {
		Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
	} else {
          if (Common.utils.msg(message)) {
              name = message.match(/\S+/g);
              if (name.indexOf("abdel") > -1) {
                   Common.bot.say(to, "No need to mention it, " + from + "! Everyone knows Abdel is the smartest person on the planet!");
              } else {
			Common.db.users.findOne({name: Common.utils.toDb(name[1])}, function(err, user) {
			if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5" + "IRC Nickname '" + Common.utils.toLc(name[1]) + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else {
				if (user.idiot == 0) {
					Common.bot.say(to, "5" + Common.utils.toLc(name[1]) + " is already not an idiot!");
				} else {
					Common.db.users.update({name: Common.utils.toDb(name[1])}, {$set: {idiot: 0}}, function(err, updated) {
					if (err || !updated) {
						console.log("User not updated");
					} else {
						Common.bot.say(to, "6Congratulations " + Common.utils.toLc(name[1]) + ", you're not an idiot! You have been removed from the idiot pen reminder.");
					}
					});
				}
			}
			});
	      }
        } else {
            Common.bot.say(to, '5You must specify a member to delete from the idiot list when using this command.')   
        }
	}
     } else {
        Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to delete a member from the idiot list.");
     }
     });
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.idiots = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.db.users.find({idiot: 1}, function(err, idiots) {
			var idiots_list = '';
			idiots.forEach(function(idiot) {
				idiots_list += Common.utils.toView(idiot.name) + ', ';
			});
			if (idiots_list != '') {
				var newidiots_list = idiots_list.substr(0, idiots_list.length-2);
				Common.bot.say(to, "6Featuring #CwExperts Idiots: " + newidiots_list);
			} else {
				Common.bot.say(to, "3Surprisingly, there aren't any idiots!");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.warn = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to warn a member.");
			} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
				if (memlist[member] != 5 || perms.key === undefined) {
					Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else if (Common.utils.msg(message)) {
					name = message.match(/\S+/g);
					name = Common.utils.toLc(name[1]);
					if (name == 'abdel') {
						Common.bot.say(to, "4Nice try, " + from + "! Abdel never fucks up!");
					} else {
						Common.db.users.findOne({name: name}, function(err, user) {
							if (err || !user) {
								console.log(err);
								Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
							} else {
								Common.db.users.update({name: name}, {$inc: { "warns": 1 }}, function(err, updated) {
									if (err || !updated) {
										console.log("User not updated");
									}
									Common.db.users.findOne({name: name}, function(err, user) {
										if (user.warns == 1) {
											var warn_msg = "4" + name + ", you just fucked up! You now have a total of " + user.warns + " warn.";
										} else {
											var warn_msg = "4" + name + ", you just fucked up! You now have a total of " + user.warns + " warns.";
										}
										if (user.warns == 1 || user.warns == 4 || user.warns == 10 || user.warns == 13) {
											warn_msg += " You will earn a 24 hour temporary ban after 2 more warns.";
										} else if (user.warns == 2 || user.warns == 5 || user.warns == 11 || user.warns == 14) {
											warn_msg += " You will earn a 24 hour temporary ban after 1 more warn.";
										} else if (user.warns == 3 || user.warns == 6 || user.warns == 12 || user.warns == 15) {
											warn_msg += " Oh no, you have earned a 24 hour temporary ban!";
											setTimeout(function() {
												Common.bot.say(to, "4" + name + ", you will be temporarily banned in 30 seconds, any last words?");
											}, 5000);
											setTimeout(function() {
												Common.bot.say("#cwexperts1", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts2", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts.staff", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
											}, 35000);
										} else if (user.warns == 7 || user.warns == 16) {
											warn_msg += " You will earn a 72 hour temporary ban after 2 more warns.";
										} else if (user.warns == 8 || user.warns == 17) {
											warn_msg += " You will earn a 72 hour temporary ban after 1 more warn.";
										} else if (user.warns == 9 || user.warns == 18) {
											warn_msg += " Oh no, you have earned a 72 hour temporary ban!";
											setTimeout(function() {
												Common.bot.say(to, "4" + name + ", you will be temporarily banned in 30 seconds, any last words?");
											}, 5000);
											setTimeout(function() {
												Common.bot.say("#cwexperts1", "!tb " + name + " 72hr 72 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts2", "!tb " + name + " 72hr 72 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts.staff", "!tb " + name + " 72hr 72 hour temporary ban from #CwExperts via CWEBot");
											}, 35000);
										} else if (user.warns == 19) {
											warn_msg += " You will earn a 24 hour temporary ban after 2 more warns, and then you must make a 500m deposit to continue playing games.";
										} else if (user.warns == 20) {
											warn_msg += " You will earn a 24 hour temporary ban after 1 more warn, and then you must make a 500m deposit to continue playing games.";
										} else if (user.warns == 21) {
											warn_msg += " Oh no, you have earned a 24 hour temporary ban, after which you must make a 500m deposit to continue playing games!";
											if (user.blacklistType === undefined || user.blacklistType === 0) {
												var bltime = new Date();
												if (user.joinDate === undefined) {
													Common.db.users.update({name: name}, {$set: {joinDate: 'unknown', leaveDate: bltime, retired: 1}}, function(err, updated) {
														if (err || !updated) {
															console.log("User not updated!");
														}
													});
												} else if (user.leaveDate === 0 || user.leaveDate == 'unknown') {	
													Common.db.users.update({name: name}, {$set: {leaveDate: bltime, retired: 1}}, function(err, updated) {
														if (err || !updated) {
															console.log("User not updated!");
														}
													});
												} else {
													Common.db.users.update({name: name}, {$set: {retired: 1}}, function(err, updated) {
														if (err || !updated) {
															console.log("User not updated!");
														}
													});
												}
												Common.db.users.update({name: name}, {$set: {blacklistType: 'warns', blacklistReason: 'earned 21 warns and must make a 500m deposit to rejoin', blacklistedBy: 'cwebot', blacklistDate: bltime}}, {upsert: false}, function(err, updated) {
													if (err || !updated) {
														console.log("User not updated!");
													}
												});
											}
											setTimeout(function() {
												Common.bot.say(to, "4" + name + ", you will be temporarily banned in 30 seconds, any last words?");
											}, 5000);
											setTimeout(function() {
												Common.bot.say("#cwexperts1", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts2", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts.staff", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
											}, 35000);
										} else if (user.warns == 22) {
											warn_msg += " You will earn a 24 hour temporary ban after 2 more warns, and you will earn a permanent ban after 3 more warns.";
										} else if (user.warns == 23) {
											warn_msg += " You will earn a 24 hour temporary ban after 1 more warn, and you will earn a permanent ban after 2 more warns.";
										} else if (user.warns == 24) {
											warn_msg += " Oh no, you have earned a 24 hour temporary ban, and you will earn a permanent ban after 1 more warn!";
											setTimeout(function() {
												Common.bot.say(to, "4" + name + ", you will be temporarily banned in 30 seconds, any last words?");
											}, 5000);
											setTimeout(function() {
												Common.bot.say("#cwexperts1", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts2", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts.staff", "!tb " + name + " 24hr 24 hour temporary ban from #CwExperts via CWEBot");
											}, 35000);
										} else if (user.warns == 25) {
											warn_msg += " Oh no, you have earned a permanent ban, and you will not be refunded your 500m deposit!";
											if (user.blacklistType === undefined || user.blacklistType === 0) {
												var bltime = new Date();
												if (user.joinDate === undefined) {
													Common.db.users.update({name: name}, {$set: {joinDate: 'unknown', leaveDate: bltime, retired: 1}}, function(err, updated) {
														if (err || !updated) {
															console.log("User not updated!");
														}
													});
												} else if (user.leaveDate === 0 || user.leaveDate == 'unknown') {	
													Common.db.users.update({name: name}, {$set: {leaveDate: bltime, retired: 1}}, function(err, updated) {
														if (err || !updated) {
															console.log("User not updated!");
														}
													});
												} else {
													Common.db.users.update({name: name}, {$set: {retired: 1}}, function(err, updated) {
														if (err || !updated) {
															console.log("User not updated!");
														}
													});
												}
												Common.db.users.update({name: name}, {$set: {blacklistType: 'warns', blacklistReason: 'earned at least 25 warns and may not rejoin unless an agreement is made with owners', blacklistedBy: 'cwebot', blacklistDate: bltime}}, {upsert: false}, function(err, updated) {
													if (err || !updated) {
														console.log("User not updated!");
													}
												});
											}
											setTimeout(function() {
												Common.bot.say(to, "4" + name + ", you will be permanently banned in 30 seconds, any last words?");
											}, 5000);
											setTimeout(function() {
												Common.bot.say("#cwexperts1", "!kb " + name + " permanent ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts2", "!kb " + name + " permanent ban from #CwExperts via CWEBot");
												Common.bot.say("#cwexperts.staff", "!kb " + name + " permanent ban from #CwExperts via CWEBot");
											}, 35000);
										} else if (user.warns == 100 || user.warns == 500|| user.warns == 1000|| user.warns == 5000|| user.warns == 10000) {
											warn_msg += " You should probably stop fucking up...";
										} else {
											warn_msg += " No one is surprised.";
										}
										Common.bot.say(to, warn_msg);
									});
								});
							}
						});
					}
				} else {
					Common.bot.say(to, '5You must specify a member to warn when using this command.');
				}
			} else {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to warn a member.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.warns = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var name = message.match(/\S+/g);
		name = !Common.utils.msg(message) ? Common.utils.toLc(from) : Common.utils.toLc(name[1]);
		if (name == "abdel") {
			Common.bot.say(to, "4Abdel fucked up .. oh wait .. Abdel never fucks up. Nice try, " + from + "!");
		} else {
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user) {
					Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
				} else if (user.warns === undefined || user.warns == 0) {
					Common.bot.say(to, "3Surprisingly, " + name + " has never fucked up.");
				} else if (user.warns == 1) {
					Common.bot.say(to, "4" + name + " has fucked up a total of "  + user.warns + " time! You can learn more about our warning system here: http://cwexperts.org/management/.");
				} else {
					Common.bot.say(to, "4" + name + " has fucked up a total of "  + user.warns + " times! You can learn more about our warning system here: http://cwexperts.org/management/.");
				}
			});
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.rolelock = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the role lock on and off.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else {
			   	var isRoleLockToggled = channel.role_lock;
			   	if (isRoleLockToggled == 1) {
			       	isRoleLockToggled = 0;
			   	} else {
			       	isRoleLockToggled = 1;
			   	}
			   	Common.db.channels.update({channel: to}, {$set: {role_lock: isRoleLockToggled}}, function(err, updated) {
			       	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						if (isRoleLockToggled == 1) {
					  		Common.bot.say(to, "2" + from+" has enabled the role lock - only members with Staff, Admin, or Owner member status may now edit roles.");
						} else {
					  		Common.bot.say(to, "2" + from+" has disabled the role lock - all members may now edit roles.");
						}
			                }
			   	});
			}
		});
	} else { 
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the role lock on and off.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.rolel = function(Common, from, to, message) {
	Commands.rolelock(Common, from, to, message);
};

Commands.gamelock = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the game lock on and off.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
		Common.db.channels.findOne({channel: to}, function(err, channel) {
			if (err || !channel) {
			   	console.log("Channel not found.");    
			} else {
			   	var isGameLockToggled = channel.game_lock;
			   	if (isGameLockToggled == 1) {
			       	isGameLockToggled = 0;
			   	} else {
			       	isGameLockToggled = 1;
			   	}
			   	Common.db.channels.update({channel: to}, {$set: {game_lock: isGameLockToggled}}, function(err, updated) {
			       	if (err || !updated) {
						console.log("Channel not updated!");
					} else {
						if (isGameLockToggled == 1) {
					  		Common.bot.say(to, "2" + from+" has enabled the game lock - only the lead, the coordinator, and members with Staff, Admin, or Owner member status may now use game commands.");
						} else {
					  		Common.bot.say(to, "2" + from+" has disabled the game lock - all members may now use game commands.");
						}
			                }
			   	});
			}
		});
	} else { 
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to switch the game lock on and off.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.gamel = function(Common, from, to, message) {
	Commands.gamelock(Common, from, to, message);
};

Commands.member = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	name = message.match(/\S+/g);
	name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
	Common.db.users.findOne({name: name}, function(err, user) {
	if (err || !user) {
		Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
	} else {
		if (user.blacklistType === undefined) {
			var member_msg = "2IRC Nickname: " + Common.utils.toLc(name) + "";
			Common.db.users.update({name: name}, {$set: {blacklistType: 0, blacklistReason: 0, blacklistComment: 0, blacklistRetires: 0, blacklistedBy: 0, blacklistDate: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
					console.log('Error', err);
				}
			});
		} else if (user.blacklistType !== 0) {
			var member_msg = "4[BLACKLISTED]: 2IRC Nickname: " + Common.utils.toLc(name) + "";
		} else {
			var member_msg = "2IRC Nickname: " + Common.utils.toLc(name) + "";
		}
		if (user.main !== 0 && user.main !== undefined) {
			member_msg += ", Main RSNs: " + user.main + "";
		} else if (user.main === 0) {
			member_msg += ", Main RSNs: unknown";
		} else if (user.main === undefined) {
			member_msg += ", Main RSNs: unknown";
			Common.db.users.update({name: name}, {$set: {main: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.main2 !== 0 && user.main2 !== undefined) {
			member_msg += ", " + user.main2 + "";
		} else if (user.main2 === undefined) {
			Common.db.users.update({name: name}, {$set: {main2: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.main3 !== 0 && user.main3 !== undefined) {
			member_msg += ", " + user.main3 + "";
		} else if (user.main3 === undefined) {
			Common.db.users.update({name: name}, {$set: {main3: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.main4 !== 0 && user.main4 !== undefined) {
			member_msg += ", " + user.main4 + "";
		} else if (user.main4 === undefined) {
			Common.db.users.update({name: name}, {$set: {main4: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.main5 !== 0 && user.main5 !== undefined) {
			member_msg += ", " + user.main5 + "";
		} else if (user.main5 === undefined) {
			Common.db.users.update({name: name}, {$set: {main5: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt !== 0 && user.alt !== undefined) {
			member_msg += ", Alt RSNs: " + user.alt + "";
		} else if (user.alt === 0) {
			member_msg += ", Alt RSNs: unknown";
		} else if (user.alt === undefined) {
			member_msg += ", Alt RSNs: unknown";
			Common.db.users.update({name: name}, {$set: {alt: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt2 !== 0 && user.alt2 !== undefined) {
			member_msg += ", " + user.alt2 + "";
		} else if (user.alt2 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt2: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt3 !== 0 && user.alt3 !== undefined) {
			member_msg += ", " + user.alt3 + "";
		} else if (user.alt3 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt3: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt4 !== 0 && user.alt4 !== undefined) {
			member_msg += ", " + user.alt4 + "";
		} else if (user.alt4 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt4: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt5 !== 0 && user.alt5 !== undefined) {
			member_msg += ", " + user.alt5 + "";
		} else if (user.alt5 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt5: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt6 !== 0 && user.alt6 !== undefined) {
			member_msg += ", " + user.alt6 + "";
		} else if (user.alt6 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt6: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt7 !== 0 && user.alt7 !== undefined) {
			member_msg += ", " + user.alt7 + "";
		} else if (user.alt7 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt7: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt8 !== 0 && user.alt8 !== undefined) {
			member_msg += ", " + user.alt8 + "";
		} else if (user.alt8 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt8: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt9 !== 0 && user.alt9 !== undefined) {
			member_msg += ", " + user.alt9 + "";
		} else if (user.alt9 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt9: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.alt10 !== 0 && user.alt10 !== undefined) {
			member_msg += ", " + user.alt10 + "";
		} else if (user.alt10 === undefined) {
			Common.db.users.update({name: name}, {$set: {alt10: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.discord !== undefined) {
			member_msg += ", Discord ID: " + user.discord + "";
		} else if (user.discord === undefined) {
			member_msg += ", Discord ID: unknown";
			Common.db.users.update({name: name}, {$set: {discord: 'unknown'}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.status !== undefined) {
			member_msg += ", Member status: " + user.status + "";
		} else if (user.status === undefined) {
			member_msg += ", Member status: Normal";
			Common.db.users.update({name: name}, {$set: {status: 'Normal'}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		} 
		if (user.retired === 1) {
			member_msg += " & Retired";
		} else if (user.retired === undefined) {
			Common.db.users.update({name: name}, {$set: {retired: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.recruiter === 0) {
			member_msg += ", Recruiter: unknown";
		} else if (user.recruiter !== undefined) {
			member_msg += ", Recruiter: " + user.recruiter + "";
		} else if (user.recruiter === undefined) {
			member_msg += ", Recruiter: unknown";
			Common.db.users.update({name: name}, {$set: {recruiter: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.recruits !== undefined) {
			member_msg += ", Total recruits: " + user.recruits + "";
		} else if (user.recruits === undefined) {
			member_msg += ", Total recruits: 0";
			Common.db.users.update({name: name}, {$set: {recruits: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.goal === 0) {
			member_msg += ", Goals: unknown";
		} else if (user.goal !== undefined) {
			member_msg += ", Goals: " + user.goal + "";
		} else if (user.goal === undefined) {
			member_msg += ", Goals: unknown";
			Common.db.users.update({name: name}, {$set: {goal: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.goal2 !== 0 && user.goal2 !== undefined) {
			member_msg += " & " + user.goal2 + "";
		} else if (user.goal2 === undefined) {
			Common.db.users.update({name: name}, {$set: {goal2: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		member_msg += ", Total warns: " + user.warns + "";
		if (user.rmemreports !== undefined) {
			member_msg += ", Total times reported: " + user.rmemreports + "";
		} else if (user.rmemreports === undefined) {
			member_msg += ", Total times reported: 0";
			Common.db.users.update({name: name}, {$set: {rmemreports: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.pen == 1) {
			member_msg += ", Voluntary pen: On";
		} else if (user.pen == 0) {
			member_msg += ", Voluntary pen: Off";
		} else {
			member_msg += ", Voluntary pen: On";
			Common.db.users.update({name: Common.utils.toDb(name)}, {$set: {pen: 1}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated!");
			} else {
				setTimeout(function() {
					Common.bot.say(to, "4[FORCE UPDATE " + Common.utils.toLc(name) + "]: 6" + Common.utils.toLc(name) + ", you will now be highlighted 3.5 minutes after !hopw with the pen reminder enabled.");
				}, 1000);
			}
			});
		} 
		if (user.idiot == 1) {
			member_msg += ", Idiot pen: On";
		} else if (user.idiot == 0) {
			member_msg += ", Idiot pen: Off";
		} else {
			member_msg += ", Idiot pen: On";
			Common.db.users.update({name: Common.utils.toDb(name)}, {$set: {idiot: 1}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated!");
			} else {
				setTimeout(function() {
					Common.bot.say(to, "4[FORCE UPDATE " + Common.utils.toLc(name) + "]: 6Congratulations " + Common.utils.toLc(name) + ", you're an idiot! You will now be highlighted 3.5 minutes after !hopw with the pen reminder enabled.");
				}, 1000);
			}
			});
		}
		if (user.cache === 1) {
			member_msg += ", Cache reminder: On";
		} else if (user.cache === 0) {
			member_msg += ", Cache reminder: Off";
		} else {
			member_msg += ", Cache reminder: Off";
			Common.db.users.update({name: Common.utils.toDb(name)}, {$set: {cache: 0}}, function(err, updated) {
				if (err || !updated) {
				console.log("User not updated!");
				}
			});
		}
		if (user.smemreports !== undefined) {
			member_msg += ", Total member reports sent: " + user.smemreports + "";
		} else if (user.smemreports === undefined) {
			member_msg += ", Total member reports sent: 0";
			Common.db.users.update({name: name}, {$set: {smemreports: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.sbugreports !== undefined) {
			member_msg += ", Total bug reports sent: " + user.sbugreports + "";
		} else if (user.sbugreports === undefined) {
			member_msg += ", Total bug reports sent: 0";
			Common.db.users.update({name: name}, {$set: {sbugreports: 0}}, {upsert: false}, function(err, updated) {
				if (err || !updated) {
				console.log('Error', err);
				}
			});
		}
		if (user.joinDate === undefined) {
			member_msg += ", Join date: unknown";
			Common.db.users.update({name: Common.utils.toDb(name)}, {$set: {joinDate: 'unknown'}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated!");
			}
			});
		} else if (user.joinDate == 'unknown') {
			member_msg += ", Join date: unknown";
		} else {
			joind = user.joinDate;
			joind = joind.toString();
			joind = joind.substr(0, joind.length-14);
			joind = joind + "UTC";
			member_msg += ", Join date: " + joind + "";
		} if (user.leaveDate === undefined) {
			member_msg += ", Leave date: unknown";
			Common.db.users.update({name: Common.utils.toDb(name)}, {$set: {leaveDate: 'unknown'}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated!");
			}
			});
		} else if (user.leaveDate == 'unknown') {
			member_msg += ", Leave date: unknown";
		} else if (user.leaveDate === 0) {
			member_msg += ", Leave date: n/a";
		} else {
			leaved = user.leaveDate;
			leaved = leaved.toString();
			leaved = leaved.substr(0, leaved.length-14);
			leaved = leaved + "UTC";
			member_msg += ", Leave date: " + leaved + "";
		} if (user.lastSeen === undefined) {
			member_msg += ", Last seen date: unknown";
			Common.db.users.update({name: Common.utils.toDb(name)}, {$set: {lastSeen: 'unknown'}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated!");
			}
			});
		} else if (user.lastSeen == 'unknown') {
			member_msg += ", Last seen date: unknown";
		} else {
			lastseen = user.lastSeen;
			lastseen = lastseen.toString();
			lastseen = lastseen.substr(0, lastseen.length-14);
			lastseen = lastseen + "UTC";
			member_msg += ", Last seen date: " + lastseen + "";
		}
		Common.bot.say(to, member_msg);
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.mem = function(Common, from, to, message) {
	Commands.member(Common, from, to, message);
};

Commands.user = function(Common, from, to, message) {
	Commands.member(Common, from, to, message);
};

Commands.channel = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		name = message.match(/\S+/g);
		chanl = !Common.utils.msg(message) ? Common.utils.toDb(to) : Common.utils.toDb(name[1]);
			if (chanl == 'cwexperts') {
				chanl = '#cwexperts';
			} if (chanl == 'cwexperts1') {
				chanl = '#cwexperts1';
			} if (chanl == 'cwexperts2') {
				chanl = '#cwexperts2';
			} if (chanl == 'cwexperts.staff') {
				chanl = '#cwexperts.staff';
			} if (chanl == 'key') {
				chanl = '#key';
			} if (chanl == '0') {
				chanl = '#cwexperts';
			} if (chanl == '1') {
				chanl = '#cwexperts1';
			} if (chanl == '2') {
				chanl = '#cwexperts2';
			} if (chanl == '3') {
				chanl = '#cwexperts.staff';
			} if (chanl == '4') {
				chanl = '#key';
			}
			Common.db.channels.findOne({channel: chanl}, function(err, channel) {
				if (err || !channel) {
			   		console.log("Channel not found.");
					Common.bot.say(to, "5Channel '" + Common.utils.toLc(chanl) + "' not found. You must specify an official #CwExperts SwiftIRC channel when using this command: #cwexperts, #cwexperts1, #cwexperts2, or #cwexperts.staff. Use the format !channel CHANNEL_HERE.");
				} else {
					var channel_msg = "2Channel: " + chanl + "";
					if (channel.games !== 0) {
						channel_msg += ", Games: Yes";
					} else if (channel.games === 0) {
						channel_msg += ", Games: No";
					} if (channel.world !== 0) {
						channel_msg += ", Current world: " + channel.world + "";
					} else if (channel.world === 0) {
						channel_msg += ", Current world: n/a";
					} if (channel.prev_world !== 0) {
						channel_msg += ", Previous world: " + channel.prev_world + "";
					} else if (channel.prev_world === 0) {
						channel_msg += ", Previous world: n/a";
					} if (channel.prev_world2 !== 0) {
						channel_msg += ", Grandprevious world: " + channel.prev_world2 + "";
					} else if (channel.prev_world2 === 0) {
						channel_msg += ", Grandprevious world: n/a";
					} if (channel.cycle === 2) {
						channel_msg += ", World cycle: Two";
					} else if (channel.cycle === 3) {
						channel_msg += ", World cycle: Three";
					} if (channel.team == 'saradomin') {
						channel_msg += ", Winning team: 10Saradomin2";
					} else if (channel.team == 'zamorak') {
						channel_msg += ", Winning team: 4Zamorak2";
					} else {
						channel_msg += ", Winning team: 10Saradomin2";
						Common.db.channels.update({channel: chanl}, {$set: {team: 'saradomin'}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							setTimeout(function() {
								Common.bot.say(to, "4[FORCE UPDATE " + chanl + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
								Common.bot.say(chanl, "4[FORCE UPDATE " + chanl + "]: 2" + from + " has changed the winning team to: 10Saradomin2.");
							}, 1000);
						}
						});
					} if (channel.lead !== 0) {
						channel_msg += ", Lead:7 " + channel.lead + "2";
					} else if (channel.lead === 0) {
						channel_msg += ", Lead: 7n/a2";
					} if (channel.salt !== 0) {
						channel_msg += ", Salt:7 " + channel.salt + "2";
					} else if (channel.salt === 0) {
						channel_msg += ", Salt: 7n/a2";
					} if (channel.flag !== 0) {
						channel_msg += ", Flag:7 " + channel.flag + "2";
					} else if (channel.flag === 0) {
						channel_msg += ", Flag: 7n/a2";
					}
					channel_msg += ", Early Tickers:";
					if (channel.et1 !== 0) {
						channel_msg += " (1)7 " + channel.et1 + "2";
					} else if (channel.et1 === 0) {
						channel_msg += " (1) 7n/a2";
					} if (channel.et2 !== 0) {
						channel_msg += ", (2)7 " + channel.et2 + "2";
					} else if (channel.et2 === 0) {
						channel_msg += ", (2) 7n/a2";
					} if (channel.et3 !== 0) {
						channel_msg += ", (3)7 " + channel.et3 + "2";
					} else if (channel.et3 === 0) {
						channel_msg += ", (3) 7n/a2";
					} if (channel.coor !== 0) {
						channel_msg += ", Coordinator:7 " + channel.coor + "2";
					} else if (channel.coor === 0) {
						channel_msg += ", Coordinator: 7n/a2";
					} if (channel.pen == 0) {
						channel_msg += ", Pen reminder: On";
					} else if (channel.pen == 1) {
						channel_msg += ", Pen reminder: Off";
					} else {
						channel_msg += ", Pen reminder: On";
						Common.db.channels.update({channel: chanl}, {$set: {pen: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							setTimeout(function() {
								Common.bot.say(to, "4[FORCE UPDATE " + chanl + "]: 6" + from+" has enabled the pen reminder - members with either the voluntary or idiot pen reminder enabled will now be highlighted 3.5 minutes after !hopw.");
								Common.bot.say(chanl, "4[FORCE UPDATE " + chanl + "]: 6" + from+" has enabled the pen reminder - members with either the voluntary or idiot pen reminder enabled will now be highlighted 3.5 minutes after !hopw.");
							}, 1000);
						}
						});
					} if (channel.role == 0) {
						channel_msg += ", Role reminder: On";
					} else if (channel.role == 1) {
						channel_msg += ", Role reminder: Off";
					} else {
						channel_msg += ", Role reminder: On";
						Common.db.channels.update({channel: chanl}, {$set: {role: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							setTimeout(function() {
								Common.bot.say(to, "4[FORCE UPDATE " + chanl + "]: 7" + from+" has enabled the role reminder - members assigned roles will now be highlighted 20 seconds, 9 minutes, or 14 minutes after !hopw, depending on their role(s).");
								Common.bot.say(chanl, "4[FORCE UPDATE " + chanl + "]: 7" + from+" has enabled the role reminder - members assigned roles will now be highlighted 20 seconds, 9 minutes, or 14 minutes after !hopw, depending on their role(s).");
							}, 1000);
						}
						});
					} if (channel.game_lock == 0) {
						channel_msg += ", Game lock: Off";
					} else if (channel.game_lock == 1) {
						channel_msg += ", Game lock: On";
					} else {
						channel_msg += ", Game lock: Off";
						Common.db.channels.update({channel: chanl}, {$set: {game_lock: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							setTimeout(function() {
								Common.bot.say(to, "4[FORCE UPDATE " + chanl + "]: 2" + from+" has disabled the game lock - all members may now use game commands.");
								Common.bot.say(chanl, "4[FORCE UPDATE " + chanl + "]: 2" + from+" has disabled the game lock - all members may now use game commands.");
							}, 1000);
						}
						});
					} if (channel.role_lock == 0) {
						channel_msg += ", Role lock: Off";
					} else if (channel.role_lock == 1) {
						channel_msg += ", Role lock: On";
					} else {
						channel_msg += ", Role lock: Off";
						Common.db.channels.update({channel: chanl}, {$set: {role_lock: 0}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						} else {
							setTimeout(function() {
								Common.bot.say(to, "4[FORCE UPDATE " + chanl + "]: 2" + from+" has disabled the role lock - normal members may now edit roles.");
								Common.bot.say(chanl, "4[FORCE UPDATE " + chanl + "]: 2" + from+" has disabled the role lock - normal members may now edit roles.");
							}, 1000);
						}
						});
					}
					Common.bot.say(to, channel_msg);
				}
			});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.chan = function(Common, from, to, message) {
	Commands.channel(Common, from, to, message);
};
/*
Commands.addcrasher = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to add a crasher to the crasher list.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
	if (memlist[member] != 5 || perms.key === undefined) {
		Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
	} else {
	if (Common.utils.msg(message)) {
		name = message.match(/\S+/g);
		Common.db.crashers.findOne({crasher: Common.utils.toDb(name[1])}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.db.crashers.save({crasher: Common.utils.toDb(name[1]), threat: 2}, function(err, saved) {
			if (err || !saved) {
				console.log('Error', err)
			} else {
				Common.bot.say(to, "4" + Common.utils.toLc(name[1]) + " has been added to the crasher list; it is recommended that all members add this player to all of their ignore lists!");
			}
			});
		} else if (user.threat == 0) {
			Common.db.crashers.update({crasher: Common.utils.toDb(name[1])}, {$set: {threat: 2}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated");
			} else {
				Common.bot.say(to, "4" + Common.utils.toLc(name[1]) + " has been readded to the crasher list; they once again pose a threat!");
			}
			});
		} else if (user.threat == 1) {
			Common.db.crashers.update({crasher: Common.utils.toDb(name[1])}, {$set: {threat: 2}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated");
			} else {
				Common.bot.say(to, "4" + Common.utils.toLc(name[1]) + " has been readded to the crasher list and deleted from the reformed crasher list; they once again pose a threat!");
			}
			});
		} else if (user.threat == 2) {
			Common.bot.say(to, "5" + Common.utils.toLc(name[1]) + " is already on the crasher list! Use !crashers to display the crasher list.");
		}
		});
	} else {
		Common.bot.say(to, '5You must specify the RSN of a crasher to add to the crasher list when using this command.');
	}
	}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to add a crasher to the crasher list.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.addc = function(Common, from, to, message) {
	Commands.addcrasher(Common, from, to, message);
};

Commands.delcrasher = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	var member = Common.utils.toLc(from);
	Common.db.users.findOne({name: member}, function(err, perms) {
	if (err || !perms) {
		console.log(err);
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to delete a crasher from the crasher list.");
	} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
	if (memlist[member] != 5 || perms.key === undefined) {
		Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
	} else {
	if (Common.utils.msg(message)) {
		name = message.match(/\S+/g);
		Common.db.crashers.findOne({crasher: Common.utils.toDb(name[1])}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "5" + name[1] + " is not on the crasher list or the reformed crasher list. Use !crashers to display the crasher list, or use !crashersreformed to display the reformed crasher list.");
		} else if (user.threat == 2) {
			Common.db.crashers.update({crasher: Common.utils.toDb(name[1])}, {$set: {threat: 1}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated");
			} else {
				Common.bot.say(to, "3" + Common.utils.toLc(name[1]) + " has been deleted from the crasher list and added to the reformed crasher list; they no longer pose a threat.");
			}
			});
		} else if (user.threat == 1) {
			Common.db.crashers.update({crasher: Common.utils.toDb(name[1])}, {$set: {threat: 0}}, function(err, updated) {
			if (err || !updated) {
				console.log("User not updated");
			} else {
				Common.bot.say(to, "3" + Common.utils.toLc(name[1]) + " has been deleted from the reformed crasher list.");
			}
			});
		} else if (user.threat == 0) {
			Common.bot.say(to, "5" + name[1] + " is not on the crasher list or the reformed crasher list. Use !crashers to display the crasher list, or use !crashersreformed to display the reformed crasher list.");
		}
		});
        } else {
		Common.bot.say(to, '5You must specify the RSN of a crasher to delete from the crasher list when using this command.');
	}
	}
	} else {
		Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to delete a crasher from the crasher list.");
	}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.delc = function(Common, from, to, message) {
	Commands.delcrasher(Common, from, to, message);
};

Commands.checkcrasher = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	if (Common.utils.msg(message)) {
		name = message.match(/\S+/g);
		Common.db.crashers.findOne({crasher: Common.utils.toDb(name[1])}, function(err, user) {
		if (err || !user) {
			console.log(err);
			Common.bot.say(to, "3" + name[1] + " is not on the crasher list or the reformed crasher list - you should immediately inform a staff member if you suspect that they are a crasher.");
		} else if (user.threat == 2) {
			Common.bot.say(to, "4" + Common.utils.toLc(name[1]) + " is on the crasher list! BEWARE! Use !anticrash to notify all members to prepare to anti-crash!");
		} else if (user.threat == 1) {
			Common.bot.say(to, "3" + Common.utils.toLc(name[1]) + " is on the reformed crasher list; they probably do not pose a threat.");
		} else if (user.threat == 0) {
			Common.bot.say(to, "3" + name[1] + " is not on the crasher list or the reformed crasher list - you should immediately inform a staff member if you suspect that they are a crasher.");
		}
		});
        } else {
		Common.bot.say(to, '5You must specify a crasher RSN when using this command. Use !checkCrasher CRASHER_RSN_HERE to check the crasher lists for a crasher RSN.');
	}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.checkc = function(Common, from, to, message) {
	Commands.checkcrasher(Common, from, to, message);
};

Commands.crashers = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	Common.db.crashers.find({threat: 2}, function(err, crashers) {
		var crashers_list = '';
		crashers.forEach(function(threat) {
			crashers_list += Common.utils.toView(threat.crasher) + ', ';
		});
		if (crashers_list != '') {
			var newcrashers_list = crashers_list.substr(0, crashers_list.length-2);
			Common.bot.say(to, "4Castle Wars Crashers: "+newcrashers_list);
		} else {
			Common.bot.say(to, "3Surprisingly, there aren't any crashers!");
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.crashersreformed = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	Common.db.crashers.find({threat: 1}, function(err, crashers) {
		var crashersr_list = '';
		crashers.forEach(function(threat) {
			crashersr_list += Common.utils.toView(threat.crasher) + ', ';
		});
		if (crashersr_list != '') {
			var newcrashersr_list = crashersr_list.substr(0, crashersr_list.length-2);
			Common.bot.say(to, "4Castle Wars Reformed Crashers: "+newcrashersr_list);
		} else {
			Common.bot.say(to, "3Unsurprisingly, there aren't any reformed crashers!");
		}
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.crashersr = function(Common, from, to, message) {
	Commands.crashersreformed(Common, from, to, message);
};
*/
Commands.members = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
	Common.db.users.find({usercount: undefined}, function(err, users) {
		var user_count = 0;
		users.forEach(function(usercount) {
			user_count++;
		});
		var new_user_count = user_count + 100;
		Common.bot.say(to, "2Total members since May 25th, 2014: " + user_count + " - Total members since July 4th, 2013: ~" + new_user_count + " (use !data to learn more)");
	});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.users = function(Common, from, to, message) {
	Commands.members(Common, from, to, message);
};

Commands.mems = function(Common, from, to, message) {
	Commands.members(Common, from, to, message);
};

Commands.data = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		Common.bot.say(to, "2The total #CwExperts member count since the creation of the superboosting Castle Wars method on July 4th, 2013 is estimated because our first IRC bot did not have the ability to store data.");
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.addrecruiter = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toDb(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + member + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (perms.recruiter !== undefined && perms.recruiter !== 0) {
				Common.bot.say(to, "5" + member + ", you have already set your recruiter to: " + perms.recruiter + " - you may not change your recruiter.");
			} else if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else if (Common.utils.msg(message)) {
				var name = message.match(/\S+/g);
				name = Common.utils.toLc(name[1]);
				if (name == member) {
					Common.bot.say(to, "5" + member + ", you may not set yourself as your recruiter! Use !addRecruiter IRC_NICKNAME_HERE to link your recruiter to your profile.");
				} else {
				Common.db.users.findOne({name: name}, function(err, user) {
					if (err || !user) {
						console.log(err);
						Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
					} else {
						Common.db.users.update({name: member}, {$set: {recruiter: name}}, {upsert: false}, function(err, updated) {
							if (err || !updated) {
								console.log('Error', err);
							} else {
								Common.db.users.update({name: name}, {$inc: { "recruits": 1 }}, {upsert: false}, function(err, updated) {
									if (err || !updated) {
										console.log('Error', err);
									} else {
										Common.db.users.findOne({name: member}, function(err, user1) {
											if (err || !user1) {
												console.log(err);
											} else {
												Common.db.users.findOne({name: name}, function(err, user2) {
													if (err || !user2) {
														console.log(err);
													} else {
														if (user2.recruits == 1) {
															Common.bot.say(to, "2" + member + ", your recruiter has been set to: " + user1.recruiter + ", who has now recruited a total of " + user2.recruits + " member.");
														} else {
															Common.bot.say(to, "2" + member + ", your recruiter has been set to: " + user1.recruiter + ", who has now recruited a total of " + user2.recruits + " members.");
														}
													}
												});
											}
										});
									}
								});
							}
						});
					}
				});
				}
			} else {
				Common.bot.say(to, "5You must specify the member who recruited you when using this command. Use !addRecruiter IRC_NICKNAME_HERE to link your recruiter to your profile.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.addr = function(Common, from, to, message) {
	Commands.addrecruiter(Common, from, to, message);
};

Commands.recruiter = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		name = message.match(/\S+/g);
		name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.recruiter == 'n/a') {
				Common.bot.say(to, "2" + name + " is one of the five founding members of the superboosting Castle Wars method!");
			} else if (user.recruiter === undefined || user.recruiter === 0) {
				Common.bot.say(to, "2" + name + " was recruited by: unknown");
			} else {
				Common.bot.say(to, "2" + name + " was recruited by: " + user.recruiter + "");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.recruits = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		name = message.match(/\S+/g);
		name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else {
				Common.db.users.find({recruiter: name}, function(err, users) {
					var recruits_count = 0;
					var recruits_list = '';
					users.forEach(function(recruiter) {
						recruits_count++;
						recruits_list += '' + recruiter.name + ', ';
					});
					if (recruits_list != '') {
						var newrecruits_list = recruits_list.substr(0, recruits_list.length-2);
						if (recruits_count == 1) {
							Common.bot.say(to, "2" + name + " has recruited a total of " + user.recruits + " member: " + newrecruits_list);
						} else {
							Common.bot.say(to, "2" + name + " has recruited a total of " + user.recruits + " members: " + newrecruits_list);
						}
					} else {
						Common.bot.say(to, "2" + name + " has not recruited any members. SAD!");
					}
				});
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.reportmember = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toDb(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				Common.bot.say(to, "5" + "IRC Nickname '" + member + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else if ((memreportmins[member] === undefined && memreportsecs[member] === undefined) || (memreportmins[member] === 0 && memreportsecs[member] === 0)) {  
				if (Common.utils.msg(message)) {
					var reportmsg = message.match(/\S+/g);
					var report_name = Common.utils.toLc(reportmsg[1]);
					var report_detail = Common.utils.msg(Common.utils.msg(message));
					if (member != report_name) {
					Common.db.users.findOne({name: report_name}, function(err, user) {
						if (err || !user) {
							console.log(err);
							Common.bot.say(to, "5" + "IRC Nickname '" + report_name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
						} else if (reportmsg[2] !== undefined) {
							if (reportmsg[2].length < 5 && reportmsg[3] === undefined) {
								Common.bot.say(to, "5You must provide a detailed report about a member when using this command. Use the format !reportMember IRC_NICKNAME_HERE REPORT HERE to submit a member report.");
							} else {
								var overflow = 0;
								if (report_detail.length > 400) {
									overflow = 1;
								}
							Common.utils.memReportTimer(Common, to, 30, 'rm', 0, member);
							Common.db.reportmembers.find({search: undefined}, function(err, reports) {
								var reportnum = 0;
								reports.forEach(function(search) {
									reportnum++;
								});
								reportnum = reportnum + 1;
								reportnum = reportnum.toString();
								var rmtime = new Date();
								Common.db.reportmembers.save({reportnumber: reportnum, date: rmtime, reviewed: "no", reporter: member, member: report_name, report: report_detail}, function(err, saved) {
									if (err || !saved) {
										console.log('Error', err)
									} else {
										Common.db.users.update({name: member}, {$inc: { "smemreports": 1 }}, {upsert: false}, function(err, updated) {
											if (err || !updated) {
												console.log('Error', err);
											} else {
												Common.db.users.update({name: report_name}, {$inc: { "rmemreports": 1 }}, {upsert: false}, function(err, updated) {
													if (err || !updated) {
														console.log('Error', err);
													} else {
														Common.db.users.findOne({name: member}, function(err, user1) {
															if (err || !user1) {
																console.log(err);
															} else {
																if (user1.smemreports === 1) {
																	if (overflow == 1) {
																		Common.bot.say(to, "3" + member + ", your member report has been submitted for review 4- the maximum character limit may have been exceeded, preventing the overflow from being submitted. 3You have now submitted a total of " + user1.smemreports + " member report.");
																	} else {
																		Common.bot.say(to, "3" + member + ", your member report has been submitted for review. You have now submitted a total of " + user1.smemreports + " member report.");
																	}
																} else {
																	if (overflow == 1) {
																		Common.bot.say(to, "3" + member + ", your member report has been submitted for review 4- the maximum character limit may have been exceeded, preventing the overflow from being submitted. 3You have now submitted a total of " + user1.smemreports + " member reports.");
																	} else {
																		Common.bot.say(to, "3" + member + ", your member report has been submitted for review. You have now submitted a total of " + user1.smemreports + " member reports.");
																	}
																}
															}
														});
													}
												});
											}
										});
									}
								});
							});
							}
						} else {
							Common.bot.say(to, "5You must provide a detailed report about a member when using this command. Use the format !reportMember IRC_NICKNAME_HERE REPORT HERE to submit a member report.");
						}
					});
					} else {
						Common.bot.say(to, "5" + member + ", you may not report yourself! A chair and some rope may solve your problem, though.");
					}
				} else {
					Common.bot.say(to, "5You must specify a member to report when using this command. Use the format !reportMember IRC_NICKNAME_HERE REPORT HERE to submit a member report.");
				}
			} else {
				var timeleftmins = '';
				var timeleftsecs = '';
				if (memreportmins[member] === 1) {
					timeleftmins = " minute ";
				} else {
					timeleftmins = " minutes ";
				} if (memreportsecs[member] === 1) {
					timeleftsecs = " second";
				} else {
					timeleftsecs = " seconds";
				}
				Common.bot.say(to, "5" + member + ", you may only submit one member report every 30 minutes - you must wait " + memreportmins[member] + timeleftmins + memreportsecs[member] + timeleftsecs + " before submitting another member report.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.reportm = function(Common, from, to, message) {
	Commands.reportmember(Common, from, to, message);
};
				
Commands.rm = function(Common, from, to, message) {
	Commands.reportmember(Common, from, to, message);
};

Commands.reportbug = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toDb(from);
		if ((bugreportmins[member] === undefined && bugreportsecs[member] === undefined) || (bugreportmins[member] === 0 && bugreportsecs[member] === 0)) {  
			var reportmsg = message.match(/\S+/g);
			var report_detail = Common.utils.msg(message);
			if (Common.utils.msg(message)) {
				if (reportmsg[1].length < 5 && reportmsg[2] === undefined) {
					Common.bot.say(to, "5You must provide a detailed report about a CWEBot bug when using this command. Use the format !reportBug REPORT HERE to submit a bug report.");
				} else {
					var overflow = 0;
					if (report_detail.length > 400) {
						overflow = 1;
					}
					Common.utils.bugReportTimer(Common, to, 30, 'rb', 0, member);
					Common.db.reportbugs.find({search: undefined}, function(err, reports) {
						var reportnum = 0;
						reports.forEach(function(search) {
							reportnum++;
						});
						reportnum = reportnum + 1;
						reportnum = reportnum.toString();
						var rbtime = new Date();
						Common.db.reportbugs.save({reportnumber: reportnum, date: rbtime, reviewed: "no", reporter: member, report: report_detail}, function(err, saved) {
							if (err || !saved) {
								console.log('Error', err)
							} else {
								Common.db.users.findOne({name: member}, function(err, user1) {
									if (err || !user1) {
										console.log(err);
										if (overflow == 1) {
											Common.bot.say(to, "3" + member + ", your bug report has been submitted for review 4- the maximum character limit may have been exceeded, preventing the overflow from being submitted.");
										} else {
											Common.bot.say(to, "3" + member + ", your bug report has been submitted for review.");
										}
									} else {
										Common.db.users.update({name: member}, {$inc: { "sbugreports": 1 }}, {upsert: false}, function(err, updated) {
											if (err || !updated) {
												console.log('Error', err);
											} else {
												Common.db.users.findOne({name: member}, function(err, user2) {
													if (err || !user2) {
														console.log(err);
													} else {
														if (user2.sbugreports === 1) {
															if (overflow == 1) {
																Common.bot.say(to, "3" + member + ", your bug report has been submitted for review 4- the maximum character limit may have been exceeded, preventing the overflow from being submitted. 3You have now submitted a total of " + user2.sbugreports + " bug report.");
															} else {
																Common.bot.say(to, "3" + member + ", your bug report has been submitted for review. You have now submitted a total of " + user2.sbugreports + " bug report.");
															}
														} else {
															if (overflow == 1) {
																Common.bot.say(to, "3" + member + ", your bug report has been submitted for review 4- the maximum character limit may have been exceeded, preventing the overflow from being submitted. 3You have now submitted a total of " + user2.sbugreports + " bug reports.");
															} else {
																Common.bot.say(to, "3" + member + ", your bug report has been submitted for review. You have now submitted a total of " + user2.sbugreports + " bug reports.");
															}
														}
													}
												});
											}
										});
									}
								});
							}
						});
					});
				}
			} else {
				Common.bot.say(to, "5You must provide a detailed report about a CWEBot bug when using this command. Use the format !reportBug REPORT HERE to submit a bug report.");
			}
		} else {
			var timeleftmins = '';
			var timeleftsecs = '';
			if (bugreportmins[member] === 1) {
				timeleftmins = " minute ";
			} else {
				timeleftmins = " minutes ";
			} if (bugreportsecs[member] === 1) {
				timeleftsecs = " second";
			} else {
				timeleftsecs = " seconds";
			}
			Common.bot.say(to, "5" + member + ", you may only submit one bug report every 30 minutes - you must wait " + bugreportmins[member] + timeleftmins + bugreportsecs[member] + timeleftsecs + " before submitting another bug report.");
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.reportb = function(Common, from, to, message) {
	Commands.reportbug(Common, from, to, message);
};
				
Commands.rb = function(Common, from, to, message) {
	Commands.reportbug(Common, from, to, message);
};

Commands.viewreports = function(Common, from, to, message) {
	if (to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to view all unreviewed bug reports and member reports.");
			} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
				if (memlist[member] != 5 || perms.key === undefined) {
					Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else {
					Common.db.reportbugs.find({reviewed: "no"}, function(err, reports) {
						var reportnum = 0;
						reports.forEach(function(reviewed) {
							reportnum++;
							if (reviewed.date !== undefined) {
								var timemsg = reviewed.date
								timemsg = timemsg.toString();
								timemsg = timemsg.substr(0, timemsg.length-14);
								timemsg = timemsg + "UTC";
							}
							Common.bot.say(to, "2Bug report #: " + reviewed.reportnumber + " - Submitted by: " + reviewed.reporter + " - Time stamp: " + timemsg + " - Details: " + reviewed.report);
						});
						Common.db.reportmembers.find({reviewed: "no"}, function(err, reports2) {
							var reportnumm = 0;
							reports2.forEach(function(reviewed) {
								reportnumm++;
								if (reviewed.date !== undefined) {
									var timemsg = reviewed.date
									timemsg = timemsg.toString();
									timemsg = timemsg.substr(0, timemsg.length-14);
									timemsg = timemsg + "UTC";
								}
								Common.bot.say(to, "2Member report #: " + reviewed.reportnumber + " - Submitted by: " + reviewed.reporter + " - Time stamp: " + timemsg + " - Reported member: " + reviewed.member + " - Details: " + reviewed.report);
							});
							if (reportnum == 0 && reportnumm == 0) {
								Common.bot.say(to, "5Surprisingly, there are no unreviewed bug reports or member reports.");
							}
						});
					});
				}
			} else {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to view all unreviewed bug reports and member reports.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the staff channel to display staff-only information.");
	}
};

Commands.viewr = function(Common, from, to, message) {
	Commands.viewreports(Common, from, to, message);
};

Commands.reviewreport = function(Common, from, to, message) {
	if (to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		var reportmsg = message.match(/\S+/g);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to review bug reports and member reports.");
			} else if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
				if (memlist[member] != 5 || perms.key === undefined) {
					Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else if (Common.utils.msg(message)) {
					var reportkind = Common.utils.toLc(reportmsg[1]);
					if (reportkind == 'bug') {
						if (perms.status == 'Owner') {
							if (reportmsg[2] !== undefined) {
								var reportnum = Common.utils.toLc(reportmsg[2]);
								Common.db.reportbugs.findOne({reportnumber: reportnum}, function(err, report) {
									if (err || !report) {
										Common.bot.say(to, "5" + "Bug report # " + reportnum + " not found. Use !viewReports to view all unreviewed bug reports and member reports.");
									} else if (report.reviewed == 'yes') {
										Common.bot.say(to, "5" + "Bug report # " + reportnum + " has already been marked as reviewed. Use !viewReports to view all unreviewed bug reports and member reports.");
									} else {
										Common.db.reportbugs.update({reportnumber: reportnum}, {$set: {reviewed: "yes"}}, {upsert: false}, function(err, updated) {
											if (err || !updated) {
												console.log('Error', err);
											} else {
												Common.bot.say(to, "3" + "Bug report # " + reportnum + " is now marked as reviewed - thanks for your help " + member + "!");
											}
										});
									}
								});
							} else {
								Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport bug REPORT_NUMBER or !reviewReport member REPORT_NUMBER to review a report.");
							}
						} else {
							Common.bot.say(to, "5This command may only be used by members with Owner member status to review bug reports.");
						}
					} else if (reportkind == 'mem' || reportkind == 'member') {
						if (reportmsg[2] !== undefined) {
							var reportnum = Common.utils.toLc(reportmsg[2]);
							Common.db.reportmembers.findOne({reportnumber: reportnum}, function(err, report) {
								if (err || !report) {
									Common.bot.say(to, "5" + "Member report # " + reportnum + " not found. Use !viewReports to view all unreviewed bug reports and member reports.");
								} else if (report.reviewed == 'yes') {
									Common.bot.say(to, "5" + "Member report # " + reportnum + " has already been marked as reviewed. Use !viewReports to view all unreviewed bug reports and member reports.");
								} else {
									Common.db.reportmembers.update({reportnumber: reportnum}, {$set: {reviewed: "yes"}}, {upsert: false}, function(err, updated) {
										if (err || !updated) {
											console.log('Error', err);
										} else {
											Common.bot.say(to, "3" + "Member report # " + reportnum + " is now marked as reviewed - thanks for your help " + member + "!");
										}
									});
								}
							});
						} else {
							if (perms.status == 'Owner') {
								Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport bug REPORT_NUMBER or !reviewReport member REPORT_NUMBER to review a report.");
							} else {
								Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport member REPORT_NUMBER to review a report.");
							}	
						}
					} else {
						if (perms.status == 'Owner') {
							Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport bug REPORT_NUMBER or !reviewReport member REPORT_NUMBER to review a report.");
						} else {
							Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport member REPORT_NUMBER to review a report.");
						}
					}
				} else {
					if (perms.status == 'Owner') {
						Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport bug REPORT_NUMBER or !reviewReport member REPORT_NUMBER to review a report.");
					} else {
						Common.bot.say(to, "5You must specify a report to review when using this command. Use the format !reviewReport member REPORT_NUMBER to review a report.");
					}
				}
			} else {
				Common.bot.say(to, "5This command may only be used by members with Staff, Admin, or Owner member status to review bug reports and member reports.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the staff channel to display staff-only information.");
	}
};

Commands.reviewr = function(Common, from, to, message) {
	Commands.reviewreport(Common, from, to, message);
};

Commands.addgoal = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toDb(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + member + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (perms.goal !== undefined && perms.goal !== 0) {
				if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
					Common.bot.say(to, "5" + member + ", you have already set your primary Castle Wars goal to: " + perms.goal + " - you may not change your primary Castle Wars goal. Use !editGoal GOAL_HERE to link your new/secondary Castle Wars goal to your profile.");
				} else {
					Common.bot.say(to, "5" + member + ", you have already set your primary Castle Wars goal to: " + perms.goal + " - you may not change your primary Castle Wars goal. Use !editGoal GOAL_HERE in the games channels to link your new/secondary Castle Wars goal to your profile.");
				}
			} else if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else if (Common.utils.msg(message)) {
				var goal = message.match(/\S+/g);
				goal = Common.utils.toLc(goal[1]);
				if (goal == 'ardy' || goal == 'task' || goal == 'thaler' || goal == 'halo' || goal == 'hybrid' || goal == 'helms' || goal == 'trim' || goal == 'profound' || goal == '500cape' || goal == '1000cape' || goal == '1kcape' || goal == '5000cape' || goal == '5kcape' || goal == 'ranks' || goal == 'hiscores') {
					if (goal == 'ardy' || goal == 'task') {
						goal = 'Ardougne task';
					} else if (goal == 'thaler') {
						goal = 'Thaler';
					} else if (goal == 'halo') {
						goal = 'Halo';
					} else if (goal == 'hybrid' || goal == 'helms') {
						goal = 'Hybrid helms';
					} else if (goal == 'trim' || goal == 'profound') {
						goal = 'Full Profound/Trim requirement';
					} else if (goal == '500cape') {
						goal = 'Hobbyist cape';
					} else if (goal == '1kcape' || goal == '1000cape') {
						goal = 'Enthusiast cape';
					} else if (goal == '5kcape' || goal == '5000cape') {
						goal = 'Professional cape';
					} else if (goal == 'ranks' || goal == 'hiscores') {
						goal = 'Hiscore ranks';
					}
					Common.db.users.update({name: member}, {$set: {goal: goal}}, {upsert: false}, function(err, updated) {
						if (err || !updated) {
							console.log('Error', err);
						} else {
							Common.bot.say(to, "2" + member + ", your primary Castle Wars goal has been set to: " + goal + "");
						}
					});
				} else {
					Common.bot.say(to, "5You must specify your primary Castle Wars goal when using this command: task, thaler, halo, hybrid, trim, 500cape, 1kcape, 5kcape, or ranks. Use !addGoal GOAL_HERE to link your primary Castle Wars goal to your profile.");
				}
			} else {
				Common.bot.say(to, "5You must specify your primary Castle Wars goal when using this command: task, thaler, halo, hybrid, trim, 500cape, 1kcape, 5kcape, or ranks. Use !addGoal GOAL_HERE to link your primary Castle Wars goal to your profile.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.editgoal = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toDb(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5" + "IRC Nickname '" + member + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (perms.goal === undefined || perms.goal === 0) {
				Common.bot.say(to, "5" + member + ", you have not set your primary Castle Wars goal. Use !addGoal GOAL_HERE to link your primary Castle Wars goal to your profile.");
			} else if (memlist[member] != 5 || perms.key === undefined) {
				Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
			} else if (Common.utils.msg(message)) {
				var goal = message.match(/\S+/g);
				goal = Common.utils.toLc(goal[1]);
				var state = '';
				if (goal == 'none' || goal == 'ardy' || goal == 'task' || goal == 'thaler' || goal == 'halo' || goal == 'hybrid' || goal == 'helms' || goal == 'trim' || goal == 'profound' || goal == '500cape' || goal == '1000cape' || goal == '1kcape' || goal == '5000cape' || goal == '5kcape' || goal == 'ranks' || goal == 'hiscores') {
					if (goal == 'none') {
						goal = 0;
					} else if (goal == 'ardy' || goal == 'task') {
						goal = 'Ardougne task';
					} else if (goal == 'thaler') {
						goal = 'Thaler';
					} else if (goal == 'halo') {
						goal = 'Halo';
					} else if (goal == 'hybrid' || goal == 'helms') {
						goal = 'Hybrid helms';
					} else if (goal == 'trim' || goal == 'profound') {
						goal = 'Full Profound/Trim requirement';
					} else if (goal == '500cape') {
						goal = 'Hobbyist cape';
					} else if (goal == '1kcape' || goal == '1000cape') {
						goal = 'Enthusiast cape';
					} else if (goal == '5kcape' || goal == '5000cape') {
						goal = 'Professional cape';
					} else if (goal == 'ranks' || goal == 'hiscores') {
						goal = 'Hiscore ranks';
					}
					if (perms.goal2 === undefined || perms.goal2 === 0) {
						state = 'set';
					} else {
						state = 'changed';
					}
					if (perms.goal != goal) {
						if (perms.goal2 != goal) {
							Common.db.users.update({name: member}, {$set: {goal2: goal}}, {upsert: false}, function(err, updated) {
								if (err || !updated) {
									console.log('Error', err);
								} else if (goal == 0 && perms.goal2 === undefined) {
									Common.bot.say(to, "5" + member + ", your new/secondary Castle Wars goal is already cleared.");
								} else if (goal == 0) {
									Common.bot.say(to, "2" + member + ", your new/secondary Castle Wars goal has been cleared.");
								} else {
									Common.bot.say(to, "2" + member + ", your new/secondary Castle Wars goal has been " + state + " to: " + goal + "");
								}   
							});
						} else if (goal == 0) {
							Common.bot.say(to, "5" + member + ", your new/secondary Castle Wars goal is already cleared.");
						} else {
							Common.bot.say(to, "5" + member + ", your new/secondary Castle Wars goal is already set to: " + goal + "");
						}
					} else {
						Common.bot.say(to, "5" + member + ", your primary Castle Wars goal is already set to: " + goal + " - you must choose a different new/secondary Castle Wars goal to link to your profile.");
					}
				} else {
					Common.bot.say(to, "5You must specify your new/secondary Castle Wars goal when using this command: none, task, thaler, halo, hybrid, trim, 500cape, 1kcape, 5kcape, or ranks. Use !editGoal GOAL_HERE to link your new/secondary Castle Wars goal to your profile.");
				}
			} else {
				Common.bot.say(to, "5You must specify your new/secondary Castle Wars goal when using this command: none, task, thaler, halo, hybrid, trim, 500cape, 1kcape, 5kcape, or ranks. Use !editGoal GOAL_HERE to link your new/secondary Castle Wars goal to your profile.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.goal = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		name = message.match(/\S+/g);
		name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.goal === undefined || user.goal === 0) {
				Common.bot.say(to, "2" + name + "'s Castle Wars goals are: unknown");
			} else if (user.goal2 !== undefined && user.goal2 !== 0) {
				Common.bot.say(to, "2" + name + "'s Castle Wars goals are: " + user.goal + " & " + user.goal2 + "");
			} else {
				Common.bot.say(to, "2" + name + "'s Castle Wars goal is: " + user.goal + "");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.goals = function(Common, from, to, message) {
	Commands.goal(Common, from, to, message);
};

Commands.date = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		name = message.match(/\S+/g);
		name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else {
				var date_msg = "2IRC Nickname: " + name + "";
				if (user.joinDate === undefined || user.joinDate == 'unknown') {
					date_msg += ", Join date: unknown";
				} else {
					var joind = user.joinDate;
					joind = joind.toString();
					joind = joind.substr(0, joind.length-14);
					joind = joind + "UTC";
					date_msg += ", Join date: " + joind + "";
				}
				if (user.leaveDate === undefined || user.leaveDate == 'unknown') {
					date_msg += ", Leave date: unknown";
				} else if (user.leaveDate === 0) {
					date_msg += ", Leave date: n/a";
				} else {
					var leaved = user.leaveDate;
					leaved = leaved.toString();
					leaved = leaved.substr(0, leaved.length-14);
					leaved = leaved + "UTC";
					date_msg += ", Leave date: " + leaved + "";
				}
				if (user.lastSeen === undefined || user.lastSeen == 'unknown') {
					date_msg += ", Last seen date: unknown";
				} else {
					var lastseen = user.lastSeen;
					lastseen = lastseen.toString();
					lastseen = lastseen.substr(0, lastseen.length-14);
					lastseen = lastseen + "UTC";
					date_msg += ", Last seen date: " + lastseen + "";
				}
				if (user.blacklistDate !== undefined && user.blacklistDate !== 0) {
					var bldate = user.blacklistDate;
					bldate = bldate.toString();
					bldate = bldate.substr(0, bldate.length-14);
					bldate = bldate + "UTC";
					date_msg += ", Blacklisted date: " + bldate + "";
				}
				Common.bot.say(to, date_msg);
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.dates = function(Common, from, to, message) {
	Commands.date(Common, from, to, message);
};

Commands.checkprofile = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		name = message.match(/\S+/g);
		name = !Common.utils.msg(message) ? Common.utils.toDb(from) : Common.utils.toDb(name[1]);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else if (user.key === undefined || user.main === undefined || user.main === 0 || user.alt === undefined || user.alt === 0 || user.discord === undefined || user.discord == 'unknown' || user.recruiter === undefined || user.recruiter === 0 || user.goal === undefined || user.goal === 0 || user.joinDate === undefined || user.joinDate == 'unknown') {
				var profile = '';
				if (user.key === undefined) {
					profile += "!profileKey, ";
				}
				if (user.main === undefined || user.main === 0) {
					profile += "!addMain MAIN_RSN_HERE, ";
				}
				if (user.alt === undefined || user.alt === 0) {
					profile += "!addAlt ALT_RSN_HERE, ";
				}
				if (user.discord === undefined || user.discord == 'unknown') {
					profile += "!addDiscordID EXAMPLE_NAME # 0 0 0 0, ";
				}
				if (user.recruiter === undefined || user.recruiter === 0) {
					profile += "!addRecruiter IRC_NICKNAME_HERE, ";
				}
				if (user.goal === undefined|| user.goal === 0) {
					profile += "!addGoal GOAL_HERE, ";
				}
				if (user.joinDate === undefined || user.joinDate == 'unknown') {
					if (profile == '') {
						profile += "inform a member with Owner member status of the date you joined, ";
					} else {
						profile += "and inform a member with Owner member status of the date you joined, ";
					}
				}
				profile = profile.substr(0, profile.length-2);
				Common.bot.say(to, "2Profile: " + name + ", Status: 4incomplete2, Required: " + profile);
			} else {
				Common.bot.say(to, "2Profile: " + name + ", Status: 3complete2!");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.cp = function(Common, from, to, message) {
	Commands.checkprofile(Common, from, to, message);
};

Commands.addircnickname = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var name = Common.utils.toLc(from);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else {
				Common.bot.say(to, "5" + name + ", you may not link additional IRC nicknames to your profile - if you wish to use a different IRC nickname you must create a new profile.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.addircn = function(Common, from, to, message) {
	Commands.addircnickname(Common, from, to, message);
};

Commands.addirc = function(Common, from, to, message) {
	Commands.addircnickname(Common, from, to, message);
};

Commands.editircnickname = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var name = Common.utils.toLc(from);
		Common.db.users.findOne({name: name}, function(err, user) {
			if (err || !user) {
				Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use !addMain MAIN_RSN_HERE or !addAlt ALT_RSN_HERE to create your profile.");
			} else {
				Common.bot.say(to, "5" + name + ", you may not change the IRC nickname linked to your profile - if you wish to use a different IRC nickname you must create a new profile.");
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.editircn = function(Common, from, to, message) {
	Commands.editircnickname(Common, from, to, message);
};

Commands.editirc = function(Common, from, to, message) {
	Commands.editircnickname(Common, from, to, message);
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
								if (justadded[name] == 1) {
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
										Common.bot.say(to, "5" + member + ", you may not force start the 'complete profile' reminder for " + name + " because they are not present in a games channel - however, their immunity has been removed and it will now automatically start when appropriate.");
									}
								} else if (everyoneLc['#cwexperts1'].indexOf(name) > -1 || everyoneLc['#cwexperts2'].indexOf(name) > -1) {
									Common.bot.say(to, "5The 'complete profile' reminder for " + name + " is already active!");
								} else {
									Common.bot.say(to, "5" + member + ", you may not force start the 'complete profile' reminder for " + name + " because they are not present in a games channel - it will automatically start when appropriate.");
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

Commands.blacklist = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to add a user to the blacklist.");
			} else if (perms.status == 'Admin' || perms.status == 'Owner') {
				if (memlist[member] != 5 || perms.key === undefined) {
					Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else if (Common.utils.msg(message)) {
					var blmsg = message.match(/\S+/g);
					var name = Common.utils.toLc(blmsg[1]);
					if (name == 'non/member' || name == 'n/m') {
						if (blmsg[2] !== undefined) {
							var identity = Common.utils.toLc(blmsg[2]);
							Common.db.users.findOne({name: identity}, function(err, user) {
								if (err || !user) {
									Common.db.blacklists.findOne({identity: identity}, function(err, bluser) {
										if (err || !bluser || bluser.blacklistType === undefined || bluser.blacklistType === 0) {
											if (blmsg[3] !== undefined) {
												var blr = Common.utils.toLc(blmsg[3]);
												if (blr == 'failedjoin' || blr == 'crasher' || blr == 'other' || blr == '1' || blr == '2' || blr == '3') {
													var blacklist_reason = '';
													var additional_comment = '';
													var bltime = new Date();
													if (blr == 'failedjoin' || blr == '1') {
														blr = 'failedjoin';
														blacklist_reason = "failed to join cwexperts and give reasoning before leaving cwexperts discord server";
														if (blmsg[4] !== undefined) {
															additional_comment = Common.utils.msg(Common.utils.msg(Common.utils.msg(Common.utils.msg(message))));
														}
													} else if (blr == 'crasher' || blr == '2') {
														blr = 'crasher';
														blacklist_reason = "confirmed crasher spotted at cwexperts games";
														if (blmsg[4] !== undefined) {
															additional_comment = Common.utils.msg(Common.utils.msg(Common.utils.msg(Common.utils.msg(message))));
														}
													} else if (blr == 'other' || blr == '3') {
														blr = 'other'
														if (blmsg[4] !== undefined) {
															if (blmsg[4].length > 5 || blmsg[5] !== undefined) {
																blacklist_reason = Common.utils.msg(Common.utils.msg(Common.utils.msg(Common.utils.msg(message))));
															}
														}
													}
													setTimeout(function() {
													if (blacklist_reason != '') {
														Common.db.blacklists.findOne({identity: identity}, function(err, bluser1) {
															if (err || !bluser1) {
																Common.db.blacklists.save({identity: identity, blacklistType: blr, blacklistReason: blacklist_reason, blacklistedBy: member, blacklistDate: bltime}, function(err, saved) {
																	if (err || !saved) {
																		console.log('Error', err);
																	} else {
																		Common.bot.say(to, "2" + member + " has just added " + identity + " to the non-member blacklist for the following reason: " + blacklist_reason);
																		if (additional_comment != '') {
																			Common.db.blacklists.update({identity: identity}, {$set: {additionalComment: additional_comment}}, {upsert: false}, function(err, updated) {
																				if (err || !updated) {
																					console.log('Error', err);
																				}
																			});
																		}
																	}
																});
															} else {
																Common.db.blacklists.update({identity: identity}, {$set: {blacklistType: blr, blacklistReason: blacklist_reason, blacklistedBy: member, blacklistDate: bltime}}, {upsert: false}, function(err, updated) {
																	if (err || !updated) {
																		console.log('Error', err);
																	} else {
																		Common.bot.say(to, "2" + member + " has just added " + identity + " to the non-member blacklist for the following reason: " + blacklist_reason);
																		if (additional_comment != '') {
																			Common.db.blacklists.update({identity: identity}, {$set: {additionalComment: additional_comment}}, {upsert: false}, function(err, updated) {
																				if (err || !updated) {
																					console.log('Error', err);
																				}
																			});
																		}
																	}
																});
															}
														});
													} else {
														Common.bot.say(to, "5You must provide a valid reason as to why you are adding a non-member to the blacklist when using this command: 1 (failedjoin), 2 (crasher), or 3 (other). Use the format !blacklist non/member IDENTITY_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a non-member to the blacklist.");
													}
													}, 1000);
												} else {
													Common.bot.say(to, "5You must provide a valid reason as to why you are adding a non-member to the blacklist when using this command: 1 (failedjoin), 2 (crasher), or 3 (other). Use the format !blacklist non/member IDENTITY_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a non-member to the blacklist.");
												}
											} else {
												Common.bot.say(to, "5You must provide a valid reason as to why you are adding a non-member to the blacklist when using this command: 1 (failedjoin), 2 (crasher), or 3 (other). Use the format !blacklist non/member IDENTITY_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a non-member to the blacklist.");
											}
										} else {
											Common.bot.say(to, "5" + identity + " is already on the non-member blacklist. Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
										}
									});
								} else if (member == identity) {
									if (user.blacklistType !== undefined && user.blacklistType !== 0) {
										Common.bot.say(to, "5" + member + ", you are already on the member blacklist! Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
									} else {
										Common.bot.say(to, "5" + member + ", you may not add yourself to the blacklist! You have been added to the niggerlist, though.");
									}
								} else if (user.blacklistType !== undefined && user.blacklistType !== 0) {
									Common.bot.say(to, "5" + identity + " is already on the member blacklist. Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
								} else if (user.status == 'Admin' || user.status == 'Owner') {
									Common.bot.say(to, "5Permission denied - " + member + ", you may not add a member with Admin or Owner member status to the blacklist.");
								} else {
									Common.bot.say(to, "5" + member + ", you may not add a member to the non-member blacklist. Use the format !blacklist IRC_NICKNAME_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a member to the blacklist.");
								}
							});
						} else {
							Common.bot.say(to, "5You must specify a non-member to add to the blacklist when using this command. Use the format !blacklist non/member IDENTITY_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a non-member to the blacklist.");
						}
					} else {
						Common.db.users.findOne({name: name}, function(err, user) {
							if (err || !user) {
								console.log(err);
								Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use the format !blacklist non/member IDENTITY_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a non-member to the blacklist.");
							} else if (member == name) {
								if (user.blacklistType !== undefined && user.blacklistType !== 0) {
									Common.bot.say(to, "5" + member + ", you are already on the member blacklist! Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
								} else {
									Common.bot.say(to, "5" + member + ", you may not add yourself to the blacklist! You have been added to the niggerlist, though.");
								}
							} else if (user.blacklistType !== undefined && user.blacklistType !== 0) {
								Common.bot.say(to, "5" + name + " is already on the member blacklist. Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
							} else if (user.status == 'Admin' || user.status == 'Owner') {
								Common.bot.say(to, "5Permission denied - " + member + ", you may not add a member with Admin or Owner member status to the blacklist.");
							} else if (blmsg[2] !== undefined) {
								var blr = Common.utils.toLc(blmsg[2]);
								if (blr == 'failedretire' || blr == 'crasher' || blr == 'warns' || blr == 'other'|| blr == '1' || blr == '2' || blr == '3' || blr == '4') {
									var blacklist_reason = '';
									var additional_comment = '';
									var bltime = new Date();
									if (blr == 'failedretire' || blr == '1') {
										var retireplus1 = 'yes';
										var retiredeposit = '';
										if (user.blacklistRetires === undefined || user.blacklistRetires === 0) {
											retiredeposit = '250m';
										} else if (user.blacklistRetires === 1) {
											retiredeposit = '500m';
										} else if (user.blacklistRetires === 2) {
											retiredeposit = '1000m';
										} else if (user.blacklistRetires === 3) {
											retiredeposit = '2000m';
										} else if (user.blacklistRetires === 4) {
											retiredeposit = '4000m';
										} else if (user.blacklistRetires === 5) {
											retiredeposit = '8000m';
										} else {
											retiredeposit = 'Lots!';
										}
										blr = 'failedretire';
										blacklist_reason = "failed to complete the retirement process and must make a " + retiredeposit + " deposit to rejoin";
										if (blmsg[3] !== undefined) {
											additional_comment = Common.utils.msg(Common.utils.msg(Common.utils.msg(message)));
										}
									} else if (blr == 'crasher' || blr == '2') {
										blr = 'crasher';
										blacklist_reason = "confirmed crasher spotted at cwexperts games";
										if (blmsg[3] !== undefined) {
											additional_comment = Common.utils.msg(Common.utils.msg(Common.utils.msg(message)));
										}
									} else if (blr == 'warns' || blr == '3') {
										blr = 'warns';
										if (user.warns == 21) {
											blacklist_reason = "earned 21 warns and must make a 500m deposit to rejoin";
										} else if (user.warns >= 25) {
											blacklist_reason = "earned at least 25 warns and may not rejoin unless an agreement is made with owners";
										} else {
											blacklist_reason = "earned only " + user.warns + " warns but made severe enough mistakes to warrant a perm ban";
										}
										if (blmsg[3] !== undefined) {
											additional_comment = Common.utils.msg(Common.utils.msg(Common.utils.msg(message)));
										}
									} else if (blr == 'other' || blr == '4') {
										blr = 'other'
										if (blmsg[3] !== undefined) {
											if (blmsg[3].length > 5 || blmsg[4] !== undefined) {
												blacklist_reason = Common.utils.msg(Common.utils.msg(Common.utils.msg(message)));
											}
										}
									}
									setTimeout(function() {
									if (blacklist_reason != '') {
										if (user.joinDate === undefined) {
											Common.db.users.update({name: name}, {$set: {joinDate: 'unknown', leaveDate: bltime, retired: 1}}, function(err, updated) {
												if (err || !updated) {
													console.log("User not updated!");
												}
											});
										} else if (user.leaveDate === 0 || user.leaveDate == 'unknown') {	
											Common.db.users.update({name: name}, {$set: {leaveDate: bltime, retired: 1}}, function(err, updated) {
												if (err || !updated) {
													console.log("User not updated!");
												}
											});
										} else {
											Common.db.users.update({name: name}, {$set: {retired: 1}}, function(err, updated) {
												if (err || !updated) {
													console.log("User not updated!");
												}
											});
										}
										Common.db.users.update({name: name}, {$set: {blacklistType: blr, blacklistReason: blacklist_reason, blacklistedBy: member, blacklistDate: bltime}}, {upsert: false}, function(err, updated) {
											if (err || !updated) {
												console.log('Error', err);
											} else {
												Common.bot.say(to, "2" + member + " has just added " + name + " to the member blacklist for the following reason: " + blacklist_reason);
											}
										});
										if (additional_comment != '') {
											Common.db.users.update({name: name}, {$set: {blacklistComment: additional_comment}}, {upsert: false}, function(err, updated) {
												if (err || !updated) {
													console.log('Error', err);
												}
											});
										}
										if (retireplus1 == 'yes') {
											if (user.blacklistRetires === undefined || user.blacklistRetires === 0) {
												Common.db.users.update({name: name}, {$set: {blacklistRetires: 1}}, {upsert: false}, function(err, updated) {
													if (err || !updated) {
														console.log('Error', err);
													}
												});
											} else {
												var retiresCount = user.blacklistRetires + 1;
												Common.db.users.update({name: name}, {$set: {blacklistRetires: retiresCount}}, {upsert: false}, function(err, updated) {
													if (err || !updated) {
														console.log('Error', err);
													}
												});
											}
										}
									} else {
										Common.bot.say(to, "5You must provide a valid reason as to why you are adding a member to the blacklist when using this command: 1 (failedretire), 2 (crasher), 3 (warns), or 4 (other). Use the format !blacklist IRC_NICKNAME_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a member to the blacklist.");
									}
									}, 1000);
								} else {
									Common.bot.say(to, "5You must provide a valid reason as to why you are adding a member to the blacklist when using this command: 1 (failedretire), 2 (crasher), 3 (warns), or 4 (other). Use the format !blacklist IRC_NICKNAME_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a member to the blacklist.");
								}
							} else {
								Common.bot.say(to, "5You must provide a valid reason as to why you are adding a member to the blacklist when using this command: 1 (failedretire), 2 (crasher), 3 (warns), or 4 (other). Use the format !blacklist IRC_NICKNAME_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a member to the blacklist.");	       
							}
						});
					}
				} else {
					Common.bot.say(to, "5You must specify a user to add to the blacklist when using this command. Use the format !blacklist non/member IDENTITY_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a non-member to the blacklist, or use the format !blacklist IRC_NICKNAME_HERE REASON_HERE ADDITIONAL REASON/COMMENT HERE to add a member to the blacklist.");
				}
			} else {
				Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to add a user to the blacklist.");	
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};

Commands.bl = function(Common, from, to, message) {
	Commands.blacklist(Common, from, to, message);
};

Commands.whitelist = function(Common, from, to, message) {
	if (to == '#cwexperts' || to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		var member = Common.utils.toLc(from);
		Common.db.users.findOne({name: member}, function(err, perms) {
			if (err || !perms) {
				console.log(err);
				Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to remove a user from the blacklist.");
			} else if (perms.status == 'Admin' || perms.status == 'Owner') {
				if (memlist[member] != 5 || perms.key === undefined) {
					Common.bot.say(to, "5" + member + ", you must unlock your profile before you may use this command. Use !unlockProfile to unlock your profile.");
				} else if (Common.utils.msg(message)) {
					var blmsg = message.match(/\S+/g);
					var name = Common.utils.toLc(blmsg[1]);
					if (name == 'non/member' || name == 'n/m') {
						if (blmsg[2] !== undefined) {
							var identity = Common.utils.toLc(blmsg[2]);
							Common.db.users.findOne({name: identity}, function(err, user) {
								if (err || !user) {
									Common.db.blacklists.findOne({identity: identity}, function(err, bluser) {
										if (err || !bluser || bluser.blacklistType === undefined || bluser.blacklistType === 0) {
											Common.bot.say(to, "5" + identity + " is not on the non-member blacklist. Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");	
										} else {
											Common.db.blacklists.update({identity: identity}, {$set: {blacklistType: 0, blacklistReason: 0, additionalComment: 0, blacklistedBy: 0, blacklistDate: 0}}, {upsert: false}, function(err, updated) {
												if (err || !updated) {
													console.log('Error', err);
												} else {
													Common.bot.say(to, "2" + member + " has just removed " + identity + " from the non-member blacklist.");
												}
											});
										}
									});
								} else if (member == identity) {
									if (user.blacklistType === undefined || user.blacklistType === 0) {
										Common.bot.say(to, "5" + member + ", you are not on the member blacklist! Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
									} else {
										Common.bot.say(to, "5" + member + ", you may not remove yourself from the blacklist! You have been removed from Santa's nice list, though.");
									}
								} else if (user.blacklistType === undefined || user.blacklistType === 0) {
									Common.bot.say(to, "5" + identity + " is not on the member blacklist. Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
								} else if (user.status == 'Admin' || user.status == 'Owner') {
									Common.bot.say(to, "5Permission denied - " + member + ", you may not remove a member with Admin or Owner member status from the blacklist.");
								} else {
									Common.bot.say(to, "5IRC Nickname '" + identity + "' is a member and is therefore on the member blacklist, not the non-member blacklist. Use the format !whitelist IRC_NICKNAME_HERE to remove a member from the blacklist.");
								}
							});
						} else {
							Common.bot.say(to, "5You must specify a non-member to remove from the blacklist when using this command. Use the format !whitelist non/member IDENTITY_HERE to remove a non-member from the blacklist.");
						}
					} else {
						Common.db.users.findOne({name: name}, function(err, user) {
							if (err || !user) {
								console.log(err);
								Common.bot.say(to, "5" + "IRC Nickname '" + name + "' not found. Use the format !whitelist non/member IDENTITY_HERE to remove a non-member from the blacklist.");
							} else if (member == name) {
								if (user.blacklistType === undefined || user.blacklistType === 0) {
									Common.bot.say(to, "5" + member + ", you are not on the member blacklist! Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
								} else {
									Common.bot.say(to, "5" + member + ", you may not remove yourself from the blacklist! You have been removed from Santa's nice list, though.");
								}
							} else if (user.blacklistType === undefined || user.blacklistType === 0) {
								Common.bot.say(to, "5" + name + " is not on the member blacklist. Use !blacklists to view the list of all users currently on the blacklist, or use !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
							} else if (user.status == 'Admin' || user.status == 'Owner') {
								Common.bot.say(to, "5Permission denied - " + member + ", you may not remove a member with Admin or Owner member status from the blacklist.");
							} else {
								Common.db.users.update({name: name}, {$set: {blacklistType: 0, blacklistReason: 0, blacklistComment: 0, blacklistedBy: 0, blacklistDate: 0}}, {upsert: false}, function(err, updated) {
									if (err || !updated) {
										console.log('Error', err);
									} else {
										Common.bot.say(to, "2" + member + " has just removed " + name + " from the member blacklist.");
									}
								});
							}
						});
					}
				} else {
					Common.bot.say(to, "5You must specify a user to remove from the blacklist when using this command. Use the format !whitelist non/member IDENTITY_HERE to remove a non-member from the blacklist, or use the format !whitelist IRC_NICKNAME_HERE to remove a member from the blacklist.");
				}
			} else {
				Common.bot.say(to, "5This command may only be used by members with Admin or Owner member status to remove a user from the blacklist.");	
			}
		});
	} else {
		Common.bot.say(to, "5This command may only be used in the lobby channel and the games channels to display member-only information.");
	}
};
										
Commands.wl = function(Common, from, to, message) {
	Commands.whitelist(Common, from, to, message);
};

function blacklists(Common, from, to, message) {
	Common.db.users.find({usercount: undefined}, function(err, users) {
		var mbl_list = '';
		users.forEach(function(usercount) {
			if (usercount.blacklistType !== undefined && usercount.blacklistType !== 0) {
				mbl_list += usercount.name + ", ";
			}
		});
		Common.db.blacklists.find({usercount: undefined}, function(err, users) {
			var nbl_list = '';
			users.forEach(function(usercount) {
				if (usercount.blacklistType !== undefined && usercount.blacklistType !== 0) {
					nbl_list += usercount.identity + ", ";
				}
			});
			if (mbl_list != '') {
				var newmbl_list = mbl_list.substr(0, mbl_list.length-2);
				Common.bot.say(to, "2Member Blacklist: " + newmbl_list);
			}
			if (nbl_list != '') {
				var newnbl_list = nbl_list.substr(0, nbl_list.length-2);
				Common.bot.say(to, "2Non-Member Blacklist: " + newnbl_list);
			}
			if (mbl_list == '' && nbl_list == '') {
				Common.bot.say(to, "5Surprisingly, there aren't any blacklisted users!");
			}
		});
	});
};

Commands.blacklists = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		if (Common.utils.msg(message)) {
			var blmsg = message.match(/\S+/g);
			blmsg = Common.utils.toLc(blmsg[1]);
			if (blmsg == 'members' || blmsg == 'member' || blmsg == 'mems' || blmsg == 'mem' || blmsg == 'm') {
				Common.db.users.find({usercount: undefined}, function(err, users) {
					var mbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType !== undefined && usercount.blacklistType !== 0) {
							mbl_list += usercount.name + ", ";
						}
					});
					if (mbl_list != '') {
						var newmbl_list = mbl_list.substr(0, mbl_list.length-2);
						Common.bot.say(to, "2Member Blacklist: " + newmbl_list);
					} else {
						Common.bot.say(to, "5Surprisingly, there aren't any blacklisted members!");
					}
				});
			} else if (blmsg == 'non-members' || blmsg == 'non-member' || blmsg == 'non-mems' || blmsg == 'non-mem' || blmsg == 'nm') {
				Common.db.blacklists.find({usercount: undefined}, function(err, users) {
					var nbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType !== undefined && usercount.blacklistType !== 0) {
							nbl_list += usercount.identity + ", ";
						}
					});
					if (nbl_list != '') {
						var newnbl_list = nbl_list.substr(0, nbl_list.length-2);
						Common.bot.say(to, "2Non-Member Blacklist: " + newnbl_list);
					} else {
						Common.bot.say(to, "5Surprisingly, there aren't any blacklisted non-members!");
					}
				});
			} else if (blmsg == 'failedjoin' || blmsg == 'fj') {
				Common.db.blacklists.find({usercount: undefined}, function(err, users) {
					var nbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType == 'failedjoin') {
							nbl_list += usercount.identity + ", ";
						}
					});
					if (nbl_list != '') {
						var newnbl_list = nbl_list.substr(0, nbl_list.length-2);
						Common.bot.say(to, "2Failed To Join Blacklist: " + newnbl_list);
					} else {
						Common.bot.say(to, "5Surprisingly, there aren't any blacklisted non-members who failed to join!");
					}
				});
			} else if (blmsg == 'failedretire' || blmsg == 'fr') {
				Common.db.users.find({usercount: undefined}, function(err, users) {
					var nbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType == 'failedretire') {
							nbl_list += usercount.name + ", ";
						}
					});
					if (nbl_list != '') {
						var newnbl_list = nbl_list.substr(0, nbl_list.length-2);
						Common.bot.say(to, "2Failed To Retire Blacklist: " + newnbl_list);
					} else {
						Common.bot.say(to, "5Surprisingly, there aren't any blacklisted members who failed to retire!");
					}
				});
			} else if (blmsg == 'crashers' || blmsg == 'crasher' || blmsg == 'cr' || blmsg == 'c') {
				Common.db.users.find({usercount: undefined}, function(err, users) {
					var mbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType == 'crasher') {
							mbl_list += usercount.name + ", ";
						}
					});
					Common.db.blacklists.find({usercount: undefined}, function(err, users) {
						var nbl_list = '';
						users.forEach(function(usercount) {
							if (usercount.blacklistType == 'crasher') {
								nbl_list += usercount.identity + ", ";
							}
						});
						var blc = mbl_list + nbl_list;
						if (mbl_list == '' || nbl_list == '') {
							var newblc = blc.substr(0, blc.length-2);
							Common.bot.say(to, "2Crasher Blacklist: " + newblc);
						} else {
							Common.bot.say(to, "5Surprisingly, there aren't any blacklisted crashers!");
						}
					});
				});
			} else if (blmsg == 'warns' || blmsg == 'warn' || blmsg == 'w') {
				Common.db.users.find({usercount: undefined}, function(err, users) {
					var mbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType == 'warns') {
							mbl_list += usercount.name + ", ";
						}
					});
					if (mbl_list != '') {
						var newmbl_list = mbl_list.substr(0, mbl_list.length-2);
						Common.bot.say(to, "2Warns Blacklist: " + newmbl_list);
					} else {
						Common.bot.say(to, "5Surprisingly, there aren't any blacklisted members who have too many warns!");
					}
				});
			} else if (blmsg == 'others' || blmsg == 'other' || blmsg == 'o' || blmsg == 'miscellaneous' || blmsg == 'misc') {
				Common.db.users.find({usercount: undefined}, function(err, users) {
					var mbl_list = '';
					users.forEach(function(usercount) {
						if (usercount.blacklistType == 'other') {
							mbl_list += usercount.name + ", ";
						}
					});
					Common.db.blacklists.find({usercount: undefined}, function(err, users) {
						var nbl_list = '';
						users.forEach(function(usercount) {
							if (usercount.blacklistType == 'other') {
								nbl_list += usercount.identity + ", ";
							}
						});
						var blc = mbl_list + nbl_list;
						if (mbl_list == '' || nbl_list == '') {
							var newblc = blc.substr(0, blc.length-2);
							Common.bot.say(to, "2Miscellaneous Blacklist: " + newblc);
						} else {
							Common.bot.say(to, "5Surprisingly, there aren't any blacklisted users for miscellaneous reasons!");
						}
					});
				});
			} else {
				blacklists(Common, from, to, message);
			}
		} else {
			blacklists(Common, from, to, message);
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};

Commands.bls = function(Common, from, to, message) {
	Commands.blacklists(Common, from, to, message);
};

Commands.checkblacklist = function(Common, from, to, message) {
	if (to == '#cwexperts1' || to == '#cwexperts2' || to == '#cwexperts.staff') {
		if (Common.utils.msg(message)) {
			var name = message.match(/\S+/g);
			name = Common.utils.toLc(name[1]);
			var nobl = 1;
			Common.db.users.findOne({name: name}, function(err, user) {
				if (err || !user || user.blacklistType === undefined || user.blacklistType === 0) {
					nobl = nobl + 1;
				} else {
					var timemsg = user.blacklistDate
					timemsg = timemsg.toString();
					timemsg = timemsg.substr(0, timemsg.length-14);
					timemsg = timemsg + "UTC";
					var cblmsg = "2" + name + " is on the member blacklist. Submitted by: " + user.blacklistedBy + " - Time stamp: " + timemsg + " - Offence: " + user.blacklistType + " - Details: " + user.blacklistReason;
					if (user.blacklistComment !== undefined && user.blacklistComment !== 0) {
						cblmsg += " - Additional comment: " + user.blacklistComment;
					}
					Common.bot.say(to, cblmsg);
				}
				Common.db.blacklists.findOne({identity: name}, function(err, bluser) {
					if (err || !bluser || bluser.blacklistType === undefined || bluser.blacklistType === 0) {
						nobl = nobl + 1;
					} else {
						var timemsg = bluser.blacklistDate
						timemsg = timemsg.toString();
						timemsg = timemsg.substr(0, timemsg.length-14);
						timemsg = timemsg + "UTC";
						var cblmsg = "2" + name + " is on the non-member blacklist. Submitted by: " + bluser.blacklistedBy + " - Time stamp: " + timemsg + " - Offence: " + bluser.blacklistType + " - Details: " + bluser.blacklistReason;
						if (bluser.additionalComment !== undefined && bluser.additionalComment !== 0) {
							cblmsg += " - Additional comment: " + bluser.additionalComment;
						}
						Common.bot.say(to, cblmsg);
					}
					if (nobl == 3) {
						Common.bot.say(to, "5" + name + " is not on the blacklist. :)");
					}
				});
			});
		} else {
			Common.bot.say(to, "5You must specify a user to search the blacklist for when using this command. Use the format !checkBlacklist IDENTITY/IRC_NICKNAME_HERE to search the blacklist for a user.");
		}
	} else {
		Common.bot.say(to, "5This command may only be used in the games channels to display member-only information.");
	}
};
			
Commands.cbl = function(Common, from, to, message) {
	Commands.checkblacklist(Common, from, to, message);
};
