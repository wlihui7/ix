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
    constructor() {}

    //checks that the user is a valid body 
    async register(user) {
        users = [];
        if (!validationService.isValidRegister(user)) {
            throw new Error("Registration not valid!");
        }

        //checks if the email has been used already. if not, adds to the count of exisitng users for the unique id. (id starts fresh each time)
        fs.readFile("./src/data/data.json", function(err, data) {
            if (err) throw err;
            var parseData = JSON.parse(data);

            var count = 0;
            parseData.forEach(existingUser => {
                users.push(existingUser);
            });
        });

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === user.email) {
                throw new Error("Email address already in use");
            }
        }        
            // users.forEach(existingUser => {
            //     if (existingUser.email === user.email) {
            //         throw new Error("Email address already in use");
            //     }
            // });

            // creates the new user with an id that hasnt been used yet
            // sets role to be user  
            const newUser = {
                id: (users.length) + 1,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: user.password,
                role: user.USER
            };
           

            // adds new to the array of json objects of users we have, then writes it in the file again if no errors
            users.push(newUser);
            fs.writeFile("./src/data/data.json", JSON.stringify(users), 
                function(err) {
                    if (err) throw err;
                    return users;
                });
        console.log(newUser);
        return newUser;
    }

    async login(user) {
        users = [];
        if (!validationService.isValidRegister(user)) {
            throw new Error("Registration not valid!");
        }
        let found = false;
        ret = await fs.readFile("./src/data/data.json", (err, data) => {
            if (err) throw err;
            var parseData = JSON.parse(data);
        // tries to find the user logging in by email
        // if found, returns the user; if not, throws error
            parseData.users.forEach(existingUser => {
                if (existingUser.email === user.email) {
                    ret = existingUser;
                    found = true;
                }
            });
            if (!found) {
                throw new Error("User not found");
            }
            returnUser();
            // console.log("printing ret: " + ret);

        });
        function returnUser() {
            console.log(ret);
            return ret;
        }
    }
};
