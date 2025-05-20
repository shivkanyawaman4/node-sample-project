const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoDBConnection= ()=>{
mongoose.connect(process.env.DB_CONNECTION_URL).then(()=>{
    console.log("mongo server connection.success..");
}).catch((error)=>{
    console.log(" error mongo server connection...", error);
    process.exit(1);
});
}

module.exports = 
mongoDBConnection
