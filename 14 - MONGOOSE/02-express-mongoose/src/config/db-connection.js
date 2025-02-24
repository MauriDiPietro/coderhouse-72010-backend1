import { connect } from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/coderhouse";
// const MONGO_URL = "mongodb+srv://....."

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};
