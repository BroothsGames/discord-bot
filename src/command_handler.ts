import { Message, Util } from "discord.js";
//import { commands } from './json/config.json';
/*import Utils from './utils/utils';
const u = new Utils();*/
//const utils = new Utils();

export default class CommandHandler {

    commands: Array<string>;

    constructor(commands: Array<string>) {
        this.commands = commands;
    }

    async handleCommand( message: Message) {
        if (!message.content.startsWith(`${process.env.PREFIX}`) || message.author.bot) return;
    
        const args = message.content.slice(process.env.PREFIX?.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();

        for (let index = 0; index < this.commands.length; index++) {
            if (command == this.commands[index]) {
                const Command = require(`./commands/clear`);
                const command = new Command(message, args, index);
                var isValidCommand = command.execute();
                break;
            }
        }

        if(isValidCommand) isValidCommand = false;
        else if (command === '') {
            await message.channel.bulkDelete(1);
            /*await message.channel.send(`${lenguage.syntax}: ` + "`" + `${process.env.PREFIX}${lenguage.command} [${lenguage.required}] (${lenguage.optional})` + "`" + ``);
            utils.deleteBotMessage(message.channel, 1);*/
        }
        else {
            await message.channel.bulkDelete(1);
            /*await message.channel.send(`${lenguage.error}: command invalid`);
            utils.deleteBotMessage(message.channel, 1);*/
        }
    }

}