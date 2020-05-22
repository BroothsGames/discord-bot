import { Message, MessageEmbed } from "discord.js";
import { color, commands_info } from './../json/config.json';

module.exports.execute = async (message: Message, args: string, index: number) => {
    let description: String = "";

    if (message.member?.hasPermission("ADMINISTRATOR")) {
    for (let cycle = 0; cycle < commands_info.length ; cycle++) {
        description = `${description} **Name**: ${commands_info[cycle].name}\n **Usage**: ${commands_info[cycle].usage}\n**Description**: ${commands_info[cycle].description}\n\n`
    }

    const embed = new MessageEmbed()
    embed.setColor(`${color}`)
    embed.setAuthor("Commands")
    embed.setDescription(description)
    message.author.send(embed)
    } else if (!message.member?.hasPermission("ADMINISTRATOR")) {
        for (let cycle = 0; cycle < commands_info.length ; cycle++) {
            if(commands_info[cycle].admin == false) {
                description = `${description} **Name**: ${commands_info[cycle].name}\n **Usage**: ${commands_info[cycle].usage}\n**Description**: ${commands_info[cycle].description}\n\n`
            }
        }

        const embed = new MessageEmbed()
        embed.setColor(`${color}`)
        embed.setAuthor("Commands")
        embed.setDescription("");
        embed.setDescription(description)
        embed.setFooter("You are admin!")
        message.author.send(embed)
    }
}