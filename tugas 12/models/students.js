const db = require("../config/database.js");
const { get } = require("../routes/api.js");

class Student {
    static all() {
        const sql = "SELECT * FROM students";
        return Student.query(sql, null, (result) => result);
    }

    static async create(body) {
        const sql = "INSERT INTO students SET ?";
        const id = await Student.query(sql, body, (result) => result.insertId);
        return Student.find(id);
    }

    static find(id) {
        const sql = "SELECT * FROM students WHERE id = ?";
        return Student.query(sql, id, (result) => result);
    }

    static query(sql, body, callback) {
        return new Promise((resolve, reject) => {
            db.query(sql, body, (err, results) => {
                resolve(callback(results));
            });
        });
    }

}

module.exports = Student;