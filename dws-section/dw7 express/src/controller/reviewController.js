import { Review } from "../Schema/model.js"


export let createReview = async (req, res)=>{
    let data = req.body
    try {
        let result = await Review.create(data)
        res.json({
            success: true,
            message: "Review Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readReview = async (req, res)=>{
    try {
        let result = await Review.find({}).populate("userId", "fullName -_id").populate("productId", "name -_id")
        res.json({
            success:true,
            message:"review read successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let readReviewById = async (req, res)=>{
    let id = req.params.id
    try {
        let result = await Review.findById(id)
        res.json({
            success : true ,
            message:"review readbyid successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success :false  ,
            message: error.message
        })
    }
}

export let updateReview = async (req, res)=>{
    let data = req.body
    let id = req.params.id
    try {
        let result= await Review.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"review update successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteReview = async (req, res)=>{
    let id = req.params.id;
    try {
        let result = await Review.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"review delete successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}