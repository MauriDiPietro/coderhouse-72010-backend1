import { Router } from "express";
import { users } from "../utils/user-utils.js";
import { manager } from "../managers/user-manager.js";
const router = Router();

router.get("/", (req, res) => {
  res.render("vista1");
});

router.get("/vista2", (req, res) => {
  res.render("vista2");
});

router.get("/vista3", (req, res) => {
  const user = {
    firstname: "Juan",
    lastname: "Martinez",
  };
  res.render("vista3", { user });
});

router.get("/actividad-users", (req, res) => {
  const random = Math.floor(Math.random() * 4);
  const user = users[random];
  res.render("actividad", { user });
});

router.get("/list-users", (req, res) => {
  res.render("actividad2", { users });
});

router.get("/form", async (req, res) => {
    res.render('register')
});


router.get("/home", async (req, res) => {
  const usersfs = await manager.getAllUsers();
  res.render("users", { usersfs });
});

export default router;
