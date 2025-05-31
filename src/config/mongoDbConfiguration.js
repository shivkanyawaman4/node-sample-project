const mongoose = require('mongoose');
require('dotenv').config();
const mongoDBConnection = () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PWD}@cluster1.5r244jl.mongodb.net/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4  // 👈 forces IPv4 instead of IPv6
    }).then(() => {
        console.log("Server is successfully connected to the Database")
    }).catch((error) => {
        console.log("Connection Error Occured!", error);
        console.log(`Error name is ${error.name} and Error message is ${error.message}`);
        console.log("=====UNCAUGHT EXCEPTION! 💥 Shutting down=====");
        process.exit(1);
    })
}
module.exports = mongoDBConnection