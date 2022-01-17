
import React, {memo} from "react";
import FormulariosCreacion from "./FormulariosCreacion";
import FormulariosEdicion from "./FormulariosEdicion";

const FormularioParaProducto = memo ( () => {

  const urlObject = new URLSearchParams(window.location.search);
  const type = urlObject.get("type");
  return ( 
    <div className="flex justify-around flex-wrap content-center py-2 min-h-screen mb-20"> 
    <div>
      {!type?

<FormulariosCreacion/>

:   /* division entre formulario de creación y edicion */

<FormulariosEdicion/>




  }
    </div>

    </div> 
   );
})
 
export default FormularioParaProducto;