import { Message, MessageEmbed } from "discord.js";
import config from './../json/config.json';

module.exports.execute = async (message: Message, args: string, index: number) => {
    if (message.member?.hasPermission("ADMINISTRATOR")) {
    const embed = new MessageEmbed()
    embed.setColor(`${config.color}`)
    embed.setAuthor("Commands")
    embed.setDescription(`**Name**: ${config.commands_info.clear.name}\n **Usage**: ${config.commands_info.clear.usage}\n **Description**: ${config.commands_info.clear.description}\n\n**Name**: ${config.commands_info.test.name}\n **Usage**: ${config.commands_info.test.usage}\n **Description**: ${config.commands_info.test.description}\n\n**Name**: ${config.commands_info.orders.name}\n **Usage**: ${config.commands_info.orders.usage}\n **Description**: ${config.commands_info.orders.description}`)
    message.author.send(embed)
    } else if (!message.member?.hasPermission("ADMINISTRATOR")) {
        const embed = new MessageEmbed()
        embed.setColor(`${config.color}`)
        embed.setAuthor("Commands")
        embed.setDescription(`**Name**: ${config.commands_info.clear.name}\n **Usage**: ${config.commands_info.clear.usage}\n **Description**: ${config.commands_info.clear.description}\n\n**Name**: ${config.commands_info.test.name}\n **Usage**: ${config.commands_info.test.usage}\n **Description**: ${config.commands_info.test.description}\n\n**Name**: ${config.commands_info.orders.name}\n **Usage**: ${config.commands_info.orders.usage}\n **Description**: ${config.commands_info.orders.description}`)
        embed.setFooter("You are admin!")
        message.author.send(embed)
    }
}


