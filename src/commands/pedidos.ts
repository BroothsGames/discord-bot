import lenguage from './../json/lenguages.json';
import discord from 'discord.js';

import { Message, TextChannel, GuildMember, Client } from "discord.js";

module.exports.execute = (message: Message, args: string, index: number) => {
    const member = message.mentions.members?.first() as GuildMember;
    let order = args.slice(0);
    if(!order) return message.channel.send(`${lenguage.error}: Please say the order you want.`);

    message.channel.send(`${lenguage.info}: Your order has send to the programmers team, ellos te darán mas informacion por mensaje privado o por algun canal.`);  
    const channel = message.client.channels.cache.get(`712766404033511514`) as TextChannel; 
    channel.send(`**${message.author.username}**, ha enviado un pedido con la orden de: **${order}**`);
}