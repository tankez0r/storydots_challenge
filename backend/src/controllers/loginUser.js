import jwt from 'jsonwebtoken';
export const login = async (req, res) => {
    const { body } = req;
    const { username, password } = body;
    const user = username.toLowerCase() === 'storydots' ?
        username.toLowerCase() : null;


    const passwordCorrect = user === null ?
        false : 'storypass' === password;
    try {

        if (!(user && passwordCorrect)) {
            res.status(401).json({
                message: 'Las credenciales son incorrectas'
            });
        } else {

            const userForToken = ({
                id: 'admin',
                username: user

            });

            const token = jwt.sign(userForToken, 'storysecrets');


            res.send({
                id: 'admin',
                username: user,
                token
            });
        }


    } catch (error) {
        console.log(error);
    }



};