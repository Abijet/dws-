import { Schema } from "mongoose";


let detailsSchema = Schema({
    name:{
        type: String,
        required : true
    },
    age:{
        type: Number,
        required : true
    },
    isMarried:{
        type: Boolean,
        required : true
    },
})

export default detailsSchema