import { Message, MessageEmbed, ClientUser, User } from "discord.js";
import { color, commands_info } from './../json/config.json';

module.exports.execute = async (message: Message, args: string, index: number) => {
    const embed = new MessageEmbed()
    embed.setColor(`${color}`)
    embed.setAuthor("Commands")
    embed.setDescription(`**Name**: ${commands_info.clear.name}\n **Usage**: ${commands_info.clear.usage}\n **Description**: ${commands_info.clear.description}\n\n**Name**: ${commands_info.test.name}\n **Usage**: ${commands_info.test.usage}\n **Description**: ${commands_info.test.description}\n\n**Name**: ${commands_info.orders.name}\n **Usage**: ${commands_info.orders.usage}\n **Description**: ${commands_info.orders.description}`)
    message.author.send(embed)
}