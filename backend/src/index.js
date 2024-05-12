

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/index');
const connectToDB = require('./config/database')


const cookieParser = require("cookie-parser");
const app = express();


//multer
const multer = require("multer");

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(cookieParser());

app.use('/api', apiRouter); // Access the default export of the namespace object

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: 'Your server is up and running....'
	});
});



app.listen(3000, async () => {
	console.log(`Server started at http://localhost:3000`);
	await connectToDB();
	console.log("Successfully connected to db");
});