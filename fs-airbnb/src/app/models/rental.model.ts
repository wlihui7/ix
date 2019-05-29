import { User, Review } from '../models';

export class Rental {
    name: string;
    location: string;
    price: number;
    img: string;
    renter: User;
    reveiws: Array<Review>;

    constructor(name: string, loc: string, price: number) {
        this.name = name;
        this.location = loc;
        this.price = price;
    }

    addImg(link: string) {
        this.img = link;
    }

    addRenter(renter: User) {
        this.renter = renter;
    }

    addReview(review: Review) {
        this.reveiws.push(review);
    }
}