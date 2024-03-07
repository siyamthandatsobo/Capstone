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

app.use('/order',orderRouter) 


app.use('/products',productRouter) 



const auth = async (req, res, next) => {
    const { emailAdd, userPass } = req.body;
    const hashedPassword = await checkUser(emailAdd);
    bcrypt.compare(userPass, hashedPassword, (err, result) => {
        if (err) throw err;
        if (result === true) {
            const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
            console.log(token);
            res.cookie('jwt', token);
            res.json({
                msg: 'you have logged in',
                token: token,
            });
        } else {
            res.send({
                msg: 'the password does not match',
            });
            next(); // Move next() here
        }
    });
};

app.use('/users', userRouter);
app.post('/login', auth, (req, res) => {
    const { emailAdd } = req.body;
    const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.cookie('jwt', token);
    res.json({
        msg: 'you have logged in',
    });
});
   



        app.listen( PORT,()=>{
    console.log(`The local host is on http://localhost:${PORT}`)
})
export{authenticate}
