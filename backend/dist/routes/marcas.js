"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _marcaController = require("../controllers/marcaController");

var router = (0, _express.Router)(); // crear marca

router.post('/', _marcaController.createMarca); // obtener marcas

router.get('/', _marcaController.getMarcas); // obtener marca por id 

router.get('/:id', _marcaController.getMarca); // eliminar por id

router["delete"]('/:id', _marcaController.deleteMarca); // editar marca

router.put('/:id', _marcaController.editMarca);
var _default = router;
exports["default"] = _default;