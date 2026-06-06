const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.listen(3000);
