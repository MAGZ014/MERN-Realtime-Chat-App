import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB conneted: ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};
