import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    image: {
      type: String,
      required: true,
      default:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBpY29ufGVufDB8fDB8fHww",
    },
    country: {
      type: "string",
      default: "United States",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Message ||
  mongoose.model("Message", UserSchema);
