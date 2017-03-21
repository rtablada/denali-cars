import * as assert from 'assert';
import { hasMany } from 'denali';
import ApplicationSerializer from './application';

export default class BrandSerializer extends ApplicationSerializer {

  attributes = [
    'collection',
    'companyName',
    'country',
  ];

  relationships = {
    cars: {
      strategy: 'embed',
    }
  }

}
