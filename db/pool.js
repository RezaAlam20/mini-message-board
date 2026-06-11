const { Pool } = require("pg");
require("dotenv").config({ path: "../.env" });

const url = process.env.DATABASE_URL || process.env.db_url;

module.exports = new Pool({
  connectionString: url,
});
