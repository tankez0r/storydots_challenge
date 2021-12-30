import app from './app.js';
const startApp = () => {
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => { console.log('El servidor esta listo para pedir peticiones en el puerto: ' + PORT); });

};

app.get('/', (request, response) => {
    response.send('<h1>Bienvenido a la api de la aplicación del challenge para StoryDots</h1>');
});

startApp();
