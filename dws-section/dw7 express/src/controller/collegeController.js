import { College } from "../Schema/model.js"

export let createCollege = async(req, res)=>{
    let data = req.body
    try {
        let result = await College.create(data)
        res.json({
            success: true,
            message: "College Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readAllCollege = async(req, res)=>{
    try {
        let result = await College.find({})
        res.json({
            success: true,
            message:"College read successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readCollegeById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await College.findById(id)
        res.json({
            success: true,
            message: "College read By Id Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let updateCollege = async(req, res)=>{
    let id=  req.params.id;
    let data = req.body
    try {
        let result = await College.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"College updated Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let deleteCollege = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await College.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "College delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}


