const express = require('express');
const bodyParser = require('body-parser');
const { env } = require('process');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'))


app.listen(env.process.PORT || 3000, function () {
  console.log('listening on 3000');
});

app.get('/quotes', (req, res) => {

});

app.put('/quotes', (req, res) => {

})

app.post('/quotes', (req, res) => {

});

app.delete('/quotes', (req, res) => {

})