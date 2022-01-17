import React, { createContext, useState, useLayoutEffect } from "react";


const AppContextProvider = createContext();

const AppContext = ({ children }) => {
const [ContentLoaded, setContentLoaded] = useState(false)
useLayoutEffect(() => {

window.addEventListener("load", e=>{
  console.log(e)
    setContentLoaded(true)  

})


}, [ContentLoaded])
  return <AppContextProvider.Provider value={ContentLoaded}>{children}</AppContextProvider.Provider>;
};

export { AppContext };
export default AppContextProvider;