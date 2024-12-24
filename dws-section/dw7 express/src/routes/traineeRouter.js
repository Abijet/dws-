import { Router } from "express";
import { createTrainee, deleteTrainee, readAllTrainee, readTraineeById, updateTrainee } from "../controller/traineeController.js";


let traineeRouter = Router()

traineeRouter
.route("/")
.post(createTrainee)
.get(readAllTrainee)

traineeRouter
.route("/:id")
.get(readTraineeById)
.patch(updateTrainee)
.delete(deleteTrainee)

export default traineeRouter