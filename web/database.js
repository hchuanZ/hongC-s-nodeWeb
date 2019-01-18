const mysql = require('mysql');
const config = require('./config');

const database = {
    host:config.host,
    database:config.database,
    port:config.port,
    password:config.password,
    user:config.user
};

database.connect();

module.exports = database