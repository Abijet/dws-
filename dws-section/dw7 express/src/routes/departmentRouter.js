import { Router } from "express";
import { Department } from "../Schema/model.js";
import { createDepartment, deleteDepartment, readAllDepartment, readDepartmentById, updateDepartment } from "../controller/departmentController.js";

let departmentRouter = Router()

departmentRouter
.route("/")
.post(createDepartment)
.get(readAllDepartment)

departmentRouter
.route("/:id")
.get(readDepartmentById)
.patch(updateDepartment)
.delete(deleteDepartment)

export default departmentRouter