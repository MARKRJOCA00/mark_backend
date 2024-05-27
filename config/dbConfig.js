const sql = require("mssql");
const appConfig = require("./appConfig");

const config = {
  user: appConfig.db_user,
  password: appConfig.db_password,
  server: appConfig.db_server,
  database: appConfig.db_name,
  options: appConfig.db_options,
  pool: appConfig.db_pool,
};

const connectToDatabase = async () => {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (err) {
    console.error("Database connection failed: ", err);
  }
};

module.exports = connectToDatabase;
