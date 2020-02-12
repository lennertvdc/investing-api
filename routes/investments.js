const router = require('express').Router();

let investments = [];

router.post('/', (req, res) => {
    investments.push(req.body);
    res.status(200).send(req.body);
    console.log(investments);
});

router.get('/', (req, res) => {
    res.send(investments);
});

module.exports = router;