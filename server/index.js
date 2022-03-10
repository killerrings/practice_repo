const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo = require("./db/conn");

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
