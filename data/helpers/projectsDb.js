const db = require('../dbConfig.js');

module.exports = {
    getProjects,
    getProjectbyId,
    addProject,
    deleteProject,
    updateProject
};

function getProjects() {
    return db('projects')
}

function getProjectbyId(id) {
    return db('projects')
        .where({ id })
        .first();
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return getProject(ids[0])
        });
}

function deleteProject(id) {
    return db('projects')
        .where({ id })
        .del()
}

function updateProject(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes)
} 