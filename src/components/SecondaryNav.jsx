import { BackArrow } from '../jsxIcons/BackArrow'
import '../styles/SecondaryNav.css'
import { AcordionMenu } from './AcordionMenu'


export const SecondaryNav = ({ stateSecondaryMenu, introduccion, setPage, secondaryMenuControl}) =>{

  
  return(
    <nav className={`secondaryMenu ${ stateSecondaryMenu }`}>
      <section className='secondaryMenu__header'>
        <button onClick={ secondaryMenuControl }>
          <BackArrow width={30} heigth={30}/>
        </button>
        <div className='__header__logo'> 
          <h3>Bright<span>Sign.doc</span></h3>
        </div>
      </section>

      <AcordionMenu 
        title='⭐ Introduccion' 
        list={ introduccion } 
        setPage={setPage} 
      />

    </nav>
  )
}