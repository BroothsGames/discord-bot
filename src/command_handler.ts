import lenguage from './json/lenguages.json'
import { Message, TextChannel } from "discord.js";
import Utils from './utils/utils';
const utils = new Utils();

const URL: Array<any> = ["clear", "help", "order"];

export default class CommandHandler {

    commands: Array<string>;

    constructor(commands: Array<string>) {
        this.commands = commands;
    }

    async handleCommand( message: Message) {
        if (!message.content.startsWith(`${process.env.PREFIX}`) || message.author.bot) return;
    
        const args = message.content.slice(process.env.PREFIX?.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();

        var isValidCommand = false;

        for (let index = 0; index < this.commands.length; index++) {
            if (command == this.commands[index]) {
                const Command = require(`./commands/${URL[index]}`);
                Command.execute(message, args, index);
                isValidCommand = true;
                break;
            }
        }

        if(isValidCommand) isValidCommand = false;
        else if (command === '') {
            await message.channel.bulkDelete(1);
            await message.channel.send(`${lenguage.syntax}: ` + "`" + `${process.env.PREFIX}${lenguage.command} [${lenguage.required}] (${lenguage.optional})` + "`" + ``);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
        else {
            await message.channel.bulkDelete(1);
            await message.channel.send(`${lenguage.error}: command invalid`);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
    }

}