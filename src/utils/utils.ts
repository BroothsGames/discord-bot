import { TextChannel, Message, DMChannel, NewsChannel } from "discord.js";
import { time_delete } from './../json/config.json';

export const deleteBotMessage = (channel: TextChannel | DMChannel | NewsChannel , amount : number = 1, time: boolean = false) => {
    try {
        if(!time) channel.bulkDelete(amount);
        setTimeout(() => {
            channel.bulkDelete(amount);
        }, time_delete);
    }
    catch (error) {
        console.log(error);
    }
}