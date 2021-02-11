const mongoose = require('mongoose');
const shortid = require('shortid')

const Project = mongoose.model('project', mongoose.Schema({
    id: { required: true, type: String, default: shortid.generate() },
    name: { type: String, required: true},
    description: { type: String },
    author: { type: String },
}))

const ProjectToComponent = mongoose.model('projectToComponent', mongoose.Schema({
    project: { required: true, type: String },
    component: { required: true, type: String },
    quantity: { required: true, type: Number},
}))

const Component = mongoose.model('component', mongoose.Schema({
    id: { type: String, required: true}, 
    type: { required: true, type: String, default:'misc'}, 
    name: { required: true, type: String, default:'Description Unavailable'}, 
    value: { type: String}, 
    unit: { type: String}, 
    package: { type: String}, 
    count: { type: Number, required: true, default: 0},
    datasheet: { type: String },
}))

module.exports = {
    Project,
    ProjectToComponent,
    Component,
}