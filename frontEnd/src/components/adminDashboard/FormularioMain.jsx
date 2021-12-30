import { Formik,  Form } from "formik";
import React, { useState, memo, useEffect } from "react";
import FormMarca from "./FormMarca";
import FormProducto from "./FormProducto";
import FormImagenes from "./FormImagenes";
import { imgProductoQuery, queryGetData, queryPostCreateData, queryPostEditData, queryDeleteData } from "../services/public";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as Yup from 'yup';

const FormularioParaProducto = memo ( () => {
  const [isSubmited, setSubmited] = useState(false)
  const [formPicked, setForm] = useState("")
  const [Schema, setSchema] = useState("")
  const [ProductoData, setProductoData] = useState(null)
  const [MarcaData, setMarcaData] = useState(null)
  const [productImgData, setImgData] = useState(null)
const [initialValues, setInitialValues]= 
useState({form:"" ,nombre:"", descripcion:"", precio:0, marca_id:0,
 url1:"", url2:"", url3:"", logo_imagen:"", nombreMarca:"",descripcionMarca:""});
 const [newOrEdit, setFormState]=useState(null);
 const [buttonLoad, setBLoad] = useState(null);
 const [succesMessage, setSuccesmsg] = useState(null)

  const urlObject = new URLSearchParams(window.location.search);
  const id = parseInt(urlObject.get("id"));
  const type = urlObject.get("type");

useEffect(() => {
if(type){
  queryGetData(type, id, setInitialValues)
}
if(isSubmited){
 if(ProductoData && !newOrEdit ){
  queryPostEditData("productos", {...ProductoData, id})

 
  alert("Producto Editado")
  setTimeout(() => {
    window.location.href = "/dashboard"
  }, 3000);
 }
 else if (ProductoData &&  newOrEdit){
  queryPostCreateData("productos", ProductoData).then(productId => imgProductoQuery(productImgData, productId))
  setSubmited(false)

  alert("Producto Creado")
  setTimeout(() => {
    window.location.href = "/dashboard"
  }, 3000);
}
 else if(MarcaData && !newOrEdit){

  queryPostEditData("marcas", MarcaData)
  setFormState(null)
  alert("Marca Editada")
  setTimeout(() => {
    window.location.href = "/dashboard"
  }, 3000);
 }
 else if(MarcaData && newOrEdit ){
  setSubmited(false)
  queryPostCreateData("marcas", MarcaData)
  setFormState(null)
  alert("Marca Creada")
  setTimeout(() => {
    window.location.href = "/dashboard"
  }, 3000);
 }
}
 
}, [MarcaData, ProductoData, type])


const deleteObject = ()=>{
if(confirm("Eliminar Marca/Producto?")){
  queryDeleteData(type,{id})
  alert("Eliminando")
  setTimeout(() => {
    window.location.href = "/dashboard"
  }, 3000);
}
}




  const schemaProducto = Yup.object().shape({
    nombre: Yup.string().required('Debes ingresar un nombre'),
   descripcion: Yup.string().required('Debes ingresar una descripcion'),
   precio: Yup.number().required('Precio necesario').min(1, "El monto no puede ser inferior a 0").max(1000000, "el monto no puede ser mayor a 1M"),
   url1: Yup.string().required('debes ingresar al menos una imagen del producto')
  }); 

  const schemaMarca = Yup.object().shape({
    nombreMarca: Yup.string().required('Debes ingresar un nombre'),
    descripcionMarca: Yup.string().required('Debes ingresar una descripcion'),
    logo_imagen: Yup.string().required('debes ingresar el logo de la marca')
  })





  return ( 
    <div>
      {!type?
      
      <Formik
  onSubmit={values => {
    setSubmited(true)
    setBLoad(true)
    setFormState(true)
    // formulario crear producto / marca
    const {nombre, descripcion, precio,marca_id, url1, url2,url3,logo_imagen,nombreMarca, descripcionMarca} = values;
    if(Schema==='producto'){
      setImgData({url1, url2,url3})
      setProductoData(marca_id? {nombre, descripcion, precio,marca_id}: {nombre, descripcion, precio})
    } else if(Schema==='marca')
     { setMarcaData({nombre:nombreMarca,descripcion: descripcionMarca, logo_imagen })
   }
 }}
  initialValues={initialValues}
 validationSchema={Schema==='producto'? schemaProducto : schemaMarca}
  >
{formik =>(
  <div className="flex">
    <div >
     <div className="grid grid-cols-12 justify-items-center">
    <div className="bg-slate-500 my-2 p-6 px-5 shadow-2xl rounded-lg mx-4 col-span-6 col-start-4">
    <select onChangeCapture={e=>{setSchema(e.target.value)}}  className="col-start-2 px-20" as="select" id="form" onChange={(e)=>{setForm(e.target.value); formik.handleChange(e);}} defaultValue={type} type='select' >
      <option value="">Seleccion</option>
    <option  value="producto">Producto</option>
     <option value="marca">Marca</option>
    </select>
    </div>
    </div>

  
    <div className="overflow-hidden">
    <div className="grid md:grid-cols-12">
    
   
    {formPicked ==='producto'?
     <div className="grid col-start-3">
        <Form onSubmit={formik.handleSubmit} type={'form'} 
     className="lg:flex ">
         <div className="bg-slate-300 my-2 p-6 shadow-2xl rounded-lg mx-4">
       <FormProducto formik={formik}/> 
       </div>
       <div className="my-2 col-span-2 md:col-start-4 bg-slate-300 p-6 shadow-2xl rounded-lg mx-4"> 
     <FormImagenes formik={formik}/>
     <div className=" text-amber-50 grid grid-cols-5 ">
        <button type="submit" className="col-start-2 col-span-3 bg-slate-700 mt-2 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Crear</button>
        

        </div>
     </div>
     </Form> 
     </div>
     
     
     :


     formPicked === 'marca'? 
     <div className="col-span-3 col-start-4">
     <Form onSubmit={formik.handleSubmit} type={'form'} 
     >
       <div className="my-2 col-span-2 md:col-start-4 bg-slate-300 p-6 shadow-2xl rounded-lg mx-4"> 
     <FormMarca formik={formik}/>
     <div className=" text-amber-50 grid grid-cols-5 ">
        <button type="submit" className="col-start-2 col-span-3 bg-slate-700 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Crear</button>
        </div>

     </div>
     </Form>
     </div>
     : 




     null}
     </div>

    
       </div>
  
  
  
  </div>
  </div>

)}
  </Formik>




:   /* division entre formulario de creación y edicion */




<Formik
enableReinitialize={true}
  onSubmit={values => {
    setSubmited(true)

// formulario editar marca o prudcto

const {nombre, marca_id, descripcion, precio, url1, url2,url3,logo_imagen,nombreMarca, descripcionMarca} = values;

if(type==='productos'){
  setImgData({url1, url2,url3})
  setProductoData(marca_id? {nombre, descripcion, precio,marca_id}: {nombre, descripcion, precio})
  console.log(ProductoData)

} else if(type==='marcas')
 { setMarcaData({nombre:nombreMarca,descripcion: descripcionMarca, logo_imagen })}
 console.log(MarcaData)
}}
  initialValues={initialValues} //agregar ifelse segun formpick
 validationSchema={type==='productos'? schemaProducto : schemaMarca}
  >
{formik =>(
  <div className="flex">
    {console.log(formik)}
    <div >
     <div className="grid grid-cols-12 justify-items-center">
   
    </div>

  
    <div className="overflow-hidden">
    <div className="grid md:grid-cols-9">
    
 
    {type ==='productos'?
     <div className="col-span-3 col-start-4">
        <Form onSubmit={formik.handleSubmit} type={'form'} 
     >
       
       <div className="bg-slate-300 my-2 p-6 shadow-2xl rounded-lg mx-4 md:col-start-2 col-span-2">
       <FormProducto formik={formik} /> 
       </div>
       <div className="my-2 col-span-2 md:col-start-4 bg-slate-300 p-6 shadow-2xl rounded-lg mx-4"> 
     <FormImagenes formik={formik}/>
     <div className=" text-amber-50 grid grid-cols-5 ">
        <button  type="submit" className="col-start-2 col-span-3 bg-slate-700 mt-2 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Editar</button>
        <button onClick={e=>{e.preventDefault(); deleteObject()}} type="button" className="col-start-2 col-span-3 bg-red-700 mt-5 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Eliminar</button>

        </div>
     </div>
     </Form> </div>:


type === 'marcas'? 
     <div className="col-span-3 col-start-3">
     <Form onSubmit={formik.handleSubmit} type={'form'} 
     >
        <div className="my-2 col-span-2 md:col-start-4 bg-slate-300 p-6 shadow-2xl rounded-lg mx-4"> 
        <FormMarca formik={formik}/>
     <div className=" text-amber-50 grid grid-cols-5 ">
        <button type="submit" className="col-start-2 col-span-3 bg-slate-700 mt-2 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Editar</button>
        <button type="button" className="col-start-2 col-span-3 bg-red-700 mt-5 shadow-md transition-all transform active:translate-y-1 hover:shadow-slate-400">Eliminar</button>

        </div>
     </div>
     </Form>
     </div>
     : 
     null}
     </div>

    
       </div>
  
  
  
  </div>
  </div>

)}
  </Formik>

  }
    </div>
   );
})
 
export default FormularioParaProducto;