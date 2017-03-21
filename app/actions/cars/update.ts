import ApplicationAction from '../application';

export default class UpdateCar extends ApplicationAction {

  async respond(params: any) {
    let Car = this.modelFor('car');
    let car = await Car.findOne(params.id);
    Object.assign(car, params.data.attributes);
    return car.save();
  }

}
