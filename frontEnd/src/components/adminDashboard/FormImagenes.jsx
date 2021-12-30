import { ErrorMessage } from "formik";

const FormImagenes = ({formik}) => {
    return ( 
        <div className="my-2 col-span-2 md:col-start-4 bg-slate-500 p-6 shadow-2xl rounded-lg mx-4"> 
        <div className="">
        <div className="my-5 flex flex-col">
        <label htmlFor="url1" className="text-amber-50">URL IMAGEN 1</label>
        <input onBlur={formik.handleBlur} value={formik.values.url1} onChange={formik.handleChange} className="text-black" type="text" name="url1" id="url1"/>
        <ErrorMessage  name="url1"  render={(msg) => <span className="text-sm text-red-600"> {msg} </span>}/>
        </div>
        <div className="my-5 flex flex-col">
        <label htmlFor="url2" className="text-amber-50">URL IMAGEN 2   </label>
        <input value={formik.values.url2} onChange={formik.handleChange} className="text-black" type="text" name="url2" id="url2" />
        </div>
        <div className="my-5 flex flex-col">
        <label htmlFor="url3" className="text-amber-50">URL IMAGEN 3</label>
        <input value={formik.values.url3} onChange={formik.handleChange} className="text-black" type="text" name="url3" id="url3" />
        </div>
       
        </div>
        </div> );
}
 
export default FormImagenes;