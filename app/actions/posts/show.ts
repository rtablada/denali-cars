import ApplicationAction from '../application';

export default class ShowPost extends ApplicationAction {

  async respond(params: any) {
    let Post = this.modelFor('post');
    return Post.findOne(params.id);
  }

}
