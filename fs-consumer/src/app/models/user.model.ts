import { Rental, Review, Message } from '../models';

export class User {
    fName: string;
    lName: string;
    name: string;
    username: string;
    password: string;
    rentals: Array<Rental>;
    saved: Array<Rental>;
    reviews: Array<Review>;

    constructor(first: string, last: string) {
        this.fName = first;
        this.lName = last;
        this.name = first + ' ' + last;
        this.rentals = new Array<Rental>();
        this.saved = new Array<Rental>();
        this.reviews = new Array<Review>();
    }

    setUserName(name: string) {
        this.username = name;
    }

    setPassword(pass: string) {
        this.password = this.password;
    }

    addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    addSaved(rental: Rental) {
        this.saved.push(rental);
    }

    addReview(review: Review) {
        this.reviews.push(review);
    }

    deleteSaved(rental: Rental): boolean {
        const index: number = this.saved.findIndex(sRental => sRental === rental);
        if (index !== -1) {
            this.saved.splice(index, 1);
            return true;
        }
        return false;
    }

    sendMessage(recipient: User, message: string): Message {
        const send: Message = new Message(recipient, this, message);
        return send;
    }
}