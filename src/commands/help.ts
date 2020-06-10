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
        if (args[0]) {
            let description: String = ``;
            if (message.member?.hasPermission("ADMINISTRATOR")) {
                commandHandler.COMMANDS.forEach(command => {
                    description = `${description} **Name**: ${command.name}\n **Usage**: ${commandHandler.PREFIX} ${command.name} ${command.params}\n**Description**: ${command.function}\n\n`
                });
            }
            else {
                commandHandler.COMMANDS.forEach(command => {
                    if (!command.admin) description = `${description} **Name**: ${command.name}\n **Usage**: ${commandHandler.PREFIX} ${command.name} ${command.params}\n**Description**: ${command.function}\n\n`
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

/*export default class Command {

    public name: string;
    public params: string;
    public function: string;
    public admin: boolean;

    constructor() {
        this.name = 'help';
        this.params = "(command)";
        this.function = 'help';
        this.admin = false;
    }

    async run(message: Message, args: string[]) {
        await deleteBotMessage(message.channel);
        if (args[0]) {
            let description: String = ``;
            if (message.member?.hasPermission("ADMINISTRATOR")) {
                commandHandler.COMMANDS.forEach(command => {
                    description = `${description} **Name**: ${command.name}\n **Usage**: ${commandHandler.PREFIX} ${command.name} ${command.params}\n**Description**: ${command.function}\n\n`
                });
            }
            else {
                commandHandler.COMMANDS.forEach(command => {
                    if (!command.admin) description = `${description} **Name**: ${command.name}\n **Usage**: ${commandHandler.PREFIX} ${command.name} ${command.params}\n**Description**: ${command.function}\n\n`
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
}*/
/*import { Message, MessageEmbed } from "discord.js";
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
}*/