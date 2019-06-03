const express = require("express");

const app = express();

var properties = new Array();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// callback function inside of get
app.get("/", (req,res) => {
    console.log(req.headers);
    res.send("<p> sup </p>");
});

app.get("/properties", (req, res) => {
    properties.push({
        id: 1,
        name: "One",
        location: "Lisbon"
    });
    res.json(properties);
});

app.post("/properties", (req, res) => {
    const property = req.body;
    properties.push(property);
    res.json(property);
});
app.listen(3000, (err) => {
    if (err) {
        console.log("oop");
        return;
    }
    console.log("server listenin' port 3000");
});

console.log("yp");