const express = require('express');
const schemas = require('../db/schemas');
const db = require('../helpers/db');

const router = express.Router();

router.get('/', async (req,res) => {

    res.json(
        await db.queryCollection(schemas.Component)
    )

})

router.post('/', async (req,res) => {
    let { component } = req.body;
    console.log(new schemas.Component(component));
    res.json(req.body);
})

module.exports = router