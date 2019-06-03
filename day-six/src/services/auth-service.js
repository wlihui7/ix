const ValidationService = require("./validation-service");
const validationService = new ValidationService();
var fs = require("fs");


const roles = {
    ADMIN: "admin", 
    PROVIDER: "provider",
    USER: "user"
};

var users;


module.exports = class AuthService {
    constructor() {
        // fs.readFile("./src/data/data.json", function(err, data) {
        //     var error = false;
        //     var errMsg = "";
        //     if (err) {
        //         error = true;
        //         throw err; 
        //     } else {
        //         var parseData = JSON.parse(data);
        //         users = parseData.users;
        //     }
        // });
    }

    // getUsers() {
    //     let ret;
    //     fs.readFile("./src/data/data.json", function(err, data) {
    //         var error = false;
    //         var errMsg = "";
    //         if (err) {
    //             error = true;
    //             throw err; 
    //         } else {
    //             ret = data.users;
    //         }
    //     });
    //     return ret;
    // }

    //checks that the user is a valid body 
    async register(user) {
        if (!validationService.isValidRegister(user)) {
            throw new Error("Registration not valid!");
        }

        //checks if the email has been used already. if not, adds to the count of exisitng users for the unique id. (id starts fresh each time)
        fs.readFile("./src/data/data.json", function(err, data) {
            if (err) throw err;
            var parseData = JSON.parse(data);

            var count = 0;
            parseData.users.forEach(existingUser => {
                if (existingUser.email === user.email) {
                    throw new Error("Email address already in use");
                }
                count++;
            });

            // creates the new user with an id that hasnt been used yet
            // sets role to be user  
            const newUser = {
                id: (count++),
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: user.password,
                role: user.USER
            };

            // adds new to the array of json objects of users we have, then writes it in the file again if no errors
            parseData.users.push(newUser);
            fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
                function(err) {
                    if (err) throw err;
                    return parseData.users;
                });
        });
    }

    async login(user) {
        if (!validationService.isValidRegister(user)) {
            throw new Error("Registration not valid!");
        }
        let found = false;
        let ret; 
        fs.readFile("./src/data/data.json", function(err, data) {
            if (err) throw err;
            var parseData = JSON.parse(data);
        // tries to find the user logging in by email
        // if found, returns the user; if not, throws error
            parseData.users.forEach(existingUser => {
                if (existingUser.email === user.email) {
                    ret = existingUser;
                    found = true;
                    console.log("Wassup");
                    return;
                }
            });
            if (!found) {
                throw new Error("User not found");
            }
        });
        return ret;
    }
};
