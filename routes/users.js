import express from 'express';
import controller from '../controller/users.js';
const router = express.Router()

router
    .route('/')
        .get(controller.getMany)
        .post(controller.postMany)

router
        .route('/:userID')
            .get(controller.getSingle)
            .delete(controller.deleteSingle)
            .patch(controller.editSingle)
    
export default router