import FormProducto from "./FormProducto"
import { Formik} from "formik";
import React, { useState, useEffect } from "react";
import FormMarca from "./FormMarca";
import { imgProductoQuery, queryGetData, queryPostCreateData} from "../services/public";

import * as Yup from 'yup';


const FormulariosCreación = () => {

    const [isSubmited, setSubmited] = useState(false)
    const [Schema, setSchema] = useState("")
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
         if (ProductoData){
          queryPostCreateData("productos", ProductoData).then(productId => imgProductoQuery(productImgData, productId))
          setSubmited(false)
          alert("Producto Creado")
          setTimeout(() => {
            window.location.href = "/dashboard"
          }, 3000);
        }
         else if(MarcaData ){
          setSubmited(false)
          queryPostCreateData("marcas", MarcaData)
          alert("Marca Creada")
          setTimeout(() => {
            window.location.href = "/dashboard"
          }, 3000);
         }
        }
         
        }, [MarcaData, ProductoData, type])


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
        <Formik
        onSubmit={values => {
          setSubmited(true)
          const {nombre, descripcion, precio,marca_id, url1, url2,url3,logo_imagen,nombreMarca, descripcionMarca} = values;
          if(Schema==='producto'){
            setImgData({url1, url2,url3})
            setProductoData(marca_id? {nombre, descripcion, precio, marca_id} : {nombre, descripcion, precio})
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
          <select onChangeCapture={e=>{setSchema(e.target.value)}}  className="col-start-2 px-20" as="select" id="form" onChange={(e)=>{formik.handleChange(e)}} defaultValue={type} type='select' >
            <option value={null}>Seleccion</option>
          <option   value="producto">Producto</option>
           <option  value="marca">Marca</option>
          </select>
          </div>
          </div>
          <div className="overflow-hidden">
          <div className="grid md:grid-cols-12">   
          {formik.values.form === 'producto'?<FormProducto formik={formik} mode="creation" />: formik.values.form === 'marca'? <FormMarca formik={formik} mode="creation" />: null}
           </div>
        
             </div>
            
        </div>
        </div>
      
      )}
        </Formik>
      
      
      );
}
 
export default FormulariosCreación;
