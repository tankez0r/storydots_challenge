import {Formik} from "formik";
import React, { useState, useEffect } from "react";
import FormMarca from "./FormMarca";
import FormProducto from "./FormProducto";
import {queryGetData, queryPostEditData, queryDeleteData } from "../services/public";

import * as Yup from 'yup';


const FormulariosEdicion = () => {
  
    const [isSubmited, setSubmited] = useState(false)
    const [ProductoData, setProductoData] = useState(null)
    const [MarcaData, setMarcaData] = useState(null)
    const [productImgData, setImgData] = useState(null)
    const [initialValues, setInitialValues]= 
useState({form:"" ,nombre:"", descripcion:"", precio:0, marca_id:0,
 url1:"", url2:"", url3:"", logo_imagen:"", nombreMarca:"",descripcionMarca:""});



 const urlObject = new URLSearchParams(window.location.search);
 const id = parseInt(urlObject.get("id"));
 const type = urlObject.get("type");



    useEffect(() => {
        if(type){
          queryGetData(type, id, setInitialValues)
        }

        if(isSubmited){
         if(ProductoData ){
          queryPostEditData("productos", {...ProductoData, id})
          alert("Producto Editado")
          setTimeout(() => {
            window.location.href = "/dashboard"
          }, 3000);
         } 
         else if(MarcaData){
          queryPostEditData("marcas", MarcaData)
          alert("Marca Editada")
          setTimeout(() => {
            window.location.href = "/dashboard"
          }, 3000);
         }
        }
         
        }, [MarcaData, ProductoData, type, ])

     

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
    logo_imagen: Yup.string().required('debes ingresar el logo de la marca')})


let submitHandler = (dataType, values)=> {
    setSubmited(true)
    const {nombre, marca_id, descripcion, precio, url1, url2,url3,logo_imagen,nombreMarca, descripcionMarca} = values
    if(dataType==='productos'){
        setImgData({url1, url2,url3})
        setProductoData(marca_id? {nombre, descripcion, precio,marca_id}: {nombre, descripcion, precio})
        console.log(ProductoData)
      
      } else if(dataType==='marcas')
       { setMarcaData({nombre:nombreMarca,descripcion: descripcionMarca, logo_imagen })}
       console.log(MarcaData)
}        


let formConstructor = (formProp, formScheludle)=>{
   if (formProp ==='productos')
    {return ( <FormProducto formik={formScheludle} mode="edition" /> )}
else if (formProp === 'marcas'){ 
    return(<FormMarca formik={formScheludle} mode="edition"/>)}
    else{
        return null
    }
}


    return (
        <Formik
enableReinitialize={true}
  onSubmit={values => {submitHandler(type, values)}}
  initialValues={initialValues} //agregar ifelse segun formpick
 validationSchema={type==='productos'? schemaProducto : schemaMarca}
  >
{formik =>(
  <div className="flex">
    <div className="overflow-hidden">
    <div className="grid md:grid-cols-9">
    {formConstructor(type, formik)}
     </div>  

  </div>
  </div>

)}
  </Formik>
      );
}
 
export default FormulariosEdicion;
