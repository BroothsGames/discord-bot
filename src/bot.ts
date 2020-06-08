import dotenv from 'dotenv';
dotenv.config();
import { name, activity } from './json/config.json';

import { Client, ActivityType, MessageEmbed } from 'discord.js';

// Settings

export const client = new Client();
const PREFIX: string = process.env.PREFIX || "!";
const TOKEN: string = process.env.TOKEN || "";

import testing from './commands/testing';

const COMMANDS: Array<any> = [testing];

import CommandHandler from "./command_handler";
const commandHandler = new CommandHandler(PREFIX, COMMANDS);

client.login(TOKEN);

// Fuctions

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
    //commandHandler.handleCommand(message);
});