import { Trainee } from "../Schema/model.js"
import { sendMail } from "../utils/sendmail.js"

export let createTrainee = async(req, res) =>{
    let data = req.body

    let email = req.body.email


    try {
        await sendMail({
         from: '"freedy" <uniquekc425@gmail.com>',
         to:[email],
         subject: "this is subject",
         html: `<h1>Hello world !</h1>`,

         attachments:
         [{
            filename: "developer.png",
            path: "./developer.png",
         },
        ]
        })
        console.log("email send successfully")
         
     } catch (error) {
         console.log(error.message)
     }

    try {
        let result = await Trainee.create(data)
        res.json({
            success: true,
            message: "trainee created successfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let readAllTrainee = async(req, res) =>{

 // find({age:20})

    // find({age:{$gt:20}}) // find the data which is greater than 20
    // find({age:{$gte:20}}) // find the data which is greater or equal to 20
    // find({age:{$lt:20}}) // find the data which is lesser than 20
    // find({age:{$lte:20}}) // find the data which is lesser or equal to 20
    
    // find({age:{$ne:20}}) // find the data which is not equal to 20
    
    
    // find({age:{$in:[26,27,22]}}) // find the data which include 26,27,22

    
    // find({$and:[{name:"nitan"}, {age:27}]}) // find the data which name is nitan and age is 27
    // find({$and:[{name:"nitan"}, {age:29}]}) // find the data which name is nitan and age is 29
    // find({$and:[{name:"nitan"}, {isMarried: false, age:29}]}) // find the data whose condition is which has name nitan isMarried is false and age is 29

    // find({$and:{age:{$gte:25} , age:{$lte:30}}}) // find the data whose condition is whose age is greater or equal to 25 and lesser or equal to 30 


    // find({$or:[{age:29}, {age:22}]})  // find the data whose condition is which age is 29 or 22. 
    
    // find({$or:[{name:{$in:["nitan", "sandip"]}}, {age:{$in:[29, 16]}}]})  

    // find({name: "nitan"}) exact searching
    // find({name: /nitan/}) regex searching => not exact searching
    // find({name: /nitan/i}) regex searching => not exact searching

    // find({name: "nitan"}).select("name")
    // find({name: "nitan"}).select("name age")
    // find({name: "nitan"}).select("name age isMarried")
    //  Find has control over the object.
    //  Select has the control over the object property.
    //  Sort work according to the object property, Syntax: .sort("name") . It means it short according to the name.sort("name age").It means it short according to the name and age.

    //  Limit it limit over the object.
    //  Skip it skip the first of the object,
    //  Syntax: .skip("2") => it skip the first 2 of the object. 

    // assending sort("name")
    // desending sort("-name")

    // Sort example
    // find({}).sort("name")
    // find({}).sort("-name")
    // find({}).sort("name age")
    // find({}).sort("name -age")
    // find({}).sort("-age name") 

    // how it work flow.
    // find => sort => select => skip => limit

    
    try {
        // let result = await Trainee.find({})
        // let result = await Trainee.find({name: "nitan"}).select("name age -_id") // if you write -_id(-_id will nor run in comes while reading data)  

        // let result = await Trainee.find({}).limit("2").select("name")
        let result = await Trainee.find({}).limit("2")


        res.json({
            success: true,
            message: "trainee read successfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let readTraineeById = async(req, res) =>{
    let id = req.params.id
    try {
        let result = await Trainee.findById(id)
        res.json({
            success: true,
            message: "trainee read by id successfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let updateTrainee = async(req, res) =>{
    let id = req.params.id
    let data = req.body
    try {
        let result = await Trainee.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message: "trainee update successfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let deleteTrainee = async(req, res) =>{
    let id = req.params.id
    try {
        let result = await Trainee.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "trainee delete successfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}