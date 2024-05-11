

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/index'); // Import the index.js file from the routes folder
const connectToDB = require('./config/database')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use('/api', apiRouter); // Access the default export of the namespace object

app.get('/ping', (req, res) => {
  return res.json({ message: ' Service is alive' });
});

app.listen(3000, async() => {
  console.log(`Server started at http://localhost:3000`);
  await connectToDB();
  console.log("Successfully connected to db");
});