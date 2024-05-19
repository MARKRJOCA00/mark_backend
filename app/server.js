const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
