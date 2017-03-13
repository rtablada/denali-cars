import ApplicationAction from '../application';

export default class ListPosts extends ApplicationAction {

  async respond() {
    let Post = this.modelFor('post');
    return Post.all();
  }

}
