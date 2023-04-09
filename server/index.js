const express = require("express");
const auth = require("./router/auth");
const mapData = require("./router/mapData");
const mongoConnect = require("./db");
const cors=require('cors')

mongoConnect();
const app = express();
app.use(cors());

app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

app.use("/auth", auth);
app.use("/mapData", mapData);

app.listen(5000, () => console.log("Server started on port 5000"));
