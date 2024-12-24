import { Searchrange } from "../Schema/model.js"
import NepaliDate from 'nepali-date-converter'



export let createSearchrange = async(req, res)=>{
    let data = req.body
    try {

        const result = await Searchrange.create(data);
        res.json({
            success: true,
            message: "Searchrange Created Succesfully",
            body: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let readAllSearchrange = async (req, res) => {
    try {
      let startdate= new Date(req.query.startDate)
      let enddate= new Date(req.query.endDate)
      let result = await Searchrange.find({date:{$gte:startdate, $lte:enddate}});
      res.json({
        success: true,
        message: "searchrange read successfully",
        data: result,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };



export let readSearchrangeById = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Searchrange.findById(id)
        res.json({
            success: true,
            message: "Searchrange read By Id Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let updateSearchrange = async(req, res)=>{
    let id=  req.params.id;
    let data = req.body
    try {
        let result = await Searchrange.findByIdAndUpdate(id, data, {new: true})
        res.json({
            success: true,
            message:"Searchrange updated Successfully",
            body: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error,message,
        })
    }
}

export let deleteSearchrange = async(req, res)=>{
    let id = req.params.id
    try {
        let result = await Searchrange.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Searchrange delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}



export let readAllSearchrangeByMonthAd = async (req, res) => {
    try {


        const targetYear = parseInt(req.query.year);
        const targetMonth = parseInt(req.query.month);

        const startDateOfYearMonth = new Date(targetYear, targetMonth - 1, 1);
        const endDateOfYearMonth = new Date(targetYear, targetMonth, 0);


        let query = {};
     
        // Check if both year and month are provided
        if (!isNaN(targetYear) && !isNaN(targetMonth)) {
            query.date = { $gte: startDateOfYearMonth, $lte: endDateOfYearMonth };
        }

        let result = await Searchrange.find(query);

        res.json({
            success: true,
            message: "Searchrange read successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
export let readAllSearchrangeByBs= async (req, res) => {
    try {


    

        let startnepalidate = new NepaliDate(req.query.startNepaliDate);
        let endnepalidate = new NepaliDate(req.query.endNepaliDate);

        let query = {};

     
        if (startnepalidate && endnepalidate) {
            query.date = { $gte: startnepalidate, $lte: endnepalidate };
        }

        let result = await Searchrange.find(query);

        res.json({
            success: true,
            message: "Searchrange read successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}