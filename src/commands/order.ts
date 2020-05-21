import { commands, orders_channel } from './../json/config.json';
import lenguage from '../json/lenguages.json';

import Utils from './../utils/utils';
const utils = new Utils();
import { Message, TextChannel } from "discord.js";

module.exports.execute = async (message: Message, args: string, index: number) => {
    if (!args[0]) {
        await message.channel.send(`${lenguage.syntax}: ` + '`' + `${process.env.PREFIX}${commands[index]} [${lenguage.order}]` +'`');
        utils.deleteBotMessage(message.channel as TextChannel, 1);
    }

    const order = args.slice(0);

    message.channel.send(`${lenguage.info}: ${lenguage.order_info}`);  
    const channel = message.client.channels.cache.get(orders_channel) as TextChannel; 
    channel.send(`**${message.author.username}**, ${lenguage.order_send}: **${order}**`);
}