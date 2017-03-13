import ApplicationSerializer from './application';

export default class PostSerializer extends ApplicationSerializer {

  attributes = [
    'title',
    'body'
  ];

  relationships = {};

}
