// lib/app.ts

import express from 'express';
import {isEmpty} from "./util";
import utilFunctions from "./util/stringutils"

// Create a new express application instance
const app: express.Application = express();
const products = [{"name":"prod001"},{"name":"prod002"},{"name":"prod003"}]

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

/*app.get('/fetch/products', function (req, res) {
  res.send(JSON.stringify(products));
});*/

app.get('/fetch/products/:name', function (req, res) {
    console.log(req.headers.jwt);
    console.log(req.headers['jwt']);
    res.send(JSON.stringify(products.filter((prod) => prod.name === req.params.name)[0]));
});

app.get('/fetch/products/', function (req, res) {
  console.log(req.query);
    res.send(JSON.stringify(products.filter((prod) => prod.name === req.query.id)[0]));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(isEmpty("indira"));
  console.log(utilFunctions.index("arun","a"));
});