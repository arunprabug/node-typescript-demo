// lib/app.ts

import express from "express";
import bodyParser from "body-parser";
import { isEmpty } from "./util";
import utilFunctions from "./util/stringutils";

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const products = [
  { name: "prod001" },
  { name: "prod002" },
  { name: "prod003" }
];

app.get("/hello", function(req, res) {
  res.send("Hello World!");
});

app.get("/fetch/products", function(req, res) {
  res.send(JSON.stringify(products));
});

app.get("/fetch/products/:id", function(req, res) {
  res.send(
    JSON.stringify(products.filter(prod => prod.name === req.params.id)[0])
  );
});

app.get("/fetch/products/", function(req, res) {
  res.send(
    JSON.stringify(products.filter(prod => prod.name === req.query.id)[0])
  );
});

app.post("/create/products/", function(req, res) {
  console.log(req.body);
  products.push(req.body);
  res.send(JSON.stringify(products));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
  console.log(isEmpty("indira"));
  console.log(utilFunctions.index("arun", "a"));
});
