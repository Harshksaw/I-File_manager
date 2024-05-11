


const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const cors = require('cors');

// const apiRouter = require('./routes');
const connectToDB = require('./config/db.config');
const apiRouter = require('./routes');


const app = express();




app.use(cors());


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.json({message: ' Service is alive'});
});













app.listen(PORT, async() => {
  console.log(`Server started at ${PORT}`)
  await connectToDB();
  console.log("Successfully connected to db");
})















