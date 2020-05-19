import { Message } from "discord.js";

export default class Command {
    message: Message;
    args: String;
    index: Number;

    constructor(message: Message, args: String, index: Number) {
        this.message = message;
        this.args = args;
        this.index = index;
    }

    execute() {

    }
}