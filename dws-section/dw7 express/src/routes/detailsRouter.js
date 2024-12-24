import { Router } from "express";
import { Detail } from "../Schema/model.js";
import { createDetails, deleteDetails, readAllDetails, readDetailsById, updateDetails } from "../controller/detailsController.js";

let detailRouter = Router()

detailRouter
.route("/")
.post(createDetails)
.get(readAllDetails)
detailRouter
.route("/:id")
.get(readDetailsById)
.patch(updateDetails)
.delete(deleteDetails)

export default detailRouter