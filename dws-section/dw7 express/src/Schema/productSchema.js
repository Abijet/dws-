import { Schema } from "mongoose"

let productSchema = Schema({
    name:{
        type: String,
        required:true,
    },
    price:{
        type :Number ,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    }
})

export default productSchema