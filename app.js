console.log("App is running");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", () => {
    res.send("welcome to twitter");
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
