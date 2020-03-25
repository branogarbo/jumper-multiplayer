const express = require('express');
const db = require('nedb');
const app = express();
const port = 3000;

app.listen(port, console.log(`Listening on port ${port}`));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

let playerPos = new db('playerPos.db');
playerPos.loadDatabase();

app.post('/pos', (req,res)=>{
  const pos = req.body;
  
  playerPos.remove({},{multi:true});
  playerPos.insert(pos);
  res.end();
});

app.get('/pos', (req,res)=>{
  playerPos.find({},(err,data)=>{
    res.json(data);
  });
});