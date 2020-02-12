const routes = require('express').Router();

let investments = [];

routes.post('/', (req, res) => {
    investments.push(req.body);
    res.status(200).send(req.body);
    console.log(investments);
});

routes.get('/', (req, res) => {
    res.send(investments);
});

module.exports = routes;