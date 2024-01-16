import Link from 'next/link'
import '../styles/AcordionMenu.css'
import { useEffect, useState } from 'react'
import { currentPath } from '@/helpers/currentPaths'
import { usePathname } from 'next/navigation'


export const AcordionMenu = ({ title, list}) =>{
  const [{ state, classActive }, setAcordionSwitch] = useState({ state: true, classActive: 'acordionMenuActive'})
  const pathname = usePathname()

  const switchAcordion = () =>{

    if(state){
      setAcordionSwitch({ state: false, classActive:'acordionMenuInactive'})
    }else{
      setAcordionSwitch({ state: true, classActive:'acordionMenuActive'})

    }
  }

  useEffect(() =>{
    currentPath(pathname)
  },[pathname])


  return(
    <ul className={classActive} >
      <h3 onClick={switchAcordion}>{ title }</h3>
      {
        list.map( option =>(
          <li className={`acordionMenu__item`} key={ option.title } id={option.slug}>
            <Link href={option.slug}>
              {option.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}