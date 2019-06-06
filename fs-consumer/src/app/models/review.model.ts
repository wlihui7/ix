import { User, Rental } from '../models';

export class Review {
    reviewer: User;
    reviewee: User | Rental;
    message: string;

    constructor(reviewer: User, reviewee: User | Rental, message: string) {
        this.reviewer = reviewer;
        this.reviewee = reviewee;
        this.message = message;
    }
}
