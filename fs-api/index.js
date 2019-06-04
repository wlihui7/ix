//imports 
const express = require("express");

const app = express();

//Middleware that parses the body (tells express we're using json)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//if http request to api/users, then refer to the user's router in user/index file 
app.use("/users", require("./src/api/users-routes"));
app.use("/auth", require("./src/api/auth-routes"));
app.use("/properties", require("./src/api/prop-routes"));

//either use the process's port or 5000
const PORT = process.env.PORT || 5000;

//listening to the port now 
app.listen(PORT, (err) => {
    if (err) {
        console.log("oop");
        return;
    }
    console.log(`server listenin' port ${PORT}`);
});
