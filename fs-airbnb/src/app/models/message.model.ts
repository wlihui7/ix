import { User } from '../models';

export class Message {
    sender: User;
    recipient: User;
    message: string;

    constructor(recipient: User, sender: User, message: string) {
        this.recipient = recipient;
        this.sender = sender;
        this.message = message;
    }
}