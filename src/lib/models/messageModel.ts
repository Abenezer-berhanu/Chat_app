import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    ownerId: mongoose.Types.ObjectId,
    receiverId: mongoose.Types.ObjectId,
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Message ||
  mongoose.model("Message", MessageSchema);
