const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Yogi 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 30000");
});