import { attr } from 'denali';
import ApplicationModel from './application';

export default class Post extends ApplicationModel {

  static title = attr('text');
  static body = attr('text');
  static createdAt = attr('date');
  static updatedAt = attr('date');

}
