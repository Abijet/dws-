import { Schema } from "mongoose"

let reviewSchema = Schema({
    userId:{
        type: Schema.ObjectId,
        ref: "User", //"User" written here is same as in model 
        required:true,
    },
    productId:{
        type: Schema.ObjectId,
        ref: "Product", //"Product" written here is same as in model 
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
})

export default reviewSchema