import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /posts > creates a post', async (t) => {
  let result = await t.context.app.post('/posts', {
      // Add the post payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /posts > should list posts', async (t) => {
  let result = await t.context.app.get('/posts');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /posts/:id > should show a post', async (t) => {
  let { body } = await t.context.app.post('/posts', {
      // Add the post payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/posts/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /posts/:id > should update a post', async (t) => {
  let { body } = await t.context.app.post('/posts', {
      // Add the post payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/posts/${ id }`, {
      // Add the post payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /posts/:id > should delete a post', async (t) => {
  let { body } = await t.context.app.post('/posts', {
      // Add the post payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/posts/${ id }`);

  t.is(result.status, 204);
});
