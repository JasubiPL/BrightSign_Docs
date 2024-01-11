import { useState } from 'react'
import { BackArrow } from '../jsxIcons/BackArrow'
import '../styles/pages/pagesStyles.css'

export const Ecosistema = () =>{

  const [statusAside, setStatusAside ] = useState('__aside--hidden')


  return(
    <section className="pagesBody">
      <section className='pagesBody--content'>
        <h1>Ecosistema</h1>
        <div className='dialogBox'>
          error code (Error code: -7) on the same device.
        </div>
      </section>
      <aside className={`pageBody__aside  ${statusAside}`} >
        <div className='__aside__header'>
          <button onClick={() => setStatusAside('__aside--hidden')}>
            <BackArrow width={30} heigth={30}/>
          </button>
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