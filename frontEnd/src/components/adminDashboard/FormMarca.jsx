import { ErrorMessage, Form } from "formik";

const FormMarca = ({formik, mode}) => {
  const deleteObject = ()=>{
    if(confirm("Eliminar Marca/Producto?")){
      queryDeleteData(type,{id})
      alert("Eliminando")
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 3000);
    }
    }
    console.log(formik)
    return ( 
        <div className="sm:col-span-4 sm:col-start-3 ">
        <Form onSubmit={formik.handleSubmit} type={'form'} >
          <div className="my-2 col-span-2 md:col-start-4 bg-slate-300 p-6 shadow-2xl rounded-lg mx-4"> 
        <div className="bg-slate-500 my-2 p-6 shadow-2xl rounded-lg mx-4 md:col-start-2 col-span-2">
        <div className="text-amber-50">
    <div className="my-5 flex flex-col">
    <label htmlFor="nombreMarca">Nombre de marca</label>
    <input value={formik.values.nombre} onBlur={formik.handleBlur} onChange={formik.handleChange} className="text-black" type="text" name="nombreMarca" id="nombreMarca"/>
    <ErrorMessage  name="nombreMarca" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
    </div>
 
    <div className="my-5 flex flex-col">
    <label htmlFor="descripcionMarca">Descripcion</label>
    <textarea value={formik.values.descripcion} onBlur={formik.handleBlur} onChange={formik.handleChange}    className="text-black h-[20]" type="text" name="descripcionMarca" id="descripcionMarca" />
    <ErrorMessage  name="descripcionMarca" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
    </div>
    <div className="my-5 flex flex-col">
     {formik.values.logo_imagen? <img src={formik.values.logo_imagen} alt="" className="self-center" height={100} width={150}/> : null}
    <label htmlFor="logoMarca">logo de marca</label>
    <input value={formik.values.logo_imagen} onBlur={formik.handleBlur} onChange={formik.handleChange}    className="text-black" type="text" name="logo_imagen" id="logo_imagen" />
    <ErrorMessage  name="logo_imagen" render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
    </div>
    <div className=" text-amber-50 grid grid-cols-5 ">  
        </div>
    </div>
    </div>
    <div className=" text-amber-50 grid grid-cols-5 ">
            {mode==='creation'? 
            <button type="submit" className="col-start-2 col-span-3 bg-slate-700 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Crear</button>
            :
             <><button type="submit" className="col-start-2 col-span-3 bg-slate-700 mt-2 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Editar</button>
             <button type="button" className="col-start-2 col-span-3 bg-red-700 mt-5 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Eliminar</button>
             </>}
              </div>
      
           </div>
           </Form>
           </div>);
}
 
export default FormMarca;