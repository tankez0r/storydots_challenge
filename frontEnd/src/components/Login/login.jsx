import { Formik, ErrorMessage, Form } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { loginPostData } from "../services/private";
const Login = () => {
const [Credentials, setCredentials] = useState({})
const [response, getResponse] = useState(null)
const [spinnerState, setSpinner]= useState(null)



useEffect(() => {
  loginPostData('login', Credentials, getResponse)
  setSpinner(false)

}, [Credentials, spinnerState,])
if(response){
  localStorage.setItem("token", response.data.token)
  setTimeout(() => {
  window.location.href = "/dashboard"
  }, 2000);
}


  const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Debes ingresar un usuario'),
   password: Yup.string().required('contraseña vacia')
  });



    return (
        <Formik
       initialValues={{ username:'', password:'' }}
       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
        setCredentials(values);
        setSpinner(true);
       }}
      >

       {props => (
           <div className="bg-slate-500 min-h-screen">
           <div className="grid grid-cols-12 justify-center ">
           <div className="w-full max-w-xs"/>
         <Form onSubmit={props.handleSubmit} className="bg-slate-400 col-span-10 col-start-2 md:col-start-5 md:col-span-4 shadow-md rounded px-9 pt-6 pb-8 mb-4 mt-20  md">
           
            <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">        Usuario
      </label>
           <input
             type="text"
             autoComplete="off"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.username}
             id="username"
            placeholder="Username"
             name="username"
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-100"
           />
           <ErrorMessage  name="username" className="text-xs text-red-600" render={(msg) => <span className="text-xs text-red-600"> {msg} </span>}/>
 <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-gray-100" 
      id="password" 
      name="password" 
      type="password" 
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.password}
      placeholder="*********"/>
      <ErrorMessage  name="password"   render={(msg) => <span className="text-xs text-red-600"> {msg} </span>}/>
    </div>

           {response=== null?
           <button type="submit" disabled={spinnerState} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!spinnerState?"transition-all transform active:translate-y-1 focus:outline-none hover:shadow-xl":" " }`}>{spinnerState? <div><div className="loader"></div> </div> 
           :"Submit"}</button>: 
           <>
           <button type="submit" disabled className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none">Loged in</button>

           <div className="p-4 mb-4 mt-2 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <span className="font-medium text-center">Has ingresado correctamente, Redireccionando</span> 


</div>
</>
           }

           
           </div>
         </Form>
         </div>
         </div>
       )}

     </Formik> );
}
 
export default Login;