import { model } from "mongoose";
import detailsSchema from "./detailsSchema.js";
import teacherSchema from "./teacherSchema.js";
import bookSchema from "./bookSchema.js";
import collegeSchema from "./collegeSchema.js";
import classroomSchema from "./classroomSchema.js";
import departmentSchema from "./departmentSchema.js";
import studentSchema from "./studentSchema.js";
import traineeSchema from "./traineeSchema.js";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import contactUsSchema from "./contactUsSchema.js";
import searchrangeSchema from "./searchrangeSchema.js";


export let Detail = model("Detail", detailsSchema)
export let Teacher = model("Teacher", teacherSchema)
export let Book = model("Book", bookSchema)
export let Student = model("Student", studentSchema)
export let College = model("College", collegeSchema)
export let Classroom = model("Classroom", classroomSchema)
export let Department = model("Department", departmentSchema)
export let Trainee = model("Trainee", traineeSchema)
export let User = model("User", userSchema)
export let Product = model("Product", productSchema)
export let Review = model("Review", reviewSchema)
export let ContactUs = model("ContactUs", contactUsSchema)
export let Searchrange = model("Searchrange", searchrangeSchema)








