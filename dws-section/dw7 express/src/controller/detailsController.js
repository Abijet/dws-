import { Detail } from "../Schema/model.js"

export let createDetails = async(req, res)=>{
    let data = req.body
    try {
        let result = await Detail.create(data)
        res.json({
            success: true,
            message: "Detail created successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success:false,
            message: error.message,
        })
    }
}

export let readAllDetails = async(req, res)=>{
    try {
        let result = await Detail.find({})
        res.json({
            success: true,
            message: "Details Read Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readDetailsById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Detail.findById(id)
        res.json({
            success: true,
            message: "Details read by id",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let updateDetails = async(req, res)=>{
    let id = req.params.id
    let data = req.body
    try {
        let result = await Detail.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message: "Detail Updated Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success:false,
            message: error.message
        })
    }
}

export let deleteDetails = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Detail.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Detail Delete Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}
