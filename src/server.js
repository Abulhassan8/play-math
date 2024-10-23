const express = require('express');
const fs = require('fs');

const DATA_DIR = 'aedb_data';

const app = express();
app.use(express.json());

const hashTable = {};
app.listen(3000, () => console.log('Listening on port 3000'));

app.post('memory/:key', (req, res) => {
  try{
    hashTable[req.params.key] = req.body.data;
  } catch(e){
    res.send(`Error occured ${e}`);
  }

  res.send();
});

app.get('memory/:key', (req, res) => {
  const key = req.params.key;

  if (key in hashTable){
    res.send(hashTable[key]);
    return;
  }

  res.send('null');
});

app.post('disk/:key', (req, res) => {
  const destinationFile = `${DATA_DIR}/${req.params.key}`;
  fs.writeFileSync(destinationFile, req.body.data);
  res.send();
});

app.get('disk/:key', (req, res) => {
  const destinationFile = `${DATA_DIR}/${req.params.key}`;
  try{
    const data = fs.readFileSync(destinationFile);
    res.send(data);
  } catch(e){
    res.send(`Error - ${e}`);
  }
})


