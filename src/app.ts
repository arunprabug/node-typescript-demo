// lib/app.ts
import { isEmpty } from "./util";
import utilFunctions from "./util/stringutils";
import express = require("express");

// Create a new express application instance
const app: express.Application = express();

const products = [
  { name: "prod001" },
  { name: "prod002" },
  { name: "prod003" }
];

app.get("/", function(req, res) {
  console.log("test1");
  res.send("Hello World!");
});

app.get("/hello", function(req, res) {
  console.log("test");
  res.send("Hello World!");
});

app.get("/fetch/products", function(req, res) {
  res.send(JSON.stringify(products));
});

app.listen(8080, function() {
  console.log("Example app listening on port 3000!");
  console.log(isEmpty("indira"));
  console.log(utilFunctions.index("arun", "a"));
});
