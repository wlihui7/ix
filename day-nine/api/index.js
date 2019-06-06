const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const config = {
    host: "localhost", 
    post: 3306,
    user: "root",
    password: "qwertyuiop",
    database: "fs_bnb"
};

const connection = mysql.createConnection(config);
connection.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(5000, () => {
    console.log("Listening on 5000");
});

app.post("/users", (req, res) => {
    const user = req.body;

    connection.query("INSERT INTO user SET ?", user, (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: "Duplicate Email." });
            }
            return res.status(500).json({ message: "fail" });
        }
        console.log(result);

        var responseUser = {
            id: result.insertId,
            name: user.name,
            email: user.email,
            password: user.password
        };

        return res.status(200).json(responseUser);
    });
    // console.log(user);
    // res.json({ message: "YAH" });
});

    