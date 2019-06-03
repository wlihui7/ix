const express = require("express");
const router = express.Router();


// if there is a http request to the blank route/page, send the string back as a response from our serve 
router.get("/", (req, res) => {
    res.send("Users default path");
});

// exports file 
module.exports = router;