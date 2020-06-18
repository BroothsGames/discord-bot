import { Message, MessageEmbed } from "discord.js";
import { deleteBotMessage } from './../utils/utils';
import { commandHandler } from "./../bot";
import { Command } from "./../command_handler";

const help = new Command({
    name: 'help',
    params: '(command)',
    function: 'help-test',
    admin: false,
    run: async (message: Message, args: string[]) => {
        await deleteBotMessage(message.channel);
        if (!args[0]) {
            let description: String = ``;
            if (message.member?.hasPermission("ADMINISTRATOR")) {
                commandHandler.COMMANDS.forEach(command => {
                    console.log(command)
                    description = `${description}**Name**: ${command.name}\n**Usage**: ${commandHandler.PREFIX} ${command.name} ${command.params}\n**Description**: ${command.function}\n\n`
                });
            }
            else {
                commandHandler.COMMANDS.forEach(command => {
                    if (!command.admin) description = `${description}**Name**: ${command.name}\n**Usage**: ${commandHandler.PREFIX} ${command.name} ${command.params}\n**Description**: ${command.function}\n\n`
                });
            }
            const embed = new MessageEmbed()
            embed.setColor(`#FFFFFF`);
            embed.setAuthor("Commands");
            embed.setDescription(description);
            if (message.member?.hasPermission("ADMINISTRATOR")) {
                embed.setFooter("You are admin!");
            }
            message.author.send(embed);
        }
        else {

        }
    }
});

export default help;