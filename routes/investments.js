const router = require('express').Router();
const db = require('../database');
const Investment = require('../models/Investment');

// router.post('/', (req, res) => {
//     if(req.body == null) {
//         res.status(400).send({message: "Body required"});
//     } else if(req.body.updateDate == null) {
//         res.status(400).send({message: "UpdateDate required"});
//     } else if(req.body.name == null) {
//         res.status(400).send({message: "Name required"});
//     } else if(req.body.price == null) {
//         res.status(400).send({message: "Price required"});
//     } else {
//         connection.query('insert into investments set ?', req.body, function(error, result, fields) {
//             if(error) {
//                 res.status(500).send({message: "error occured"});
//             } else {
//                 res.status(201).send({message: "investment added"});
//             }
//         });
//     }
// });

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

module.exports = router;