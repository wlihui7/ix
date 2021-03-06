const express = require("express");
const router = express.Router();
var fs = require("fs");

router.post("/", (req, res) => {
    const user = req.body;
    fs.readFile("./src/data/data.json", function(err, data) {
        var error = false;
        var errMsg = "";
        if (err) {
            error = true;
            throw err; 
        } else {
            // var count = 0;

            if (data.length > 0) {
                var parseData = JSON.parse(data);
                parseData.users.forEach(existingUser => {
                    if (existingUser.email === user.email) {
                        // return res.status(400).json({message: "This email address has already been used!"});
                        throw new Error("This email address has already been used!");
                    }
                    // count++;
                });
            } else {
                parseData = {
                    users: []
                };
            }

            if (!user.firstName || !user.lastName || !user.email || !user.password) {
                return res.status(400).json({message: "Missing information!"});
            }

            const newUser = {
                id: users.length + 1, 
                firstName: user.firstName, 
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: user.password,
                role: user.role
            };

            parseData.users.push(newUser);
            fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
            function(err) {
                if (err) {
                    error = true;
                    throw err;
                }
                return res.json(newUser);
            });
        }

        if (error) {
            return res.status(400).json({ msg: errMsg });
        } else {
            return res.json(user);
        }
    });
});

router.post("/update", (req, res) => {
    const user = req.body;
    fs.readFile("./src/data/data.json", function(err, data) {
        var error = false;
        if (err) {
            error = true;
            throw err;
        } else {
            if (data.length > 0) {
                var parseData = JSON.parse(data);
            } else {
                return res.status(400).json({message: "No Users!"});
            }

            parseData.users = parseData.users.filter(existingUser => {
                return existingUser.email !== user.email;
            });

            const updateUser = {
                id: user.id, 
                firstName: user.firstName, 
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: user.password,
                role: user.role
            };

            parseData.users.push(updateUser);
            fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
                function(err) {
                    if (err) {
                        error = true;
                        throw err;
                    }
                    return res.json(updateUser);
                });
            }

        if (error) {
            return res.status(400).json({ msg: err.msg });
        } else {
            return res.json(user);
        }
    });
});

router.get("/delete/:id", (req, res) => {
    fs.readFile("./src/data/data.json", function(err, data) {
        var error = false;
        if (err) {
            error = true;
            throw err;
        }
        var parseData = JSON.parse(data);
        parseData.users = parseData.user.filter(user => 
            user.id == req.params.id);
        fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
            function(err) {
                if (err) {
                    error = true;
                    throw err;
                }
                res.json({ status: "User deleted"});
            });
            if (error) {
                return res.status(400).json({ msg: err.message });
            } else {
                return res.json({ status: "User deleted" });
            }
    });
});

module.exports = router;