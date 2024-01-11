import { DialogBox } from '../components/DialogBox'
import { sections } from '../data/pages'
import { PageAside } from '../components/PageAside'
import '../styles/pages/pagesStyles.css'


export const Configuracion = () =>{
  const currentSection = sections.find(section => section.titleSection == '⭐ Introduccion')
  const internalSection = currentSection.subSections[1].internalSections

  return(
    <section className="pagesBody">
      <section className='pagesBody--content'>
        <h1>Configuracion</h1>
        <DialogBox type='error'>
          Este es el codigo interno
        </DialogBox>
      </section>
      <PageAside internalSection={ internalSection }/>
    </section>
  )
}