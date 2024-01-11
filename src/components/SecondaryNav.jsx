import { BackArrow } from '../jsxIcons/BackArrow'
import '../styles/SecondaryNav.css'
import { AcordionMenu } from './AcordionMenu'
import { sections } from '../data/pages'


export const SecondaryNav = ({ stateSecondaryMenu, setPage, secondaryMenuControl}) =>{

  
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

      {
        sections.map(section =>{

          return(
            <AcordionMenu
              key={section.titleSection}
              title={ section.titleSection } 
              list={ section.subSections }
              setPage={setPage} 
            />
          )
        })
      }

    </nav>
  )
}