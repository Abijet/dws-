import { ContactUs } from "../Schema/model.js"

export let createContactUs = async(req, res)=>{
    let data = req.body
    try {
        let result = await ContactUs.create(data)
        res.json({
            success: true,
            message: "ContactUs create Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let readContactUs = async (req, res)=>{
    try {
        let result = await ContactUs.find({})
        res.json({
            success: true,
            message: "ContactUs read Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let readContactUsById = async(req, res)=>{
    let id = req.params.id
    try {
        let result =  await ContactUs.findById(id)
        res.json({
            success: true,
            message: "ContactUs readById Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let updateContactUsById = async(req, res)=>{
    let id = req.params.id
    let data = req.body
    try {
        let result =  await ContactUs.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message: "ContactUs update Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}
export let deleteContactUsById = async(req, res)=>{
    let id = req.params.id
    try {
        let result =  await ContactUs.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "ContactUs delete Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}