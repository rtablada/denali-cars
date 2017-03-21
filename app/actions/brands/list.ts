import ApplicationAction from '../application';

export default class ListBrands extends ApplicationAction {

  async respond() {
    let Brand = this.modelFor('brand');
    return Brand.all();
  }

}
