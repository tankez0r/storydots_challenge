import marcasModel from '../models/marcasModel';
import productModel from '../models/productoModel';
import producto_imagenModel from '../models/producto_imagenModel';
const asociaciones = () => {

    marcasModel.hasMany(productModel, { foreignKey: 'marca_id', sourceKey: 'id' });
    productModel.belongsTo(marcasModel, { as: 'marca', foreignKey: 'marca_id', sourceKey: 'id' });


    productModel.hasMany(producto_imagenModel, { as: 'imagenes', foreignKey: 'producto_id', sourceKey: 'id' });
};



export default asociaciones;
