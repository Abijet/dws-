import { Router } from "express";
import { createReview, deleteReview, readReview, readReviewById, updateReview } from "../controller/reviewController.js";

let reviewRouter = Router()

reviewRouter
.route("/")
.post(createReview)
.get(readReview)

reviewRouter
.route("/:id")
.get(readReviewById)
.patch(updateReview)
.delete(deleteReview)

export default  reviewRouter;