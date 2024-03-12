import express from 'express';
import controller from '../controller/users.js';
import { authenticate } from '../middleware/middleware.js';

const router = express.Router()

router
    .route('/')
        .get(controller.getMany)
        .post(controller.postMany)

router
        .route('/:userID')
            .get(authenticate,controller.getSingle)
            .delete(controller.deleteSingle)
            .patch(controller.editSingle)
    
export default router