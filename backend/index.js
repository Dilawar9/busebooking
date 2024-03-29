const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require("./route/UserRoute");
const buseRouter = require("./route/BusRoute");
const availbuseRouter = require("./route/AvailbusRoute")

// Load environment variables from a .env file

dotenv.config();

app.use(cors());
app.use(express.json());


// routes

app.use("/user", userRouter);
app.use('/bus', buseRouter);
app.use('/availbuse',availbuseRouter)







app.get("/", (req, res) => res.send("application is working"));

const startServer = async () => {
    try {
        mongoose.connect(process.env.MONGOODB_KEY).then(() => {
            // mongoose.connect(process.env.MONGODB_URI).then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`server is listening on port ${process.env.PORT}`);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
