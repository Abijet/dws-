import { Router } from "express";
import { Student } from "../Schema/model.js";
import { createStudent, deleteStudent, readAllStudent, readStudentById, updateStudent } from "../controller/studentController.js";

let studentRouter = Router()

studentRouter
.route("/")
.post(createStudent)
.get(readAllStudent)

studentRouter
.route("/:id")
.get(readStudentById)
.patch(updateStudent)
.delete(deleteStudent)

export default studentRouter