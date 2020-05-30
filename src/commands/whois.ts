import { Message, MessageEmbed, User, GuildMember } from "discord.js";

export default class command {
    constructor() { }

    async execute(message: Message, args: string, index: number) {
        const embed = new MessageEmbed()
        const username = (message.mentions.members?.first() || message.member) as GuildMember;
        embed.setTitle(`${username.user.username}`)
        embed.setDescription(`**This user created his account on**\n${username.user.createdAt}`)
        embed.setImage(`${username.user.avatarURL()}`)
        message.channel.send(embed)
    }
}