"use server";
import connectDB from "../config/connectDB";
import messageModel from "../models/messageModel";

interface sendMessageParamType {
  receiverId: string;
  ownerId: string;
  content: string;
}

export const sendMessage = async ({
  receiverId,
  ownerId,
  content,
}: sendMessageParamType) => {
  try {
    const messageToBeSaved = {
      receiverId,
      ownerId,
      content,
    };
    await connectDB();
    const newMessage = new messageModel(messageModel);
    const savedMessage = await newMessage.save();
    return savedMessage;
  } catch (error) {
    console.log(error);
  }
};
