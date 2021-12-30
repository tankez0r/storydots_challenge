"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app.js"));

var startApp = function startApp() {
  var PORT = process.env.PORT || 3002;

  _app["default"].listen(PORT, function () {
    console.log('El servidor esta listo para pedir peticiones en el puerto: ' + PORT);
  });
};

_app["default"].get('/', function (request, response) {
  response.send('<h1>Bienvenido a la api de la aplicación del challenge para StoryDots</h1>');
});

startApp();