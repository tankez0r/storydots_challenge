import { ErrorMessage} from "formik";
const FormMarca = ({formik}) => {
    return ( 
        <div className="bg-slate-500 my-2 p-6 shadow-2xl rounded-lg mx-4 md:col-start-2 col-span-2">
        <div className="text-amber-50">
    <div className="my-5 flex flex-col">
    <label htmlFor="nombreMarca">Nombre de marca</label>
    <input value={formik.values.nombreMarca} onBlur={formik.handleBlur} onChange={formik.handleChange} className="text-black" type="text" name="nombreMarca" id="nombreMarca"/>
    <ErrorMessage  name="nombreMarca" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
    </div>
 
    <div className="my-5 flex flex-col">
    <label htmlFor="descripcionMarca">Descripcion</label>
    <input value={formik.values.descripcionMarca} onBlur={formik.handleBlur} onChange={formik.handleChange}    className="text-black" type="text" name="descripcionMarca" id="descripcionMarca" />
    <ErrorMessage  name="descripcionMarca" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
    </div>
    <div className="my-5 flex flex-col">
    <label htmlFor="logoMarca">logo de marca</label>
    <input value={formik.values.logo_imagen} onBlur={formik.handleBlur} onChange={formik.handleChange}    className="text-black" type="text" name="logo_imagen" id="logo_imagen" />
    <ErrorMessage  name="logo_imagen" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
    </div>
    <div className=" text-amber-50 grid grid-cols-5 ">  
        </div>
    </div>
    </div>);
}
 
export default FormMarca;