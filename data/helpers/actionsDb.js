const db = require('../dbConfig.js');

module.exports = {
    getActions,
    addAction,
    getActionsbyProject
};

function getActions() {
    return db('actions')
}

function getAction(id) {
    return db('actions')
        .where({ id })
        .first()
}

function addAction(action) {
    return db('actions')
        .insert(action)
        .then(ids => {
            return getAction(ids[0])
        });
}

function getActionsbyProject(projectId) {
    return db('actions')
        .where({project_id: projectId})
}