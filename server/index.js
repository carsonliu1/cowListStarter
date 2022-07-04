const express = require('express');
const { getAll, submit, removal, update } = require('../models/cowModel.js')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())

app.get('/api/cows', (req, res) => {
  getAll((err, data) => {
    if(err) {
      res.status(400).send('broken')
    } else [
      res.status(200).json(data)
    ]
  })
})

app.post('/api/cows', (req, res) => {
  submit(req.body, (err, data) => {
    if(err) {
      res.status(400).send('unable to save')
    } else {
      getAll((err, data2) => {
        if(err) {
          res.status(400).send('unable to retrieve')
        } else {
          res.status(200).json(data2)
        }
      })
    }
  })
})

app.put('/api/cows/:id', (req, res) => {
  update(req.params.id, req.body, (err, data) => {
    if(err) {
      res.status(400).send('ID not found')
    } else {
      getAll((err, data2) => {
        if(err) {
          res.status(400).send('unable to retrieve')
        } else {
          res.status(200).json(data2)
        }
      })
    }
  })
})

app.delete('/api/cows/:id', (req, res) => {
  removal(req.params.id, (err, data) => {
    if(err) {
      res.status(400).send('Unable to delete')
    } else {
      getAll((err, data2) => {
        if(err) {
          res.status(400).send('unable to retrieve')
        } else {
          res.status(200).json(data2)
        }
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })

});
