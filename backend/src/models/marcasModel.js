import sequelize from 'sequelize';
import { conChain } from '../database/database';

const marcasModel = conChain.define('marcas',
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
        logo_imagen: {
            type: sequelize.TEXT
        }
    }, {
        timestamps: false
    }
);

export default marcasModel;