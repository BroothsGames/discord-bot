import { Message, MessageEmbed, User, GuildMember } from "discord.js";

module.exports.execute = async (message: Message, args: string, index: number) => {
    const embed = new MessageEmbed()
    const username = (message.mentions.members?.first() || message.member) as GuildMember;
    embed.setTitle(`${username.user.username}`)
    embed.setDescription(`**Este usuario creó su cuenta el**\n${username.user.createdAt}`)
    embed.setImage(`${username.user.avatarURL()}`)
    message.channel.send(embed)
}