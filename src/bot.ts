import Discord from 'discord.js';
const client = new Discord.Client();
import config from './json/config.json';
import CommandHandler from "./command_handler";
const commandHandler = new CommandHandler(config.commands);

/*import CommandHandler from './utils/utils';
const commandHandler = new CommandHandler(config.commands);*/

client.once("ready", () => {
    console.log(`${config.name} ready!`);
    client.user?.setActivity(config.activity.name, { type: config.activity.options as any });
});

client.on('message', async message => {
    commandHandler.handleCommand(message);
});

client.login(process.env.TOKEN);
module.exports = client;