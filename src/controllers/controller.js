const queries = require("../../db/queries");
const { body, validationResult, matchedData } = require("express-validator");
const usersGET = async (req, res) => {
  const rows = await queries.getUserMessages();
  res.render("index", { rows });
};

const formGet = (req, res) => {
  res.render("form");
};

const validator = [
  body("messageUser")
    .trim()
    .isLength({ min: 1, max: 20 })
    .isAlpha()
    .withMessage("name should be alphabet and between 1 to 20 characters"),
  body("messageText")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("text should be at least 1 and max 255 characters long"),
];

const formPost = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { messageUser, messageText } = req.body;
    await queries.addUser(messageUser, messageText);
    res.redirect("/");
  } else {
    res.render("form", {
      errors: errors.array(),
    });
  }
};
module.exports = {
  usersGET,
  formGet,
  formPost,
  validator,
};
