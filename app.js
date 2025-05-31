const express = require('express'); //import liabrary


//access dotenv file for use port or all variable define in .env file
const dotenv = require('dotenv');
dotenv.config();

const app = express(); //store liabrary for use in file  
port = process.env.PORT || 3000;

const mongoDBConnection = require('./src/config/mongoDbConfiguration')  // import form mongoDBconfiguration file
// console.log("abc");
// app.get('/bill', (req, res) => {
//     res.send("Hello Shivkanya.......");
// })

//function for listen all requests from frontend or running app on perticular port using listen
mongoDBConnection();
// console.log("xyz");

app.listen(port, () => {
    console.log("App is running on port", port)
});

