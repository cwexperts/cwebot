module.exports = {
	remindPen: function(Common, channel, minutesTo, from, SecondsTo) {
		Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (ch.games === 0 && from != 'hopw' && from != 'stop') {
				from = 'stop';
			}
			if (minutesTo != 0 && from != 'stop') {
				if (from == 'hopw') {
					from = 'self';
					pentime[channel] = minutesTo;
					pensecs[channel] = 0;
					SecondsTo = 0;
				} else if (pentime[channel] == minutesTo && pensecs[channel] == SecondsTo && ch.world !== 0) {
					pensecs[channel] = pensecs[channel] + 1;
					SecondsTo = SecondsTo + 1;
					if (pensecs[channel] == 30) {
						pensecs[channel] = 0;
						SecondsTo = 0;
						minutesTo--;
						pentime[channel] = minutesTo;
						if (minutesTo == 0 && from != 'stop') {
							from = 'stop';
							var remindpen = '';
							if (users[channel] != '') {
								if (ch.pen == 0) {
									function findPenUser(item) {
										item = item.toString();
										Common.db.users.findOne({name: item}, function(err, penuser) {
											if (err || !penuser) {
												console.log(err);
											} else if (penuser.pen == 1 && penuser.idiot == 0) {
												remindpen += Common.utils.toView(penuser.name) + ' ';
											} else if (penuser.idiot == 1) {
												remindpen += "4" + Common.utils.toView(penuser.name) + ' ';
											}
										});
									};
									function uniqueNames(namesArray) {
										return namesArray.filter(function(item, pos, ary) {
											//Common.bot.say(channel, "namesArray = " + namesArray);
											//Common.bot.say(channel, "item = " + item);
											//Common.bot.say(channel, "pos = " + pos);
											//Common.bot.say(channel, "!pos = " + !pos);
											//Common.bot.say(channel, "ary[pos - 1] = " + (ary[pos - 1]));
											//Common.bot.say(channel, "item != ary[pos - 1] = " + (item != ary[pos - 1]));
											return !pos || item != ary[pos - 1]; 
										});
									};
									var chanlist = users[channel].toLowerCase();
									chanlist = chanlist.split(" ");
									chanlist.forEach(findPenUser);
									setTimeout(function() {
										if (remindpen != '' && ch.world !== 0) {
											//remindfinal = remindfinal.split(" ");
											//remindfinal = remindfinal.sort();
											//remindfinal = uniqueNames(remindfinal);
											//remindfinal = remindfinal.toString();
											//remindfinal = remindfinal.split(",").join(" ");
											Common.bot.say(channel, "14*** ( 6ALTS & IDIOTS LEAVE PEN! 14) ***");
											Common.bot.say(channel, remindpen);
										}
									}, 1000);
								}
							}
						}
					}
				} else {
					from = 'stop';
				}
			}
		setTimeout(Common.utils.remindPen, 1000, Common, channel, minutesTo, from, SecondsTo);
		});
	},
	remindRole1: function(Common, channel, minutesTo, from, SecondsTo) {
		Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (ch.games === 0 && from != 'hopw' && from != 'stop') {
				from = 'stop';
			}
			if (minutesTo != 0 && from != 'stop') {
				if (from == 'hopw') {
					from = 'self';
					role1time[channel] = minutesTo;
					role1secs[channel] = 0;
					SecondsTo = 0;
				} else if (role1time[channel] == minutesTo && role1secs[channel] == SecondsTo && ch.world !== 0) {
					role1secs[channel] = role1secs[channel] + 1;
					SecondsTo = SecondsTo + 1;
					if (role1secs[channel] == 10) {
						role1secs[channel] = 0;
						SecondsTo = 0;
						minutesTo--;
						role1time[channel] = minutesTo;
						if (minutesTo == 0 && from != 'stop') {
							from = 'stop';
							if (ch.role != 1 && (ch.lead !== 0 || ch.salt !== 0 || ch.et1 !== 0 || ch.et2 !== 0 || ch.et3 !== 0)) {
								var role1_msg = "";
								if (ch.lead !== 0) {
									role1_msg += ch.lead + " ";
								} if (ch.salt !== 0) {
									role1_msg += ch.salt + " ";
								} if (ch.et1 !== 0) {
									role1_msg += ch.et1 + " ";
								} if (ch.et2 !== 0) {
									role1_msg += ch.et2 + " ";
								} if (ch.et3 !== 0) {
									role1_msg += ch.et3;
								}
								if (ch.team == 'saradomin' && ch.world !== 0) {
									Common.bot.say(channel, "14*** ( 7SALTS GO TO SWR! 14) ***");
									Common.bot.say(channel, role1_msg);
								} else if (ch.team == 'zamorak' && ch.world !== 0) {
									Common.bot.say(channel, "14*** ( 7ZALTS GO TO ZWR! 14) ***");
									Common.bot.say(channel, role1_msg);
								}
							}
						}
					}
				} else {
					from = 'stop';
				}
			}
		setTimeout(Common.utils.remindRole1, 1000, Common, channel, minutesTo, from, SecondsTo);	
		});		   
	},
	remindRole2: function(Common, channel, minutesTo, from, SecondsTo) {
		Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (ch.games === 0 && from != 'hopw' && from != 'stop') {
				from = 'stop';
			}
			if (minutesTo != 0 && from != 'stop') {
				if (from == 'hopw') {
					from = 'self';
					role2time[channel] = minutesTo;
					role2secs[channel] = 0;
					SecondsTo = 0;
				} else if (role2time[channel] == minutesTo && role2secs[channel] == SecondsTo && ch.world !== 0) {
					role2secs[channel] = role2secs[channel] + 1;
					SecondsTo = SecondsTo + 1;
					if (role2secs[channel] == 60) {
						role2secs[channel] = 0;
						SecondsTo = 0;
						minutesTo--;
						role2time[channel] = minutesTo;
						if (minutesTo == 0 && from != 'stop') {
							from = 'stop';
							if (ch.role != 1 && (ch.lead !== 0 || ch.salt !== 0 || ch.et1 !== 0 || ch.et2 !== 0 || ch.et3 !== 0)) {
								var role2_msg = "";
								if (ch.lead !== 0) {
									role2_msg += ch.lead + " ";
								} if (ch.salt !== 0) {
									role2_msg += ch.salt + " ";
								} if (ch.et1 !== 0) {
									role2_msg += ch.et1 + " ";
								} if (ch.et2 !== 0) {
									role2_msg += ch.et2 + " ";
								} if (ch.et3 !== 0) {
									role2_msg += ch.et3;
								}
								if (ch.team == 'saradomin' && ch.world !== 0) {
									Common.bot.say(channel, "14*** ( 7SALTS GO TO ZWR! 14) ***");
									Common.bot.say(channel, role2_msg);
								} else if (ch.team == 'zamorak' && ch.world !== 0) {
									Common.bot.say(channel, "14*** ( 7ZALTS GO TO SWR! 14) ***");
									Common.bot.say(channel, role2_msg);
								}
							}
						}
					}
				} else {
					from = 'stop';
				}
			}
		setTimeout(Common.utils.remindRole2, 1000, Common, channel, minutesTo, from, SecondsTo);	
		});
	},
	remindFlag: function(Common, channel, minutesTo, from, SecondsTo) {
		Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (ch.games === 0 && from != 'hopw' && from != 'stop') {
				from = 'stop';
			}
			if (minutesTo != 0 && from != 'stop') {
				if (from == 'hopw') {
					from = 'self';
					flagtime[channel] = minutesTo;
					flagsecs[channel] = 0;
					SecondsTo = 0;
				} else if (flagtime[channel] == minutesTo && flagsecs[channel] == SecondsTo && ch.world !== 0) {
					flagsecs[channel] = flagsecs[channel] + 1;
					SecondsTo = SecondsTo + 1;
					if (flagsecs[channel] == 60) {
						flagsecs[channel] = 0;
						SecondsTo = 0;
						minutesTo--;
						flagtime[channel] = minutesTo;
						if (minutesTo == 0 && from != 'stop') {
							from = 'stop';
							if (ch.role != 1 && ch.flag !== 0) {
								if (ch.team == 'saradomin' && ch.world !== 0) {
									Common.bot.say(channel, "14*** ( 7SCORE THE 4ZAMORAK 7FLAG! 14) ***");
									Common.bot.say(channel, ch.flag);
								} else if (ch.team == 'zamorak' && ch.world !== 0) {
									Common.bot.say(channel, "14*** ( 7SCORE THE 10SARADOMIN 7FLAG! 14) ***");
									Common.bot.say(channel, ch.flag);
								}
							}
						}
					}
				} else {
					from = 'stop';
				}
			}
		setTimeout(Common.utils.remindFlag, 1000, Common, channel, minutesTo, from, SecondsTo);
		});
	},
	remindAc: function(Common, channel, minutesTo, from, SecondsTo) {
		if (minutesTo != 0 && from != 'stop') {
			if (from == 'ac') {
				from = 'self';
				actime[channel] = minutesTo;
				acsecs[channel] = 0;
				SecondsTo = 0;
			} else if (actime[channel] == minutesTo && acsecs[channel] == SecondsTo) {
				acsecs[channel] = acsecs[channel] + 1;
				SecondsTo = SecondsTo + 1;
				if (acsecs[channel] == 60) {
					acsecs[channel] = 0;
					SecondsTo = 0;
					minutesTo--;
					actime[channel] = minutesTo;
					if (minutesTo == 30 && from != 'stop') {
						if (channel != '#cwexperts1' && channel != '#cwexperts2') {
							Common.bot.say(channel, "14*** ( 4ANTI-CRASH PROTOCOL IN EFFECT FOR 30 MINUTES 14) ***");
						}
						if (channel == '#cwexperts1') {
							Common.bot.say(channel, "14*** ( 4ANTI-CRASH PROTOCOL IN EFFECT FOR 30 MINUTES 14) ***");
						}
						if (channel == '#cwexperts2') {
							Common.bot.say(channel, "14*** ( 4ANTI-CRASH PROTOCOL IN EFFECT FOR 30 MINUTES 14) ***");
						}
					}
					if (minutesTo == 0 && from != 'stop') {
						from = 'stop';
						if (channel != '#cwexperts1' && channel != '#cwexperts2') {
							Common.bot.say(channel, "14*** ( 4AUTOMATIC SUSPENSION OF ANTI-CRASH PROTOCOL 14) ***");
						}
						if (channel == '#cwexperts1') {
							Common.bot.say(channel, "14*** ( 4AUTOMATIC SUSPENSION OF ANTI-CRASH PROTOCOL 14) ***");
						}
						if (channel == '#cwexperts2') {
							Common.bot.say(channel, "14*** ( 4AUTOMATIC SUSPENSION OF ANTI-CRASH PROTOCOL 14) ***");
						}
					}
				}
			} else {
				from = 'stop';
			}
		}
	setTimeout(Common.utils.remindAc, 1000, Common, channel, minutesTo, from, SecondsTo);				   
	},
	remindPlaytime: function(Common, channel, minutesTo, from) {
		Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (err || !ch) {
				console.log("Channel not found.");
			}
			if (ch.games === 0 && from != 'playtime') {
				from = 'stop';
			}
			if (from != 'stop') {
				if (from == 'playtime') {
					from = 'self';
				} else {
					var today = new Date();
					var slStart = new Date("2019-01-21T00:00:00Z");
					var slEnd = new Date("2019-01-24T00:00:00Z");
					var slStart2 = new Date("2019-02-20T00:00:00Z");
					var slDays = '';
					var slHours = '';
					var slMinutes = '';
					var slSeconds = '';
					var slMilliseconds = '';
					var slCountdown = '';
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
					if (today>slStart && today<slEnd) {
						slCountdown = "CURRENTLY ACTIVE!";
					} else if (today<slStart) {
						millisecsLeft = (slStart - today) / secTics;
						millisecsRound = Math.floor(millisecsLeft);
						millisecsRemain = millisecsLeft - millisecsRound;
						millisecsRemain = (millisecsRemain < 0) ? millisecsRemain = 1000 - ((millisecsRound - millisecsLeft) * 1000) : millisecsRemain = ((millisecsLeft - millisecsRound) * 1000);
						millisecsRemain = millisecsRemain.toFixed(12);
						millisecsRemain = millisecsRemain.toString();
						slMilliseconds = millisecsRemain.substr(0, millisecsRemain.length-13);
						secsLeft = (slStart - today) / minTics;
						secsRound = Math.floor(secsLeft);
						secsRemain = secsLeft - secsRound;
						secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = ((secsLeft - secsRound) * 60);
						secsRemain = secsRemain.toFixed(4);
						secsRemain = secsRemain.toString();
						slSeconds = secsRemain.substr(0, secsRemain.length-5);
						minsLeft = (slStart - today) / hourTics;
						minsRound = Math.floor(minsLeft);
						minsRemain = minsLeft - minsRound;
						minsRemain = (minsRemain < 0) ? minsRemain = 60 - ((minsRound - minsLeft)  * 60) : minsRemain = ((minsLeft - minsRound) * 60);
						minsRemain = minsRemain.toFixed(4);
						minsRemain = minsRemain.toString();
						slMinutes = minsRemain.substr(0, minsRemain.length-5);
						hoursLeft = (slStart - today) / dayTics;
						hoursRound = Math.floor(hoursLeft);
						hoursRemain = hoursLeft - hoursRound;
						hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
						hoursRemain = hoursRemain.toFixed(4);
						hoursRemain = hoursRemain.toString();
						slHours = hoursRemain.substr(0, hoursRemain.length-5);
						daysLeft = (slStart - today) / dayTics;
						daysRound = daysLeft.toFixed(4);
						daysRemain = daysRound.toString();
						daysRemain = daysRemain.substr(0, daysRemain.length-5);
						slDays = daysRemain;
						slCountdown = slDays + "d " + slHours + "h " + slMinutes + "m " + slSeconds + "s " + slMilliseconds + "ms";
					} else if (today<slStart2) {
						millisecsLeft = (slStart2 - today) / secTics;
						millisecsRound = Math.floor(millisecsLeft);
						millisecsRemain = millisecsLeft - millisecsRound;
						millisecsRemain = (millisecsRemain < 0) ? millisecsRemain = 1000 - ((millisecsRound - millisecsLeft) * 1000) : millisecsRemain = ((millisecsLeft - millisecsRound) * 1000);
						millisecsRemain = millisecsRemain.toFixed(12);
						millisecsRemain = millisecsRemain.toString();
						slMilliseconds = millisecsRemain.substr(0, millisecsRemain.length-13);
						secsLeft = (slStart2 - today) / minTics;
						secsRound = Math.floor(secsLeft);
						secsRemain = secsLeft - secsRound;
						secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = ((secsLeft - secsRound) * 60);
						secsRemain = secsRemain.toFixed(4);
						secsRemain = secsRemain.toString();
						slSeconds = secsRemain.substr(0, secsRemain.length-5);
						minsLeft = (slStart2 - today) / hourTics;
						minsRound = Math.floor(minsLeft);
						minsRemain = minsLeft - minsRound;
						minsRemain = (minsRemain < 0) ? minsRemain = 60 - ((minsRound - minsLeft)  * 60) : minsRemain = ((minsLeft - minsRound) * 60);
						minsRemain = minsRemain.toFixed(4);
						minsRemain = minsRemain.toString();
						slMinutes = minsRemain.substr(0, minsRemain.length-5);
						hoursLeft = (slStart2 - today) / dayTics;
						hoursRound = Math.floor(hoursLeft);
						hoursRemain = hoursLeft - hoursRound;
						hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
						hoursRemain = hoursRemain.toFixed(4);
						hoursRemain = hoursRemain.toString();
						slHours = hoursRemain.substr(0, hoursRemain.length-5);
						daysLeft = (slStart2 - today) / dayTics;
						daysRound = daysLeft.toFixed(4);
						daysRemain = daysRound.toString();
						daysRemain = daysRemain.substr(0, daysRemain.length-5);
						slDays = daysRemain;
						slCountdown = slDays + "d " + slHours + "h " + slMinutes + "m " + slSeconds + "s " + slMilliseconds + "ms";
					}
					var slStartNotif1 = new Date("2019-01-21T00:00:00Z");
					var slStartNotif2 = new Date("2019-01-21T00:00:01Z");
					var slEndNotif1 = new Date("2019-01-24T00:00:00Z");
					var slEndNotif2 = new Date("2019-01-24T00:00:01Z");
					if (today>slStartNotif1 && today<slStartNotif2) {
						Common.bot.say(channel, "14*** ( 2THE CASTLE WARS SPOTLIGHT HAS JUST STARTED! 14) ***");
					} if (today>slEndNotif1 && today<slEndNotif2) {
						Common.bot.say(channel, "14*** ( 2THE CASTLE WARS SPOTLIGHT HAS JUST ENDED! 14) ***");
					}
					var seconds = ch.seconds + 1;
					Common.db.channels.update({channel: channel}, {$set: {seconds: seconds}}, function(err, updated) {
						Common.db.channels.findOne({channel: channel}, function(err, ch) {
							if (ch.seconds == 60) {
								var minutes = ch.minutes + 1;
								seconds = 0;
								Common.db.channels.update({channel: channel}, {$set: {seconds: seconds, minutes: minutes}}, function(err, updated) {
									Common.db.channels.findOne({channel: channel}, function(err, ch) {
										if (ch.minutes == 15 || ch.minutes == 30 || ch.minutes == 45) {
											var list = [
												"14*** ( 2CURRENT SESSION PLAYTIME:10 " + ch.days + "d " + ch.hours + "h " + ch.minutes + "m " + ch.seconds + "s 14) ***",
												"14*** ( 3RECRUIT NEW MEMBERS - ADVERTISE CWE CHANNELS! 14) ***",
												"14*** ( 2CW SPOTLIGHT COUNTDOWN:10 " + slCountdown + " 14) ***",
												"14*** ( 6ACTIVE PROMO CODES:13 dec28th2018sl || jan2019 14) ***"
											]
											var rand = list[Math.floor(Math.random() * list.length)];
											Common.bot.say(channel, rand);
										} else if (ch.minutes == 60) {
											var hours = ch.hours + 1;
											minutes = 0;
											Common.db.channels.update({channel: channel}, {$set: {minutes: minutes, hours: hours}}, function(err, updated) {
												Common.db.channels.findOne({channel: channel}, function(err, ch) {
													if (ch.hours == 24) {
														var days = ch.days + 1;
														hours = 0;
														Common.db.channels.update({channel: channel}, {$set: {hours: hours, days: days}}, function(err, updated) {
															Common.db.channels.findOne({channel: channel}, function(err, ch) {
																var list = [
																	"14*** ( 2CURRENT SESSION PLAYTIME:10 " + ch.days + "d " + ch.hours + "h " + ch.minutes + "m " + ch.seconds + "s 14) ***",
																	"14*** ( 3RECRUIT NEW MEMBERS - ADVERTISE CWE CHANNELS! 14) ***",
																	"14*** ( 2CW SPOTLIGHT COUNTDOWN:10 " + slCountdown + " 14) ***",
																	"14*** ( 6ACTIVE PROMO CODES:13 dec28th2018sl || jan2019 14) ***"
																]
																var rand = list[Math.floor(Math.random() * list.length)];
																Common.bot.say(channel, rand);
															});
														});
													} else {
														var list = [
															"14*** ( 2CURRENT SESSION PLAYTIME:10 " + ch.days + "d " + ch.hours + "h " + ch.minutes + "m " + ch.seconds + "s 14) ***",
															"14*** ( 3RECRUIT NEW MEMBERS - ADVERTISE CWE CHANNELS! 14) ***",
															"14*** ( 2CW SPOTLIGHT COUNTDOWN:10 " + slCountdown + " 14) ***",
															"14*** ( 6ACTIVE PROMO CODES:13 dec28th2018sl || jan2019 14) ***"
														]
														var rand = list[Math.floor(Math.random() * list.length)];
														Common.bot.say(channel, rand);
													}
												});
											});
										}
									});
								});
							}
						});
					});
					var secondsTotal = ch.secondsTotal + 1;
					Common.db.channels.update({channel: channel}, {$set: {secondsTotal: secondsTotal}}, function(err, updated) {
						Common.db.channels.findOne({channel: channel}, function(err, ch) {
							if (ch.secondsTotal == 60) {
								var minutesTotal = ch.minutesTotal + 1;
								secondsTotal = 0;
								Common.db.channels.update({channel: channel}, {$set: {secondsTotal: secondsTotal, minutesTotal: minutesTotal}}, function(err, updated) {
									Common.db.channels.findOne({channel: channel}, function(err, ch) {
										if (ch.minutesTotal == 60) {
											var hoursTotal = ch.hoursTotal + 1;
											minutesTotal = 0;
											Common.db.channels.update({channel: channel}, {$set: {minutesTotal: minutesTotal, hoursTotal: hoursTotal}}, function(err, updated) {
												Common.db.channels.findOne({channel: channel}, function(err, ch) {
													if (ch.hoursTotal == 24) {
														var daysTotal = ch.daysTotal + 1;
														hoursTotal = 0;
														Common.db.channels.update({channel: channel}, {$set: {hoursTotal: hoursTotal, daysTotal: daysTotal}}, function(err, updated) {
															Common.db.channels.findOne({channel: channel}, function(err, ch) {
															});
														});
													}
												});
											});
										}
									});
								});
							}
						});
					});
				}
			}	
			setTimeout(Common.utils.remindPlaytime, 1000, Common, channel, minutesTo, from);
		});
	},
	startGame: function(Common, channel, minutesTo, from, SecondsTo) {
		if (minutesTo != 0 && from != 'stop') {
			if (from == 'hopw') {
				from = 'self';
				time[channel] = minutesTo;
				ticksecs[channel] = 0;
				SecondsTo = 0;
			} else if (time[channel] !== 0 && time[channel] == minutesTo && ticksecs[channel] == SecondsTo) {
					ticksecs[channel] = ticksecs[channel] + 1;
					SecondsTo = SecondsTo + 1;
					if (ticksecs[channel] == 60) {
						ticksecs[channel] = 0;
						SecondsTo = 0;
						minutesTo--;
						time[channel] = minutesTo;
						if (time[channel] == 0 || time[channel] == 1 || time[channel] == 2 || time[channel] == 3) {
							Common.db.channels.findOne({channel: channel}, function(err, ch) {
							if (err || !ch) {
								console.log("Channel not found.");
							}
							var theworld = '';
							if (ch.world === 0) {
								theworld = 'unknown';
							} else {
								theworld = ch.world;
							}
							if (time[channel] == 3) {
								Common.bot.say(channel, "14*** ( 10TICKS LEFT:3 3 14) ***");
							} else if (time[channel] == 2) {
								Common.bot.say(channel, "14*** ( 10TICKS LEFT:7 2 14) ***");
							} else if (time[channel] == 1) {
								Common.bot.say(channel, "14*** ( 10TICKS LEFT:4 1 14) ***");
							} else if (time[channel] == 0) {
								Common.bot.say(channel, "14*** ( 4TICKS LEFT:4 0 14) ***");
							}
							});
						}
					}
			} else {
				from = 'stop';
			}
		}
		if (minutesTo == 0 && from != 'stop') {
			from = 'stop';
			time[channel] = 0;
			ticksecs[channel] = 0;
		}
		setTimeout(Common.utils.startGame, 1000, Common, channel, minutesTo, from, SecondsTo);
	},
	memReportTimer: function(Common, channel, minutesTo, from, SecondsTo, member) {
		if (from != 'stop') {
			if (from == 'rm') {
				from = 'self';
				memreportmins[member] = 30;
				memreportsecs[member] = 0;
			} else if (memreportsecs[member] == 0) {
				memreportmins[member] = memreportmins[member] - 1;
				memreportsecs[member] = 59;
			} else {
				memreportsecs[member] = memreportsecs[member] - 1;
			}
		}
		if (memreportmins[member] == 0 && memreportsecs[member] == 0 && from != 'stop') {
			from = 'stop';
			memreportmins[member] = 0;
			memreportsecs[member] = 0;
		}
		setTimeout(Common.utils.memReportTimer, 1000, Common, channel, minutesTo, from, SecondsTo, member);
	},
	bugReportTimer: function(Common, channel, minutesTo, from, SecondsTo, member) {
		if (from != 'stop') {
			if (from == 'rb') {
				from = 'self';
				bugreportmins[member] = 30;
				bugreportsecs[member] = 0;
			} else if (bugreportsecs[member] == 0) {
				bugreportmins[member] = bugreportmins[member] - 1;
				bugreportsecs[member] = 59;
			} else {
				bugreportsecs[member] = bugreportsecs[member] - 1;
			}
		}
		if (bugreportmins[member] == 0 && bugreportsecs[member] == 0 && from != 'stop') {
			from = 'stop';
			bugreportmins[member] = 0;
			bugreportsecs[member] = 0;
		}
		setTimeout(Common.utils.bugReportTimer, 1000, Common, channel, minutesTo, from, SecondsTo, member);
	},
	unlockProfileTimer: function(Common, channel, from, secondsTo, minutesTo, hoursTo, member) {
		if (from != 'stop') {
			if (from == 'up') {
				from = 'self';
				secondsTo = 0;
				minutesTo = 60;
				hoursTo = 24;
				upsecs[member] = 0;
				upmins[member] = 60;
				uphrs[member] = 24;
			} else if (secondsTo == upsecs[member] && minutesTo == upmins[member] && hoursTo == uphrs[member]) {
				secondsTo = secondsTo + 1;
				upsecs[member] = upsecs[member] + 1;
				if (secondsTo == 60) {
					minutesTo--;
					upmins[member] = upmins[member] - 1;
					secondsTo = 0;
					upsecs[member] = 0;
					if (minutesTo == 0) {
						hoursTo--;
						uphrs[member] = uphrs[member] - 1;
						minutesTo = 60;
						upmins[member] = 60;
						if (hoursTo == 0) {
							from = 'stop';
							upsecs[member] = 0;
							upmins[member] = 0;
							uphrs[member] = 0;
							if (memlist[member] == 5) {
								memlist[member] = 0;
							}
						}
					}
				}			
			} else {
				from = 'stop';
			}
		}
		setTimeout(Common.utils.unlockProfileTimer, 1000, Common, channel, from, secondsTo, minutesTo, hoursTo, member);
	},
	goingAfk: function(Common, channel, minutesTo, user, from) {
		if (minutesTo != 0 && from != 'stop') {
	        if (from == 'afk') {
	            from = 'self';
	        } else {
	            minutesTo--;
	            afk[user] = minutesTo;
	        }
	    }
	    if (minutesTo == 0 && from != 'stop') {
	        from = 'stop';
	        afk[user] = 0;
	        Common.bot.say(channel, '4'+user+', stop AFKing!');
	    }
	    setTimeout(Common.utils.goingAfk, 60000, Common, channel,
				minutesTo, user, from);
	},
  /*
  cacheReminder: function(Common, command, didNotify) {
		var now  = new Date(),
        next = new Date(now.getTime() + 60 * 1E3),
        diff = next - now;

		var validHours  = [2, 5, 8, 11, 14, 17, 20, 23],
		    validMinute = 55;

		if (validHours.indexOf(now.getUTCHours()) !== -1
		    && validMinute === now.getUTCMinutes()
		) {
		    Common.db.users.find({cache: 1}, function(err, cusers) {
	            if (err || !cusers) {
	                console.log("User not found.");
	            } else {
	                cusers.forEach(function(user) {
	                   	var target = Common.utils.toView(user.name);
	                  	Common.bot.notice(target, "*** [ 3GUTHIXIAN CACHE 1]: Next Cache: 35 minutes! Get ready 1"+target+"!");
	               	});
	            }
	        });
			didNotify = true;
		} else {
		    didNotify = false;
		}

    	setTimeout(Common.utils.cacheReminder, diff, Common, 'self', didNotify);
  },*/
	nextCache: function(now) {
	    var hours = [0, 3, 6, 9, 12, 15, 18, 21],
	        next;
	    for (var i in hours) {
	        if (hours[i] > now.getUTCHours()) {
	            next = Date.UTC(
	                now.getUTCFullYear(),
	                now.getUTCMonth(),
	                now.getUTCDate(),
	                hours[i],
	                0,
	                0
	            );
	            break;
	        }
	    }
	    if (!next) {
	        next = new Date(now.getTime() + 24 * 60 * 60 * 1E3);
	    }
	    return next - now;
  },
	pickUser: function(Common, channel, type, from) {
		if (usersLc[channel] != '' && type == 'et123') {
			Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (err || !ch) {
			   	console.log("Channel not found.");    
			} else {
				var filter = ["abdel", "dxnxex7", "kir", "rejuvenate", ch.lead, ch.salt, ch.et1, ch.et2, ch.et3, ch.coor];
				var pusers = Common.utils.filterUsers(usersLc[channel].match(/\S+/g), filter);
				if (pusers.length > 2) {
					var puser1  = pusers[Math.floor(Math.random()*pusers.length)];
					Common.db.channels.update({channel: channel}, {$set: {et1: puser1}}, function(err, updated) {
						if (err || !updated) {
							console.log("Channel not updated!");
						}
						var filter1 = [puser1];
						var pusers1 = Common.utils.filterUsers(pusers, filter1);
						var puser2  = pusers1[Math.floor(Math.random()*pusers1.length)];
						Common.db.channels.update({channel: channel}, {$set: {et2: puser2}}, function(err, updated) {
							if (err || !updated) {
								console.log("Channel not updated!");
							}
							var filter2 = [puser2];
							var pusers2 = Common.utils.filterUsers(pusers1, filter2);
							var puser3  = pusers2[Math.floor(Math.random()*pusers2.length)];
							Common.db.channels.update({channel: channel}, {$set: {et3: puser3}}, function(err, updated) {
								if (err || !updated) {
									console.log("Channel not updated!");
								}
								Common.db.channels.findOne({channel: channel}, function(err, ch) {
									if (err || !ch) {
			   							console.log("Channel not found.");    
									} else {
										Common.bot.say(channel, "7" + "The gods have picked " + ch.et1 + ", " + ch.et2 + ", and " + ch.et3 + " to early tick!");
									}
								});
							});
						});
					});
				} else {
					Common.db.channels.findOne({channel: channel}, function(err, ch) {
					if (err || !ch) {
						console.log("Error: Unable to fetch world");
					} else {
						if (ch.games !== 0) {
							Common.bot.say(channel, "5The gods could not find enough active players who are not already assigned a role!");
						} else {
							Common.bot.say(channel, "5The gods could not find enough active members who are not already assigned a role!");
						}
					}
					});
				}
			}
			});
		} else if (type == 'et123') {
			Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (err || !ch) {
				console.log("Error: Unable to fetch world");
			} else {
				if (ch.games !== 0) {
					Common.bot.say(channel, "5The gods could not find any active players!");
				} else {
					Common.bot.say(channel, "5The gods could not find any active members!");
				}
			}
			});
		} if (usersLc[channel] != '' && (type == 'kma' || type == 'smd' || type == 'lmp' || type == 'ems')) {
			var filter = ["abdel", "kir", "rejuvenate"];
			var pusers = Common.utils.filterUsers(usersLc[channel].match(/\S+/g), filter);
		        var puser  = pusers[Math.floor(Math.random()*pusers.length)];
			if (type == 'kma') {
		            Common.bot.say(channel, "4The gods have picked " + puser + " to kiss " + from + "'s ass!");
		        } else if (type == 'smd') {
		            Common.bot.say(channel, "4The gods have picked " + puser + " to suck " + from + "'s dick!");
			} else if (type == 'lmp') {
		            Common.bot.say(channel, "4The gods have picked " + puser + " to lick " + from + "'s pussy!");
			} else if (type == 'ems') {
		            Common.bot.say(channel, "4The gods have picked " + puser + " to eat " + from + "'s shit!");
		        }
		} else {
			if (type == 'kma') {
				Common.bot.say(channel, "5The gods could not find anyone to kiss your ass, so you kiss it yourself.");
			} else if (type == 'smd') {
				Common.bot.say(channel, "5The gods could not find anyone to suck your dick, so you suck it yourself.");
			} else if (type == 'lmp') {
				Common.bot.say(channel, "5The gods could not find anyone to lick your pussy, so you lick it yourself.");
			} else if (type == 'ems') {
				Common.bot.say(channel, "5The gods could not find anyone to eat your shit, so you eat it yourself.");
			}
		} if ((usersLc[channel] != '' || from != 'random') && (type != 'kma' && type != 'smd' && type != 'lmp' && type != 'ems' && type != 'et123')) {
			Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (err || !ch) {
			   	console.log("Channel not found.");    
			} else {
			if (type == 'lead' || type == 'zalt' || type == 'salt' || type == 'et1' || type == 'et2' || type == 'et3' || type == 'coor' || type == 'flag' || type == 'et123') {
				var filter = ["abdel", "dxnxex7", "kir", "rejuvenate", ch.lead, ch.salt, ch.et1, ch.et2, ch.et3, ch.coor];
			} else {
				var filter = ["abdel", "kir", "rejuvenate"];
			}
			var pusers = '';
			var puser = '';
			if (usersLc[channel] != '') {
				pusers = Common.utils.filterUsers(usersLc[channel].match(/\S+/g), filter);
				if (pusers.length > 0) {
					puser  = pusers[Math.floor(Math.random()*pusers.length)];
				}
			}
			if (from != 'random') {
				puser = Common.utils.toLc(from);
			}
			if (puser != '') {
			if (type == 'flag') {
				Common.db.channels.update({channel: channel}, {$set: {flag: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
				if (ch.salt !== 0) {
					if (puser == ch.salt && ch.team == 'saradomin') {
						Common.bot.say(channel, "7" + "The gods have picked " + puser + " to score the 4Zamorak flag7, which is indeed what the salt should do...");
					} else if (puser == ch.salt && ch.team == 'zamorak') {
						Common.bot.say(channel, "7" + "The gods have picked " + puser + " to score the 10Saradomin flag7, which is indeed what the zalt should do...");
					} else if (ch.team == 'saradomin') {
						Common.bot.say(channel, "7" + "The gods have picked " + puser + " to score the 4Zamorak flag 7because " + ch.salt + " is a piece of shit!");
					} else if (ch.team == 'zamorak') {
						Common.bot.say(channel, "7" + "The gods have picked " + puser + " to score the 10Saradomin flag 7because " + ch.salt + " is a piece of shit!");
					}
				} else {
					if (ch.team == 'saradomin') {
						Common.bot.say(channel, "7" + "The gods have picked " + puser + " to score the 4Zamorak flag7!");
					} else if (ch.team == 'zamorak') {
						Common.bot.say(channel, "7" + "The gods have picked " + puser + " to score the 10Saradomin flag7!");
					}
				}
				}
				});
			} else if (type == 'salt') {
				Common.db.channels.update({channel: channel}, {$set: {salt: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to salt!");
				}
				});
		        } else if (type == 'zalt') {
		        	Common.db.channels.update({channel: channel}, {$set: {salt: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to zalt!");
				}
				});
		        } else if (type == 'lead') {
		        	Common.db.channels.update({channel: channel}, {$set: {lead: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to lead!");
				}
				});
			} else if (type == 'coor') {
		        	Common.db.channels.update({channel: channel}, {$set: {coor: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to coordinate!");
				}
				});
		        } else if (type == 'et1') {
		         	Common.db.channels.update({channel: channel}, {$set: {et1: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to et1!");
				}
				});
		        } else if (type == 'et2') {
		        	Common.db.channels.update({channel: channel}, {$set: {et2: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to et2!");
				}
				});
		        } else if (type == 'et3') {
		        	Common.db.channels.update({channel: channel}, {$set: {et3: puser}}, function(err, updated) {
				if (err || !updated) {
					console.log("Channel not updated!");
				} else {
					Common.bot.say(channel, "7" + "The gods have picked " + puser + " to et3!");
				}
				});
		        } else {
		        	Common.bot.say(channel, "4The gods have picked " + puser + " to " + type + "!");
		        }
			} else {
				Common.db.channels.findOne({channel: channel}, function(err, ch) {
				if (err || !ch) {
					console.log("Error: Unable to fetch world");
				} else {
					if (ch.games !== 0) {
						Common.bot.say(channel, "5The gods could not find any active players who are not already assigned a role!");
					} else {
						Common.bot.say(channel, "5The gods could not find any active members who are not already assigned a role!");
					}
				}
				});
			}
			}
			});
		} else if (type != 'kma' && type != 'smd' && type != 'lmp' && type != 'ems' && type != 'et123') {
			Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (err || !ch) {
				console.log("Error: Unable to fetch world");
			} else {
				if (ch.games !== 0) {
					Common.bot.say(channel, "5The gods could not find any active players!");
				} else {
					Common.bot.say(channel, "5The gods could not find any active members!");
				}
			}
			});
		}
	},
	getRoles: function(Common, from, channel) {
		Common.db.channels.findOne({channel: channel}, function(err, ch) {
			if (err || !ch) {
			   	console.log("Channel not found.");    
			} else {
		if (ch.lead === 0 && ch.salt === 0 && ch.flag === 0 && ch.et1 === 0 && ch.et2 === 0 && ch.et3 === 0 && ch.coor === 0) {
			var member = Common.utils.toLc(from);
			Common.db.users.findOne({name: member}, function(err, perms) {
			if (perms.status == 'Staff' || perms.status == 'Admin' || perms.status == 'Owner') {
				Common.bot.say(channel, '7Roles have not been set! You may set roles randomly by using !ROLE_HERE, or you may force set roles by using !ROLE_HERE NAME.');
			} else {
				Common.bot.say(channel, '7Roles have not been set! You may set roles randomly by using !ROLE_HERE, or you may request a role to be assigned to a member by using !rolerequest ROLE_HERE NAME.');
			}
			});
		} else {
			setTimeout(function() {
			if (ch.lead !== 0) {
			var main1 = ch.lead;
			var lead_msg = "7Lead: " + ch.lead;
			Common.db.users.findOne({name: Common.utils.toDb(main1)}, function(err, user) {
				if (err || !user) {
					console.log(err);
					lead_msg += " [4user not found7]";
				} else {
					lead_msg += " [2" + user.alt + "7]";
				}
				if (Common.utils.toLc(ch.lead) == 'dxnxex7') {
					lead_msg += " ...the one and only!";
				}
				Common.bot.say(channel, lead_msg);
			});
			} else if (ch.lead === 0) {
				Common.bot.say(channel, "7Lead: 5n/a");
			}
			}, 100);
			setTimeout(function() {
			if (ch.salt !== 0) {
			var main2 = ch.salt;
			var salt_msg = "7";
			if (ch.team == 'saradomin') {
				salt_msg += "Salt: " + ch.salt;
			} else if (ch.team == 'zamorak') {
				salt_msg += "Zalt: " + ch.salt;
			}
			Common.db.users.findOne({name: Common.utils.toDb(main2)}, function(err, user) {
				if (err || !user) {
					console.log(err);
					salt_msg += " [4user not found7]";
				} else {
					salt_msg += " [2" + user.alt + "7]";
				}
				if (ch.salt !== 0 && ch.flag !== 0) {
					salt_msg += " - ";
				}
				if (ch.flag !== 0) {
				var main3 = ch.flag;
				Common.db.users.findOne({name: Common.utils.toDb(main3)}, function(err, user) {
					salt_msg += "Flag: " + ch.flag;
					if (err || !user) {
						console.log(err);
						salt_msg += " [4user not found7]";
					} else {
						salt_msg += " [2" + user.alt + "7]";
					}
					Common.bot.say(channel, salt_msg);
				});
				} else {
					Common.bot.say(channel, salt_msg);
				}
			});
			} else if (ch.flag !== 0) {
				var main4 = ch.flag;
				var salt_msg = "7";
				Common.db.users.findOne({name: Common.utils.toDb(main4)}, function(err, user) {
					salt_msg += "Flag: " + ch.flag;
					if (err || !user) {
						console.log(err);
						salt_msg += " [4user not found7]";
					} else {
						salt_msg += " [2" + user.alt + "7]";
					}
					Common.bot.say(channel, salt_msg);
				});
			} else if (ch.salt === 0 && ch.flag === 0) {
				if (ch.team == 'saradomin') {
					Common.bot.say(channel, "7Salt: 5n/a");
				} else if (ch.team == 'zamorak') {
					Common.bot.say(channel, "7Zalt: 5n/a");
				}
			}
			}, 200);
			setTimeout(function() {
			if (ch.et1 !== 0 && ch.et2 !== 0) {
			var main5 = ch.et1;
			var main6 = ch.et2;
			var et_msg = "7Early Tickers: (1) " + ch.et1;
			Common.db.users.findOne({name: Common.utils.toDb(main5)}, function(err, user) {
				if (err || !user) {
					console.log(err);
					et_msg += " [4user not found7], ";
				} else {
					et_msg += " [2" + user.alt + "7], ";
				}
				Common.db.users.findOne({name: Common.utils.toDb(main6)}, function(err, user) {
					if (err || !user) {
						console.log(err);
						et_msg += "(2) " + ch.et2 + " [4user not found7]";
					} else {
						et_msg += "(2) " + ch.et2 + " [2" + user.alt + "7]";
					}
					if (ch.et3 !== 0) {
					var main7 = ch.et3;
					Common.db.users.findOne({name: Common.utils.toDb(main7)}, function(err, user) {
						if (err || !user) {
							console.log(err);
							et_msg += ", (3) " + ch.et3 + " [4user not found7]";
						} else {
							et_msg += ", (3) " + ch.et3 + " [2" + user.alt + "7]";
						}
						Common.bot.say(channel, et_msg);
					});
					} else {
						Common.bot.say(channel, et_msg);
					}
				});
			});
			} else if (ch.et1 !== 0 && ch.et3 !== 0) {
				var main8 = ch.et1;
				var main9 = ch.et3;
				var et_msg = "7Early Tickers: (1) " + ch.et1;
				Common.db.users.findOne({name: Common.utils.toDb(main8)}, function(err, user) {
					if (err || !user) {
						console.log(err);
						et_msg += " [4user not found7], ";
					} else {
						et_msg += " [2" + user.alt + "7], ";
					}
					Common.db.users.findOne({name: Common.utils.toDb(main9)}, function(err, user) {
						if (err || !user) {
							console.log(err);
							et_msg += "(3) " + ch.et3 + " [4user not found7]";
						} else {
							et_msg += "(3) " + ch.et3 + " [2" + user.alt + "7]";
						}
						Common.bot.say(channel, et_msg);
					});
				});
			} else if (ch.et1 !== 0) {
				var main10 = ch.et1;
				var et_msg = "7Early Tickers: (1) " + ch.et1;
				Common.db.users.findOne({name: Common.utils.toDb(main10)}, function(err, user) {
					if (err || !user) {
						console.log(err);
						et_msg += " [4user not found7]";
					} else {
						et_msg += " [2" + user.alt + "7]";
					}
					Common.bot.say(channel, et_msg);
				});
			} else if (ch.et2 !== 0 && ch.et3 !== 0) {
				var main11 = ch.et2;
				var main12 = ch.et3;
				var et_msg = "7Early Tickers: (2) " + ch.et2;
				Common.db.users.findOne({name: Common.utils.toDb(main11)}, function(err, user) {
					if (err || !user) {
						console.log(err);
						et_msg += " [4user not found7], ";
					} else {
						et_msg += " [2" + user.alt + "7], ";
					}
					Common.db.users.findOne({name: Common.utils.toDb(main12)}, function(err, user) {
						if (err || !user) {
							console.log(err);
							et_msg += "(3) " + ch.et3 + " [4user not found7]";
						} else {
							et_msg += "(3) " + ch.et3 + " [2" + user.alt + "7]";
						}
						Common.bot.say(channel, et_msg);
					});
				});
			} else if (ch.et2 !== 0) {
				var main13 = ch.et2;
				var et_msg = "7Early Tickers: (2) " + ch.et2;
				Common.db.users.findOne({name: Common.utils.toDb(main13)}, function(err, user) {
					if (err || !user) {
						console.log(err);
						et_msg += " [4user not found7]";
					} else {
						et_msg += " [2" + user.alt + "7]";
					}
					Common.bot.say(channel, et_msg);
				});
			} else if (ch.et3 !== 0) {
				var main14 = ch.et3;
				var et_msg = "7Early Tickers: (3) " + ch.et3;
				Common.db.users.findOne({name: Common.utils.toDb(main14)}, function(err, user) {
					if (err || !user) {
						console.log(err);
						et_msg += " [4user not found7]";
					} else {
						et_msg += " [2" + user.alt + "7]";
					}
					Common.bot.say(channel, et_msg);
				});
			} else if (ch.et1 === 0 && ch.et2 === 0 && ch.et3 === 0) {
				Common.bot.say(channel, "7Early Tickers: 5n/a");
			}
			}, 300);
			setTimeout(function() {
			if (ch.coor !== 0) {
			var main13 = ch.coor;
			var coor_msg = "7Coordinator: " + ch.coor;
			Common.db.users.findOne({name: Common.utils.toDb(main13)}, function(err, user) {
				if (err || !user) {
					console.log(err);
					coor_msg += " [4user not found7]";
				} else {
					coor_msg += " [2" + user.alt + "7]";
				}
				Common.bot.say(channel, coor_msg);
			});
			} else if (ch.coor === 0) {
				Common.bot.say(channel, "7Coordinator: 5n/a");
			}
			}, 400);
		}
			}
		});
	},
	filterUsers: function(users, names) {
		var filtered_users = [];
		for (var i = 0; i < users.length; i++) {
			if (!(names.indexOf(users[i]) > -1)) {
				filtered_users.push(users[i]);
			}
		}
		return filtered_users;
	},
	isCmd: function(message) {
		var id = message.charAt(0);
		if (id == '!' || id == '.' || id == '@') {
			return true;
		}
		return false;
	},
	getCmd: function(message) {
	    var cmd = message.substr(0, message.indexOf(' '));
	    var msg = message.substr(message.indexOf(' ') +1);
	    if (!cmd) {
	        return msg.substr(1);
	    } else {
	        return cmd.substr(1);
	    }
	},
	cmd: function(message, cmd) {
	    if (cmd == this.getCmd(message)) {
	        return true;
	    }
	    return false;
	},
	msg: function(message) {
	   var msg = message.substr(message.indexOf(' ') +1);
	   if (msg.substr(1) != this.getCmd(message)) {
	        return msg;
	    } else {
	        return '';
	    }
	},
	toView: function(string) {
		var words = string.split('_');
	    var results = [];
	    for (var i=0; i < words.length; i++) {
	        var letter = words[i].charAt(0).toUpperCase();
	        results.push(letter + words[i].slice(1));
	    }
	    return results.join('_');
	},
	toDb: function(string) {
		return string.toLowerCase().replace(/ /g, "_");
	},
	toLc: function(string) {
		return string.toLowerCase().replace(/ /g, "_");
	},
	removeByValue: function(arr) {
		var what, a = arguments, L = a.length, ax;
    		while (L > 1 && arr.length) {
        		what = a[--L];
        		while ((ax= arr.indexOf(what)) !== -1) {
            			arr.splice(ax, 1);
        		}
    		}
    		return arr;
	}
};
