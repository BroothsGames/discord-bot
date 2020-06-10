import { Message, Collection } from "discord.js";

import { CH_ERROR, CH_ERROR_COMMAND } from './json/lenguages.json';

export interface ICommand {
    name: string;
    params: string;
    function: string;
    admin: boolean;
    run: (message: Message, args: Array<string>) => unknown;
}

export default class CommandHandler {

    public PREFIX: string;
    public COMMANDS: Collection<string, ICommand>;

    constructor(PREFIX: string, COMMANDS: Array<ICommand>) {
        this.PREFIX = PREFIX;
        this.COMMANDS = new Collection();

        for (let index = 0; index < COMMANDS.length; index++) {
            this.COMMANDS.set(COMMANDS[index].name, COMMANDS[index]);
        }
    }

    async onMessage(message: Message) {
        try {

            if (!message.content.startsWith(this.PREFIX) || message.author.bot) return;

            const args: string[] = message.content.slice(this.PREFIX.length).trim().split(/ +/g);
            const command: string = args.shift()?.toLowerCase() || '';

            if (!this.COMMANDS.has(command)) return message.channel.send(`${CH_ERROR_COMMAND}`);

            this.COMMANDS.get(command)?.run(message, args);

        } catch (error) {
            message.channel.send(`${CH_ERROR}`);
            console.log(error);
        }
    }
}

export class Command {

    public name: string;
    public params: string;
    public function: string;
    public admin: boolean;

    constructor( command: ICommand) {
        this.name = command.name;
        this.params = command.params;
        this.function = command.function;
        this.admin = command.admin;
    }
}

/*import lenguage from './json/lenguages.json'
import { Message, TextChannel } from "discord.js";
import Utils from './utils/utils';
const utils = new Utils();

import help from './commands/help';
import clear from './commands/clear';
import order from './commands/order';
import whois from './commands/whois';
import test from './commands/test';

const COMMANDS: Array<any> = [help, clear, order, whois, test];

export default class CommandHandler {

    commands: Array<string>;
    prefix: string;

    constructor(prefix: string, commands: Array<string>) {
        this.prefix = prefix;
        this.commands = commands;
    }

    async handleCommand(message: Message) {
        if (!message.content.startsWith(`${process.env.PREFIX}`) || message.author.bot) return;

        const args = message.content.slice(process.env.PREFIX?.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();

        var isValidCommand = false;

        for (let index = 0; index < this.commands.length; index++) {
            if (command == this.commands[index]) {
                COMMANDS[index].execute(message, args, index);
                isValidCommand = true;
                break;
            }
        }

        if (isValidCommand) isValidCommand = false;
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

}*/