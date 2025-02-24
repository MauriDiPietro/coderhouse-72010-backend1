import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstname: { type: String, required: true, max: 100 },
    lastname: {
      type: String,
      required: true,
      minLength: [3, "minimum 3 characters"],
      maxLenght: [100, "maximum 100 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "minimum 6 characters"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

export const UserModel = model("user", UserSchema);

