// describe the changes to the database schema
exports.up = function (knex) {
    return knex.schema.createTable('veggies', tbl => {
        tbl.increments()
        tbl.string('name', 255).notNullable().unique()
        tbl.string('color', 255)
    })
};

// describe how to undo the changes to the schema
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('veggies')
};
