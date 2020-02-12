const router = require('express').Router();
const connection = require('../db/connection');
let investments = [];

router.post('/', (req, res) => {
    if(req.body == null) {
        res.status(400).send({message: "Body required"});
    } else if(req.body.updateDate == null) {
        res.status(400).send({message: "UpdateDate required"});
    } else if(req.body.name == null) {
        res.status(400).send({message: "Name required"});
    } else if(req.body.price == null) {
        res.status(400).send({message: "Price required"});
    } else {
        connection.query('insert into investments set ?', req.body, function(error, result, fields) {
            if(error) {
                res.status(500).send({message: "error occured"});
            } else {
                res.status(201).send({message: "investment added"});
            }
        });
    }
});

router.get('/', (req, res) => {
    res.send(investments);
});

module.exports = router;