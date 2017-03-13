import { Response } from 'denali';
import ApplicationAction from '../application';

export default class CreatePost extends ApplicationAction {

  async respond(params: any) {
    let Post = this.modelFor('post');
    let post = await Post.create(params.data.attributes);
    return new Response(201, post);
  }

}
