import sequelize from 'sequelize';
import { conChain } from '../database/database';

const producto_imagenModel = conChain.define('imagenes_producto',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true
        },
    
        image_url: {
            type: sequelize.TEXT
        },
        producto_id: {
            type: sequelize.INTEGER
        }
    }, {
        timestamps: false
    }
);

export default producto_imagenModel; //crear asociacion, formulario de 2 querys