import mongoose from "mongoose";
export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Mongoose Connected successfully");
  } catch (error) {
    console.log("mongodb connecting error:", error);
  }
}
