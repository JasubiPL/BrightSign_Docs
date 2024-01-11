import { DialogBox } from '../components/DialogBox'
import '../styles/pages/pagesStyles.css'

export const Ecosistema = () =>{

  return(
    <section className="pagesBody">
      <section className='pagesBody--content'>
        <h1>Ecosistema</h1>
        <DialogBox type='comment'>
          Este es el codigo interno
        </DialogBox>
      </section>
      <aside className='pageBody__aside' >
        <div className='__aside__header'>
          <h3>En esta Pagína 🔎</h3>
        </div>
        <ol>
          <li>Tema 1</li>
          <li>Tema 2</li>
          <li>Tema 3</li>
          <li>Tema 4</li>
          <li>Tema 5</li>
          <li>Tema 6</li>
          <li>Tema 7</li>
          <li>Tema 8</li>
          <li>Tema 9</li>
          <li>Tema 10</li>
        </ol>
      </aside>
    </section>
  )
}