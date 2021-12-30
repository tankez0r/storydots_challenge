"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var productModel = _database.conChain.define('productos', {
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
  image_url: {
    type: _sequelize["default"].TEXT
  },
  precio: {
    type: _sequelize["default"].DECIMAL
  },
  marca_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = productModel;
exports["default"] = _default;