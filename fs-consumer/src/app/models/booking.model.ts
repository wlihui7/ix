import { mysql } from '../databases/db';

export class Booking {
    rentalID: number;
    userID: number;
    dateFrom: string;
    dateTo: string;

    constructor() {
    }

    // static convertDateToJS(sqldate: string) {
    //     return new Date(Date.parse(sqldate.replace(/[-]/g, '/') ));
    // }

    // static convertDateToSQL(date: Date) {
    //     date.toISOString().slice(0, 19).replace('T', ' ');
    // }

// createBooking(result) {
// mysql.query('INSERT INTO booking set ?', this, function(err, results) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Bookings: ', results);
//             result(null, results);
//         }
//     });
// }

// getAllBookings(result) {
//     mysql.query('SELECT * FROM booking', this, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('bookings: ', res);
//             result(null, res);
//         }
//     });
// }

// getBookingByID(id, result) {
//     mysql.query('Select * from booking where id = ? ', id, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Booking: ', res);
//             result(null, res);
//         }
//     });
// }

// updateBooking(id, uBooking, result) {
//     mysql.query('UPDATE booking SET ? WHERE id = ?', [uBooking, id], function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Updated Booking: ', res);
//             result(null, res);
//         }
//     });
// }

// deleteBooking(id, result) {
//     mysql.query('DELETE FROM booking WHERE id = ?', id, function(err, res) {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log('Deleted Booking: ', res);
//             result(null, res);
//         }
//     });

// }

}

// module.exports = Booking;

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

