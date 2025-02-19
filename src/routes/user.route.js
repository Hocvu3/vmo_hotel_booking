const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const userRouter = express.Router();

userRouter.post("/login", authController.login);
userRouter.post("/logout", authController.logout);

userRouter.get("/add-user", userController.addUsers);
userRouter.get("/get-user", userController.getUsers);
userRouter.delete("/delete-user/:id", userController.deleteUser);

module.exports = userRouter;