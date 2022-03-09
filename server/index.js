// const Koa = require("koa");
// const cors = require("@koa/cors");
const express = require("express");
const bodyparser = require("koa-bodyparser");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi from server");
});

// const { router } = require("./routes/index.js");
// app.use(kors()).use(bodyparser()).use(router.routes());

const Port = 3500;
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
