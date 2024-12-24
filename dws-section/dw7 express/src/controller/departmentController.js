import { Department } from "../Schema/model.js"

export let createDepartment = async(req, res)=>{
    let data = req.body
    try {
        let result = await Department.create(data)
        res.json({
            success: true,
            message: "Department Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let readAllDepartment = async(req, res)=>{
    try {
        let result = await Department.find({})
        res.json({
            success: true,
            message:"Department read successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readDepartmentById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Department.findById(id)
        res.json({
            success: true,
            message: "Department read By Id Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let updateDepartment = async(req, res)=>{
    let id=  req.params.id;
    let data = req.body
    try {
        let result = await Department.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"Department updated Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let deleteDepartment = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Department.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Department delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}



