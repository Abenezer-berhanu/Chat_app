"use server";
import connectDB from "../config/connectDB";

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

};
