console.log('this is working');
console.log('token' + process.env.DISCORD_TOKEN);

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong').catch(err => console.error(err));
  }
});

client.login(process.env.DISCORD_TOKEN).catch(err => console.error(err));
