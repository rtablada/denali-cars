import ApplicationAction from '../application';

export default class ShowBrand extends ApplicationAction {

  async respond(params: any) {
    let Brand = this.modelFor('brand');
    return Brand.findOne(params.id);
  }

}
