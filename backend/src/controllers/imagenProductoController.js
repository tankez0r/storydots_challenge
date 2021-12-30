import producto_imagenModel from '../models/producto_imagenModel';

export const createImagen = (req, res, next) => {
    const { image_url, producto_id } = req.body;
    producto_imagenModel.create({
        image_url, producto_id
    }, {
        fields: ['image_url', 'producto_id']
    }).then(newNota => {
        if (newNota) {
            res.status(201).json({
                message: 'La imagen se ha cargado satisfactoriamente',
                data: newNota
            });
        }
    }).catch(err => { next(err); });
};


export const deleteImagen = (req, res, next) => {
    const { id } = req.params;

    producto_imagenModel.destroy({
        where: { id }
    }).then(info => {
        res.status(202).json({
            message: `se ha eliminado la Imagen con id: ${id}`,
            data: info
        });
    })
        .catch(err => next(err));



};

export const editImagen =  (req, res, next) => {
    const { id } = req.params;
    const { image_url} = req.body;
    producto_imagenModel.findAll({
        attributes: ['id', 'image_url'],
        where: { id }
    }).then(producto => {
        if (producto.length > 0) {
            producto.forEach(data => {
                data.update({
                    image_url
                });
            });
        }
        else { next(); }
    }).
        then(Imagen => res.status(202).json({ message: 'se ha editado con exito', Imagen: Imagen }))
        .catch(err => { next(err); });



};