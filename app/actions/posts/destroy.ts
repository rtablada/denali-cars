import { Response } from 'denali';
import ApplicationAction from '../application';

export default class DestroyPost extends ApplicationAction {

  async respond(params: any) {
    let Post = this.modelFor('post');
    let post = await Post.findOne(params.id);
    await post.delete();
    return new Response(204);
  }

}
