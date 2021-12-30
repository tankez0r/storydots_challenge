import { Link} from "react-router-dom";

const NavBar = () => {

const token = localStorage.getItem("token");
const logout = (e) => {
  e.preventDefault()
  localStorage.removeItem("token")
  setTimeout(() => {
    window.location.href = "/"
  }, 500);
  
}

    return ( 
        <div className="bg-yellow-100">
        <nav className="grid grid-cols-12 ">
           <Link to="/" className="ml-3 text-lg strong font-bold col-span-2 my-4">Text<span className="font-normal">Moda</span></Link> 
        {token?
   <>
        <button onClick={(e)=>{logout(e)}} className=" transform active:translate-y-1 col-start-7  md:col-span-2 md:col-start-8 col-span-2 text-center bg-red-500  drop-shadow-lg  rounded-md my-4 transition-all hover:bg-red-300 hover:shadow-xl sm:mr-2 text-gray-100">Logout</button>
        <Link to="/dashboard" className=" transform active:translate-y-1 col-start-10 col-span-3 text-center bg-yellow-100  drop-shadow-lg  rounded-md my-4 transition-all hover:bg-yellow-200 hover:shadow-xl sm:mr-2">Dashboard</Link>
        </>
         :
          <Link to="/login" className=" col-start-10 col-span-3 text-center bg-yellow-100  drop-shadow-lg  rounded-md my-4 transition-all transform active:translate-y-1 hover:bg-yellow-200 hover:shadow-xl sm:mr-2">Login</Link>}
            </nav> 

                </div>
                      
     );
}
 
export default NavBar;