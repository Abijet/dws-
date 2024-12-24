import { Router } from "express";
import { createContactUs, deleteContactUsById, readContactUs, readContactUsById, updateContactUsById } from "../controller/contactUsController.js";

let ContactUsRouter = Router()

ContactUsRouter
.route("/")
.post(createContactUs)
.get(readContactUs)

ContactUsRouter
.route("/:id")
.get(readContactUsById)
.patch(updateContactUsById)
.delete(deleteContactUsById)

export default ContactUsRouter