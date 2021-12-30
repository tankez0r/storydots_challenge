"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductos = exports.getProducto = exports.editProducto = exports.deleteProducto = exports.createProductos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _productoModel = _interopRequireDefault(require("../models/productoModel"));

var _marcasModel = _interopRequireDefault(require("../models/marcasModel"));

var createProductos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, image_url, precio, marca_id, newProducto;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, image_url = _req$body.image_url, precio = _req$body.precio, marca_id = _req$body.marca_id;
            _context.prev = 1;
            _context.next = 4;
            return _productoModel["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              image_url: image_url,
              precio: precio,
              marca_id: marca_id
            }, {
              fields: ['nombre', 'descripcion', 'image_url', 'precio', 'marca_id']
            });

          case 4:
            newProducto = _context.sent;

            if (newProducto) {
              res.status(201).json({
                message: 'el producto se ha creado satisfactoriamente',
                data: newProducto
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'algo salio mal',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function createProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProductos = createProductos;

var getProductos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var todoProducto;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _productoModel["default"].findAll({
              include: {
                model: _marcasModel["default"],
                as: 'marca',
                attributes: ['nombre', 'logo_imagen']
              }
            });

          case 3:
            todoProducto = _context2.sent;
            res.status(302).json({
              data: todoProducto
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json({
              message: 'ha ocurrido un error',
              data: {}
            });
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProductos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductos = getProductos;

var getProducto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, producto;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _productoModel["default"].findOne({
              where: {
                id: id
              },
              include: {
                model: _marcasModel["default"],
                as: 'marca',
                attributes: ['nombre', 'logo_imagen']
              }
            });

          case 4:
            producto = _context3.sent;
            res.status(302).json({
              data: producto
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(404).json({
              message: 'algo salio mal',
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function getProducto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProducto = getProducto;

var deleteProducto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            try {
              _productoModel["default"].destroy({
                where: {
                  id: id
                }
              });

              res.status(202).json({
                message: "se ha eliminado el producto con id: ".concat(id)
              });
            } catch (error) {
              res.status(417).json({
                message: 'ha ocurrido un error :(',
                data: {}
              });
              console.log(error);
            }

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProducto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProducto = deleteProducto;

var editProducto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, image_url, precio, marca, producto;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, image_url = _req$body2.image_url, precio = _req$body2.precio, marca = _req$body2.marca;
            _context6.next = 4;
            return _productoModel["default"].findAll({
              attributes: ['id', 'nombre', 'descripcion', 'image_url', 'precio', 'marca'],
              where: {
                id: id
              }
            });

          case 4:
            producto = _context6.sent;

            if (!(producto.length > 0)) {
              _context6.next = 10;
              break;
            }

            producto.forEach( /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return data.update({
                          nombre: nombre,
                          descripcion: descripcion,
                          image_url: image_url,
                          precio: precio,
                          marca: marca
                        });

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x11) {
                return _ref6.apply(this, arguments);
              };
            }());
            return _context6.abrupt("return", res.status(202).json({
              message: 'el producto fue editado correctamente',
              data: producto
            }));

          case 10:
            return _context6.abrupt("return", res.status(304).json({
              message: 'ha ocurrido un error'
            }));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function editProducto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.editProducto = editProducto;