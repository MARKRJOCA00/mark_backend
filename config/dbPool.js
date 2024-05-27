const sql = require("mssql");
const appConfig = require("./appConfig");
const fs = require("fs");
const path = require("path");
const { error } = require("console");

const config = {
  user: appConfig.db_user,
  password: appConfig.db_password,
  server: appConfig.db_server,
  database: appConfig.db_name,
  options: appConfig.db_options,
  pool: appConfig.db_pool,
};

let pool;

const getDbPool = async () => {
  if (!pool) {
    try {
      console.log("getting pool");
      pool = await sql.connect(config);
      console.log("pool obtained", pool);
    } catch (err) {
      console.error("Database connection failed: ", err);
    }
  }
  return pool;
};

const executeQuery = async (query, params = []) => {
  const pool = await getDbPool();

  try {
    const request = pool.request();

    params.forEach((param) => {
      request.input(param.name, param.type, param.value);
    });
    const result = await request.query(query);
    return result.recordset;
  } catch (err) {
    console.error("Error executing query", err);
    throw err;
  }
};

const executeSqlFiles = async (directory) => {
  const pool = await getDbPool();

  const absoluteDirectory = path.resolve(__dirname, "../", directory);
  const files = fs
    .readdirSync(absoluteDirectory)
    .filter((file) => file.endsWith(".sql"));

  for (const file of files) {
    const filePath = path.join(directory, file);

    const query = fs.readFileSync(filePath, "utf-8");
    try {
      await pool.request().query(query);
      console.log(`Executed file ${file}`);
    } catch (err) {
      console.error(`Error executing ${file}:`, err);
      throw err;
    }
  }
};

module.exports = { getDbPool, executeQuery, executeSqlFiles };
