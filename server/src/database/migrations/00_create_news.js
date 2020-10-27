exports.up = function(knex) {
    return knex.schema.createTable("news", function(table) {
        table.string("title");
        table.string("description");

        table.timestamp("create_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};