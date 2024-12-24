import { Router } from "express";
import { createTeacher, deleteTeacher, readAllTeacher, readAllTeacherById, updateTeacher } from "../controller/teacherController.js";

let teacherRouter = Router()


teacherRouter

.route("/")
.post(createTeacher)
.get(readAllTeacher)

teacherRouter.route("/:id")
.get(readAllTeacherById)
.patch(updateTeacher)
.delete(deleteTeacher)



export default teacherRouter;