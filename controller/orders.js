import {addOrder,getOrder,deleteOrder,editOrderQuantity,getOrdersByUserID} from '../model/database.js'

export default{
    
    postOrder: async (req, res) => {
    const { quantity, prodID } = req.body;
    const userID = req.user.userID; // Get userID from the authenticated user
    const post = await addOrder(quantity, userID, prodID);
    res.send(await getOrder());
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