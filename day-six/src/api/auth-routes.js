const express = require("express");
const router = express.Router();

const AuthService = require("../services/auth-service");
const authService = new AuthService();

//if user tries to register, register with the auth service then return it to the user as json if there is no error 
router.post("/register", (req, res) => {
    authService
        .register(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).json({ msg: err.message });
        });
});

router.post("/login", (req, res) => {
    authService
        .login(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).json({ msg: err.message });
        });
});

module.exports = router;