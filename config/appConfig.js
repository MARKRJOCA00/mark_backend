require("dotenv").config();

const config = {};

config.db_user = process.env.DB_USER || "root";
config.db_password = process.env.DB_PASSWORD || "password";
config.db_server = process.env.DB_SERVER || "localhost";
config.db_name = process.env.DB_DATABASE || "development_db";
config.db_options = {
  encrypt: process.env.DB_ENCRYPT === "true", // Convert string to boolean
  trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === "true",
};
config.db_pool = {
  max: 10,
  min: 0,
  idleTimeoutMillis: 30000,
};

config.app_port = process.env.APP_PORT || 3000;

module.exports = config;
