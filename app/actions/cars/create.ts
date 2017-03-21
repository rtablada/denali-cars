import { Response } from 'denali';
import ApplicationAction from '../application';

export default class CreateCar extends ApplicationAction {

  async respond(params: any) {
    let Car = this.modelFor('car');
    let car = await Car.create(params.data.attributes);
    return new Response(201, car);
  }

}
