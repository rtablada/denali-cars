import { Router } from 'denali';

export default function drawRoutes(router: Router) {

  router.get('/', 'index');
  router.resource('post', { related: false });

  router.resource('brands');

}
