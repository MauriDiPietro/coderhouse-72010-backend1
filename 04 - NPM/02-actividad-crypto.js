const { createHmac, randomBytes } = require("node:crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  createUser(obj) {
    const user = { ...obj };
    user.secretKey = randomBytes(128).toString(); // similar a Math.random()
    user.password = createHmac("sha256", user.secretKey)
      .update(user.password)
      .digest("hex");
    // console.log(user)
    this.users.push(user);
  }

  validateUser(username, password) {
    const users = this.getUsers();
    const user = users.find((user) => user.username === username);
    if (!user) throw new Error("User Not Found");
    const passwordUserCrypto = createHmac("sha256", user.secretKey)
      .update(password)
      .digest("hex");
    if (user.password !== passwordUserCrypto) {
      throw new Error("User / password incorrect");
    }
    return "Usuario Logueado";
  }
}

const userManager = new UserManager();

console.log(userManager.createUser({ username: 'Juan', password: "1234" }));
console.log(userManager.validateUser('Juan', '1234'));
console.log(userManager.getUsers());


