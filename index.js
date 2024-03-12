import express from 'express';
import cookieparser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors';
import { checkUser } from './model/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import productRouter from './routes/products.js';
import userRouter from './routes/users.js';
import orderRouter from './routes/orders.js';
import { authenticate } from './middleware/middleware.js';

config();
const PORT = process.env.PORT

const app = express();//initialise the server
app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
})) //middlware cross origin resource sharing
app.use(express.json()) //newer version comes with body parser 
app.use(cookieparser())
app.use(express.static('views')) 

// app.use(authenticate);
app.use('/order',authenticate, orderRouter);
app.use('/products', productRouter);



const auth = async (req, res, next) => {
    try {
        const { emailAdd, userPass } = req.body;
        const userInfo = await checkUser(emailAdd);

        if (!userInfo) {
            return res.status(401).json({
                msg: 'User not found or invalid credentials',
            });
        }

        const result = await bcrypt.compare(userPass, userInfo.userPass);

        if (result) {
            const tokenPayload = {
                emailAdd: emailAdd,
                userID: userInfo.userID, // Include userID in the token payload
            };

            const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: '2h' });
            console.log(token);
            res.cookie('jwt', token);
            res.json({
                msg: 'You have logged in',
                user: userInfo,
                token: token,
            });
        } else {
            res.status(401).json({
                msg: 'Invalid credentials',
            });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({
            msg: 'Internal server error during authentication',
        });
    }
};




app.use('/users' ,userRouter);
app.post('/login', auth, async (req, res) => {
    const { emailAdd } = req.body;
    const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });

    try {
        const userInfo = await checkUser(emailAdd);

        if (userInfo) {
            res.cookie('jwt', token);
            res.json({
                msg: 'you have logged in',
                user: userInfo,
                token: token,
            });
        } else {
            res.status(404).json({
                msg: 'User not found',
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            msg: 'Internal server error during login',
        });
    }
});





        app.listen( PORT,()=>{
    console.log(`The local host is on http://localhost:${PORT}`)
})
export{authenticate}
//i want to push