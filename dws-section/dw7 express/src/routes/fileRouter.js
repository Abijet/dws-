import { Router } from "express";
import upload from "../middleware/uplodeFile.js";

let fileRouter = Router()



let uploadDocument = (req, res)=>{
    console.log(req.files)

    let allLink = req.files.map((value, i)=>{

        let link = `localhost:8000/${value.filename}`
        return link
    })
    
    res.json({
        success: true,
        message: "image uploaded successfully",
        data: allLink,
    })
}

fileRouter

.route("/multiple")   // localhost:8000/file/multiple
.post(upload.array("document"),uploadDocument)

export default fileRouter