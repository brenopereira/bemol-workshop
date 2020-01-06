const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//  Configurando o banco de dados
mongoose.connect("mongodb://localhost:27017/bemol-aula", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

const Product = mongoose.model("Client");

app.use("/", require("./src/routes"));

app.listen(3000, function() {
  console.log(`Projeto rodando na porta 3000`);
});
