import ApplicationAction from '../application';

export default class ShowCar extends ApplicationAction {

  async respond(params: any) {
    let Car = this.modelFor('car');
    return Car.findOne(params.id);
  }

}
