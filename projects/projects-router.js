const express = require('express');

const Projects = require('../data/helpers/projectsDb.js')

const Actions = require('../data/helpers/actionsDb.js')

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const projects = await Projects.getProjects()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req,res) => {
    try {
        const project = await Projects.getProjectbyId(req.params.id)
        const actionsArray = await Actions.getActionsbyProject(req.params.id)
        const modified = {...project, actions: actionsArray}
        res.status(200).json(modified)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req,res) => {
    try {
        const project = await Projects.addProject(req.body)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json(error)
    }   
})

router.delete('/:id', async (req,res) => {
    try {
        const count = await Projects.deleteProject(req.params.id)
        if (count > 0) {
            res.status(200).json({
                message: 'Project has been deleted'
            })
        } else {
            res.status(400).json({
                message: 'Project could not be found'
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req,res) => {
    try {
        const check = await Projects.updateProject(req.params.id, req.body)
        if (check === 1) {
            res.status(200).json({
                message: 'Updated successfully!'
            })
        } else {
            res.status(404).json({
                message: 'Project could not be found'
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;