"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conChain = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var DB_HOST = process.env.DB_HOST || 'localhost';
var DB_NAME = process.env.DB_NAME || 'postgres';
var DB_USER = process.env.DB_USER || 'postgres';
var DB_PASS = process.env.DB_PASS || 'password';
var conChain = new _sequelize["default"](DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 8,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});
exports.conChain = conChain;