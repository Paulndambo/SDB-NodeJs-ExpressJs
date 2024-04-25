const { students } = require("../data/students");

const getStudents = (req, res) => {
    res.json(students).status(200);
};

const createStudent = (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json(newStudent).status(200);
};

const getStudentById = (req, res) => {
    const { id } = req.params;
    const student = students.find((student) => student.id === Number(id));
    res.json(student).status(200);
};

const updatedStudent = (req, res) => {
    const { id } = req.params;
    const updatedStudent = req.body;
    students = students.map((student) => {
        if (student.id === parseInt(id)) {
            return updatedStudent;
        }
        return student;
    });
    res.json(updatedStudent).status(200);
};

const deleteStudent = (req, res) => {
    const { id } = req.params;
    students = students.filter((student) => student.id !== Number(id));
    res.json(students).status(200);
};

module.exports = {
    getStudents,
    createStudent,
    getStudentById,
    updatedStudent,
    deleteStudent
}