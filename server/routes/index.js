const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const productsRouter = require("./products");

//RUTAS
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
