import Link from 'next/link'
import '../styles/AcordionMenu.css'
import { useState } from 'react'


export const AcordionMenu = ({ title, list}) =>{
  
  
  const [{ state, classActive }, setAcordionSwitch] = useState({ state: true, classActive: 'acordionMenuActive'})

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
          
          <li className='acordionMenu__item' key={ option.title }><Link href={option.slug}>{option.title}</Link></li>
        ) )
      }
    </ul>
  )
}