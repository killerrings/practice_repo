const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.get("/", (req, res) => {
  res.send("Hi from server");
});

const Port = 3500;
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
