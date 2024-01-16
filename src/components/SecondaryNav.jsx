import { BackArrow } from '@/jsxIcons/BackArrow'
import { AcordionMenu } from '@/components/AcordionMenu'
import { sections } from '@/data/pages'
import '@/styles/SecondaryNav.css'
import { onSecondMenu } from '@/hooks/useSecondMenu'
import { useContext } from 'react'



export const SecondaryNav = ({ displayOnDescktop}) =>{

  const { SecondMenuContext, hiddenSecondMenu, } = onSecondMenu()
  const stateSecondMenu = useContext(SecondMenuContext)

  return(
    <nav className={`secondaryMenu ${ stateSecondMenu } ${displayOnDescktop}`}>
      <section className='secondaryMenu__header'>
        <button onClick={ hiddenSecondMenu }>
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
            />
          )
        })
      }

    </nav>
  )
}