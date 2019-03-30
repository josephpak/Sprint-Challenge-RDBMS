const express = require('express');

const Actions = require('../data/helpers/actionsDb.js')

const Contexts = require('../data/helpers/contextsDb')

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

router.get('/:id', async (req,res) => {
    try {
        const action = await Actions.getActionbyId(req.params.id)
        const contexts = await Contexts.getContextsbyAction(req.params.id)
        const modified = {...action, contexts}
        res.status(200).json(modified)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const count = await Actions.deleteAction(req.params.id)
        if (count > 0) {
            res.status(200).json({
                message: 'Action has been deleted'
            })
        } else {
            res.status(400).json({
                message: 'Action could not be found'
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req,res) => {
    try {
        const check = await Actions.updateAction(req.params.id, req.body)
        if (check === 1) {
            res.status(200).json({
                message: 'Updated successfully!'
            })
        } else {
            res.status(404).json({
                message: 'Action could not be found'
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;