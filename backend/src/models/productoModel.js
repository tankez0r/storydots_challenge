import sequelize from 'sequelize';
import { conChain } from '../database/database';

const productModel = conChain.define('productos',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: sequelize.TEXT
        },
        descripcion: {
            type: sequelize.TEXT
        },
        precio: {
            type: sequelize.DECIMAL
        },
        marca_id: {
            type: sequelize.INTEGER
        }


    }, {
        timestamps: false
    }
);

export default productModel;