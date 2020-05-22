import { config } from 'dotenv';
import { name, activity, commands } from './json/config.json';
config();

import { Client, ActivityType, Message, MessageEmbed } from 'discord.js';
const client = new Client();

import CommandHandler from "./command_handler";
const commandHandler = new CommandHandler(commands);

client.once("ready", () => {
    console.log(`${name} ready!`);
    client.user?.setActivity(activity.name, { type: activity.options as ActivityType });
});

client.on('guildMemberAdd', member => {
    const embed = new MessageEmbed()
    embed.setTitle(`Hi ${member}`)
});
client.on('guildMemberRemove', member => {
    const embed = new MessageEmbed()
});

client.on('message', async message => {
    commandHandler.handleCommand(message);
});

client.login(process.env.TOKEN);
module.exports = client;