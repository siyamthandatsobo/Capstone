import express from 'express';
import controller from '../controller/orders.js';
import { authenticate } from '../middleware/middleware.js';
const router = express.Router();


router
    .route('/')
    .get(controller.getOrder)
    // .get(authenticate, controller.getOrder)
    .post(authenticate, controller.postOrder)
    router
    .route('/all')
    .get(controller.getAll)

    router
    .route('/:prodID')
    .delete(controller.deleteOrder)
    .patch(controller.editOrder)
    
    router
    .route('/user')
    .get(authenticate, controller.getOrdersByUser)

    router
    .route('/user/delete')
    .delete(authenticate, controller.deleteOrderByUser)
        
        export default router