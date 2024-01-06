import '../styles/AcordionMenu.css'
import { useState } from 'react'

let switchControl = true;

export const AcordionMenu = ({ title, list}) =>{
  const [acordionSwitch, setAcordionSwitch] = useState('acordionMenuInactive')

  const switchAcordion = () =>{

    if(switchControl){
      setAcordionSwitch('acordionMenuActive')
      switchControl = false
    }else{
      setAcordionSwitch('acordionMenuInactive')
      switchControl = true
    }
  }

  return(
    <ul className={acordionSwitch} >
      <h3 onClick={switchAcordion}>{ title }</h3>
      {
        list.map( option =>(
          <li key={ option }>{option}</li>
        ) )
      }
    </ul>
  )
}