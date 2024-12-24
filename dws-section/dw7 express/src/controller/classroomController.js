import { Classroom } from "../Schema/model.js"

export let createClassroom = async(req, res)=>{
    let data = req.body
    try {
        let result = await Classroom.create(data)
        res.json({
            success: true,
            message: "Classroom Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readAllClassroom = async(req, res)=>{
    try {
        let result = await Classroom.find({})
        res.json({
            success: true,
            message:"Classroom read successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readClassroomById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Classroom.findById(id)
        res.json({
            success: true,
            message: "Classroom read By Id Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let updateClassroom = async(req, res)=>{
    let id=  req.params.id;
    let data = req.body
    try {
        let result = await Classroom.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"Classroom updated Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let deleteClassroom = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Classroom.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Classroom delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}


