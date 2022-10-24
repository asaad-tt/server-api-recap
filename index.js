const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const productsCollection = require("./data/product.json");

// create one api
app.get("/", (req, res) => {
  res.send(" you are running");
});

// create another api for all products
app.get("/allProducts", (req, res) => {
  res.send(productsCollection);
});

app.get("/product/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const getSingleItem = productsCollection?.find((p) => p.id == id);

  if (!getSingleItem) {
    res.send("not found ");
  }
  res.send(getSingleItem);
});

app.get("/category/:name", (req, res) => {
  const name = req.params.name;
  const getCategory = productsCollection?.filter((p) => p.category === name);
  res.send(getCategory);
});

// app k run koranor jonno
app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;
