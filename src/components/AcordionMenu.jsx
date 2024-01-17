import Link from 'next/link'
import '../styles/AcordionMenu.css'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { secondMenuContext } from '@/hooks/secondMenuContext'


export const AcordionMenu = ({ title, list}) =>{
  const [{ state, classActive }, setAcordionSwitch] = useState({ state: true, classActive: 'acordionMenuActive'})
  
  const pathname = usePathname()
  const smContext = useContext(secondMenuContext)
  const { setStateSecondMenu } = smContext

  const switchAcordion = () =>{

    if(state){
      setAcordionSwitch({ state: false, classActive:'acordionMenuInactive'})
    }else{
      setAcordionSwitch({ state: true, classActive:'acordionMenuActive'})

    }
  }

  useEffect(() =>{
    setStateSecondMenu('secondaryMenu--hidden')
  },[pathname])


  return(
    <ul className={classActive} >
      <h3 onClick={switchAcordion}>{ title }</h3>
      {
        list.map( option =>(
          <li className={`acordionMenu__item ${ pathname === option.slug ? 'selected' : ''}`} key={ option.title } id={option.slug}>
            <Link href={option.slug}>
              {option.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}