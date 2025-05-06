import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

const connection = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas: ", error);
  }
};

connection();

export default mongoose;
