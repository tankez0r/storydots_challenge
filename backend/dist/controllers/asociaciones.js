"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _marcasModel = _interopRequireDefault(require("../models/marcasModel"));

var _productoModel = _interopRequireDefault(require("../models/productoModel"));

var asociaciones = function asociaciones() {
  _marcasModel["default"].hasMany(_productoModel["default"], {
    foreignKey: 'marca_id',
    sourceKey: 'id'
  });

  _productoModel["default"].belongsTo(_marcasModel["default"], {
    as: 'marca',
    foreignKey: 'marca_id',
    sourceKey: 'id'
  });
};

var _default = asociaciones;
exports["default"] = _default;