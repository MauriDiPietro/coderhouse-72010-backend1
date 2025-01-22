const fs = require("node:fs");
const { v4: uuidv4 } = require("uuid");

class UserManager {
  constructor(path) {
    this.path = path;
  }

  async getAllUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const users = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(users);
      } else return [];
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(obj) {
    try {
      const user = {
        id: uuidv4(),
        ...obj,
      };
      const users = await this.getAllUsers(); //[] | [{}, {}]
      const userExists = users.find((u) => u.id === user.id);
      if (userExists) throw new Error("User already exists");
      users.push(user);
      await fs.promises.writeFile(this.path, JSON.stringify(users));
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByid(id) {
    try {
      const users = await this.getAllUsers();
      const userExists = users.find((u) => u.id === id);
      if (!userExists) throw new Error("User does not exist");
      return userExists;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteUser(id) {
    try {
      const users = await this.getAllUsers();
      if (users.length) {
        const userExists = await this.getUserByid(id);
        if (userExists) {
          const newArray = users.filter((u) => u.id !== id);
          await fs.promises.writeFile(this.path, JSON.stringify(newArray));
          return newArray;
        }
        return null;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

const manager = new UserManager("./users.json");

const user1 = {
  firstname: "Roman",
  lastname: "Castro",
  age: 35,
};

const user2 = {
  firstname: "Pablo",
  lastname: "Ochoa",
  age: 32,
};

const test = async () => {
  const users = await manager.getAllUsers();
  console.log(users);

  console.log(await manager.createUser(user1));
  //   console.log("---se agrego un usuario---");
  //   console.log();
  //   console.log("---se agrego un usuario---");

  //   console.log(await manager.getAllUsers());

  const userCreated = await manager.createUser(user2);
//   console.log(
//     "se encontró al usuario: ",
//     await manager.getUserByid(`${userCreated.id}`)
//   );

  console.log('se elimina al usuario: ', await manager.deleteUser(`${userCreated.id}`))
};

test();
