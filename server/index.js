const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');
require('dotenv').config();

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle production
// if(process.env.NODE_ENV === 'production') {
// 	// Static folder
// 	app.use(express.static(__dirname + '/public/'));

// 	// Handle single page application
// 	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.PORT}`);
});