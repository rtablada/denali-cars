import ApplicationAction from '../application';

export default class UpdateBrand extends ApplicationAction {

  async respond(params: any) {
    let Brand = this.modelFor('brand');
    let brand = await Brand.findOne(params.id);
    Object.assign(brand, params.data.attributes);
    return brand.save();
  }

}
