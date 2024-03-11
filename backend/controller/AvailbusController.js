const AvailablebusModel = require("../model/AvailablebusModel");


// create buses
const createavailbuse = async (req, res) => {
    const alreadybuse = req.body.busenumber;
    try {
        const finbus = await AvailablebusModel.findOne({ busenumber:alreadybuse });
        if (finbus) {
            return res.status(409).json({ status: "false", message: "Available-Bus is already exist" })
        }

        const availbuse = await AvailablebusModel.create({
            busenumber: req.body.busenumber,
            from: req.body.from,
            to: req.body.to,
            date: req.body.date,
            departuretime: req.body.departuretime,
            price:req.body.price,
            status:req.body.status

        });
        return res.status(201).json({
            status: 'success',
            availbuse: availbuse
        })
    } catch (error) {
        res.json({ status: "false", message: error.message })
    }
}

// getall buses

const getavailbuse = async (req, res) => {


    try {

        const availbus = await AvailablebusModel.find({})
        if (!availbus) {
            return res.status(409).json({ status: "false", message: "No buses available" })
        }
        return res.status(200).json({
            status: 'success',
            availbus: availbus
        })
    } catch (error) {
        console.log(`Error in SignUp ${error}`);
        res.status(500).json({ status: 'Failed', message: error.message });
    }
}

module.exports = { createavailbuse, getavailbuse };