import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const createUser = async (obj) => {
  try {
    return await UserModel.create(obj);
  } catch (error) {
    throw new Error(error);
  }
};

const test = async () => {
  try {
    await initMongoDB()
      .then(() => console.log("Conectado a MongoDB"))
      .catch((error) => console.log(error));

    const newUser = {
      firstname: "Raul",
      lastname: "Becerra",
      email: "raul@mail.com",
      password: "123456",
    };

    await createUser(newUser);
    console.log('usuario creado')
  } catch (error) {
    console.log(error);
  }
};

test();