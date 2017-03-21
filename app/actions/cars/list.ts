import ApplicationAction from '../application';

export default class ListCars extends ApplicationAction {

  async respond() {
    let Car = this.modelFor('car');
    return Car.all();
  }

}
