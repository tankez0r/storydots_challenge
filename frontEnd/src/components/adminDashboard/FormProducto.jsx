import { ErrorMessage, Form } from "formik";
import FormImagenes from "./FormImagenes";


const FormProducto = ({formik, mode}) => {
    const Marcas =[{nombre:"marca1", id:1}, {nombre:"marca2", id:2}, {nombre:"marca3", id:3}, {nombre:"marca4", id:4}]
   const opciones = Marcas.map(marca => <option key={marca.id} value={marca.id}>{marca.nombre}</option>)
    return ( 
        <div className="grid col-start-2">
        <Form onSubmit={formik.handleSubmit} type={'form'} 
     className="lg:flex ">
         <div className="bg-slate-300 my-2 p-6 shadow-2xl rounded-lg mx-4">
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
        </div>
       <div className="my-2 col-span-2 md:col-start-4 bg-slate-300 p-6 shadow-2xl rounded-lg mx-4"> 
     <FormImagenes formik={formik}/>
     <div className=" text-amber-50 grid grid-cols-5 ">
       { mode==='creation'? <button type="submit" className="col-start-2 col-span-3 bg-slate-700 mt-2 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Crear</button>:  
       <><button  type="submit" className="col-start-2 col-span-3 bg-slate-700 mt-2 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Editar</button>
        <button onClick={e=>{e.preventDefault(); deleteObject()}} type="button" className="col-start-2 col-span-3 bg-red-700 mt-5 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Eliminar</button></>}
        

        </div>
     </div>
     </Form> 
     </div>
     
     );
}
 
export default FormProducto;