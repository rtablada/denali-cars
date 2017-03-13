import * as knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('posts', (post) => {
    post.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    post.text('title');
    post.text('body');
    post.timestamps();
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('posts');
}
