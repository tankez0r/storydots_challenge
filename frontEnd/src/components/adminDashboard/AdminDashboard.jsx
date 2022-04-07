import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';

const AdminDashboard = () => {
    const [contentLoaded, setContentLoaded ]= useState(false)

   
   
    const awesomePlaceholder = (
      <div className='my-awesome-placeholder'>
                  <div className="grid grid-cols-12">
        <TextBlock rows={1} className="hidd col-start-1 col-span-12" color='black'/>
        <TextBlock rows={1} className="mb-5 col-start-1 col-span-12" color='black'/>
        </div>
        <RectShape color="black"  className="my-1"  style={{width: 220, height: 200}}/>

      </div>
    );

    return ( 
    <div onLoad={(e)=>{setTimeout(() => {
      setContentLoaded(true)
    }, 100);}}>
            <div className="flex flex-col sm:flex-row min-h-screen sm:items-center sm:justify-evenly bg-slate-200 place-content-evenly">
            <Link to='/forms'  className="self-center hover:cursor-pointer transform active:translate-y-2">
                <div className="mx-2 my-2 px-12 py-6 bg-yellow-200 shadow-md hover:shadow-xl rounded-md">
                <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}>
                <h1 className="mx-2 text-center text-2xl font-bold pb-5">Crear Producto/Marca</h1>
                </ReactPlaceholder>
                <img src="https://drive.google.com/uc?export=download&id=1tzhWO6ngfaDe_YDD0VB3YBjZcxrKBKlE" className={contentLoaded? "mx-auto": "hidden" } alt="icon" width={200} />
                </div>
            </Link>
            
            
            <Link to="/editable" className="self-center hover:cursor-pointer transform active:translate-y-2">
            <div className=" mx-2 my-2 py-6 px-12 bg-yellow-200 shadow-md hover:shadow-xl rounded-md">
            <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}>
            <h1 className="mx-2 text-center text-2xl font-bold pb-5">Editar Producto/Marca</h1>  
            </ReactPlaceholder>
            <img src="https://drive.google.com/uc?export=download&id=1JmxkA8xt03qxBVMrfYY3T-fM9jpDYRfO"  className={contentLoaded? "mx-auto": "hidden"} alt="icon2" width={200}/>
           </div>
            </Link>

            </div>
            </div>
    );
}
 
export default AdminDashboard;