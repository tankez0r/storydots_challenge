import { ErrorMessage } from "formik";

const FormProducto = ({formik}) => {
    const Marcas =[{nombre:"marca1", id:1}, {nombre:"marca2", id:2}, {nombre:"marca3", id:3}, {nombre:"marca4", id:4}]
   const opciones = Marcas.map(marca => <option key={marca.id} value={marca.id}>{marca.nombre}</option>)
    return ( 
        <div className="bg-slate-500 my-2 p-6 shadow-2xl rounded-lg mx-4 md:col-start-2 col-span-2">
            <div className="">
        <div className="my-5 flex flex-col">
        <label className="text-amber-50" htmlFor="nombre">Nombre del Producto</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange}   value={formik.values.nombre} className="text-black" type="text" name="nombre" id="nombre" />
        <ErrorMessage  name="nombre" className="" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
        </div>
        <div className="my-5 flex flex-col">
        <label  className="text-amber-50" htmlFor="descripcion">Descripcion</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.descripcion} className="text-black" type="text" name="descripcion" id="descripcion" />
        <ErrorMessage  name="descripcion" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
        </div>
        <div className="my-5 flex flex-col">
        <label  className="text-amber-50" htmlFor="precio">Precio</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.precio} className="text-black" type="number" min={0} max={1000000} name="precio" id="precio" />
        <ErrorMessage  name="precio" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
        </div>
        <div className="my-5 flex flex-col">
        <label  className="text-amber-50" htmlFor="precio">Marca</label>
        <select className="text-black" type="select" name="Marca" id="marca" defaultValue={formik.values.marca_id}>
            <option value={null}>Seleccionar</option>
            <option value={null}>Sin Marca</option>
            {opciones}
        </select>
        </div>
        </div>
        </div>
     );
}
 
export default FormProducto;