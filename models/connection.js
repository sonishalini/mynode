const mysql = require('mysql')

module.exports = mysql.createPool({
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : '123',
    database : 'mean1112',
    // connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
    multipleStatements : true
})
console.log("Connected to DB!")

