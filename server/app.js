const express = require("express");
const { static } = express;
const path = require("path");
const app = express();
const {
  models: { User, Quote },
} = require("./db/db");

app.use("/dist", static(path.join(__dirname, "../dist")));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/api/users", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/quotes", async (req, res, next) => {
  try {
    res.send(await Quote.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = app;
