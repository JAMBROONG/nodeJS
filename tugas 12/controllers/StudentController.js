const Student = require("../models/students.js");

class StudentController {
    async index(req, res){
        const students = await Student.all();
        const response = {
            "message": "get all students",
            "data": students
        };
        res.json(response);
    }
    async store(req, res){
        const students = await Student.create(req.body);
        const response = {
            "message": "add new students successfully",
            "data": students
        };
        res.json(response);
    }

    // async show(req, res){
    //     const { id } = req.params;
    //     const students = await Student.find(id);
    //     const response = {
    //         "message": "get student id "+id,
    //         "data": students
    //     };
    //     res.json(response);
    // }
}

const object = new StudentController();

module.exports = object;