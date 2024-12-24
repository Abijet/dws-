import { Router } from "express";
import { createProduct, deleteProduct, readProduct, readProductById, updateProduct } from "../controller/productController.js";

let productRouter = Router()

productRouter
.route("/")
.post(createProduct)
.get(readProduct)

productRouter
.route("/:id")
.get(readProductById)
.patch(updateProduct)
.delete(deleteProduct)

export default  productRouter;