import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      requied: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      requied: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
