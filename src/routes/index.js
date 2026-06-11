const { Router } = require("express");
const controller = require("../controllers/controller");

const indexRouter = Router();

indexRouter.get("/", controller.usersGET);
indexRouter.get("/new", controller.formGet);

indexRouter.post("/new", controller.validator, controller.formPost);
module.exports = indexRouter;
