import { config } from 'dotenv';
import { name, activity } from './json/config.json';
import { B_MESSAGE_RUN } from './json/lenguages.json';
import { Client, ActivityType } from 'discord.js';
import CommandHandler from "./command_handler";

// Settings

config();
const client = new Client();
const PREFIX: string = process.env.PREFIX || '';
const TOKEN: string = process.env.TOKEN || '';
const ACTIVITY: ActivityType = activity.options as ActivityType;

// Command handler

import help from './commands/help';
//import testing from './commands/testing';

const COMMANDS: Array<any> = [help.command];

export const commandHandler = new CommandHandler(PREFIX, COMMANDS);

// Fuctions

client.once("ready", () => {
    console.log(`${name} ${B_MESSAGE_RUN}`);
    client.user?.setActivity(activity.name, { type: ACTIVITY });
});

client.on('guildMemberAdd', member => {

});
client.on('guildMemberRemove', member => {
});

client.on('message', async message => {
    commandHandler.onMessage(message);
});

// Token

client.login(TOKEN);