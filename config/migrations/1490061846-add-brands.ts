import * as knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('brands', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('collection');
    table.string('company_name');
    table.string('country');
    table.timestamps();
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('brands');
}
