import {addOrder,getOrder,deleteOrder,editOrderQuantity,getOrdersByUserID, getALLOrders} from '../model/database.js'
import jwt from 'jsonwebtoken';

export default{
    postOrder: async (req, res) => {
        try {
          const { quantity, prodID } = req.body;
    
          // Log the received values
          console.log('Received quantity:', quantity);
          console.log('Received prodID:', prodID);
    
          // Retrieve the token from the cookie
          const token = req.cookies.jwt; // Assuming 'jwt' is the name of your cookie
    
          if (!token) {
            console.error('Token not found');
            return res.sendStatus(403);
          }
    
          console.log('Token from cookie:', token);
    
          jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
            if (err) {
              console.error('JWT Verification Error:', err);
              console.error('Token content:', token);
              return res.sendStatus(403);
            }
    
            if (!decodedToken || !decodedToken.userID) {
              console.error('Error decoding token or missing userID');
              console.error('Token content:', token);
              return res.sendStatus(403);
            }
    
            // Use the extracted userID as needed
            const userID = decodedToken.userID;
    
            // Log the userID
            console.log('Decoded userID:', userID);
    
            // Send the request to add the product to the cart
            const post = await addOrder(quantity, userID, prodID);
    
            // Log the response
            console.log('Response from addOrder:', post);
    
            // Respond with the updated order
            res.send(await getOrdersByUserID(userID));
                    });
        } catch (error) {
          console.error('Error processing order:', error);
          res.sendStatus(500);
        }
      },
   
      getOrder: async (req, res) => {
        try {
            const orderID = +req.params.orderID;
            const order = await getOrder(orderID);
    
            // Check if the order exists
            if (!order) {
                return res.status(404).json({ message: `Order with ID ${orderID} not found` });
            }
    
            // Respond with the order details
            res.json(order);
        } catch (error) {
            console.error('Error fetching order:', error);
            res.sendStatus(500);
        }
    },
    getOrdersByUser: async (req, res) => {
      try {
          const userID = req.user.userID; // Get userID from the authenticated user
          const orders = await getOrdersByUserID(userID);
  
          // Check if there are any orders for the user
          if (!orders || orders.length === 0) {
              return res.status(404).json({ message: `No orders found for user ID ${userID}` });
          }
  
          // Respond with the user's orders
          res.json(orders);
      } catch (error) {
          console.error('Error fetching user orders:', error);
          res.sendStatus(500);
      }
  },
getAll:async(req,res)=>{
  res.send(await getALLOrders())
},
deleteOrder: async (req, res) => {
  try {
      const orderID = req.params.orderID;
      const deletedOrder = await deleteOrder(orderID);

      // Check if the order was successfully deleted
      if (!deletedOrder) {
          return res.status(404).json({ message: `Order with ID ${orderID} not found` });
      }

      // Respond with a success message
      res.json({ message: `Order with ID ${orderID} has been deleted successfully` });
  } catch (error) {
      console.error('Error deleting order:', error);
      res.sendStatus(500);
  }
},
  editOrder: async (req, res) => {
    try {
        const orderID = +req.params.orderID;
        const { quantity } = req.body;

        // Retrieve the current order details
        const [order] = await getOrder(orderID);

        // If quantity is provided, update the quantity; otherwise, keep the existing quantity
        const updatedQuantity = quantity ? quantity : order.quantity;

        // Update the order quantity
        const edit = await editOrderQuantity(updatedQuantity, orderID);

        // Respond with the updated order
        res.json(await getOrder(orderID));
    } catch (error) {
        console.error('Error editing order:', error);
        res.sendStatus(500);
    }
}
    

}