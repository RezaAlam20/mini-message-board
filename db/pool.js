const { Pool } = require("pg");
require("dotenv").config({ path: "../.env" }); // Make sure dotenv is loaded!

const url = process.env.DATABASE_URL || process.env.db_url;

module.exports = new Pool({
  connectionString: url,
});
