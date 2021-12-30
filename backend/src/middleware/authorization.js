import jwt from 'jsonwebtoken';

module.exports = (request, response, next) => {
    const authorization = request.get('authorization');
    let token;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }
    const decodeToken = jwt.verify(token, 'storysecrets');
    const user = { id: '00', username: 'storydots' };
    console.log(decodeToken);

    try {
        next();
    } catch (error) {
        if (!token || decodeToken.username != user.username || decodeToken.id != user.id) {
            return response.status(401).json({
                message: 'la sesion actual ha expirado o el token es nulo'
            });

        }
    }

};