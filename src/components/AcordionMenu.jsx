import '../styles/AcordionMenu.css'
import { useState } from 'react'


export const AcordionMenu = ({ title, list}) =>{
  
  const [{ state, classActive }, setAcordionSwitch] = useState({ state: false, classActive: 'acordionMenuInactive'})
  // const [switchControl, setSwitchControl] = useState(false)

  const switchAcordion = () =>{

    if(state){
      setAcordionSwitch({ state: false, classActive:'acordionMenuInactive'})
    }else{
      setAcordionSwitch({ state: true, classActive:'acordionMenuActive'})

    }
  }

  return(
    <ul className={classActive} >
      <h3 onClick={switchAcordion}>{ title }</h3>
      {
        list.map( option =>(
          <li key={ option }>{option}</li>
        ) )
      }
    </ul>
  )
}