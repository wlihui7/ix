import { User, Review } from '../models';

export class Rental {
    id: number;
    name: string;
    location: string;
    price: number;
    img: string;
    renter: User;
    reviews: Array<Review>;

    constructor(name: string, loc: string, price: number) {
        this.name = name;
        this.location = loc;
        this.price = price;
        this.reviews = new Array<Review>();
    }

    addImg(link: string) {
        this.img = link;
    }

    addRenter(renter: User) {
        this.renter = renter;
    }

    addReview(review: Review) {
        this.reviews.push(review);
    }
}