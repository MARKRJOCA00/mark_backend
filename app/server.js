const express = require("express");
const path = require("path");
const app = express();
const config = require("../config/appConfig");
const { executeSqlFiles, getDbPool } = require("../config/dbPool");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.get("/setup-database", async (req, res) => {
  try {
    await executeSqlFiles("sql");
    res.status(200).send("Database setup completed");
  } catch (err) {
    console.error("Error setting up the database:", err);
    res.status(500).send("Error setting up the database");
  }
});

app.get("/test-db-connection", async (req, res) => {
  try {
    await getDbPool();
    res.status(200).send("Database connection successful");
  } catch (err) {
    console.error("Error testing database connection:", err);
    res.status(500).send("Database connection failed");
  }
});

app.listen(config.app_port, () => {
  console.log(`App running on port ${config.app_port}`);
});
