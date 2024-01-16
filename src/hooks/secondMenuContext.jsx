import { createContext, useState } from "react";

export const secondMenuContext = createContext()

export const SecondMenuContext = ({ children }) =>{
  
  const [stateSecondMenu, setStateSecondMenu] = useState('secondaryMenu--hidden')
  return(
    <secondMenuContext.Provider value={{stateSecondMenu, setStateSecondMenu}}>
      {children}
    </secondMenuContext.Provider>
  )
}