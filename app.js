const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

//DB CONNECTION

const conn = require("./src/database/connection");
conn();

app.listen(3010, () => {
  console.log("Server started on port 3010");
});
app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});
