import express from 'express';
import controller from '../controller/orders.js';
import { authenticate } from '../middleware/middleware.js';
const router = express.Router();


router
    .route('/')
    .get(authenticate,controller.getOrder)
    // .get(authenticate, controller.getOrder)
    .post(controller.postOrder)
    
    router
    .route('/:prodID')
    .delete(controller.deleteOrder)
    .patch(controller.editOrder)
    
    router
    .route('/user')
    .get(authenticate, controller.getOrdersByUser)
        
        export default router