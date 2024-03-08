import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const { cookie } = req.headers;

    if (!cookie) {
        return res.sendStatus(403);
    }

    const tokenInHeader = cookie.split('=')[1];

    if (!tokenInHeader) {
        return res.sendStatus(403);
    }

    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err);
            return res.sendStatus(403);
        }

        console.log('Decoded User:', user);
        req.user = user;
        next();
    });
};

export { authenticate };
