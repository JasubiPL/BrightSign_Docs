import '../styles/SecondaryNav.css'
import { AcordionMenu } from './AcordionMenu'

const inicioRapido = ['opcion 1','opcion 2','opcion 3','opcion 4','opcion 5']
const problemasFrecuentes = ['opcion 1','opcion 2','opcion 3', 'comentarios']
const test = ['opcion 1','opcion 2','opcion 3', 'comentarios']

export const SecondaryNav = () =>{
  return(
    <nav className='secondaryMenu'>
      <h2>Introducción</h2>
      <AcordionMenu title='Inicio Rapido' list={inicioRapido} />
      <AcordionMenu title='Test' list={test} />
    </nav>
  )
}