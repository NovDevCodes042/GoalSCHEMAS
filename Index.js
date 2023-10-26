require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require ('cors');
// const PORT = 7000;
const PORT = process.env.PORT || 7000;
const goalRouter = require("./Routes/GoalRouter.js")

//midware 
app.use(express.json())
app.use(cors());

//routes
app.use("/api/goals", goalRouter)


//ds connection
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "goals",
        })
        app.listen(PORT, () => {
            console.log((`Server running on port  ${PORT}...`));
        })
    }catch (error) {
        console.log(error);
    }
};
startServer(); 


///error routes
app.use((req, res) => {
    res.status(404).json({success: false, msg: "Resource not found"});
});