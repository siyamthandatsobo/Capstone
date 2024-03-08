import {addOrder,getOrder,deleteOrder,editOrderQuantity,getOrdersByUserID} from '../model/database.js'
import jwt from 'jsonwebtoken';

export default{
    postOrder: async (req, res) => {
        try {
          const { quantity, prodID } = req.body;
    
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
    
            // Send the request to add the product to the cart
            const post = await addOrder(quantity, userID, prodID);
    
            // Respond with the updated order
            res.send(await getOrder());
          });
        } catch (error) {
          console.error('Error processing order:', error);
          res.sendStatus(500);
        }
      },
   
    getOrder:async(req,res)=>{
    res.send(await getOrder(+req.params.orderID))
},
getOrdersByUser: async (req, res) => {
    const userID = req.user.userID; // Get userID from the authenticated user
    const orders = await getOrdersByUserID(userID);
    res.json(orders);
},
deleteOrder: async (req, res) => {
    const orderID = req.params.orderID;
    res.send(await deleteOrder(orderID));
    console.log('Deleting order with ID:', orderID);
  },
    editOrder:async(req,res)=>{
        console.log(+req.params.orderID);
        const [order] = await getOrder(+req.params.orderID)
        let {quantity}=req.body
        quantity ? quantity=quantity: {quantity}=order
        console.log(order) //in one line
        const edit=await editOrderQuantity(quantity,+req.params.orderID)
        res.json(await getOrder())
    }
    

}