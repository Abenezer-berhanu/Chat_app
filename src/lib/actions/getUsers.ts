"use server";
import connectDB from "../config/connectDB";
import userModel from "../models/userModel";

const getUsers = async () => {
  try {
    await connectDB();
    const users = await userModel.find({}).lean();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export {getUsers};
