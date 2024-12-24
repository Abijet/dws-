import { Router } from "express";
import { Classroom } from "../Schema/model.js";
import { createClassroom, deleteClassroom, readAllClassroom, readClassroomById, updateClassroom } from "../controller/classroomController.js";

let classroomRouter = Router()

classroomRouter
.route("/")
.post(createClassroom)
.get(readAllClassroom)

classroomRouter
.route("/:id")
.get(readClassroomById)
.patch(updateClassroom)
.delete(deleteClassroom)

export default classroomRouter