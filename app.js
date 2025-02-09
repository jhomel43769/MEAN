import express from "express";
import connectDB from "./db.js";
import dotenv from 'dotenv';

dotenv.config()
connectDB()

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`)
})

