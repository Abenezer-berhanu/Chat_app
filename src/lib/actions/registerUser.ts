"use server";
import connectDB from "../config/connectDB";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";

export const registerUser = async (currentState: any, formData: FormData) => {
  try {
    const {
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      bio,
      country,
    }: any = Object.fromEntries(formData);

    if (password !== confirmPassword) {
      return { error: "Password must be match" };
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return { error: "Invalid email" };
    }
    await connectDB();
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return { error: "User already exists please login" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const dataFromUser = {
      fullName,
      userName,
      email,
      password: hashedPassword,
      bio,
      country,
    };

    await connectDB();
    const newUser = new userModel(dataFromUser);
    const savedUser = await newUser.save();
    return { success: `${savedUser?.fullName}registered successfully` };
  } catch (error) {
    console.log(error);
  }
};
