import { connect } from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/coderhouse";

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};

initMongoDB()
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.log(error));
