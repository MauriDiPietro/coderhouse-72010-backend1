import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const getUser = async () => {
  try {
    const c1 = await UserModel.find();
    const c2 = await UserModel.find({ age: { $gt: 33 } });
    const c3 = await UserModel.find({ $and: [{ age: { $gt: 33 } }, { age: { $lt: 40 } }] });
    const c4 = await UserModel.findById('67bc594b79a74f020086304d');
    const c5 = await UserModel.findOne({_id: '67bc594b79a74f020086304d'});
    const c6 = await UserModel.find({_id: '67bc594b79a74f020086304d'});
    console.log(c6);
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