import { Response } from 'denali';
import ApplicationAction from '../application';

export default class DestroyBrand extends ApplicationAction {

  async respond(params: any) {
    let Brand = this.modelFor('brand');
    let brand = await Brand.findOne(params.id);
    await brand.delete();
    return new Response(204);
  }

}
