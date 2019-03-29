exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions_contexts', function(tbl) {
        tbl.increments()
        
        tbl.integer('context_id').unsigned().references('id').inTable('contexts')
        .notNullable()

        tbl.integer('action_id').unsigned().references('id').inTable('actions')
        .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions_contexts')
};
