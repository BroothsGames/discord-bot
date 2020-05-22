import { Message } from "discord.js";
import {  } from './../json/lenguages.json';

module.exports.execute = (message: Message, args: string, index: number) => {
    message.channel.send("This command works in the server discord!");
    console.log("This command works in the server log!")
}


