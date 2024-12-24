import { Schema } from "mongoose";


let classroomSchema = Schema({
    name:{
        type: String,
        required : true
    },
    numberOfBench:{
        type: Number,
        required : true
    },
    hasTv:{
        type: Boolean,
        required : true
    },
})

export default classroomSchema