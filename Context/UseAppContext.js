import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [lang, setLang] = useState("ESP");
    const [firstLoad, setFirstLoad] = useState(true);

    const displayIngles = (value) =>{
        setLang("ENG");
	}
    const displayEspañol = (value) =>{
        setLang("ESP");
	}

   const firstLoadHandler  = () =>{
      setFirstLoad(false)
   }
      
    return (
        <AppContext.Provider value={{
				lang, firstLoad, firstLoadHandler,
                displayIngles,
                displayEspañol
            }}>{children}</AppContext.Provider>)
}

export default useAppContext