const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

// Using bodyParser for parsing incoming JSON requests to effective JSON
server.use(bodyParser.json());

// Connect all routes
server.use('/', routes);

// Using dotenv file for server port
require('dotenv').config();

// server.get('/', (req, res) => res.send('Hello world!'));


// let data = [];
// server.post('/investment', (req, res) => {
//     data.push(req.body);
//     res.send(req.body);
//     console.log(data);
// ;});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is up and listening on port ${port}`));