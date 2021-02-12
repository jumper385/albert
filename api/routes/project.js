const express = require('express');
const cors = require('cors');
const db = require('../helpers/db')
const schemas = require('../db/schemas')

const router = express.Router();

router.use((req, res, next) => {
    console.log(`Project Request @ ${Date.now()}`)
    next()
})

router.get('/', async (req, res) => {

    let projectList = await db.queryCollection(schemas.Project)

    res.json({
        message: "GET Project API",
        project_count: projectList.length,
        projects: projectList,
    })

})

router.get('/projectid/:projectid', async (req,res) => {
    let { projectid } = req.params; 
    let project = await db.queryCollection(schemas.Project, {id:projectid});
    res.json(project[0])
})

router.post('/', async (req, res) => {
    let { bom, project } = req.body;
    let newProject = await db.postCollection(schemas.Project, project);
    let newProject2Component = await db.postCollection(schemas.ProjectToComponent, bom.map(e => ({
        project: project.name,
        component: e.component,
        quantity: e.quantity
    })));
    
})

module.exports = router