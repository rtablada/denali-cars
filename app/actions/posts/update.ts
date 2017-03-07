import ApplicationAction from '../application';

export default class UpdatePost extends ApplicationAction {

  async respond(params: any) {
    let Post = this.modelFor('post');
    let post = await Post.findOne(params.id);
    Object.assign(post, params);
    return post.save();
  }

}
