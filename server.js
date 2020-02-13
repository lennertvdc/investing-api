require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./database');

// Using bodyParser for parsing incoming JSON requests to effective JSON
server.use(bodyParser.json());

// Connect all routes
server.use('/api', routes);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is up and listening on port ${port}`));