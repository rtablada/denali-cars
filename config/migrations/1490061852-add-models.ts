import * as knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('cars', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('brand_id')
      .references('id')
      .inTable('brands')
      .onDelete('CASCADE');

    table.string('collection');
    table.string('modelName');
    table.string('year');
    table.string('hp');
    table.string('price');
    table.timestamps();
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('cars');
}
