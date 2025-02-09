import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("funciona")
    } catch (error) {
        console.error("error, no funciona", error.message)
        process.exit(1)
    }

}

export default connectDB;