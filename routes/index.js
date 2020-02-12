const router = require('express').Router();
const investments = require('./investments.js');

router.use('/investments', investments);

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });

module.exports = router;