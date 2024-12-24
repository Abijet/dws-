import { Book } from "../Schema/model.js"


export let createBook = async(req, res)=>{
    let data = req.body
    try {
        let result = await Book.create(data)
        res.json({
            success: true,
            message: "Book Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readAllBook = async(req, res)=>{
    try {
        let result = await Book.find({})
        res.json({
            success: true,
            message:"Book read successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let readBookById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Book.findById(id)
        res.json({
            success: true,
            message: "Book read By Id Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let updateBook = async(req, res)=>{
    let id=  req.params.id;
    let data = req.body
    try {
        let result = await Book.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"Book updated Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let deleteBook = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Book.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "book delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}