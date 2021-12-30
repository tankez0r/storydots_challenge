"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _productos = _interopRequireDefault(require("./routes/productos"));

var _marcas = _interopRequireDefault(require("./routes/marcas"));

var _asociaciones = _interopRequireDefault(require("./controllers/asociaciones.js"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use('/api/productos/', _productos["default"]);
app.use('/api/marcas/', _marcas["default"]);
(0, _asociaciones["default"])();
var _default = app;
exports["default"] = _default;