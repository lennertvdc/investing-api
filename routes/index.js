const routes = require('express').Router();
const investments = require('./investments');

routes.use('/investments', investments);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });

module.exports = routes;