"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarcas = exports.getMarca = exports.editMarca = exports.deleteMarca = exports.createMarca = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _marcasModel = _interopRequireDefault(require("../models/marcasModel"));

var _productoModel = _interopRequireDefault(require("../models/productoModel"));

var createMarca = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, logo_imagen, newMarca;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, logo_imagen = _req$body.logo_imagen;
            _context.next = 3;
            return _marcasModel["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              logo_imagen: logo_imagen
            }, {
              fields: ['nombre', 'descripcion', 'logo_imagen']
            });

          case 3:
            newMarca = _context.sent;

            try {
              if (newMarca) {
                res.status(201).json({
                  message: 'La marca se ha creado satisfactoriamente',
                  data: newMarca
                });
              }
            } catch (error) {
              console.log(error);
              res.status(201).json({
                message: 'algo salio mal',
                data: {}
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMarca(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMarca = createMarca;

var getMarcas = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var todoMarcas;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _marcasModel["default"].findAll({
              include: {
                model: _productoModel["default"],
                as: 'productos',
                attributes: ['id', 'nombre', 'image_url']
              }
            });

          case 3:
            todoMarcas = _context2.sent;
            res.status(302).json({
              data: todoMarcas
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

  return function getMarcas(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMarcas = getMarcas;

var getMarca = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, marca;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _marcasModel["default"].findOne({
              where: {
                id: id
              },
              include: {
                model: _productoModel["default"],
                as: 'productos',
                attributes: ['id', 'nombre', 'image_url']
              }
            });

          case 4:
            marca = _context3.sent;
            res.json({
              data: marca
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(404).json({
              message: 'algo salio mal',
              data: {}
            });
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getMarca(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMarca = getMarca;

var deleteMarca = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            try {
              _marcasModel["default"].destroy({
                where: {
                  id: id
                }
              });

              res.status(202).json({
                message: "se ha eliminado la marca con id: ".concat(id)
              });
            } catch (error) {
              res.status(417).json({
                message: 'ha ocurrido un error :('
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

  return function deleteMarca(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteMarca = deleteMarca;

var editMarca = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, logo_imagen, marca;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, logo_imagen = _req$body2.logo_imagen;
            _context6.next = 4;
            return _marcasModel["default"].findAll({
              attributes: ['id', 'nombre', 'descripcion', 'logo_imagen'],
              where: {
                id: id
              }
            });

          case 4:
            marca = _context6.sent;

            if (!(marca.length > 0)) {
              _context6.next = 10;
              break;
            }

            marca.forEach( /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return data.update({
                          nombre: nombre,
                          descripcion: descripcion,
                          logo_imagen: logo_imagen
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
              message: 'La marca fue editada correctamente',
              data: marca
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

  return function editMarca(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.editMarca = editMarca;