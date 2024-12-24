import { Router } from "express";
import { createUser, deleteUser, readUser, readUserById, updateUser } from "../controller/userController.js";

let userRouter = Router()

userRouter
.route("/")
.post(createUser)
.get(readUser)

userRouter
.route("/:id")
.get(readUserById)
.patch(updateUser)
.delete(deleteUser)

export default  userRouter;