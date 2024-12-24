import mongoose from "mongoose"
import { dbUrl } from "./constant.js";

let dburl = dbUrl;

let connectToMongoDb = async()=>{
    try {
        await mongoose.connect(dburl)
        console.log(`Application is successfully connected at mongodb port ${dburl} `)
    } catch (error) {
        console.log("Unable to connect mongodb")
    }
}

export default connectToMongoDb