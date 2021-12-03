const dotenv = require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3002,
    db: process.env.MONGODB || "mongodb://127.0.0.1:27017"
};
