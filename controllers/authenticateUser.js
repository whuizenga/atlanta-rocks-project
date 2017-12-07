const User = require('../models/user');

module.exports = {
    authenticateUser: function(headers){
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
    }
}
