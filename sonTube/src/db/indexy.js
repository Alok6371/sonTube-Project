import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constaint.js";

dotenv.config();

export const connectDB = async () => {
  try {

    //connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    //console.log(`\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    
    ////////////////////////OR

    const uri = `${process.env.MONGODB_URL}/${DB_NAME}`;
    console.log(`Connecting to MongoDB at: ${uri}`);
    const connectionInstance = await mongoose.connect(uri); // No additional options needed
    console.log(`\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("ERROR:", err.message);
    console.log(err);
    
    process.exit(1);
  }
};
