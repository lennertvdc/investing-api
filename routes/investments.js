const router = require('express').Router();
const db = require('../database');
const Investment = require('../models/Investment');

router.post('/', (req, res) => {
    let errors = [];
    if (req.body.updateDate == null) {
        errors.push({ errorMessage: 'UpdateDate required' });
    }
    if (req.body.name == null) {
        errors.push({ errorMessage: 'Name required' });
    }
    if (req.body.price == null) {
        errors.push({ errorMessage: 'Price required' });
    }

    if (errors.length > 0) {
        res.status(400).send(errors);
    } else {
        Investment.create(req.body)
            .then(() => {
                console.log('investment created');
                res.sendStatus(201);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    }
});

router.get('/', (req, res) => {
    Investment.findAll()
        .then(investments => {
            res.status(200).send(investments);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/latest', (req, res) => {
    Investment.findOne({
        limit: 1,
        order: [['updateDate', 'DESC']]
    })
    .then(investment => {
        res.status(200).send(investment);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;