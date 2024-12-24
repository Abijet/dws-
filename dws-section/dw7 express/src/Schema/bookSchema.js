import { Schema } from "mongoose";


let bookSchema = Schema({
    name:{
        type: String,
        required : true
    },
    auther:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    isAvailable:{
        type: Boolean,
        required : true
    },
})

export default bookSchema