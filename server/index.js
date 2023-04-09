const express = require("express");
const auth = require("./router/auth");
const db = require("./db");

const app = express();
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

app.use("/auth", auth);

app.listen(5000, () => console.log("Server started on port 5000"));
