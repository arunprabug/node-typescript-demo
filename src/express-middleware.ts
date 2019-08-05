// lib/app.ts

import express from "express";
import bodyParser from "body-parser";
import { isEmpty } from "./util";
import utilFunctions from "./util/stringutils";
import fs from "fs";

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const products = [
  { name: "prod001" },
  { name: "prod002" },
  { name: "prod003" }
];

app.use(function(req, res, next) {
  console.log("inside middleware");
  next();
});

app.use(function(req, res, next) {
  console.log("inside middleware 2");
  next();
});

app.use(function(req, res, next) {
  console.log("inside middleware 3");
  next();
});

app.use(function(req, res, next) {
  const now: string = new Date().toDateString();
  const log: string = `${now}: ${req.url} ${req.method}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("unable to append");
    }
  });
  next();
});

app.get("/hello", function(req, res) {
  console.log("inside hello");
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
  res.send(JSON.stringify(products));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
  console.log(isEmpty("indira"));
  console.log(utilFunctions.index("arun", "a"));
});
