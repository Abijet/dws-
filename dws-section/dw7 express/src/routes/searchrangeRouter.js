import { Router } from "express";
import { createSearchrange, deleteSearchrange, readAllSearchrange, readAllSearchrangeByBs, readAllSearchrangeByMonthAd, readSearchrangeById, updateSearchrange } from "../controller/searchrangeController.js";


let SearchrangeRouter = Router()

SearchrangeRouter
.route("/")
.post(createSearchrange)
.get(readAllSearchrange)

SearchrangeRouter
.route("/ad")
.get(readAllSearchrangeByMonthAd)
SearchrangeRouter
.route("/bs")
.get(readAllSearchrangeByBs)



SearchrangeRouter
.route("/:id")
.get(readSearchrangeById)
.patch(updateSearchrange)
.delete(deleteSearchrange)



export default SearchrangeRouter