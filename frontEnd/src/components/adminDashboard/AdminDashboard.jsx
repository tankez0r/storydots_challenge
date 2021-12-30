import { Link } from "react-router-dom";


const AdminDashboard = () => {
    return ( 
            <div className="flex flex-col sm:flex-row min-h-screen sm:items-center sm:justify-evenly bg-slate-200 place-content-evenly">
            <Link to='/forms'  className="self-center hover:cursor-pointer transform active:translate-y-2">
                <div className="mx-2 my-2 px-12 py-6 bg-yellow-200 shadow-md hover:shadow-xl rounded-md">
                <h1 className="mx-2 text-center text-2xl font-bold pb-5">Crear Producto/Marca</h1>
                <img src="https://drive.google.com/uc?export=download&id=1tzhWO6ngfaDe_YDD0VB3YBjZcxrKBKlE" className="mx-auto" alt="icon" width={200} />
                </div>
            </Link>
            <Link to="/editable" className="self-center hover:cursor-pointer transform active:translate-y-2">
            <div className=" mx-2 my-2 py-6 px-12 bg-yellow-200 shadow-md hover:shadow-xl rounded-md">
            <h1 className="mx-2 text-center text-2xl font-bold pb-5">Editar Producto/Marca</h1>
            <img src="https://drive.google.com/uc?export=download&id=1JmxkA8xt03qxBVMrfYY3T-fM9jpDYRfO" className="mx-auto " alt="icon2" width={200}/>
            </div>
            </Link>

            </div>

    );
}
 
export default AdminDashboard;