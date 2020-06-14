const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.static('dist'));

app.get('/test', (req, res) => {
  res.json({
    title: 'test json response',
    message: 'this is a message',
    time: 'now',
  });
});

app.get('/', (req, res) => {
  respo.sendFile('dist/index.html');
});

app.listen(port, async () => {
  console.log(`Listening at Port: ${port}`);
});
