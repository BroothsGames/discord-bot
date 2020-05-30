import { commands, orders_channel, commands_info } from '../json/config.json';
import lenguage from '../json/lenguages.json';

import Utils from '../utils/utils';
const utils = new Utils();
import { Message, TextChannel } from "discord.js";

export default class command {
    constructor() { }

    async execute(message: Message, args: string, index: number) {
        if (!args[0]) {
            await message.channel.send(`${lenguage.syntax}: ` + '`' + `${process.env.PREFIX}${commands[index]} ${commands_info[index].usage}` + '`');
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
        else {
            let order: String = ``;
            for (let cycle = 0; cycle < args.length; cycle++) {
                order = `${order} ${args[cycle]}`;
            }

            message.channel.send(`${lenguage.info}: ${lenguage.order_info}`);
            const channel = message.client.channels.cache.get(orders_channel) as TextChannel;
            channel.send(`**${message.author.username}**, ${lenguage.order_send}: **${order}**`);
        }
    }
} 