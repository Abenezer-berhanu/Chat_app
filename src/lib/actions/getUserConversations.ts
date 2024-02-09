"use server";
import connectDB from "../config/connectDB";
import messageModel from "../models/messageModel";

export const getUserConversations = async ({
  ownerId,
  receiverId,
}: {
  receiverId: string;
  ownerId: any;
}) => {
  try {
    await connectDB();
    const conversations = await messageModel
      .find({
        $or: [
          { $and: [{ "ownerId": ownerId }, { "receiverId": receiverId }] },
          { $and: [{ "ownerId": receiverId }, { "receiverId": ownerId }] },
        ],
      })
      .lean();
    return conversations;
  } catch (error) {
    console.log(error);
  }
};
