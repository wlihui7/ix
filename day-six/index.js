const express = require("express");
const path = require("path");
const logger = require("./src/utilities/middleware/logger");

const app = express();

app.use(logger);

//Middleware that parses the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//if http request to api/users, then refer to the user's router in user/index file 
app.use("/api/users", require("./src/api/users-routes"));
app.use("/api/auth", require("./src/api/auth-routes"));

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
