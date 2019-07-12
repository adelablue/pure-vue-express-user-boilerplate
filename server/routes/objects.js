const express = require('express');
const Object = require('../models/object').Object;

const router = express.Router();

router.get('/', (req, res) => {
    Object.find({}).then(c => res.send(c));
});

router.post('/', (req, res) => {
    Object.create({
        name:req.body.name,
    }, (err, c) => {
        if (err) return res.status(400).send(err);

        res.send(c);
    })
});

router.put('/:objectId', (req, res) => {
    let objectId = req.param.objectId;

    Object.update({_id: objectId},{
        name:req.body.name
    }, (err, num) => {
        if (err) return res.status(404).send(err);

        res.send({affected: num});
    })
});

router.delete('/:objectId', (req, res) => {
    let objectId = req.params.objectId;

    Object.deleteOne({_id: objectId}, (err) => {
        if (err) return res.status(404).send(err);

        res.send({success: true});
    });
});


module.exports = router;