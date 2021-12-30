"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var marcasModel = _database.conChain.define('marcas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  logo_imagen: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = marcasModel;
exports["default"] = _default;