require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require('./controllers/user');
const RouteController = require('./controllers/route')
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.use("/api/user", UsersController);
app.use('/api/route', RouteController);

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (res,req) => {
  res.sendFile(__dirname + '/client/build/index.html');
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is up, and on port " + PORT);
})