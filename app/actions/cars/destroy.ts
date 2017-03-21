import { Response } from 'denali';
import ApplicationAction from '../application';

export default class DestroyCar extends ApplicationAction {

  async respond(params: any) {
    let Car = this.modelFor('car');
    let car = await Car.findOne(params.id);
    await car.delete();
    return new Response(204);
  }

}
