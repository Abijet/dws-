import { Router } from "express";
import { Book } from "../Schema/model.js";
import { createBook, deleteBook, readAllBook, readBookById, updateBook } from "../controller/bookController.js";

let bookRouter = Router()

// let m0 = ((req, res, next)=>{
//     console.log("I am 0 middleware")
//     next()
// })
// let m1 = (req, res, next)=>{
//     console.log("I am m1 middleware")
// }

// let m0 = (value)=>{
//    return (req, res, next)=>{
//             console.log("I am 0 middleware")   // define middleware with using function (if you want to pass value)
//             if (value) {
//                 next()
//             }
//         }
// }
// let m1 = (req, res, next)=>{
//     console.log("I am m1 middleware")    // define middleware without using function (if you don't want to pass value)
// }
// let m1 = (value)=>{
//     (req, res, next)=>{
//             console.log("I am 1 middleware")
//         }
// }

let isAuthorized = (value)=>{
    return (req, res, next)=>{
        if ((value === "admin") || (value === "superAdmin")) {
           next() 
        }
        else{
            console.log("you cannot pass")
        }
    }
}

let deleteUser = (req, res, next)=>{
    console.log("user deleted successfully")
}



bookRouter
.route("/")
// .post(m0(true),m1)
.post(isAuthorized("superAdmin"),deleteUser)
// .post(createBook)
.get(readAllBook)

bookRouter
.route("/:id")
.get(readBookById)
.patch(updateBook)
.delete(deleteBook)

export default bookRouter