const mysql = require("mysql");

const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "lana123",
        database: "student_express",
    }
);

db.connect((err) => {
    if (err) {
        console.log("db connection is failed! " + err.stack);
        return;
    } else {
        console.log("db connection is success");
        return;
    }
});

module.exports = db;