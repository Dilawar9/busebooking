const BuseModel = require("../model/BuseModel");


// create buses
const createbuse = async (req,res) => {
    const{busenumber}=req.body;
    try {
         const alreadybuse= await  BuseModel.findOne({busenumber});
         if(alreadybuse){
             return res.status(409).json({status:"false",message:"Bus is already exist"})
         }

        const buse = await BuseModel.create(req.body);
        return res.status(201).json({
            status: 'success',
            buse: buse
        })
    } catch (error) {
        res.json({status:"false",message:error.message})
    }
}

// getall buses

const getbuse = async (req, res) => {
    try {

        const buse = await BuseModel.find({})
        return res.status(200).json({
            status: 'success',
            buse: buse
        })
    } catch (error) {
        console.log(`Error in SignUp ${error}`);
        res.status(500).json({ status: 'Failed', message: error.message });
    }
}

module.exports = { createbuse, getbuse };