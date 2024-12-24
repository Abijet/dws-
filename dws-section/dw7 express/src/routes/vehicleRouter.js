import { Router } from "express";

let vehicleRouter = Router()


vehicleRouter

.route("/")  
.post((req, res)=>{
    console.log(req.body)
    res.json({
        success: true,
        message: "vehicle created successfully",
        data: req.body,
        query: req.query,
    })
})
.get((req, res)=>{
    res.json({
        success: true, 
        message: "vehicle Read successfully",
    })
})
.delete((req, res)=>{
    res.json({
        success: true, 
        message: "vehicle Deleted successfully",
    })
})
.patch((req, res)=>{
    // console.log(req.body)
    console.log(req.query)
    res.json({
        success: true, 
        message: "vehicle Updated successfully",
        data: req.body,
    })
})




export default vehicleRouter;