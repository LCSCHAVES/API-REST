import { Router } from 'express';

import SessionController from './controlers/SessionController';
import HouseController from './controlers/HouseController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/houses', HouseController.store);

export default routes;