exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments()

        tbl.string('description')
        .notNullable()

        tbl.string('notes')

        tbl.boolean('completed')
        .defaultTo(false)

        tbl.integer('project_id').unsigned().references('id').inTable('projects')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
