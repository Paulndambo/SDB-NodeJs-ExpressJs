const express = require("express");

const {
  getStudents,
  createStudent,
  updatedStudent,
  deleteStudent,
  getStudentById,
} = require("../controllers/students");

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updatedStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getStudentById);


module.exports = router;
