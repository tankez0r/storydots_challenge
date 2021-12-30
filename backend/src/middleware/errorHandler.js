/* eslint-disable no-unused-vars */

const error_handler = {
    SequelizeDatabaseError: (response, error) => response.status(400).send({ mensaje: 'la peticion que intentas hacer es imposible', log_message: error.message }),
    JsonWebTokenError: (response, error) => { response.status(498).send({ message: 'el token es invalido o ha expirado, prueba iniciar sesion otra vez', log_message: error.message }); },
    default_error: response => response.status(400).send({ error: 'ha ocurrido un error :(, revisar log de backend para revisar posibles razones' })

};
module.exports = (error, _request, response, _next) => {
    console.log(error.name + ' ' + error);
    const handler = error_handler[error.name] || error_handler.default_error;
    handler(response, error);
};
