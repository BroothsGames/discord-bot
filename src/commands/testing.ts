export default class Command {

    public name: string;
    public function: string;

    constructor() {
        this.name = 'testing';
        this.function = 'testing works';
    }

    async run() {

    }
}