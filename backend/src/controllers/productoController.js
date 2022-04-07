import productoModel from '../models/productoModel';
import marcasModel from '../models/marcasModel';
import producto_imagenModel from '../models/producto_imagenModel';


export const createProductos = (req, res, next) => {
    const { nombre, descripcion, precio, marca_id } = req.body;

    productoModel.create({
        nombre,
        descripcion,
        precio,
        marca_id
    }, {
        fields: ['nombre', 'descripcion', 'precio', 'marca_id']
    }).then(newNota => {
        if (newNota) {
            res.status(201).json({
                message: 'el producto se ha creado satisfactoriamente',
                data: newNota
            });
        }
    }).catch((err) => {
        next(err);
    });

};

export const getProductos = (req, res, next) => {

    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber;
    }
    let size = 4;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 4) {
        size = sizeAsNumber;
    }

    productoModel.findAndCountAll({
        limit: size,
        offset: page * size,
        include: [{
            model: marcasModel,
            as: 'marca',
            attributes: ['nombre', 'logo_imagen']
        },
        {
            model: producto_imagenModel,
            as: 'imagenes',
            attributes: ['image_url', 'id']
        }
        ]
    }).then(pagesOfProducts => res.status(200).json({
        data: pagesOfProducts
    })).catch(err => next(err));
};


export const getProductoByMarca = (req, res, next) => {
    const { marca_id } = req.params;
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber;
    }
    let size = 4;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 4) {
        size = sizeAsNumber;
    }
    productoModel.findAndCountAll({
        limit: size,
        offset: page * size,
        where: { marca_id },
        include: [{
            model: marcasModel,
            as: 'marca',
            attributes: ['nombre', 'logo_imagen']
        },
        {
            model: producto_imagenModel,
            as: 'imagenes',
            attributes: ['image_url', 'id']
        }
        ]
    }).then(pagesOfProducts => res.status(200).json({
        data: pagesOfProducts
    })).catch(err => next(err));
};

export const getProducto = (req, res, next) => {
    const { id } = req.params;

    productoModel.findOne({
        where: { id }, include: [{
            model: marcasModel,
            as: 'marca',
            attributes: ['nombre', 'logo_imagen']
        },
        {
            model: producto_imagenModel,
            as: 'imagenes',
            attributes: ['image_url', 'id']
        }
        ]
    }).then(model => res.status(200).json({
        data: model
    })).catch(err => next(err));
};

export const deleteProducto = (req, res, next) => {
    const { id } = req.params;
    productoModel.destroy({
        where: { id }
    }).then(deleted => res.status(410).json({
        message: 'el elemento ha sido eliminado correctamente',
        data: deleted
    })).catch(err => next(err));


};

export const editProducto = (req, res, next) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, marca_id } = req.body;

    productoModel.findAll({
        attributes: ['id', 'nombre', 'descripcion', 'precio', 'marca_id'],
        where: { id }
    }).then(producto => {
        if (producto.length > 0) {
            producto.forEach(data => {
                data.update({
                    nombre, descripcion, precio, marca_id
                });
            });
        }
        else {
            res.status(404).send({ error: 'id inexistente' });
        }
    }).then(producto_final => res.status(202).json({
        message: 'el producto fue editado correctamente',
        data: producto_final
    })).catch(err => next(err));
};
