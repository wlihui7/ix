// import { Rental, Review, Message } from '../models';

import { mysql } from '../databases/db';

export class User {

    constructor() {
        // this.name = name;
        // this.email = email;
        // this.password = password;
        // this.role = role;
        // this.date_created = new Date();
    }
    id: number;
    name: string;
    role = '';
    email: string;
    password: string;
}

// static getUserByID(id, result) {
//     mysql.query('Select * from user where id = ? ', id, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('User: ', res);
//             result(null, res);
//         }
//     });
// }

// static getAllUsers(result) {
//     mysql.query('SELECT * FROM user', function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Users: ', res);
//             result(null, res);
//         }
//     });
// }

// static deleteUser(id, result) {
//     mysql.query('DELETE FROM user WHERE id = ?', id, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Deleted User: ', res);
//             result(null, res);
//         }
//     });

// }

// static updateUser(id, uUser, result) {
//     mysql.query('UPDATE user SET ? WHERE id = ?', [uUser, id], function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Updated User: ', res);
//             result(null, res);
//         }
//     });
// }

// createUser(result) {
//     mysql.query('INSERT INTO user set ?', this, function(err, results) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Users: ', results);
//             result(null, results);
//         }
//     });
// }

// }

// module.exports = User;

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



// export class User {
//     fName: string;
//     lName: string;
//     name: string;
//     username: string;
//     password: string;
//     rentals: Array<Rental>;
//     saved: Array<Rental>;
//     reviews: Array<Review>;

//     constructor(first: string, last: string) {
//         this.fName = first;
//         this.lName = last;
//         this.name = first + ' ' + last;
//         this.rentals = new Array<Rental>();
//         this.saved = new Array<Rental>();
//         this.reviews = new Array<Review>();
//     }

//     setUserName(name: string) {
//         this.username = name;
//     }

//     setPassword(pass: string) {
//         this.password = this.password;
//     }

//     addRental(rental: Rental) {
//         this.rentals.push(rental);
//     }

//     addSaved(rental: Rental) {
//         this.saved.push(rental);
//     }

//     addReview(review: Review) {
//         this.reviews.push(review);
//     }

//     deleteSaved(rental: Rental): boolean {
//         const index: number = this.saved.findIndex(sRental => sRental === rental);
//         if (index !== -1) {
//             this.saved.splice(index, 1);
//             return true;
//         }
//         return false;
//     }

//     sendMessage(recipient: User, message: string): Message {
//         const send: Message = new Message(recipient, this, message);
//         return send;
//     }
// }
