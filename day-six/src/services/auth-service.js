const ValidationService = require("./validation-service");
const validationService = new ValidationService();
var fs = require("fs");


const roles = {
    ADMIN: "admin", 
    PROVIDER: "provider",
    USER: "user"
};

let users;


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
            throw new Error400("Registration not valid!");
        }
        const found = false;
        // tries to find the user logging in by email
        // if found, returns the user; if not, throws error
        users.forEach(existingUser => {
            if (existingUser.email === user.email) {
                found = true;
            }
            if (found) {
                return user;
            } else {
                throw new Error401("User not found");
            }
        });
    }
};
