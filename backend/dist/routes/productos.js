"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productoController = require("../controllers/productoController");

var router = (0, _express.Router)(); // crear producto

router.post('/', _productoController.createProductos); // obtener marcas

router.get('/', _productoController.getProductos); // obtener marca por id 

router.get('/:id', _productoController.getProducto); // eliminar por id

router["delete"]('/:id', _productoController.deleteProducto); // editar marca

router.put('/:id', _productoController.editProducto);
var _default = router;
exports["default"] = _default;