import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const tokenCookie = req.cookies.jwt;

    if (!tokenCookie) {
        return res.status(403).send({ error: 'Missing JWT token in cookies' });
    }

    jwt.verify(tokenCookie, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err.message);
            return res.status(403).send({ error: 'Failed to authenticate JWT token' });
        }

        console.log('Decoded User:', user);
        req.user = user;
        next();
    });
};

export { authenticate };
