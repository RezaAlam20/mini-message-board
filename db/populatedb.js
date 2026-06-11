require("dotenv").config();
const { Client } = require("pg");

const db_url = process.env.db_url;

const SQL = `CREATE TABLE IF NOT EXISTS usernames(
     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ), message VARCHAR (255) );
`;

async function main() {
  const client = new Client({
    connectionString: db_url,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("finished");
}

main();

module.exports = {
  main,
};
