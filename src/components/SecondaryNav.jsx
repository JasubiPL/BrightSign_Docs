import '../styles/SecondaryNav.css'
import { AcordionMenu } from './AcordionMenu'


export const SecondaryNav = ({ stateSecondaryMenu, introduccion, setPage}) =>{

  
  return(
    <nav className={`secondaryMenu ${ stateSecondaryMenu }`}>
      <AcordionMenu title='Introduccion' list={ introduccion } setPage={setPage} />

    </nav>
  )
}