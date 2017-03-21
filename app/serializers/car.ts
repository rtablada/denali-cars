import { hasMany } from 'denali';
import ApplicationSerializer from './application';

export default class CarSerializer extends ApplicationSerializer {

  attributes = [
    // 'collection',
    'modelName',
    // 'country',
  ];

  relationships = {
  }

}
