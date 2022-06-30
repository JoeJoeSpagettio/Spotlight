(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });

    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }


    await s4d.client.login('ODkyMTYwMjMxNTc5MTkzMzY1.Guwdbp.30WkV021fFbh_fwzvdpN-ijLSD48jgPmQJwMhc').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('ready', async () => {
        s4d.client.channels.cache.find((channel) => channel.name === 'general').send(String('Spotlight Has Arrived'));
        s4d.client.user.setActivity(String('IM ALIVE (Created by JoeJoeSpagettio)'));

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.help') {
            s4dmessage.channel.send(String('Some commands i can do are .help (list of commands) .ping (pong) .prompt (conversation prompt (I have 10 prompts. recommend more)) .botversion (tells you what bot version your on) .poll (random poll) .github (gives you the github) .secret (unlocks a challenge) .ignited (???)'));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.github') {
            s4dmessage.channel.send(String('no'));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.botversion') {
            s4dmessage.channel.send(String('Spotlight is on V10'));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.ping') {
            s4dmessage.channel.send(String('pong'));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.secret') {
            s4dmessage.channel.send(String('Guess the secret code by using the .code and adding 4 numbers behind it.'));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.prompt') {
            if (mathRandomInt(1, 10) == 1) {
                s4dmessage.channel.send(String('what was the exact date your mom died (recommended by majorkittens)'));
            } else if (mathRandomInt(1, 10) == 2) {
                s4dmessage.channel.send(String('Whats a show/movie you like'));
            } else if (mathRandomInt(1, 10) == 3) {
                s4dmessage.channel.send(String('What do you think is overrated'));
            } else if (mathRandomInt(1, 10) == 4) {
                s4dmessage.channel.send(String('Minecraft bedrock or java'));
            } else if (mathRandomInt(1, 10) == 5) {
                s4dmessage.channel.send(String('Marvel or DC'));
            } else if (mathRandomInt(1, 10) == 6) {
                s4dmessage.channel.send(String('Do it yourself'));
            } else if (mathRandomInt(1, 10) == 7) {
                s4dmessage.channel.send(String('Whats the best video game?'));
            } else if (mathRandomInt(1, 10) == 8) {
                s4dmessage.channel.send(String('i need more convo starter ideas'));
            } else if (mathRandomInt(1, 10) == 9) {
                s4dmessage.channel.send(String('im out of ideas'));
            } else if (mathRandomInt(1, 10) == 10) {
                s4dmessage.channel.send(String('start them yourself'));
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.code1032') {
            s4dmessage.channel.send(String('Thats The Correct Code! Good Job'));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.poll') {
            if (mathRandomInt(1, 5) == 1) {
                s4dmessage.channel.send(String('Cats or dogs?'));
                s4dmessage.react('🐱');
                s4dmessage.react('🐶');
            } else if (mathRandomInt(1, 5) == 2) {
                s4dmessage.channel.send(String('Games Or Books'));
                s4dmessage.react('🕹️');
                s4dmessage.react('📘');
            } else if (mathRandomInt(1, 5) == 3) {
                s4dmessage.channel.send(String('Hot Or Cold'));
                s4dmessage.react('🔥');
                s4dmessage.react('❄️');
            } else if (mathRandomInt(1, 5) == 4) {
                s4dmessage.channel.send(String('waffles or pancakes'));
                s4dmessage.react('🥞');
                s4dmessage.react('🧇');
            } else if (mathRandomInt(1, 5) == 5) {
                s4dmessage.channel.send(String('fact or cap'));
                s4dmessage.react('🧢');
                s4dmessage.react('📠');
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '.ignited') {
            s4dmessage.channel.send(String('nerd'));
            s4dmessage.react('👎');
        }

    });


    return s4d;
})();