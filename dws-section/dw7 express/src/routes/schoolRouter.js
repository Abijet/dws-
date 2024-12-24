import { Router } from "express";

let schoolRouter = Router()

schoolRouter   // localhost:8000/schools
.route("/")
.post(
    (req, res, next)=>{
        console.log("1")
        next()
    },
    (req, res, next)=>{
        console.log("2")
        next()
    },
    (req, res, next)=>{
        console.log("3")
    },
    )

.get((req, res)=>{res.json({success: true, message: "School Read successfully"})})
.delete((req, res)=>{res.json({success: true, message: "School Deleted successfully"})})
.patch((req, res)=>{res.json({success: true, message: "School Updated successfully"})})

schoolRouter
.route("/details")
.post((req, res)=>{res.json({success: true, message: "details created successfully"})})


//  Always put dynamic route in last

schoolRouter
.route("/:id1") // localhost:8000/school/123
.post((req, res)=>{
    
    console.log(req.params)
    res.json({success: true, message:"hello world", data: req.params})
    // for one request there must be only one response.

})


export default schoolRouter;


// Middleware 
//  => It is a function which has request(req), response(res), next.

// Controller 
// => It is a middelware at last.


//  normal middleware
// => define by (req, res, next) =>{}
// => to trigger normal middleware next()


// error middleware
// => define by (err, req, res, next) =>{}
// => to trigger error middleware next(value)
// value can be any type of object/string/number/boolean/array etc.

// MiddleWare is divided into two parts based on its location
// Route level middleware (use in route)
// Application level middleware (use in index.js)
