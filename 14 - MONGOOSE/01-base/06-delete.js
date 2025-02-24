import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const getUser = async () => {
  try {
    const id = '67bc594b79a74f020086304d';
    const c4 = await UserModel.findByIdAndDelete(id);

    // const c4 = await UserModel.deleteOne(
    //     { _id: id }
    // );

    console.log(c4);
  } catch (error) {
    throw new Error(error);
  }
};

const test = async () => {
  try {
    await initMongoDB()
      .then(() => console.log("Conectado a MongoDB"))
      .catch((error) => console.log(error));

    await getUser();
  } catch (error) {
    console.log(error);
  }
};

test();