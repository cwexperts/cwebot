function get_nick_from_message(from, message) {
    var nick  = message.match(/\S+/g);
    // Defaults to own's nick
    if (typeof nick[1] !== 'undefined') {
        from = nick[1];
    }
    return from
}
 
Commands.abdel = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say God?");
};
 
Commands.god = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say Abdel?");
};
 
Commands.danny = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say ebola?");
};
 
Commands.ebola = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say Danny?");
};
 
Commands.base = function(Common, from, to, message) {
     Common.bot.say(to, "1,4Base/Base_Tank is kickban on sight.");
};
 
Commands.alan = function(Common, from, to, message) {
     Common.bot.say(to, "alcoholic gay uncle, butt chugs vodka better than you");
};
 
Commands.abdel_dirt = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "You can't DDoS your God.");
        } else {
            Common.bot.say(to, "1,4" + nick[1] + ", u value ur net bro?");
        }
    } else {
        Common.bot.say(to, "1,4u value ur net bro?");
    }
};
 
 Commands.wosbytier = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "1,8Abdel is good because he's God.");
        } else {
            Common.bot.say(to, nick[1] + " thinks he is good cause he has 5.4b xp");
        }
    } else {
        Common.bot.say(to, "Wosby thinks he is good cause he has 5.4b xp");
    }
};
 
 Commands.classy = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Mary aka Pumpkin, best player in CwExperts. She also designed a cape for God.");
};
 
 Commands.filo224 = function(Common, from, to, message) {
     Common.bot.say(to, "1,4Worst PvMer and CW Player. Go get the fucking flag U DIRTY FUNDER OF SATS 5.4");
};
 
 Commands.goddess = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say Desirae?");
};
 
 Commands.desirae = function(Common, from, to, message) {
     Common.bot.say(to, "1,8The goddess of CwExperts. Also, she secretly wishes she was Abdel's bae.");
};
 
 Commands.subhaven = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "1,4Abdel is a fucking genius.");
        } else {
            Common.bot.say(to, "1,4" + nick[1] + " is a fucking retard.");
        }
    } else {
        Common.bot.say(to, "1,4Subhaven is a fucking retard :)");
    }
};
 
 Commands.dps = function(Common, from, to, message) {
     Common.bot.say(to, "1,8The only thing lower than my DPS is my self esteem.");
};
 
 Commands.ervin = function(Common, from, to, message) {
     Common.bot.say(to, "Ervin is shit - https://www.youtube.com/watch?v=Z1UkExbkpx4");
};
 
 Commands.gucci = function(Common, from, to, message) {
     Common.bot.say(to, "I hate life, I hate society, I hate this commeanituy and every1 single one of u shud kys I dont want to live in this world anymore, I'm gonna drink a bottle of bleach, eat some soap for dinner.. Play Russian roulette for fun, take some bombs to london for fun.");
     Common.bot.say(to, "I want to jump of the eifeltower with someone. I want to kill Duf. I want to suck Fables dick. I want to give ownership of 6 to Abdel so he can do the job I never could do I want to bot sell my rsgp and donate it to charity. I also love Desirae.");
};
 
 Commands.tulla = function(Common, from, to, message) {
     Common.bot.say(to, "Tulla's way or the high way!");
};
 
 Commands.duf = function(Common, from, to, message) {
     Common.bot.say(to, "biggest spaztic i know. confimed rsgp buyer. billionaire my ass");
};
 
 Commands.reiha = function(Common, from, to, message) {
     Common.bot.say(to, "no words for u. not even God can save u");
};
 
 Commands.polarbear = function(Common, from, to, message) {
     Common.bot.say(to, "anto social af. shud kys");
};
 
 Commands.hostile = function(Common, from, to, message) {
     Common.bot.say(to, "guy? girl? idefk.. shud kys");
};
 
 Commands.le_cabin_boy = function(Common, from, to, message) {
     Common.bot.say(to, "shud do ur homework then we can flame later <3 xoxo");
};
 
 Commands.gator = function(Common, from, to, message) {
     Common.bot.say(to, "https://www.youtube.com/watch?v=haq3m4Dkz_I");
};
 
 Commands.lua = function(Common, from, to, message) {
     Common.bot.say(to, "13too chicken to play cw in #cwexperts");
};
 
 Commands.karl = function(Common, from, to, message) {
     Common.bot.say(to, "1,4NEWS AT ELEVEN: Karl Snowden aka Turtles_Head was confirmed to be the GainzScape whistleblower, CwExperts offered him asylum.");
};
 
 Commands.sizo = function(Common, from, to, message) {
     Common.bot.say(to, "http://puu.sh/gNW3d.mp3");
};
 
 Commands.fable = function(Common, from, to, message) {
     Common.bot.say(to, "1,4CONFIRMED: HAS A GURLFRIEND!");
};
 
 Commands.flowertot = function(Common, from, to, message) {
     Common.bot.say(to, "Overly Attached Hannah - https://www.youtube.com/watch?v=ODQY8Xmawdo");
}
 Commands.planet_dirt = function(Common, from, to, message) {
     Common.bot.say(to, "1,4CONFIRMED: DOESN'T OWN A BOOTER!");
};
 
 Commands.suity = function(Common, from, to, message) {
     Common.bot.say(to, "Suit up! Because tonight is gonna be legen-wait for it...");
     setTimeout(function() {
          Common.bot.say(to, "Dary! Legendary!");
     }, 5000);
};
 
 Commands.zaenux = function(Common, from, to, message) {
     Common.bot.say(to, "2c5o3n10f6i5r6m5e2d 2d5o3w10n6s 2i5d3i10o6t");
};
 
 Commands.prod_spec = function(Common, from, to, message) {
     Common.bot.say(to, "13,5Who summoned the nigga in a wheelchair?");
};
 
 Commands.effigy = function(Common, from, to, message) {
    var msg = message.match(/\S+/g);
    if (typeof msg[1] != 'undefined') {
        if (Common.utils.toLc(msg[1]) == 'wah') {
            Common.bot.say(to, from + " didn't get Effy from their effigy, so they're going to continue camping Commander Zilyana for max boss prestige.");
        } else {
            Common.bot.say(to, from + " got an effigy! 13GAINZ!");
        }
    } else {
        Common.bot.say(to, from + " got an effigy! 13GAINZ!");
    }
};
 
 Commands.smd = function(Common, from, to, message) {
     Common.utils.pickUser(Common, to, 'smd', from);
};
 
 Commands.lmp = function(Common, from, to, message) {
     Common.utils.pickUser(Common, to, 'lmp', from);
};
 
 Commands.dxnxex7 = function(Common, from, to, message) {
     Common.bot.say(to, "http://rsplayers.wikia.com/wiki/Dxnxex7");
};
 
 Commands.ben_e = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say autism?");
};
 
 Commands.autism = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say Ben_E?");
};
 
 Commands.elysians = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say downs?");
};
 
 Commands.downs = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say Elysians?");
};
 
 Commands.wosby = function(Common, from, to, message) {
     Common.bot.say(to, "1,8Did someone say down syndrom tranny nigger fuck?");
};
 
 Commands.sma = function(Common, from, to, message) {
     Common.bot.say(to, "For all you haters out there: https://www.youtube.com/watch?v=SEY9rZjzVPk");
};
 
 Commands.kma = function(Common, from, to, message) {
     Common.utils.pickUser(Common, to, 'kma', from);
};
 
 Commands.ems = function(Common, from, to, message) {
     Common.utils.pickUser(Common, to, 'ems', from);
};
 
 Commands.sb = function(Common, from, to, message) {
     Common.bot.say(to, "The superboosting Castle Wars method was created by Seanz Pro, Sizo, Dxnxex7, Klaus, and Deflect on July 4th, 2013.");
};
 
 Commands.cwe = function(Common, from, to, message) {
     Common.bot.say(to, "The #CwExperts organization was founded by Abdel and Dxnxex7 on May 25th, 2014.");
};
 
 Commands.cwebot = function(Common, from, to, message) {
     Common.bot.say(to, "CWEBot is an intelligent SwiftIRC bot conceptualized and scripted by Sizo, Abdel, and Dxnxex7, for #CwExperts.");
};
 
 Commands.full = function(Common, from, to, message) {
     Common.bot.say(to, "Look, if you had one tick, or one opportunity. To seize all the gainz you ever wanted. one moment Would you hold 1 or just let the place get filled?");
};
 
 Commands.brown = function(Common, from, to, message) {
     Common.bot.say(to, "5Just cuz the skin is brown, don't mean we shit on the ground!");
};
 
 Commands.pussy = function(Common, from, to, message) {
     Common.bot.say(to, "13YOU PUSSY FAGGOT!!! 12GET DAT ASS OUT AND DO MOAR CASTLE WARS");
};
 
 Commands.bdp = function(Common, from, to, message) {
     Common.bot.say(to, from+" is feeling lonely, and is looking for a dance partner. GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY");
};
 
 Commands.tt = function(Common, from, to, message) {
     Common.bot.say(to, "7,12R U even 4×TRU TRIM×4 7,12pussy l2 5k games");
};
 
 Commands.party = function(Common, from, to, message) {
     Common.bot.say(to, "ヽ༼ຈل͜ຈ༽ﾉ 13PARTY TIME BITCHES1 ヽ༼ຈل͜ຈ༽ﾉ");
     Common.bot.say(to, "http://puu.sh/3A34s");
};
 
 Commands.panic = function(Common, from, to, message) {
     var panic = "2@5!3@10!6@5!6@5!2@12!9@7P2A6N4I5C10@5!6@10!10@12!7@10!9@13!7@";
     Common.bot.say(to, panic);
};
 
 Commands.usa = function(Common, from, to, message) {
     Common.bot.say(to, "All your oil are belong to us.");
};
 
 Commands.sisman = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "You can't dip God, son.");
        } else {
            Common.bot.say(to, "Sisman dips " + nick[1] + "'s nan in cum and rapes her with a broom!");
        }
    } else {
        Common.bot.say(to, "Sisman dips his nan in cum and rapes her with a broom!");
    }
};
 
 Commands.mikey = function(Common, from, to, message) {
     Common.bot.say(to, '"Fuck this shit, why are all females fuckin skets, stop being fucking sluts ' +
          'and grow the fuck up, cba with ur shit no more!" -- PvM Mr Mikey');
};
 
 Commands.melad = function(Common, from, to, message) {
     var list = [
          "It is what it is man.",
          "What can I say, brother.",
          "What do you want me to tell you dog?",
          "It's a big dog kind of day, dog.",
          "WOOF WOOF"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.futon = function(Common, from, to, message) {
     var list = [
          "WWHY IS BANDOS TIMEEE LOCKEDDD -snort-",
          "Im honestly tempt to try to trim an account in sub 100 days played.",
          "Omfg i just dont know what to say glad that only costed me 60m",
          "5 inches over night and still coming down like fuck off",
          "I am trying to understand how some people mentally function and failing castrophically",
          "What a great way to ruin my weekend",
          "Seriously forgot today was a holiday and first of the month and didnt leave food at home. Guess ill just eat tommorow instead.",
      "Can we get some perks to replace after shock and crackling to make them useless? I'm getting tired of dying to these two abilities procing ty.",
      "Nothing is bis at legios. U can 2 tick them.",
      "just missed an effigy f all u damn spammers",
      "im lagging god DAMNIT",
      "died to hard mode bleeds then stabbed himself with a pencil"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
Commands.filo = function(Common, from, to, message) {
	var list = [
		"U are lost as fk. Maybe u should leave ur special palace and talk to ppl like a person and not a king",
		"i dont even care that black zeus is a big black nigger what bothers me that he is darker in his mind than his skin"
	]
	var rand = list[Math.floor(Math.random() * list.length)];
	Common.bot.say(to, rand);
};
 
 Commands.katarina = function(Common, from, to, message) {
     Common.bot.say(to, "and u ooko can shut your mouth faggot reject");
};
 
 Commands.kat = function(Common, from, to, message) {
    Commands.katarina(Common, from, to, message);
};

// Commands.uwu = function(Common, from, to, message) {
//     Common.bot.say(to, "dicks are so cute omg (⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄ when you hold one in your hand and it starts twitching like it’s nuzzling you (/ω＼) " +
//                    "or when they perk up and look at you like 'owo nya? :3' hehe ~ penis-kun is happy to see me!!（＾ワ＾）");
//};

Commands.uwu = function(Common, from, to, message) {
	Common.bot.say(to, "dicks are so cute omg when you hold one in your hand and it starts twitching like it’s nuzzling you " +
			"or when they perk up and look at you like 'owo nya? :3' hehe ~ penis-kun is happy to see me!!");
};

 Commands.dsos = function(Common, from, to, message) {
     var list = [
          "oh my god guys I'm totally shaking I have received the dormant staff of sliske drop",
          "oh my god guys I'm totally shaking I have received the dormant staff of sliske drop",
          "oh my god guys I'm totally shaking I have received the dormant staff of sliske drop",
          "oh my god guys I'm totally shaking I have received the dormant staff of sliske drop",
          "oh my god guys I'm totally shaking I have received pms from strawberries"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.left = function(Common, from, to, message) {
     var list = [
          "I don’t care what they have to say. I don’t think the constitution is a relevant document right now.",
          "A WILD TRIGGLYPUFF HAS APPEARED! *pokemon music plays* - https://youtu.be/Y69tkCbeC5o?t=1m4s\nIt begins to chant: “KEEP YOUR HATE SPEECH OFF THIS CAMPUS!”...What will you do??",
          "A WILD SOCIAL JUSTICE WARRIOR HAS APPEARED! *pokemon music plays* - https://youtu.be/bIJUmApIRao?t=6m27s\nIt screams: “THERE'S NO SUCH THING AS COMPELLED SPEECH!”...What will you do??",
      "Hey guys what’s up rekt fucking foreskin feminist videos here, your family friendly channel for all things fuck her right in her pussy",
          "If you identify as a bobcat, man, go for it, great for you, I hope you’re the best bobcat on the fucking earth man."
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.strawberries = function(Common, from, to, message) {
     Common.bot.say(to, "Fk ur getting pms from strawberriesShes my aspiring edate the only thing im missing to match her is trim, ifb, 2k+ enr, " +
                    "phat set nd like idk rest of rs content but im getting thereOh wait she has like all achievements done as well (runescore)");
};
 
 Commands.lana = function(Common, from, to, message) {
     Common.bot.say(to, "bruuuuuhhhhhh holy fuuuuuuucccccccckkkkkkkk i never knew lana was so damn beautiful like honestly how is that even possible id literally probably give my life just to meet her one time in person and what in the hell was that camera man thinking i would've smashed the fucking camera if i had got that opportunity of meeting lana");
     Common.bot.say(to, "seriously tho if any girl out there has contacts with her or connections then please feel free to contact me lmfao i honestly might just stay a virgin untill i somehow get a chance to meet lana she's worthy of it lol");
};
 
 Commands.alana = function(Common, from, to, message) {
     var list = [
          "when I was 4 y/o in preschool I used to color my skin black with paint cuz I wanted to be black",
          "alana does rc"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.topic= function(Common, from, to, message) {
     var list = [
          "HELLOOOOOOOOOOO? DPS ????? HELLO WHERE THE FUCK IS THE DPS? C’MON MAN…. FUCKING DXNXEX7 TEAM!",
          "can you stop fucking using earthquake before hammering",
          "hammer the fucking boss dude??",
          "DUDE why do you hammer with a shield? use a defender and you won’t fucking splash",
          "repeat after me: smooch",
          "any questions?"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.black = function(Common, from, to, message) {
     Common.bot.say(to, "I think black people are privileged because they don’t hav to color their skin");
};
 
 Commands.couchy = function(Common, from, to, message) {
     Common.bot.say(to, "unironically banned on twitch.tv for nigger");
};
 
 Commands.wyd = function(Common, from, to, message) {
     Common.bot.say(to, "wyd couchy");
};
 
 Commands.vonte = function(Common, from, to, message) {
     Common.bot.say(to, "this chat has gone to shit");
};
 
 Commands.nihil = function(Common, from, to, message) {
     Common.bot.say(to, "nihilling doesnt mean you shield camp, telos is actually guide doable with low amounts of food, i feel like people just waste a fuckton of food when they dont have to (i.e. overhealing before a hold " +
                    "still happens, eating to full when theyre going to cade (andcould therefor soulsplit after), not using soulsplit enough)");
};
 
 Commands.quoted = function(Common, from, to, message) {
     var list = [
          "more of an impressive achievement",
          "?."
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.a13d = function(Common, from, to, message) {
     Common.bot.say(to, "REEEEE 1K ENRAGE STRATS REEEEEEEEEE");
};
 
 Commands.telos = function(Common, from, to, message) {
     Common.bot.say(to, "pretty sure he signed like 30 times before doing 35 damage - https://clips.twitch.tv/TriangularCourageousPeafowlSwiftRage");
};
 
 Commands.dart = function(Common, from, to, message) {
     Common.bot.say(to, "idk wtf is going on but let me font before darting real quick");
};
 
 Commands.chipmunks = function(Common, from, to, message) {
     Common.bot.say(to, "youre probably on his wishlist");
};
 
 Commands.ipso = function(Common, from, to, message) {
     Common.bot.say(to, "Okay so I haven't ever seen a seismic and I've missed two vitalis");
};
 
 Commands.leech = function(Common, from, to, message) {
     Common.db.channels.findOne({channel: to}, function(err, channel) {
        if (err || !channel) {
            console.log("Channel not found.");    
        } else if (channel.team == 'saradomin') {
            Common.bot.say(to, "2The 10Saradomin 2team is powerful enough already! 3Guthix 2demands balance - join the 4Zamorak 2team instead!");
        } else if (channel.team == 'zamorak') {
            Common.bot.say(to, "2The 4Zamorak 2team is powerful enough already! 3Guthix 2demands balance - join the 10Saradomin 2team instead!");
        }
     });
};
 
 Commands.pernix = function(Common, from, to, message) {
     Common.bot.say(to, "the best runescape video ever - https://www.youtube.com/watch?v=d4pmxsA0O64");
};
 
 Commands.salve = function(Common, from, to, message) {
     var list = [
          "i hate cwe!!!!!!!!!!!!!!!!!!! 13 minute games are moral rape!!!!!!!!!!",
          "Lol get hit by another car u dumb cripple retard",
      "Will just rejoin on alt later cuz hicks"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.yoyo = function(Common, from, to, message) {
     Common.bot.say(to, "leda rly gets down tbh lol - https://gyazo.com/64ca7673bcca695b5521bc973d483ac1");
};
 
 Commands.yippie = function(Common, from, to, message) {
     Common.bot.say(to, "who's the black guy fucking quoted? - https://gyazo.com/cf1dd9ae7401d3a53c8e8f394892315d");
};
 
 Commands.futuristic = function(Common, from, to, message) {
     Common.bot.say(to, "better than dxnxex7");
};
 
 Commands.jess = function(Common, from, to, message) {
     Common.bot.say(to, "13she's our princess :3");
};
 
 Commands.dead = function(Common, from, to, message) {
     Common.bot.say(to, "this dude had too many drinks lol - https://puu.sh/xSNOE.png");
};
 
 Commands.lat = function(Common, from, to, message) {
     Common.bot.say(to, "How many times do you think latreell uses slice and punish?");
     setTimeout(function() {
          Common.bot.say(to, "Idk probably at least 3 before he dies");
     }, 5000);
};
 
 Commands.smooch = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "You can't give God your cooties.");
        } else {
            Common.bot.say(to, "13" + from + " gives " + nick[1] + " ALL the smoochies ;* ;0");
        }
    } else {
        Common.bot.say(to, "pm topic for smooching lessons");
    }
};
 
 Commands.megan = function(Common, from, to, message) {
     Common.bot.say(to, "Megan my sweet summer child. You seem to be quite the victim in all of this, which is astounding since your actions are what caused all of this to unfold. You cheated on your partner, no one else " +
                    "can be blamed but yourself for that. You asked someone to keep something so abhorrent secret, which is unfair stress to put on someone.");
     Common.bot.say(to, "If you wanted none of this to happen, then maybe you should've either been mature and ended it with Aaron when you fell out of love with him, or just not have cheated him in the first place. " +
                    "You seem quite happy to throw insults and names to other people, and revel in all of this attention. No one is trying to get to you why do you want to make this about yourself?");
     Common.bot.say(to, "People don't have whacked moral compasses like yourself, if they know you're cheating on your partner, and the partner doesn't know, they clearly feel like he deserves to know because " +
                    "it's so confidence and soul destroying to have that be done to you? No one deserves it and he deserved to know.");
     Common.bot.say(to, "So don't make this about yourself, it's about Aaron and what he deserves to know. On a personal note, from me to you, you really should care, what you've done is awful, it " +
                    "truly is, no one deserves to wonder why they weren't enough or good enough, you should have ended it straight away or just not cheated, please stop this victimising of yourself.");
};
 
 Commands.vega = function(Common, from, to, message) {
     var list = [
          "I’m sucking cock tonight and no one is going to stop me",
          "deeply sighs can someone please eat me out...",
          "emo boys will always have my heart",
          "i want to sit on ur lap and kiss u a lot",
          "suck my titties",
          "I just took nudes in a starbucks bathroom",
          "daydreaming of dick",
          "still looking for a goth bf",
          "I’m so sleepy and I just wanna cuddle",
          "I’d be the best gf because I have thousands of nudes on deck to send at any time",
          "I’m so horny!!!!!!!!!!!",
          "fuck me???????",
          "break my heart and break my pussy",
          "good morning daddy",
          "I just sucked Barney's cock wassup",
          "will there ever be a day that I don’t feel extremely horny????",
          "wanna get drunk n kiss eachother a lot??",
          "I’m so sleepy and I’m so lonely",
          "I’m so lost without good dick in my life",
          "can someone fucking finger me already?????!!!!!!!??!!?!?!?!!?",
          "I can’t fuck with u if u have never played runescape",
          "my kink is getting my heart broken",
          "i want to kiss u so fucking much",
          "notices your bulge OwO",
          "I’m on a pussy-only diet",
          "i haven't masturbated in weeks because I'm saving my first cum for when I start camming again",
          "SHUT UP AND FUCK ME",
          "it is 6 am and I am ready for a fat cock in my mouth",
          "single and ready to mingle with only really sad goth boys who look like they haven’t slept in 10 years",
          "I’m a sad girl",
          "I really need to finger things out",
          "choke the fuck out of me",
          "ok it’s like the third time the tsa has taken my birth control through security without telling me :^) anyone wanna HOOK A MF UP IN VEGAS SO I DONT HAVE A CHILD LMAO?? holy shit",
          "english ppl r so cute like wow shove ur dick in me innit",
          "someone plz date me",
          "taking cuddle buddy applications",
          "booty rubs plz",
          "who’s gonna be my valentine?",
          "Can Someone Please E-Date Me...,",
          "fuck my tight ass",
          "u so fuckin precious when u eat my pussy",
          "nothing is more refreshing than gargling a fat steamy cumload",
          "I wonder what the FBI agent who watches me through my webcam thinks about me masturbating to the same hentai 6 times a day",
          "I love sending ppl nudes to brighten their day",
          "tits",
          "I want an anime boyfriend OwO",
          "tonight I am getting dicked and no one is goiNG TO STOP ME",
          "I'm dripping wet",
          "I just wanna daddy to spoil me and take care of me and fuck me really good",
          "just filled up my bathtub with semen from everybody I've had sex with!! time to take a dip :3",
          "I think I have an addiction to hentai",
          "pwease fuck my wittle pussy daddy (｡ ･ ω ･ ｡ )",
          "I wanna suck a demon's dick",
          "can someone just bust a fat nut on my face",
          "u know ur sad when u can't even masturbate",
          "I wonder what the grinch's cock tastes like",
          "life would be so boring if I wasn't a dirty cumslut",
          "fuck my virgin ass",
          "I wanna have public sex so bad",
          "just masturbated with a candy cane bc I'm festive as fuck",
          "send nudes",
          "I'm craving cock rn",
          "my fav hobby is snorting coke off of a cock",
          "cum in my throat lol",
          "u ever take a dick so big ur pretty sure ur internal organs got damaged? bc same",
          "ready!!! set!!!! fuck me!!!",
          "wow I love sex",
          "in the mood to gag on a cock",
          "plant your seed in me",
          "spank meeeeeeeeee",
          "mood: https://gyazo.com/2b3814de1d779fc7e48ed7dec2439eac",
          "I'm just trying to find my e-soulmate",
          "can someone lodge a dick DEEP inside me TONIGHT????",
          "need a man who will nut in my coffee if I run out of creamer",
          "FUCK ME FUCK ME FUCK ME"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.hanna = function(Common, from, to, message) {
     Common.bot.say(to, "i dont know what i want for a command btw I'll come cw but only if you alt for me ~ Hanna");
};
 
 Commands.sunbear = function(Common, from, to, message) {
     Common.bot.say(to, "Destroyed all his CW Enhancers before going for full profound decorative armour. fucking retard.");
};
 
 Commands.ashleigh = function(Common, from, to, message) {
     Common.bot.say(to, "CW’s Cuck. its still unclear whether she wants to date filo, but she was allegedly robbed by him for her pjs");
};
 
 Commands.mj = function(Common, from, to, message) {
     Common.bot.say(to, "i was born with glass bones and paper skin every morning i break my legs and every afternoon i break my arms at night i awake in agony until my heart attacks put me to sleep");
};
 
 Commands.rumy = function(Common, from, to, message) {
     var list = [
          "im doing mine with cwars united",
          "well i asked a friend who knows a jmod and it technically is against the rules and ive just been put off it since lol",
	  "its trim only 2.4k players have it???"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.list = function(Common, from, to, message) {
     var parse_message = message.match(/\S+/g);
     try {
          var list = parse_message[1].split(',')
          var rand = list[Math.floor(Math.random() * list.length)];
          Common.bot.say(to, "4" + "The gods have picked: " + rand + "!");
     } catch (e) {
          Common.bot.say(to, "5" + "That's not a list. Use the format !list ITEM_1,ITEM_2,ITEM_X to pick a random item from a list.");
     }
};
 
 Commands.manip = function(Common, from, to, message) {
     Common.bot.say(to, "Is everybody excited to see solak release?the weather is warming up,and hats are doing well!");
};
 
 Commands.wdym = function(Common, from, to, message) {
     if (Common.utils.toLc(from) == "dxnxex7") {
          Common.bot.say(to, "5Sorry "+from+", you can't use that.");
     } else {
          if (Common.wdym[to] == true) {
               Common.wdym[to] = false;
               Common.bot.say(to, "2What do you mean Dxnxex7? has been disabled.");
          } else {
               Common.wdym[to] = true;
               Common.bot.say(to, "2What do you mean Dxnxex7? has been enabled.");
          }
          console.log(Common.wdym[to]);
     }
};
 
 Commands.twss = function(Common, from, to, message) {
     var list = [
          "my mother’s coming",
          "it squeaks when u bang it",
      "does the skin look red and swollen?",
          "grapes, seductive",
      "you already did me",
      "wow that is really hard, well you always left me satisfied and smiling, so..",
      "why is this so hard?",
      "push it in as deep as you can",
      "i need two men on this",
      "don’t make it harder than it has to be",
          "and up comes the tool bar",
      "would you reach over and touch his thing",
      "at least we put this matter to bed",
          "this is huge!",
          "you need to get back on top",
          "hold it in your mouth if you can’t swallow",
      "and you were directly under her the entire time?",
          "you are making this harder than it has to be",
          "i’m not saying it won’t be hard, but we can make it work",
      "i can’t believe you came",
          "you’re hardly my first!",
      "get out of my nook",
      "dip it in the water so it’ll slide down your gullet more easily",
      "that’s easy, give me a hard one",
      "comedy is a place where the mind goes to tickle itself"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
     setTimeout(function() {
          Common.bot.say(to, "13THAT'S WHAT SHE SAID!!");
     }, 3000);
};
 
 Commands.ahmed = function(Common, from, to, message) {
     Common.bot.say(to, "Ahmed cries like the little bitch he is after being hacked for his bank - https://www.youtube.com/watch?v=sgYJcHwCyfg");
};
 
 Commands.astrum = function(Common, from, to, message) {
     Common.bot.say(to, "Astrum's Seismic Clan Meeting Episode 2: Help Me Kill PVMA - https://www.youtube.com/watch?v=vy0K-R3dTaI");
};
 
 Commands.kms = function(Common, from, to, message) {
     Common.bot.say(to, from + " wants to kill themself but is too much of a pussy...boo just fucking do it already - https://www.youtube.com/watch?v=2dbR2JZmlWo");
};
 
 Commands.monk = function(Common, from, to, message) {
     Common.bot.say(to, "Monk faggot goes for 15 dinners a day. Thats too many fucking dinners smh.");
};
 
 Commands.futondead = function(Common, from, to, message) {
     Common.bot.say(to, "3MIL LUL - https://clips.twitch.tv/EnergeticPluckyYogurtSMOrc");
};
 
 Commands.jamesgunn = function(Common, from, to, message) {
     var list = [
          "RT @peteralton I like it when little boys touch me in my silly place.   Shhh!",
          "Photo shoot with @AmaLea, @steviesparkle, & Melissa_Pizza. Trying to maintain a semi-chub so that I’ll look impressive in these photos.",
      "The Hardy Boys and the Mystery of What It Feels Like When Uncle Bernie Fists Me #SadChildrensBooks",
          "The Expendables was so manly I fucked the shit out of the little pussy boy next to me! The boys ARE back in town!",
      "My new film: Jerkloose-A small town where beating off is illegal, & 1 high school kid jerks off in front of the others to show how fun it is",
      "This may be the plant version of adopting a damaged 12 year old girl who steals your money and accuses you of molesting her.",
      "This hotel shower is the weakest ever. Felt like a three year old was peeing on my head.",
      "“Eagle Snatches Kid” is what I call it when I get lucky.",
      "I just downloaded that new Steven Tyler single. I feel the type of shame usually reserved for getting a three dollar bj from a maybe-tranny.",
      "Three Men and a Baby They Had Sex With #unromanticmovies",
          "@DrewAtHitFix Honesty’s the best policy. Tell your 3 year old you’re laughing thinking of me fucking 3PO. He’ll appreciate it when older.",
      "I’m doing a big Hollywood film adaptation of The Giving Tree with a happy ending - the tree grows back and gives the kid a blowjob.",
      "About to vomit as I’m stuffed with étouffée and eggplant. I’m Louie Andersoning my ass out (just the fat, not the little boys).",
          "Mary Matthews just told me a story about how a monkey jerked off to completion on a kid on the set of Max Keeble’s Big Move.",
          "RT @blackehart I remember my first NAMBLA meeting. It was the first time I felt ok being who I am. Some of those guys are still my BFF’s."
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.ahhheck = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
     if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "You can't offend your God.");
        } else {
            Common.bot.say(to, "no offense but you're retarded " + nick[1] + " lol. sorry for using the word 'retarded' as it might be seen as controversial.");
        }
    } else {
        Common.bot.say(to, "no offense but you're retarded lol. sorry for using the word 'retarded' as it might be seen as controversial.");
    }
};
 
 Commands.lonelyisland = function(Common, from, to, message) {
     var list = [
          "im on a fuckin boat - https://www.youtube.com/watch?v=avaSdC0QOUM",
      "captain jack sparrow - https://www.youtube.com/watch?v=GI6CfKcMhjY",
      "ure mom lover - https://www.youtube.com/watch?v=X0DeIqJm4vM",
      "the golden rule - https://www.youtube.com/watch?v=Pi7gwX7rjOw",
      "i threw it on the GROUND - https://www.youtube.com/watch?v=gAYL5H46QnQ",
      "ive never had sex - https://www.youtube.com/watch?v=lQlIhraqL7o",
      "jizz in my panties - https://www.youtube.com/watch?v=4pXfHLUlZf4",
      "like a bawz - https://www.youtube.com/watch?v=NisCkxU544c",
      "the chroni-what-cles of narnia - https://www.youtube.com/watch?v=sRhTeaa_B98",
      "real art - https://www.youtube.com/watch?v=Dh2Lky730q0",
      "obama bin laden - https://www.youtube.com/watch?v=Jr9Kaa1sycs"
     ]
     var rand = list[Math.floor(Math.random() * list.length)];
     Common.bot.say(to, rand);
};
 
 Commands.li = function(Common, from, to, message) {
    Commands.lonelyisland(Common, from, to, message);
};
 
 Commands.tiddy = function(Common, from, to, message) {
     Common.bot.say(to, "8,1plushie KING");
};
 
 Commands.jebrim = function(Common, from, to, message) {
     Common.bot.say(to, "I’m a virgin only in the sense of intercourse. I’ve touched vagina before. Last time was a few months after I maxed.");
};
 
 Commands.tnf = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "You can't offend your God.");
        } else {
            Common.bot.say(to, nick[1] + " is a tranny nigger fuck");
        }
    } else {
        Common.bot.say(to, "tranny nigger fucks!!!");
    }
};
 
 Commands.tony = function(Common, from, to, message) {
    Common.bot.say(to, "It has come to our attention that many people are streaming RuneScape and doing Runescape on You tube ! It is against Glory and Golds clan rules to stream Runescape ! " +
        "This is not a new rule ! Plz obey the rule ! If you continue to break the rules we will be forced to ban you from any and all areas of Glory and Gold !");
    Common.bot.say(to, " Plz be a uniter and  not a divider by simple following the rules or by quietly leaving the  clan in order to follow your own ambition ! If you stay and continue to be a great clan member and support our clan leadership great ! TYVM " +
        "Plz dont stay and have and spread a sour grapes attitude forcing us to ban you from any and all areas of Glory and Gold ! TYVM FOR ALL YOUR LOV AND SUPPORT !");
};
 
 Commands.cwmp = function(Common, from, to, message) {
    Common.bot.say(to, "4W6E2E 10W13O9O 7W3E8E 5W12O9O 2W5E6E 3W11O7O4!13! 1- https://twitter.com/cwmorality");
};
 
 Commands.cwo = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "Real life ONLY.");
        } else {
            Common.bot.say(to, "There isn't possibly anything you must do that is more important than playing Castle Wars with #CwExperts right now, " + nick[1] + ". Castle Wars ONLY.");
        }
    } else {
        Common.bot.say(to, "Castle Wars ONLY.");
    }
};
 
 Commands.prod = function(Common, from, to, message) {
    Common.bot.say(to, "im a pussy tht kills looters in wildy cuz i cant pvp");
};
 
 Commands.wifey = function(Common, from, to, message) {
    Common.bot.say(to, "wifey is the best raid hoster, queen of pvp/minigames, best female raxer in game with her own record, can probably kill prod in a 1v1 if she tried");
};
 
 Commands.fmk = function(Common, from, to, message) {
    var fmk = message.match(/\S+/g);
    var fuck = fmk[1];
    var marry = fmk[2];
    var kill = fmk[3];
        if (typeof fuck != 'undefined' && typeof marry != 'undefined' && typeof kill != 'undefined') {
            var list1 = [
                fuck,
                marry,
                kill
            ]
            var rand1 = list1[Math.floor(Math.random() * list1.length)];
		if (rand1 == fuck) {
			var list2 = [
			marry,
			kill
			]
		} else if (rand1 == marry) {
			var list2 = [
			fuck,
			kill
			]
		} else if (rand1 == kill) {
			var list2 = [
			fuck,
			marry
			]
		}
            var rand2 = list2[Math.floor(Math.random() * list2.length)];
		if ((rand1 == fuck && rand2 == marry) || (rand1 == marry && rand2 == fuck)) {
			var rand3 = kill;
		} else if ((rand1 == marry && rand2 == kill) || (rand1 == kill && rand2 == marry)) {
			var rand3 = fuck;
		} else if ((rand1 == fuck && rand2 == kill) || (rand1 == kill && rand2 == fuck)) {
			var rand3 = marry;
		}
            Common.bot.say(to, "13FUCK1, 12MARRY1, 4KILL1! " + from + " 13fucks1 " + rand1 + ", 12marries1 " + rand2 + ", and 4kills1 " + rand3 + ".");
        } else {
            Common.bot.say(to, "5That's not how you play the game! Use the format !fmk NAME_1 NAME_2 NAME_3 to play Fuck, Marry, Kill.");
        }
};
 
Commands.stake = function(Common, from, to, message) {
    var stake = message.match(/\S+/g);
    if (typeof stake[1] != 'undefined' && typeof stake[2] != 'undefined') {
	if (Common.utils.toLc(stake[2]) != 'damp_cat' && Common.utils.toLc(stake[2]) != 'damp') {
        Common.bot.say(to, "7[1/3]: Welcome to the Sand Casino! " + from + " is staking " + stake[1] + " against " + stake[2] + "! 3...2...1...Fight!...");
        var list1 = [
        "It's an even match! Both players have just enough LP to survive a critical hit! Anyone could win...",
        "" + from + " has the advantage! Will " + stake[2] + " make a comeback?",
        "" + stake[2] + " has the advantage! Will " + from + " make a comeback?",
        "" + from + " is nearly dead! This is as close as it gets folks!",
        "" + stake[2] + " is nearly dead! This is as close as it gets folks!",
        "You question your decisions in life and prepare for the worst outcome.",
        "You are certain you are going to win this one...even though the odds are always 50/50.",
        "You hit a 1 with your polypore and wonder where you went wrong.",
        "" + stake[2] + " hits a 1 with their polypore and you laugh at their misfortune.",
        "You forgot to set your spell to polypore strike and " + stake[2] + " gets the first hit!",
        "" + stake[2] + " forgot to set their spell to polypore strike and you get the first hit!",
        "You cast vengeance followed by disruption shield! " + stake[2] + " calls you a scammer and reports you.",
        "" + stake[2] + " casts vengeance followed by disruption shield! You smash your keyboard for being dumb enough to fall for this scam.",
        "You slyly sip your overload and hope " + stake[2] + " doesn't notice...",
        "" + stake[2] + " slyly sips their overload...but you notice and quickly pot up yourself!",
        "You enabled summoning when " + stake[2] + " wasn't looking and you wreck them with your steel titan! Will this be an easy win for you?",
        "" + stake[2] + " enabled summoning when you weren't looking and wrecks you with their steel titan! Will you be able to crit them out!?",
        "Magic was turned off you dumbass! Luckily you had one free inventory space and are now in a fist fight with " + stake[2] + "."
        ]
        var rand1 = list1[Math.floor(Math.random() * list1.length)];
        setTimeout(function() {
            Common.bot.say(to, "7[2/3]: " + rand1);
        }, 10000);
       
        var list2 = [
        " 3Congratulations " + from + "! You were victorious and won " + stake[1] + " from " + stake[2] + "!",
        " 4Oh dear, you are dead " + from + "! You were defeated and lost " + stake[1] + " to " + stake[2] + "!",
        "3 " + from + ", you were victorious and won " + stake[1] + " from " + stake[2] + "! The rush of dopamine temps you to stake again and ride the wave...",
        "4 " + from + ", you were defeated and lost " + stake[1] + " to " + stake[2] + "! Your heart sinks as you realize you just lost your bank...and you go ask your friends for more loans to fuel your staking addiction."
        ]
        var rand2 = list2[Math.floor(Math.random() * list2.length)];
        setTimeout(function() {
            Common.bot.say(to, "7[3/3]:" + rand2);
        }, 20000);
	} else {
		Common.bot.say(to, "5Error. Too much debt.");
	}
    } else {
        Common.bot.say(to, "5That's not how you play the game! Use the format !stake AMOUNT_HERE OPPONENT_HERE to gamble at the Sand Casino.");
    }
};
 
Commands.neil = function(Common, from, to, message) {
    Common.bot.say(to, "Best zuriels staff, ff expert, limbo champion, ironman tuzzy");
};
 
Commands.emwy = function(Common, from, to, message) {
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "you cant pwn god l");
        } else {
            Common.bot.say(to, "emwy pwns " + nick[1] + " in her bed l");
        }
    } else {
        Common.bot.say(to, "emwy pwns runescape noobs in her bed l");
    }
};
 
Commands.jfuzzy = function(Common, from, to, message) {
    Common.bot.say(to, "BestMate: gave y dibe rauds tidat akreadt?");
};
 
Commands.hiss = function(Common, from, to, message) {
    Common.bot.say(to, "thhhhhhhhhhhhhhhssssss - https://www.youtube.com/watch?v=_yDiWYSgFqU");
};
 
Commands.tit = function(Common, from, to, message) {
    Common.bot.say(to, "his real name is menaphos");
};
 
Commands.wtf = function(Common, from, to, message) {
    var msg1 = "I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. " +
        "I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target.";
    var msg2 = "I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. " +
        "You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot.";
    var msg3 = "The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands.";
    var msg4 = "Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. " +
        "If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue.";
    var msg5 = "But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";
    var nick = message.match(/\S+/g);
    if (typeof nick[1] != 'undefined') {
        if (Common.utils.toLc(nick[1]) == 'abdel') {
            Common.bot.say(to, "What the fuck did you just fucking say about God, you little bitch?");
        } else {
            Common.bot.say(to, "What the fuck did you just fucking say about me " + nick[1] + ", you little bitch?");
            Common.bot.say(to, msg1);
            Common.bot.say(to, msg2);
            Common.bot.say(to, msg3);
            Common.bot.say(to, msg4);
            Common.bot.say(to, msg5);
        }
    } else {
        Common.bot.say(to, "What the fuck did you just fucking say about me, you little bitch?");
        Common.bot.say(to, msg1);
        Common.bot.say(to, msg2);
        Common.bot.say(to, msg3);
        Common.bot.say(to, msg4);
        Common.bot.say(to, msg5);
    }
};
 
Commands.vit = function(Common, from, to, message) {
    Common.bot.say(to, "Dxnxex7: nice 100 kc vitalis");
    Common.bot.say(to, "Ipso: ty his name is derek");
};
 
Commands.kanye = function(Common, from, to, message) {
    Common.bot.say(to, "*tightens maga hat* ye");
};
 
Commands.marv = function(Common, from, to, message) {
    Common.bot.say(to, "probably grave-traded his profound so he could go stake it");
};

Commands.marvela = function(Common, from, to, message) {
    Commands.marv(Common, from, to, message);
};
 
Commands.travmerch = function(Common, from, to, message) {
    Common.bot.say(to, "cheat your way to the cw req here - https://runescape.wiki/w/Travelling_Merchant%27s_Shop/Future");
};
 
Commands.tm = function(Common, from, to, message) {
    Commands.travmerch(Common, from, to, message);
};
 
Commands.msbob = function(Common, from, to, message) {
    Common.bot.say(to, "4卐卐卐 Castle Wars Nazi! Smd MsBob! 4卐卐卐 ^o^ http://puu.sh/9ziD8.png");
};
 
 Commands.rsnotes = function(Common, from, to, message) {
    var md = message.match(/\S+/g);
    if (typeof md[1] != 'undefined') {
        if (Common.utils.toLc(md[1]) == 'md') {
            Common.bot.say(to, "*checks Dxnxex's old runescape notes...*: 5I'll call him, Minidan.");
        } else {
            var listnotes = [
            "got a problem broski?",
            "im smexier",
            "lies",
            "thank you.",
            "Foxy I love you",
            "E l f if you ever read this i love you 2",
            "no",
            "ho   mo",
            "nvm i'm a girl",
            "3Cabbage.",
            "Rargh, I'm a lava monster!",
            "How appropriate. You fight like a cow.",
            "Corp 4 96 Summoning - Pack Yak - Bar00 Bar00 :)",
            "Divine please.",
            "3Ice is Ok.",
            "5I'll call him, Minidan.",
            "4d 2e 8a 5s",
            "dickbands"
            ]
            var note = listnotes[Math.floor(Math.random() * listnotes.length)];
            Common.bot.say(to, "*checks Dxnxex's old runescape notes...*: " + note);
        }
    } else {
        var listnotes = [
            "got a problem broski?",
            "im smexier",
            "lies",
            "thank you.",
            "Foxy I love you",
            "E l f if you ever read this i love you 2",
            "no",
            "ho   mo",
            "nvm i'm a girl",
            "3Cabbage.",
            "Rargh, I'm a lava monster!",
            "How appropriate. You fight like a cow.",
            "Corp 4 96 Summoning - Pack Yak - Bar00 Bar00 :)",
            "Divine please.",
            "3Ice is Ok.",
            "5I'll call him, Minidan.",
            "4d 2e 8a 5s",
            "dickbands"
        ]
        var note = listnotes[Math.floor(Math.random() * listnotes.length)];
        Common.bot.say(to, "*checks Dxnxex's old runescape notes...*: " + note);
    }
};
 
Commands.cwet = function(Common, from, to, message) {
    var cwet = [
    "It's a witch hunt!! ANGRY 23minute gamers are accusing us of fake stuff! SAD",
    "All aboard the Cwe train!! There are no brakes on this train!! MCWGA!!! No angry 23minute gamers can stop this train!"
    ]
    var trump = cwet[Math.floor(Math.random() * cwet.length)];
    Common.bot.say(to, trump);
};
 
Commands.cwem = function(Common, from, to, message) {
    Common.bot.say(to, "cwelon musk - https://twitter.com/CwExperts/status/1054182550556545025");
};
 
Commands.titanic = function(Common, from, to, message) {
    Common.bot.say(to, "gold trimmers fc sunk like the titanic - https://twitter.com/CwExperts/status/742553784337858560");
};
 
Commands.tho_mas = function(Common, from, to, message) {
    Common.bot.say(to, "https://gyazo.com/7b8e53d3bb2ec07f0e727e0add13c168");
};
 
Commands.everyone = function(Common, from, to, message) {
    Common.bot.say(to, "why don't we just use discord instead :)?");
};
 
Commands.jmod = function(Common, from, to, message) {
    Common.bot.say(to, "hello I would like to speak to a jmod for ABSOLUTE ETERNAL CONFIRMATION that my shit account will not be banned");
};
 
Commands.viable = function(Common, from, to, message) {
    Common.bot.say(to, "yeah but the only people who can possibly beat this time is us, and there's no point in doing more floors so it's going to be #1.");
};

Commands.mary = function(Common, from, to, message) {
	Common.bot.say(to, "FWB called me and asked me why i was taking so long and i told him i had to do my makeup so he wouldn’t look down and see a boiled egg during sex. halfway thru sex i start talking dirty like oh yeah u like fucking humpty dumpty huh??? he got soft and got off me LMFAOOO");
};

Commands.megaduck = function(Common, from, to, message) {
	Common.bot.say(to, "first of all, you have almost half of my exp and probably don't even have trim yet, so your acc must be twice as shit haha. Secondly, your posts further prove how pathetic and child like you are, bravo for letting this person promote your fc.. loll");
};

Commands.polly = function(Common, from, to, message) {
	var msg = [
	"More then once a day I see a post of someone saying they want to die, please grow up and appreciate what you got, I assure you life is worth more than you believe.",
	"What with everyone tweeting about sleeping problems and wondering why they can't sleep. Turn your electronics off and make a sleeping pattern and stick to it as simple as that!"
	]
	var dumb = msg[Math.floor(Math.random() * msg.length)];
	Common.bot.say(to, dumb);
};

Commands.cnn = function(Common, from, to, message) {
	Common.bot.say(to, "Jim’s gonna have to do all his reporting from Acosta street");
};

Commands.fribib = function(Common, from, to, message) {
	Common.bot.say(to, "But i dont wanna break rules and cwe is a hella lot of effort I tried it and its intense Like srsly intense. (dont join cwe)");
};

Commands.pewdiepie = function(Common, from, to, message) {
	Common.bot.say(to, "4SUBSCRIBE TO PEWDIEPIE!!! UNSUBSCRIBE FROM TSERIES! TSERIES HAS BIG GAY! >>> https://www.youtube.com/user/PewDiePie <<<");
};

Commands.agriculture = function(Common, from, to, message) {
	Common.bot.say(to, "I hope you die. Welcome to my ignore list. - https://gyazo.com/21add0b1c15180857090bf0eb4207adb");
};

Commands.ed = function(Common, from, to, message) {
	Common.bot.say(to, "when will rs3 devs realize that elite dungeons are fucking garbage and that they should stop making them!!!!!!!!!!!lol");
};

Commands.neet = function(Common, from, to, message) {
	Common.bot.say(to, "just realized not a single sexy egirl on this app cares about me. not a  single egirl. i just wanna talk about my day and see their pussy, but no  one care enough, no one.");
};

Commands.subway = function(Common, from, to, message) {
	Common.bot.say(to, "five dollar footlong");
};

Commands.crab = function(Common, from, to, message) {
	Common.bot.say(to, "i think mr krabs is feeling it now - https://www.youtube.com/watch?v=LDU_Txk06tM");
};

Commands.krab = function(Common, from, to, message) {
	Commands.crab(Common, from, to, message);
};

Commands.crandog = function(Common, from, to, message) {
	Common.bot.say(to, "i dont see how being self-proclaimed master of true trim is related to your botting ban, and if anything the fact you botted just devalues it instead lol");
};

Commands.kyle = function(Common, from, to, message) {
	Common.bot.say(to, "I've played the game for years and have submitted many bug reports. I never felt the need to submit one like this.. Seriously it is not constructive. That person on the other end could be going through something and you could make it worse. Treat others how you want to be treated");
};

Commands.afghann = function(Common, from, to, message) {
	Common.bot.say(to, "my laptop is a potato i cant turn irc on i have 3 mb of ram and cant run text based software created in 1988");
};

Commands.cpl = function(Common, from, to, message) {
	Common.bot.say(to, "creepy porn lawyer 2020! ...oh wait hes going to jail for extortion and tax evasion... trump wins again");
};

Commands.yeehaw = function(Common, from, to, message) {
	Common.bot.say(to, "i got the horses in the back - https://www.youtube.com/watch?v=7ysFgElQtjI");
};

Commands.julian = function(Common, from, to, message) {
	Common.bot.say(to, "#FreeAssange");
};

Commands.assange = function(Common, from, to, message) {
	Commands.julian(Common, from, to, message);
};

Commands.onkel = function(Common, from, to, message) {
	Common.bot.say(to, "Oh boy, you fucked up big time, just wait untill i have unlocked my profile so i can warn you buddy!");
};

Commands.onkelcookie = function(Common, from, to, message) {
	Commands.onkel(Common, from, to, message);
};

Commands.kerrie = function(Common, from, to, message) {
	Common.bot.say(to, "thinks marvel movies are good");
};

Commands.rozana = function(Common, from, to, message) {
	Common.bot.say(to, "biggest cwe babe xo");
};

Commands.thot = function(Common, from, to, message) {
	Common.bot.say(to, "arent all the cwexperts girls?");
};

Commands.lathow = function(Common, from, to, message) {
	Common.bot.say(to, "my gf and I were like tickling each other and shit in bed and she got bruises on her arm and her boss asked her if I did it and she said yes to him if she does this kind of autistic shit again I'm gonna break up with her " 
		      + "she unironically pissed me off because a stranger now thinks I'm abusing her or fuck knows what yea dude I tie her up in my dungeon and punch her right in the pussy bad white guy abusing poor asian girl");
};

Commands.mercher = function(Common, from, to, message) {
	Common.bot.say(to, "basicly investors have seen better oppatiniatys and have decided to free up funds");
};

Commands.gay = function(Common, from, to, message) {
	Common.bot.say(to, "only gay people are allowed to joke about hating gay people. if you're straight you CANNOT say 'this is why i hate gay people' or '__ is the only gay i respect' if youre a mf heteronoi and cheese you do not get to joke about hating gay people EVER");
};

Commands.payout = function(Common, from, to, message) {
	Common.bot.say(to, "This is last my grandmom is falling down the stairs soon");
};

Commands.artimas = function(Common, from, to, message) {
	Common.bot.say(to, "i cbf to sign");
};

Commands.inque = function(Common, from, to, message) {
	Common.bot.say(to, "sgb is useless tbh");
};

Commands.destroy = function(Common, from, to, message) {
	Common.bot.say(to, "Love the PM lol I know you know better than getting lowballed by scammers like rsn Destroy but good to see some people that try to make people aware of it. Gl on 3a dye");
};

Commands.rose = function(Common, from, to, message) {
	var msg = [
	"Fine I’ll nap the begging stops now I’ll do it",
	"Fine ladies I’ll go to bed 😪 but first ☝️ 😳 I’m gonna need a goodnight from you 😏 ❤️",
	"Are you begging me to nap, fine I will partake",
	"Fine you’ll head pat me while I nap all day",
	"I swear if you keep begging me to nap",
	"Fine quit begging I’ll go nap",
	"Depression nap it is",
	"As I’ve been begged by so many I will now nap",
	"Are you once again begging me to nap",
	"Fine I’ve listened to your begging and I’ll have a nap",
	"Fine you have all begged enough get off your knees every one, I will go nap",
	"I’ve listened to requests and my statement is stop begging me to nap, I’ll do it.",
	"Ok fine after all your copious begging I’ll nap",
	"Ok you’ve begged enough, I’ll nap",
	"Well if ur begging I guess I’ll nap 🙄",
	"Double dog dare me to nap?",
	"1 like and ill nap",
	"thinking bout nap",
	"Y’all really stop begging me daily to nap fine I get it I’ll nap things I do for y’all",
	"Ok stop begging me omfg please stop begging I’ll have a nap just stop begging",
	"CAN YALLL STOP THE BULLYING I S2G I WILL GO NAP",
	"Just wanted to say good morning, I’m going for a nap",
	"i know i just woke up from a nap but i totes wanna nap again",
	"Wake up ✔️ Nap again ✔️",
	"Well that nap was longer then I intended",
	"i need a super long depression nap rt",
	"So who gonna stroke my hair and complement me while I nap",
	"Gonna nap when I wake hmu ladies"
	]
	var nap = msg[Math.floor(Math.random() * msg.length)];
	Common.bot.say(to, nap);
};

Commands.ttss = function(Common, from, to, message) {
	Common.bot.say(to, "all these true trimmers and doc is 2 1/2 years out of date??");
};

Commands.liddles = function(Common, from, to, message) {
	Common.bot.say(to, "Shit like this makes me think some people dont see me as a person sometimes but an emotionless robot streaming runescape lol.");
};

Commands.aod = function(Common, from, to, message) {
	if (Common.utils.msg(message)) {
		var aod = message.match(/\S+/g);
		var split = Common.utils.toLc(aod[1]);
		if (isNaN(split) === false) {
			split = split + '000000';
		} else {
			split = 450000000;
			var error1 = 'true';
		}
		if (aod[2] !== undefined) {
			var drops = Common.utils.toLc(aod[2]);
			if (isNaN(drops) === false) {
				drops = drops;
			} else {
				drops = 1;
				var error2 = 'true';
			}
		} else {
			var drops = 1;
		}
		if (aod[3] !== undefined) {
			var hamsplit = Common.utils.toLc(aod[3]);
			if (isNaN(hamsplit) === false) {
				hamsplit = hamsplit + '000000';
			} else {
				hamsplit = 12000000;
				var error3 = 'true';
			}
		} else {
			var hamsplit = 12000000;
		}
		if (aod[4] !== undefined) {
			var teamsize = Common.utils.toLc(aod[4]);
			if (isNaN(teamsize) === false) {
				teamsize = teamsize;
			} else {
				teamsize = 7;
				var error4 = 'true';
			}
		} else {
			var teamsize = 7;
		}
		var totalham = drops * hamsplit;
		var totalloot = split - totalham;
		var totalsplit = totalloot / teamsize;
		Common.bot.say(to, "AOD Loot Value: " + split + ", Number Of Drops: " + drops + ", Hammer Split Per Drop: " + hamsplit + ", Team Size: " + teamsize + ", Final Split: " + totalsplit "");
	} else {
		Common.bot.say(to, "message required");
	}
};
