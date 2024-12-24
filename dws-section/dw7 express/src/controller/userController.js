import { User } from "../Schema/model.js";

export let createUser = async (req, res)=>{
    let data = req.body
    try {
        let result = await User.create(data)
        res.json({
            success: true,
            message: "User Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readUser = async (req, res)=>{
    
    try {
        let limit = req.query.limit
        let page = req.query.page

        let skip= (page - 1)*limit

        let result = await User.find({}).skip(skip).limit(limit)
        res.json({
            success:true,
            message:"user read successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readUserById = async (req, res)=>{
    let id = req.params.id
    try {
        let result = await User.findById(id)
        res.json({
            success : true ,
            message:"user readbyid successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success :false  ,
            message: error.message
        })
    }
}

export let updateUser = async (req, res)=>{
    let data = req.body
    let id = req.params.id
    try {
        let result= await User.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"user update successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteUser = async (req, res)=>{
    let id = req.params.id;
    try {
        let result = await User.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"user delete successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}