import { attr, hasOne } from 'denali';
import ApplicationModel from './application';

export default class Car extends ApplicationModel {

  // static collection = attr('text');
  // static name = attr('text');
  static year = attr('text');
  static hp = attr('text');
  static price = attr('text');

  // static brand = hasOne('brand');

  static createdAt = attr('date');
  static updatedAt = attr('date');

}
