const db = require('../dbConfig.js');

module.exports = {
    getContextsbyAction
};

function getContextsbyAction(actionId) {
    return db.from('actions_contexts')
        .innerJoin('contexts', 'actions_contexts.context_id', 'contexts.id')
        .where('actions_contexts.action_id', '=', actionId)
}