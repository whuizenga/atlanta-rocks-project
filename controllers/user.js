const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const UserSession = require('../models/userSession');
const router = express.Router()

//new user registration
router.post('/', (req, res) => {
    var users = [];
    var validateUsernameAndEmail = true;
    User.find().then((allUsers) => {
        users = allUsers;
        //check if username and email are taken
        users.forEach((user) => {
            if (user.username === req.body.username){
                validateUsernameAndEmail = false;
                res.json({
                    error: "username is taken"
                })
            }
            if (user.email === req.body.email){
                validateUsernameAndEmail = false;
                res.json({
                    error: "user with that email already exists"
                })
            }
        })
        //if not taken proceed to save new user.
        if (validateUsernameAndEmail){
            const newUser = new User();
            newUser.username = req.body.username;
            newUser.email = req.body.email;
            newUser.newsSources = req.body.newsSources;

            //need to hash before saving.
            bcrypt.hash(req.body.password, 10).then((hash) => {
                newUser.password = hash;
                let logTime = new Date;
                console.log(logTime + ":: user " + newUser.id + " has been created.");
                newUser.save();
        
                res.json({
                    message: "got the info, thanks",
                })
            });
        }
    }).catch((err) => {
        console.log(err)
    });


});

//delete user account ('/')

//update user account, password ('/')

//post, sign in ('/sign_in')
router.post('/sign_in', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    let time = new Date();

    authToken = "";
    bcrypt.hash(time.toString(), 2, (err, hash) => {
            authToken = hash;  
        });

    //get all users, and find the one with the email we need.
    const users = User.find().then((users) => {
        const userSigningIn = users.find((user) => {
            return user.email === email;
        })
        //now hash and compare passwords.
        bcrypt.compare(password, userSigningIn.password).then((passwordVerdict) => {
            if (passwordVerdict){
                let logTime = new Date;
                console.log(logTime + ":: user "+userSigningIn.id+" just signed in.");

                //create new session
                let session = new UserSession();
                let expiry = time.getTime() + 7200000;
                session.authToken = authToken;
                session.expiry = expiry;

                userSigningIn.sessions.push(session);
                userSigningIn.save();

                //set headers
                res.setHeader('token-type', "bearer");
                res.setHeader('client', session.id);
                res.setHeader('expiry', expiry);
                res.setHeader('uid', userSigningIn.id),
                res.setHeader('access-token', authToken);

                //send back information.
                res.json({
                    user: userSigningIn.id,
                    username: userSigningIn.username,
                    firstName: userSigningIn.firstName,
                    lastName: userSigningIn.lastName
                });
            } else {
                res.json({
                    error: "Incorrect Password"
                });
            }
        })
    })
});

//delete, sign out ('/sign_out')
router.delete('/sign_out', (req, res) => {
    user = req.headers.uid;
    client = req.headers.client;
    let logTime = new Date;
    console.log(logTime + ":: User " + user + " is ending session " + client + ".");

    User.findById(user).then((userToLogOut) => {
        let sessionIndex = userToLogOut.sessions.findIndex((session) => {
            return session.id === client
        });
        userToLogOut.sessions.splice(sessionIndex, 1);
        userToLogOut.save();
        res.json({
            message: "logout successful"
        })
    })
    
})

//get, validate token ('/validate_token')
router.get('/validate_token', (req, res) => {
    const user = req.headers.uid;
    const client = req.headers.client;
    const expiry = req.headers.expiry;
    const authToken = req.headers['access-token'];
    const now = new Date();

    User.findById(user).then((userToValidate) => {
        let session = userToValidate.sessions.find((session) => {
            return session.id === client;
        });
        if (session){
            if (session.authToken === authToken && now.getTime() < expiry){
                res.json({
                    message: "token valid"
                })
            } else {
                let logTime = new Date;
                console.log(logTime + ":: user " + user + "has invalid token: " + client + ", " + authToken);
                
                //invalid session, time to delete
                let sessionIndex = userToValidate.sessions.findIndex((session) => {
                    return session.id === client
                });
                userToValidate.sessions.splice(sessionIndex, 1);
                userToValidate.save();

                res.json({
                    error: "token invalid"
                })
            }
        } else {
            res.json({
                error: "no session found"
            })
            
        }
    })
});

//Authenticate User
authenticateUser = (headers) => {
    return new Promise((resolve, reject) => {
        const user = headers.uid;
        const client = headers.client;
        const expiry = headers.expiry;
        const authToken = headers['access-token'];
        const now = new Date();

        User.findById(user).then((userToValidate) => {
            let session = userToValidate.sessions.find((session) => {
                return session.id === client;
            });
            if (session){
                if (session.authToken === authToken && now.getTime() < expiry){
                    resolve(userToValidate);
                } else {
                    reject(Error("Expired Session"));
                }
            } else {
                reject(Error("No session found"));
            }
        })
    })
};

module.exports = router;