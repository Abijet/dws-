import { Product } from "../Schema/model.js"


export let createProduct = async (req, res)=>{
    let data = req.body
    try {
        let result = await Product.create(data)
        res.json({
            success: true,
            message: "Product Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readProduct = async (req, res)=>{
    try {
        let result = await Product.find({})
        res.json({
            success:true,
            message:"product read successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readProductById = async (req, res)=>{
    let id = req.params.id
    try {
        let result = await Product.findById(id)
        res.json({
            success : true ,
            message:"product readbyid successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success :false  ,
            message: error.message
        })
    }
}

export let updateProduct = async (req, res)=>{
    let data = req.body
    let id = req.params.id
    try {
        let result= await Product.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"product update successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteProduct = async (req, res)=>{
    let id = req.params.id;
    try {
        let result = await Product.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"product delete successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}