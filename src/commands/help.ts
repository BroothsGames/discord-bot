import { Message, MessageEmbed } from "discord.js";
import { color, commands_info } from './../json/config.json';
import lenguage from './../json/lenguages.json';

export default class command{
    constructor() { }

    async execute(message: Message, args: string, index: number) {
        if (args[0]) {
            await message.channel.bulkDelete(1);
            let description: String = "",
                IsCommandValid: boolean = false;

            if (message.member?.hasPermission("ADMINISTRATOR")) {
                for (let cycle = 0; cycle < commands_info.length; cycle++) {
                    if (args[0] == `${commands_info[cycle].name}`) {
                        IsCommandValid = true;
                        description = `${description} **Name**: ${commands_info[cycle].name}\n **Usage**: ${commands_info[cycle].usage}\n**Description**: ${commands_info[cycle].description}\n\n`
                        break;
                    }
                }
            }
            else {
                for (let cycle = 0; cycle < commands_info.length; cycle++) {
                    if (args[0] == `${commands_info[cycle].name}`) {
                        IsCommandValid = true;
                        description = `${description} **Name**: ${commands_info[cycle].name}\n **Usage**: ${commands_info[cycle].usage}\n**Description**: ${commands_info[cycle].description}\n\n`
                        break;
                    }
                }
            }
            if (IsCommandValid) {
                const embed = new MessageEmbed()
                embed.setColor(`${color}`)
                embed.setAuthor("Commands")
                embed.setDescription(description)
                if (message.member?.hasPermission("ADMINISTRATOR")) {
                    embed.setFooter("You are admin!")
                }
                message.author.send(embed)
            }
            else {
                const embed = new MessageEmbed()
                embed.setColor(`${color}`)
                embed.setAuthor("Commands")
                embed.setDescription(lenguage.invalid_command)
                if (message.member?.hasPermission("ADMINISTRATOR")) {
                    embed.setFooter("You are admin!")
                }
                message.author.send(embed)
            }
        }
        else {
            await message.channel.bulkDelete(1);
            let description: String = "";

            if (message.member?.hasPermission("ADMINISTRATOR")) {
                for (let cycle = 0; cycle < commands_info.length; cycle++) {
                    description = `${description} **Name**: ${commands_info[cycle].name}\n **Usage**: ${commands_info[cycle].usage}\n**Description**: ${commands_info[cycle].description}\n\n`
                }
            }
            else {
                for (let cycle = 0; cycle < commands_info.length; cycle++) {
                    if (commands_info[cycle].admin == false) {
                        description = `${description} **Name**: ${commands_info[cycle].name}\n **Usage**: ${commands_info[cycle].usage}\n**Description**: ${commands_info[cycle].description}\n\n`
                    }
                }
            }
            const embed = new MessageEmbed()
            embed.setColor(`${color}`)
            embed.setAuthor("Commands")
            embed.setDescription(description)
            if (message.member?.hasPermission("ADMINISTRATOR")) {
                embed.setFooter("You are admin!")
            }
            message.author.send(embed)
        }
    }
}