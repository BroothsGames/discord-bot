import { TextChannel } from "discord.js";
import { time_delete } from './../json/config.json';

export default class CommandHandler {

    deleteBotMessage(channel: TextChannel, amount: number) {
        try {
            setTimeout(() => {
                channel.bulkDelete(amount);
            }, time_delete);
        }
        catch (e) {
            console.log(e);
        }
    }
}