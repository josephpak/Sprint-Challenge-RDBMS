const db = require('../dbConfig.js');

module.exports = {
    getActions,
    getActionbyId,
    addAction,
    deleteAction,
    updateAction,
    getActionsbyProject
};

function getActions() {
    return db('actions')
}

function getActionbyId(id) {
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

function deleteAction(id) {
    return db('actions')
        .where({ id })
        .del()
}

function updateAction(id, changes) {
    return db('actions')
        .where({ id })
        .update(changes)
} 

function getActionsbyProject(projectId) {
    return db('actions')
        .where({project_id: projectId})
}