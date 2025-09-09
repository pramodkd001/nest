import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Cast error to Error type to access the message property
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;