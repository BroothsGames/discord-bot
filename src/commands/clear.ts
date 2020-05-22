import { commands, commands_info } from './../json/config.json';
import lenguage from './../json/lenguages.json';

import { Message, TextChannel } from "discord.js";
import Utils from './../utils/utils';
const utils = new Utils();

module.exports.execute = async (message: Message, args: string, index: number) => {
    if (!message.member?.hasPermission("MANAGE_MESSAGES")) {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.error}: ${lenguage.command_not_allowed}`);
        utils.deleteBotMessage(message.channel as TextChannel, 1);
    }
    if (!args[0]) {
        try {
            await message.channel.bulkDelete(1);
            await message.channel.send(`${lenguage.syntax}: ` + '`' + `${process.env.PREFIX}${commands[index]} ${commands_info[index].usage})` + '`' + ``);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
        catch (e) {
            console.log(e);
        }
    }
    else if (!args[1]) {
        try {
            await message.channel.bulkDelete(parseInt(args[0]) + 1);
            message.channel.send(`${lenguage.info}: ${lenguage.deleted_messages}`);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
        catch (e) {
            console.log(e);
            await message.channel.bulkDelete(1);
            message.channel.send(`${lenguage.error}: ${lenguage.invalid_amount}`);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
    }
    else {
        try {
            await message.channel.bulkDelete(1);
            const channel = message.mentions.channels.first() || message.channel;
            await channel.bulkDelete(parseInt(args[0]) + 1);
            message.channel.send(`${lenguage.info}: ${lenguage.deleted_messages}`);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
        catch (e) {
            console.log(e);
            await message.channel.bulkDelete(1);
            message.channel.send(`${lenguage.error}: ${lenguage.invalid_amount}`);
            utils.deleteBotMessage(message.channel as TextChannel, 1);
        }
    }
}