
// lib/app.ts
import express from 'express';
import {isEmpty} from "./util";
import utilFunctions from "./util/stringutils"
import {getTodo} from "./util";
const request = require('request-promise')

// Create a new express application instance
const app: express.Application = express();

app.get('/todos/', (req, res) => {
  const todos:Promise<any> = getTodo();
  todos.then(function(data){
    res.send(data);
  })
})

app.get('/todos/:id', (req, res) => {
  request({
    uri: `https://jsonplaceholder.typicode.com/todos/${req.params.id}`,
    json: true
  })
    .then((data:any) => {
      res.send(JSON.stringify(data));
    })
    .catch((err:Error) => {
      console.log(err)
      res.send('error')
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(isEmpty("indira"));
  console.log(utilFunctions.index("arun","a"));
});





