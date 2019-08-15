import { ManipulationWithDOM } from "../modules/controllers/manipulations-with-dom";
import { fromEvent } from "rxjs";
import { ConcealCanvas } from "../modules/start/ux/scripts/hide-function";
import { take } from "rxjs/operators";

const express = require('express');
const fs = require('fs');
const DOMParser = require('dom-parser');
const parser = new DOMParser();
const app = express();
const host = '127.0.0.1';
const port = 5000;

app.use(express.static('dist'));

app.get('/home', function (req: any, res: any, next: any) {
  fs.readFile('./dist/index.html', function (err: any, info: any) {
    if(!err) {
  //    let dom =parser.parseFromString(info);
      console.log("yes");
    }
    else {
      console.log("no");
    }
  })
  console.log("i am here1");
})
app.use((req: any, res: any, next: any) => {
  res.status(404).type('text/plain')
  res.send('Not found')
})

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`)
})