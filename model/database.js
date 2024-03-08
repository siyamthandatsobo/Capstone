import mysql from 'mysql2'

import { config } from 'dotenv'
config()
//whenever you use process.env you need config
//creates a connection to your database and make a new connection everytime
//stores the connection you used  and also create it but when u send a get req it will rememeber that connection
const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    //password you installed when u installed mysql
    password:process.env.PASSWORD,
    database:process.env.DATABASE
    //promise allows you to use asynchronous 
}).promise()
 const getProducts=async()=>{
    //use destructuring to return the first array by putting square brackets around result
    const [result] =await pool.query(`
    SELECT * FROM products; 
    `)
    return result
   
}
const getProduct=async(prodID)=> {
    // console.log(prodID);
    const [result]=await pool.query(`
    SELECT * FROM products
    WHERE prodID = ?`,[prodID])
//use a prepared statement for best practice
return result
}
const addProduct = async( prodName , quantity ,amount ,details,category ,prodUrl
    )=>{
const [product] = await pool.query(`
INSERT INTO products (prodName , quantity ,amount ,category,details ,prodUrl)
VALUES (?,?,?,?,?,?)`,[prodName , quantity ,amount ,category,details ,prodUrl])
return getProduct(product.insertId)
}
const deleteProduct = async(prodID)=>{
const [deleted]=await pool.query(`
DELETE FROM products where prodID = ?
`,[prodID])
return getProducts(deleted) 
}
const editProduct = async(prodName , quantity ,amount ,category,details ,prodUrl,prodID)=>{
    const [edited]=await pool.query(`
    UPDATE products
SET prodName=? , quantity=? ,amount=? ,category=? ,details=?,prodUrl=?
WHERE (prodID=?)`,[prodName , quantity ,amount ,category,details ,prodUrl,prodID])
    return edited
}

// console.log(await getProduct(1))
const getUsers=async()=>{
    //use destructuring to return the first array by putting square brackets around result
    const [result] =await pool.query(`
    SELECT * FROM users; 
    `)
    return result
   
}
const getUser=async(userID)=> {
    console.log(userID);
    const [result]=await pool.query(`
    SELECT * FROM users
    WHERE userID = ?`,[userID])
//use a prepared statement for best practice
return result
}
const addUser = async(firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile
    )=>{
const [user] = await pool.query(`
INSERT INTO users (firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile)
VALUES (?,?,?,?,?,?,?)`,[firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile])
return getUser(user.insertId)
}
const checkUser = async (emailAdd) => {
    const [userResult] = await pool.query(`
        SELECT userID, firstName, lastName, userPass
        FROM users
        WHERE emailAdd = ?
    `, [emailAdd]);

    return userResult.length > 0 ? userResult[0] : null;
};
console.log(await checkUser('siya@gmail.com'))
const deleteUser = async(userID)=>{
const [deleted]=await pool.query(`
DELETE FROM users where userID = ?
`,[userID])
return getUsers(deleted) 
}
const editUser = async(firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile,userID)=>{
    const [editedUser]=await pool.query(`
    UPDATE users
SET firstName=? , lastName=? ,gender=? ,userRole=?,emailAdd=?,userPass=?,userProfile=?
WHERE (userID=?)`,[firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile,userID])
    return editedUser
}

// console.log(await checkUser('siyamthandatsobo@gmail.com','123'))
// const addUser=async(username,password)=>{
//     await pool.query(`
//     INSERT INTO users (username, password) VALUES (?,?)`,[username,password])
// }
// const checkUser = async(username)=>{
//     const [[{password}]]=await pool.query(`
//     SELECT password FROM Users WHERE username = ? 
//     `,[username])
//     return password
// } 
const getOrder=async(orderID)=> {
    console.log(orderID);
    const [result]=await pool.query(`
    SELECT * FROM cart
    WHERE orderID = ?`,[orderID])
//use a prepared statement for best practice
return result
}
const getOrdersByUserID = async (userID) => {
    const [result] = await pool.query(`
        SELECT * FROM cart
        WHERE userID = ?
    `, [userID]);

    return result;
};

const deleteOrder = async (orderID) => {
    const [deletedOrder] = await pool.query(`
      DELETE FROM cart
      WHERE orderID = ?
    `, [orderID]);
    return deletedOrder;
};
    const editOrderQuantity = async(quantity)=>{
        const [edited]=await pool.query(`
        UPDATE products
    SET quantity=? 
    WHERE (quantity=?)`,[quantity])
        return edited
    }
    const addOrder = async (quantity, userID, prodID) => {
        console.log('userID:', userID);
        const [order] = await pool.query(`
            INSERT INTO cart (quantity, userID, prodID, totalPrice)
            VALUES (?, ?, ?, quantity * (SELECT amount FROM products WHERE prodID = ?))
            ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity), totalPrice = quantity * (SELECT amount FROM products WHERE prodID = ?)
            `,
            [quantity, userID, prodID, prodID, prodID]);
              
        return getOrder(order.insertId);
    };
 
      
    //    console.log(await(addOrder(3,9,2)))
export {getUsers,getUser,addUser,editUser,deleteUser,checkUser}
export {getProducts,getProduct,addProduct,editProduct,deleteProduct}
export {getOrder,getOrdersByUserID,deleteOrder,editOrderQuantity,addOrder}
