const Student = require("../models/students.js");

class StudentController {

    async index(req, res) {
        const students = await Student.all();
        const response = {
            "message": "Get all Students",
            "data": students
        };
        res.status(200).json(response);
    }

    async store(req, res) {
        const { name, nim, prodi, address } = req.body;
        let response = {};

        if (name == null || nim == null || prodi == null || address == null) {
            response = {
                "message": "Fill all data! (name, nim, prodi, adress)"
            };
        } else {
            const students = await Student.create(req.body);
            response = {
                "message": "Add new Students is successfully",
                "data": students
            };
            res.status(201).json(response);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, nim, prodi, address } = req.body;
        const getStudent = await Student.find(id);
        let response = {};

        if (studentId.length > 0) {
            const studentData = getStudent[0];
            const body = {
                name: (name != null) ? name : studentData.name,
                nim: (nim != null) ? nim : studentData.nim,
                prodi: (prodi != null) ? prodi : studentData.prodi,
                address: (address != null) ? address : studentData.address,
            };
            const student = await Student.update(id, body);
            response = {
                "mesage": "Update Student id " + id + " is successfully",
                "data": student
            };
            res.status(201).json(response);
        } else {
            response = {
                "mesage": "Student id " + id + " doesn't exist"
            };
            res.status(404).json(response);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const getStudent = await Student.find(id);
        let response = {};

        if (getStudent.length > 0) {
            await Student.delete(id);
            response = {
                "message": "Delete Student id " + id + " is successfully"
            }
            res.status(200).json(response);

        } else {
            response = {
                "message": "Student id " + id + " doesn't exist"
            }
            res.status(404).json(response);
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const student = await Student.find(id);
        let response = {};

        if (student.length > 0) {
            response = {
                "message": "Get Students id " + id
            }
            res.status(200).json(response);
        } else {
            response = {
                "message": "Student id " + id + " doesn't exist"
            }
            res.status(404).json(response);
        }
    }
}

const object = new StudentController();
module.exports = object;