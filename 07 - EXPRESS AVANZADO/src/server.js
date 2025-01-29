import express from "express";
import { manager } from "./managers/user-manager.js";
import { userValidator } from "./middlewares/user-validator.js";
import { loggerHttp } from "./middlewares/logger-http.js";
import { paramsValidator } from "./middlewares/params-validator.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

/* ------------------------------------ - ----------------------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* ------------------------------------ - ----------------------------------- */
app.use(loggerHttp);

app.get("/", (req, res) => {
  res.send("Bienvenidos a mi servidor");
});

app.get("/users", async (req, res) => {
  try {
    const users = await manager.getAllUsers();
    return res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", [paramsValidator], async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await manager.getUserByid(id);
    return res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/users", [userValidator], async (req, res, next) => {
  // console.log(req.body)
  try {
    const user = await manager.createUser(req.body);
    return res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    next(error);
  }
});

app.delete("/users/:id", [paramsValidator], async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDel = await manager.deleteUser(id);
    return res
      .status(200)
      .json({ message: `User delete ok - id: ${userDel.id}` });
  } catch (error) {
    next(error);
  }
});

app.put(
  "/users/:id",
  [paramsValidator, userValidator],
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userUpd = await manager.updateUser(req.body, id);
      return res.status(200).json(userUpd);
    } catch (error) {
      next(error);
    }
  }
);

app.use(errorHandler);

app.listen(8080, () => console.log("Servidor corriendo en el puerto 8080"));
