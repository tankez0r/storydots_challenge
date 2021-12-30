import React, { createContext, useState, useEffect } from "react";


const AppContextProvider = createContext();

const AppContext = ({ children }) => {
const [ContentLoaded, setContentLoaded] = useState(false)
useEffect(() => {

window.addEventListener("load", e=>{

    setContentLoaded(true)  

})


}, [ContentLoaded])
  return <AppContextProvider.Provider value={ContentLoaded}>{children}</AppContextProvider.Provider>;
};

export { AppContext };
export default AppContextProvider;