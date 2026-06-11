const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const path = require("path");
const populatedb = require("../db/populatedb");
populatedb.main();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
