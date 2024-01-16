const { createContext, useState } = require("react");



export const onSecondMenu = () =>{
  const [stateSecondMenu, setStateSecondMenu] = useState('secondaryMenu--show')
  const SecondMenuContext = createContext(stateSecondMenu)


  const hiddenSecondMenu = () =>{
    setStateSecondMenu('secondaryMenu--hidden')
    console.log('Se cierra menu')
    console.log(stateSecondMenu)
  }

  
  const showSecondMenu = () =>{
    setStateSecondMenu('secondaryMenu--show')
    console.log('Se abre menu')
    console.log(stateSecondMenu)
  }

  return{
    SecondMenuContext,
    showSecondMenu,
    hiddenSecondMenu,
  }

}