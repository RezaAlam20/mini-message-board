const queries = require("../../db/queries");
const usersGET = async (req, res) => {
  const rows = await queries.getUserMessages();
  res.render("index", { rows });
};

const formGet = (req, res) => {
  res.render("form");
};

const formPost = async (req, res) => {
  const { messageUser, messageText } = req.body;
  await queries.addUser(messageUser, messageText);
  res.redirect("/");
};
module.exports = {
  usersGET,
  formGet,
  formPost,
};
