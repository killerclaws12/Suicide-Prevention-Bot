const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
 const client = new Discord.Client();


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);

 client.user.setActivity('chat for signs of people wanting help', { type: 'WATCHING' });
 });

 client.on('message', message => {

LCM = message.content.toLowerCase();

words = [
  "kys",
  "ky$",
  "k y s",
  "ky s",
  "k ys",
];

phrases = ["suicide",
"kill myself",
"commit die",
"kill yourself",
"s uicide",
"su icide",
"sui cide",
"suic ide",
"suici de",
"suicid e",
"k ill yourself",
"ki ll yourself",
"kil l yourself",
"kill  yourself",
"kill   yourself",
"kill    yourself",
"kill urself",
"kil urself",
"kil yourself",
"go die",
"go d1e",
"commit d1e",
"su1cide",
"suic1de",
"su1c1de",
"hope you die",
"hope you d1e",
"die faggot",
"die fag",
"d1e faggot",
"d1e fag",
"die kike",
"d1e kike",
"die jew",
"d1e jew",
"die nigger",
"die nigga",
"d1e nigger",
"d1e nigga",
"die n1gger",
"d1e n1gger",
"die n1gga",
"d1e n1gga",
"just die",
"just d1e",
"die tranny",
"d1e tranny"];


   if (message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();


   function alert() {
     message.channel.send({embed:
       {
         "title": "Online Help Chat",
         "description": "This bot has automatically detected a keyword related to suicide",
         "author": {
           "name": "Please give the helpline just one chance",
           "icon_url": "http://www.spbot.ml/siround.png"
         },
         "color": 53380,
         "footer": {
           "text": "We care about you. Please try to give the helplines just one chance. I know you can make it through this.",
           "icon_url": "http://www.spbot.ml/siround.png"
         },
         "thumbnail": "http://www.spbot.ml/siround.png",
         "image": "http://www.spbot.ml/siround.png",
         "fields": [
           {
             "name": "Please listen to me.",
             "value": "Your life is important. We all care very deeply about you. I understand you don't feel like you matter right know, but I can tell you with 100% confidence that you do. I know you might be reluctant, but please just give the suicide prevention hotline just one last chance.",
             "inline": false
           },
           {
             "name": "United States",
             "value": "Call (800) 273-8255 or Text HOME to 741741",
             "inline": true
           },
           {
             "name": "United Kingdom",
             "value": "Call 116-123 or Text SHOUT to 85258",
             "inline": true
           },
           {
             "name": "Canada",
             "value": "Call 1.833.456.4566 or Text 45645",
             "inline": true
           },
           {
             "name": "Other Countries",
             "value": "Click https://www.opencounseling.com/suicide-hotlines",
             "inline": true
           }
         ]
       }
     });
   }


for (i = 0; i < phrases.length; i++) {
  if (LCM.includes(phrases[i])) {
    console.log("PHRASE")
    alert();
    return;
  }
}

for (i = 0; i < words.length; i++) {
  if (LCM==(words[i])) {
    console.log("WORD")
    alert();
    return;
  }
}



if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
  message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
});
}



 });

client.login(token);
