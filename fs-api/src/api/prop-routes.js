const express = require("express");
const router = express.Router();
var fs = require("fs");
const Rental = require("../models/rental");
const Booking = require("../models/booking");

const status = {
    NEW: "new", 
    ACCEPTED: "accepted",
    REJECTED: "rejected"
};

router.post("/", (req, res) => {
    const property = req.body;
  
    if (!property.name || !property.location || !property.price) {
        return res.status(400).json({message: "Missing information!"});
    }
    // name, location, price, providerID, consumerID, imageURL
    var nProp = new Rental(property.name, property.location, property.price, property.consumerID, property.imageURL);
    nProp.createRental((err, result) => { 
        if (err) {
            return res.status(400).json({ msg: err });
        } else {
            return res.json(result);
        }
    });
});

//     fs.readFile("./src/data/data.json", function(err, data) {
//         var error = false;
//         var errMsg = "";
//         if (err) {
//             error = true;
//             throw err; 
//         } else {
//             if (data.length > 0) {
//                 var parseData = JSON.parse(data);
//                 parseData.properties.forEach(existingProp => {
//                     if (existingProp.name === property.name && existingProp.location === property.location) {
//                         return res.status(400).json({message: "This name has already been used!"});
//                         // throw new Error("This email address has already been used!");
//                     }
//                     // count++;
//                 });
//             } else {
//                 parseData = {
//                     properties: []
//                 };
//             }


//             const newProp = {
//                 id: parseData.properties.length + 1, 
//                 name: property.name,
//                 location: property.location,
//                 price: property.price,
//                 imageURL: property.imageURL
//             };

//             parseData.properties.push(newProp);
//             fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
//             function(err) {
//                 if (err) {
//                     error = true;
//                     throw err;
//                 }
//                 return res.json(newProp);
//             });
//         }

//         if (error) {
//             return res.status(400).json({ msg: errMsg });
//         } else {
//             return res.json(property);
//         }
//     });
// });

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const property = req.body;
    if (!property.name || !property.location || !property.price) {
        error = true;
        return res.status(400).json({message: "Missing information!"});
    }
    var nProp = new Rental(property.name, property.location, property.price, property.providerID, property.consumerID, property.imageURL);

    nProp.deleteRental(id, (err, result) => {
        if (err) {
            return res.status(400).json({ msg: err });
        } else {
            return res.status(200).json({message: "Property Deleted"});
        }
       });
    });
    // fs.readFile("./src/data/data.json", function(err, data) {
    //     var error = false;
    //     var errMsg = "";
    //     if (err) {
    //         error = true;
    //         throw err; 
    //     }
    //     var parseData = JSON.parse(data);
    //     parseData.properties = parseData.properties.filter(prop => 
    //         prop.id == id);

    //     fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
    //         function(err) {
    //             if (err) {
    //                 error = true;
    //                 throw err;
    //             }
    //             res.json({ status: "Property deleted"});
    //         });
    //         if (error) {
    //             return res.status(400).json({ msg: err.message });
    //         } else {
    //             return res.json({ status: "Property deleted" });
    //         }
    // }); 
     
// });

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const property = req.body;
    if (!property.name || !property.location || !property.price) {
        error = true;
        return res.status(400).json({message: "Missing information!"});
    }
    var nProp = new Rental(property.name, property.location, property.price, property.providerID, property.consumerID, property.imageURL);
    nProp.getRentalByID(id, (err, result) => {
        if (err) {
            return res.status(400).json({ msg: err });
        } else {
            return res.json(result);
        }
       });
    });
    // fs.readFile("./src/data/data.json", (err, data) => {
    //     if (err) throw err;
    //     var parseData = JSON.parse(data);
    //   // tries to find the user logging in by email
    //   // if found, returns the user; if not, throws error
    //       parseData.properties.forEach(prop => {
    //           if (prop.id == id) {
    //               ret = prop;
    //               found = true;
    //           }
    //       });
    //       if (!found) {
    //           return res.status(400).json({ msg: "Property not found" });
    //       }
    //       return res.json(ret);
    //     });
    // });

router.post("/:id/bookings", (req, res) => {
    const id = req.params.id;
    const request = req.body;

    var errors = [];

    if (!request.dateFrom) {
        errors.push({ message: "Invalid Start Date" });
    }

    if (!request.dateTo) {
        errors.push({ message: "Invalid End Date" });
    }

    if (!request.userId) {
        errors.push({ message: "Invalid User ID" });
    }

    if (errors.length > 0) {
        return res.status(400).json({ messages: errors });
    }

    var booking = new Booking(request.userId, id, request.dateFrom, request.dateTo);
    booking.createBooking((err, res) => {
        if (err) {
            return res.status(400).json({ msg: err });
        } else {
            return res.json(result);
        }
    });
});

    // fs.readFile("./src/data/data.json", (err, data) => {
    //     if (err) {
    //         throw err;
    //     } 

    //     if (data.length > 0) {
    //         var parseData = JSON.parse(data);
    //     }
            
    // const newBooking = {
    //     id: parseData.bookings.length + 1,
    //     dateFrom: request.dateFrom,
    //     dateTo: request.dateTo,
    //     userId: resquest.userId,
    //     propertyId: id,
    //     status: "NEW"
    // };

    // parseData.bookings.push(newBooking);
    // fs.writeFile("./data/bookingdata.json", JSON.stringify(parseData), function (err) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("Booking request successful");
    //     return parseData.bookings;
    // });
    // return res.json(newBooking);
    // });
// });

router.get("/:id/bookings", (req, res) => {
    const id = req.params.id;
    const request = req.body;

    var errors = [];

    if (!request.dateFrom) {
        errors.push({ message: "Invalid Start Date" });
    }

    if (!request.dateTo) {
        errors.push({ message: "Invalid End Date" });
    }

    if (!request.userId) {
        errors.push({ message: "Invalid User ID" });
    }

    if (errors.length > 0) {
        return res.status(400).json({ messages: errors });
    }

    var booking = new Booking(request.userId, id, request.dateFrom, request.dateTo);

    booking.getBookingByID(id, (err, res) => {
        if (err) {
            return res.status(400).json({ msg: err });
        } else {
            return res.json(result);
        }
    });
});

//     fs.readFile("./src/data/data.json", (err, data) => {
//         if (err) throw err;
//         var parseData = JSON.parse(data);
//       // tries to find the user logging in by email
//       // if found, returns the user; if not, throws error
//           parseData.properties.forEach(prop => {
//               if (prop.id == id) {
//                   ret = prop;
//                   found = true;
//               }
//           });
//           if (!found) {
//               return res.status(400).json({ msg: "Property not found" });
//           }
//           return res.json(ret);
//         });
// });

module.exports = router;