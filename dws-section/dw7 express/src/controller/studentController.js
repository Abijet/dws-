import { Student } from "../Schema/model.js"

export let createStudent = async(req, res)=>{
    let data = req.body
    try {
        let result = await Student.create(data)
        res.json({
            success: true,
            message: "Student Create Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success:false,
            message: error.message
        })
    }
}

export let readAllStudent = async(req, res)=>{

    try {
        let result = await Student.find({})
        res.json({
            success :true ,
            message: "Student Read Successfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readStudentById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Student.findById(id)
        res.json({
            success: true,
            message: "Student ReadById Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: message.error
        })
    }
}

export let updateStudent = async(req, res)=>{
    let id = req.params.id
    let data = req.body

    try {
        let result = await Student.findByIdAndUpdate(id, data, {new: true})
        res.json({
            
            success :true,
            message: "Update Student Succesfully",
            data: result,
        })
    } catch (error) {
        res.json({

            success: false,
            message: error.message,
        })
    }

   
}

export let deleteStudent = async(req, res)=>{
    let id = req.params.id;

    try {
        let result = await Student.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Student delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}



