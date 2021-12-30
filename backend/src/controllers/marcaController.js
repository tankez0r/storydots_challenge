import marcasModel from '../models/marcasModel';
import productModel from '../models/productoModel';



export const createMarca = (req, res, next) => {
    const { nombre, descripcion, logo_imagen } = req.body;
    marcasModel.create({
        nombre,
        descripcion,
        logo_imagen
    }, {
        fields: ['nombre', 'descripcion', 'logo_imagen']
    }).then(newNota => {
        if (newNota) {
            res.status(201).json({
                message: 'La marca se ha creado satisfactoriamente',
                data: newNota
            });
        }
    }).catch(err => { next(err); });
};

export const getMarcas = (req, res, next) => {

    marcasModel.findAll({
        include: {
            model: productModel,
            as: 'productos',
            attributes: ['id', 'nombre']
        }

    }).then(marcas => {
        res.status(200).json(marcas);
    })
        .catch(err => next(err));


};

export const getMarca = (req, res, next) => {

    const {id} = req.params;
    marcasModel.findOne({
        where: { id },
    }).then(marca => {
        if (marca) {
            res.status(200).json({
                data: marca
            });
        }
        else {
            res.status(404).send({ error: 'id inexistente' });
        }
    })
        .catch(err => next(err));
};

export const deleteMarca = (req, res, next) => {
    const id = req.params.id;

    marcasModel.destroy({
        where: { id }
    }).then(info => {
        res.status(202).json({
            message: `se ha eliminado la marca con id: ${id}`,
            data: info
        });
    })
        .catch(err => next(err));



};

export const editMarca =  (req, res, next) => {
    const id = req.params.id;
    const { nombre, descripcion, logo_imagen } = req.body;
    marcasModel.findAll({
        attributes: ['id', 'nombre', 'descripcion', 'logo_imagen'],
        where: { id }
    }).then(producto => {
        if (producto.length > 0) {
            producto.forEach(data => {
                data.update({
                    nombre, descripcion, logo_imagen,
                });
            });
        }
        else { next(); }
    }).
        then(marca => res.status(202).json({ message: 'se ha editado con exito', marca: marca }))
        .catch(err => { next(err); });



};

