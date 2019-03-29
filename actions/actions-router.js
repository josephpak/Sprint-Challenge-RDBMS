const express = require('express');

const Actions = require('../data/helpers/actionsDb.js')

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const actions = await Actions.getActions()
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req,res) => {
    try {
        const action = await Actions.addAction(req.body)
        res.status(201).json(action)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;