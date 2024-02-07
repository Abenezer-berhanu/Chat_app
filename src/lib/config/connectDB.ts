import mongoose from "mongoose";
export default async function connectDB(){
try {
    await mongoose.connect('')
} catch (error) {
    console.log('mongodb connecting error:', error);
}
}