

import express, { json } from "express"
import firstRouter from "./src/routes/firstRouter.js";
import schoolRouter from "./src/routes/schoolRouter.js";
import vehicleRouter from "./src/routes/vehicleRouter.js";
import mongoose from "mongoose";
import connectToMongoDb from "./src/connectMongoDb.js";
import bookRouter from "./src/routes/bookRouter.js";
import teacherRouter from "./src/routes/teacherRouter.js";
import classroomRouter from "./src/routes/classroomRouter.js";
import collegeRouter from "./src/routes/collegeRouter.js";
import departmentRouter from "./src/routes/departmentRouter.js";
import detailRouter from "./src/routes/detailsRouter.js";
import studentRouter from "./src/routes/studentRoute.js";
import traineeRouter from "./src/routes/traineeRouter.js";
// import { sendMail } from "./src/utils/sendmail.js";
import jwt from "jsonwebtoken";
import { port, secretKey } from "./src/constant.js";
import bcrypt from "bcrypt"
import userRouter from "./src/routes/userRoute.js";
import productRouter from "./src/routes/productRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
import fileRouter from "./src/routes/fileRouter.js";
import cors from "cors"
import ContactUsRouter from "./src/routes/contactUsRouter.js";
import SearchrangeRouter from "./src/routes/searchrangeRouter.js";
import { config } from "dotenv";

import NepaliDate from 'nepali-date-converter'

let expressApp = express()

// json should be declared after creating express app  [expressApp.use(json())]
expressApp.use(json())
let indexPort = port;
expressApp.use(cors())

// write config() in that file to use the .env
// config()  // to use the variable of .env


// console.log(process.env.FULL_NAME)
// console.log(process.env.AGE)
// console.log(process.env.IS_MARRIED)


// expressApp.use((req, res, next)=>{
//     console.log("hello world")
//     next()
// })
// expressApp.use((req, res, next)=>{
//     console.log("hello world")
//     next()
// })

expressApp.use("/a",firstRouter) // localhost:8000/a
expressApp.use("/schools",schoolRouter) // localhost:8000/schools
expressApp.use("/vehicles",vehicleRouter) // localhost:8000/vehicles
expressApp.use("/teacher",teacherRouter)
expressApp.use("/book",bookRouter)
expressApp.use("/classroom",classroomRouter)
expressApp.use("/college",collegeRouter)
expressApp.use("/department",departmentRouter)
expressApp.use("/detail",detailRouter)
expressApp.use("/student",studentRouter)
expressApp.use("/trainees",traineeRouter)
expressApp.use("/user",userRouter)
expressApp.use("/product",productRouter)
expressApp.use("/review",reviewRouter)
expressApp.use("/files",fileRouter)
expressApp.use("/Contactus",ContactUsRouter)
expressApp.use("/Searchrange",SearchrangeRouter)
expressApp.use(express.static("./public"))

// localhost:8000/webboy.png
// localhost:8000/nike_airforce2.png

expressApp.listen(indexPort, ()=>{
    console.log(`application is connected at port ${indexPort} successfully`)
})


// NepaliDate (year,month,date)
let date1 = new NepaliDate(new Date("2080-01-03").toISOString())
// let date1 = new NepaliDate(new Date("2080-01-03").toString())


// console.log(date1)



connectToMongoDb()

// *********************************************     Token    **********************************

// let infoObj = {

//     _id: "12345"
// }
// let expiryInfo ={
//     expiresIn: "1m"
// }
// let token = jwt.sign(infoObj, secretKey, expiryInfo)

// console.log(token)


// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NSIsImlhdCI6MTY5NjMxODMzMCwiZXhwIjoxNjk2MzE4MzkwfQ.r2mHUB_xf3JN6kTuL0FoUQM9p3qFvCJJJDoriXKZsjs"
// try{
//     let infoObj = jwt.verify(token, "dw7")
//     console.log(infoObj)
// } catch(error){
//     console.log(error.message)
// }


// *****************************************    Hasing     *****************************

// let hashPassword = await bcrypt.hash("Password@123", 10)

// console.log(hashPassword)

// Compare hash password

// let hashDatabasePassword = "$2b$10$DS/q5GBwAg3ATD5ijkaJ0OMmYjy5KFhXO7pPwsS1yUb38w1BboaBG"

// let isPasswordMatch = await bcrypt.compare("Password@123", hashDatabasePassword)
// console.log(isPasswordMatch)



// if there is promise always write in try catch 

// schema
// model
// controller
// router
// index

// we cannot hit api in frontend which we have made 
//  to make it available 