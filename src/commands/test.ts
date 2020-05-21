import { Message } from "discord.js";

module.exports.execute = (message: Message, args: string, index: number) => {
    message.channel.send("Works!");
    console.log("Works!")
}


