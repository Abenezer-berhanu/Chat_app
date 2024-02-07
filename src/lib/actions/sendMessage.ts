"use server";
import connectDB from "../config/connectDB";
import messageModel from "../models/messageModel";

interface sendMessageParamType {
  receiverId: string;
  ownerId: string;
  content: string;
}

export const sendMessage = async (currentState: any, formData: FormData) => {
  try {
    const { receiverId, ownerId, content } = Object.fromEntries(formData);
    const messageToBeSaved = {
      receiverId,
      ownerId,
      content,
    };
    await connectDB();
    const newMessage = new messageModel(messageToBeSaved);
    await newMessage.save();
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};
