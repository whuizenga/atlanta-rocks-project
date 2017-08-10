const express = require('express');
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.get("/login/:username/:password", (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    User.find().then((users) => {
        const userIWant = users.find((user) => {
            return user.username === username
        })
        if (userIWant.password === password){
            res.send("success")
        } else {
            res.send("Wrong Password")
        }
        res.json(userIWant);
    })
        .catch((err) => {
            res.send("User does not exist");
        })
})
module.exports = router;