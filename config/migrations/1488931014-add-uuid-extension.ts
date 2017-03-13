import * as knex from 'knex';

export async function up(knex: knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
}

export async function down(knex: knex) {
  return knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
}
