import { Schema } from "mongoose";


let traineeSchema = Schema({
    name:{
        type: String,
        required: [true, "name field is required"]
    },
    age:{
        type: Number,
        required: [true, "age field is required"]
    },
    password:{
        type: String,
        required: [true, "password field is required"]
    },
    phoneNumber:{
        type: Number,
        required: [true, "phoneNumber field is required"]
    },
    roll:{
        type: Number,
        required: [true, "roll field is required"]
    },
    isMarried:{
        type: Boolean,
        required: [true, "isMarried field is required"]
    },
    spouseName:{
        type: String,
        required: [true, "spouseName field is required"]
    },
    email:{
        type: String,
        required: [true, "email field is required"]
    },
    gender:{
        type: String,
        required: [true, "gender field is required"]
    },
    dob:{
        type: Date,
        required: [true, "dob field is required"]
    },
    location:{
        country:{
           type: String,
        required: [true, "country field is required"]
        },
        exactLocation:{
           type: String,
        required: [true, "exactLocation field is required"]
        },
    },

    favTeacher:[
        {
            type: String,
            required: [true, "value field is required"]
        }
    ],

    favSubject:[
       {
        bookName:{
        type: String,
        required: [true, "bookName field is required"]
        },
        bookAuthor:{
            type: String,
        required: [true, "bookAuthor field is required"]
        }
       }
    ],

}) 

export default traineeSchema