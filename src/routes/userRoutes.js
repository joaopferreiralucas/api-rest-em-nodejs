import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao existiriam em um sistema real
router.get('/', userController.index);
router.get('/:id', userController.show);

// existiriam
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);

// delete em um sistema real seria algo mascarado pra nao apagar o dado do BD de verdade
router.delete('/:id', loginRequired, userController.delete);

export default router;
