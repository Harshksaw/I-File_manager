const express = require("express");
const { login, register } = require("../controller/auth.controller");





const authRouter = express.Router();




authRouter.post("/login",login)
authRouter.post("/register",register)

module.exports = authRouter;