import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Ecosistema, Configuracion, GestionDeContenido } from './pages'
import { SecondaryNav } from './components/SecondaryNav'

let switchSecondaryMenuControl = true

const introduccion = [
  {
    component: <Ecosistema />,
    title:'Ecosistema',
  },
  {
    component: <Configuracion />,
    title:'Configuracion',
  },
  {
    component: <GestionDeContenido />,
    title:'Gestion de contenido',
  },
]

//Empeiza componente ---------------->

function App() {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState('secondaryMenu--hidden')
  const [currentPage, setCurrentPage] = useState(<Ecosistema />)

  const switchSecondaryMenu = () =>{
    
    if(switchSecondaryMenuControl){
      setShowSecondaryMenu('secondaryMenu--show')
      switchSecondaryMenuControl = false
    }else{
      setShowSecondaryMenu('secondaryMenu--hidden')
      switchSecondaryMenuControl = true
    }
  }

  const changePage = (page) =>{
    const acordionMenuItem = document.querySelectorAll('.acordionMenu__item')
    
    
    acordionMenuItem.forEach((item) => {
      item.addEventListener('click', function () {
        acordionMenuItem.forEach((item) => {
          item.style.backgroundColor = "var(--black-color)"
        })
        this.style.backgroundColor = "var(--secondary-color)"
      })
    })

    setCurrentPage(page)
  }

    


  return (
    <>
      <header>
        <section className='author'>
          <p>Soportado por <a href="https://www.linkedin.com/in/jasubip/" target='blanck'> Jasubi Piñeyro - @jasubip</a></p>
        </section>
        <Nav secondaryMenuControl={switchSecondaryMenu}/>
      </header>
      <main>
        <SecondaryNav 
          stateSecondaryMenu={showSecondaryMenu} 
          introduccion={ introduccion } 
          setPage={ changePage }
        />
        { currentPage }
      </main>
    </>
  )
}

export default App
