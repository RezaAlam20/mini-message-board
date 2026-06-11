const pool = require("./pool");

const getUserMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames;");
  return rows;
};

const addUser = async (messageUser, messageText) => {
  await pool.query(
    "INSERT INTO usernames (username , message) VALUES ($1,$2)",
    [messageUser, messageText],
  );
};

module.exports = {
  getUserMessages,
  addUser,
};
