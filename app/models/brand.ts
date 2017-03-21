import { attr, hasMany } from 'denali';
import ApplicationModel from './application';

export default class Brand extends ApplicationModel {

  static collection = attr('text');
  static companyName = attr('text');
  static country = attr('text');

  static cars = hasMany('car');
  cars = hasMany('car');

  static createdAt = attr('date');
  static updatedAt = attr('date');

}
