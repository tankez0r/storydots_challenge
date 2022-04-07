import NavBar from "./components/NavBar"
import Index from "./components/index/Index"
import Login from "./components/Login/login";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FormularioMain from "./components/adminDashboard/FormularioMain";
import SelectProduct from "./components/adminDashboard/SelectProduct";
import Cuatrocerocuatro from "./components/CuatroceroCuatro";
import Enblanco from "./components/index/Enblanco";
function App() {
const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
    <div>
<NavBar />
     <Routes>
     <Route path="/" element={ <Index/>} />
       {token? 
       <> <Route path="/dashboard" element={<AdminDashboard/>}/>
       <Route path="/forms" element={<FormularioMain/>} />
       <Route path="/editable" element={<SelectProduct/>} />
       <Route path="/enblanco" element={<Enblanco></Enblanco>} />
       </>
      : <Route path="/login" element={<Login/>} />
       }
       <Route path="*" element={<Cuatrocerocuatro/>}/>
       
        
        
        
      </Routes>
      </div>
      </BrowserRouter>
  
  )
}

export default App
