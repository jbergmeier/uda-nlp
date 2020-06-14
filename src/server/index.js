const express = require('express');
const cors = require('cors');
const AYLIENTextAPI = require('aylien_textapi');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.static('dist'));
app.use(cors());

//NPL

var textapi = new AYLIENTextAPI({
  application_id: process.env.NPL_APP_ID,
  application_key: process.env.NPL_API_KEY,
});

// ROUTES
app.post('/test', async (req, res) => {
  const input = req.body.textContent;
  try {
    textapi.language(
      {
        text: input,
      },
      function (error, response) {
        if (error === null) {
          console.log(response);
          res.json({ result: response }).status(200);
        }
      }
    );
  } catch (e) {
    res.json({ result: e }).status(404);
  }
});

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.listen(port, async () => {
  console.log(`Listening at Port: ${port}`);
});
