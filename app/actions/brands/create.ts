import { Response } from 'denali';
import ApplicationAction from '../application';

export default class CreateBrand extends ApplicationAction {

  async respond(params: any) {
    let Brand = this.modelFor('brand');
    let brand = await Brand.create(params.data.attributes);
    return new Response(201, brand);
  }

}
