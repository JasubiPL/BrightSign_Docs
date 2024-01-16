import { BackArrow } from '@/jsxIcons/BackArrow'
import { AcordionMenu } from '@/components/AcordionMenu'
import { sections } from '@/data/pages'
import '@/styles/SecondaryNav.css'
import { useContext } from 'react'
import { secondMenuContext } from '@/hooks/secondMenuContext'



export const SecondaryNav = ({ displayOnDescktop}) =>{

  const smContext = useContext(secondMenuContext)
  const { stateSecondMenu, setStateSecondMenu } = smContext

  return(
    <nav className={`secondaryMenu ${ stateSecondMenu } ${displayOnDescktop}`}>
      <section className='secondaryMenu__header'>
        <button onClick={() => setStateSecondMenu('secondaryMenu--hidden') }>
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