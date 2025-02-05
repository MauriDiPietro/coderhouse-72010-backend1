import { createHmac, randomBytes } from "node:crypto";

export const createHash = (user) => {
  user.secretKey = randomBytes(128).toString();
  user.password = createHmac("sha256", user.secretKey)
    .update(user.password)
    .digest("hex");
};

export const users = [
  {
    firstname: "Juan",
    lastname: "Gomez",
    age: 45,
    email: "juan@gmail.com",
  },
  {
    firstname: "Pedro",
    lastname: "Gonzalez",
    age: 18,
    email: "pedro@gmail.com",
  },
  {
    firstname: "Pablo",
    lastname: "Perez",
    age: 34,
    email: "pablo@gmail.com",
  },
  {
    firstname: "Julio",
    lastname: "Rodriguez",
    age: 30,
    email: "julio@gmail.com",
  },
];
