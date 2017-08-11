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
            res.json(userIWant);
        } else {
            res.send("wrong password")
        }
        res.json(userIWant);
    })
        .catch((err) => {
            res.send("username does not exist");
        })
})
module.exports = router;