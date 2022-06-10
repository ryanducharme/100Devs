const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT || 3000, function () {
  console.log('listening on 3000');
});

app.get('/', (req, res) => {
  res.redirect('index.html');
});

app.get('/api/apple', (req, res) => {
  res.send(JSON.parse(
    '{"name": "Apple", "calories": 95, "serving_size_g": 182, "source": "Apple Tree"}'))
});

app.get('/api/watermelon', (req, res) => {
  res.send(JSON.parse(
    '{"name": "Watermelon", "calories": 85, "serving_size_g": 280, "source": "Flowering Plant"}'))
});

app.get('/api/orange', (req, res) => {
  res.send(JSON.parse(
    '{"name": "Orange", "calories": 45, "serving_size_g": 96, "source": "Orange Tree"}'))
});

app.get('/api/strawberry', (req, res) => {
  res.send(JSON.parse(
    '{"name": "Strawberry", "calories": 33, "serving_size_g": 100, "source": "Flowering Plant"}'))
});

app.get('/api/mango', (req, res) => {
  res.send(JSON.parse(
    '{"name": "Mango", "calories": 201, "serving_size_g": 336, "source": "Mango Tree"}'))
});