import { Schema } from "mongoose";

let contactUsSchema = Schema({
    fullName:{
        type: String,
        required: true,   
    },
    email:{
        type :String ,
        required: true,
    },
    description:{
        type:String,
        required: true,
    }
})
export default contactUsSchema