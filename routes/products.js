import express from 'express';
import controller from '../controller/products.js';
const router = express.Router()

router
    .route('/')
        .get(controller.getMany)
        .post(controller.postMany)

router
        .route('/:prodID')
            .get(controller.getSingle)
            .delete(controller.deleteSingle)
            .patch(controller.editSingle)
    
export default router