import { Router } from 'express';
import { SingUpController } from '../controllers/SingUpController';

const routes = Router();

routes.get('/singn-up', SingUpController.singUp);

export { routes };





