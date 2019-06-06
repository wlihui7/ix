// import { User, Review } from '../models';

import { mysql } from '../databases/db';

export class Rental {
    id: number;
    name: string;
    location: string;
    price: number;
    providerID: number;
    consumerID = 0;
    imageURL = '';

    constructor() {
    }
}

// createRental(result) {
// mysql.query('INSERT INTO rental set ?', this, function(err, results) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Rentals: ', results);
//             result(null, results);
//         }
//     });
// }

// getAllRentals(result) {
//     mysql.query('SELECT * FROM rental', this, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Rentals: ', res);
//             result(null, res);
//         }
//     });
// }

// getRentalByID(id, result) {
//     mysql.query('Select * from rental where id = ? ', id, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Rental: ', res);
//             result(null, res);
//         }
//     });
// }

// updateRental(id, uRental, result) {
//     mysql.query('UPDATE rental SET ? WHERE id = ?', [uRental, id], function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Updated Rental: ', res);
//             result(null, res);
//         }
//     });
// }

// deleteRental(id, result) {
//     mysql.query('DELETE FROM rental WHERE id = ?', id, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Deleted Rental: ', res);
//             result(null, res);
//         }
//     });

// }

// }

// module.exports = Rental;

// var User = function(user) {
//     this.name = user.name;
//     this.surname = user.surname;
//     this.cellPhone = user.cellPhone;
//     this.email = user.email;
//     this.password = user.password;
//     this.role = user.role;
//     this.date_created = new Date();
//   };

//   module.exports = User;

//   User.createUser = function(newUser, result) {
//       mysql.query("INSERT INTO user", function(err, results, fields) {
//         console.log("error: ", err);
//         console.log("results: ", results);
//     });
//   };


// export class Rental {
//     id: number;
//     name: string;
//     location: string;
//     price: number;
//     img: string;
//     renter: User;
//     reviews: Array<Review>;
//     saved: boolean;

//     constructor(name: string, loc: string, price: number) {
//         this.name = name;
//         this.location = loc;
//         this.price = price;
//         this.reviews = new Array<Review>();
//     }

//     addImg(link: string) {
//         this.img = link;
//     }

//     addRenter(renter: User) {
//         this.renter = renter;
//     }

//     addReview(review: Review) {
//         this.reviews.push(review);
//     }
// }
