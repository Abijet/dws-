import { Schema } from "mongoose";


let searchrangeSchema = Schema({
    name:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        required: true
    },
    
})


export default searchrangeSchema