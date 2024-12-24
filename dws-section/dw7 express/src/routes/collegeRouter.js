import { Router } from "express";
import { College } from "../Schema/model.js";
import { createCollege, deleteCollege, readAllCollege, readCollegeById, updateCollege } from "../controller/collegeController.js";

let collegeRouter = Router()

collegeRouter
.route("/")
.post(createCollege)
.get(readAllCollege)

collegeRouter
.route("/:id")
.get(readCollegeById)
.patch(updateCollege)
.delete(deleteCollege)

export default collegeRouter