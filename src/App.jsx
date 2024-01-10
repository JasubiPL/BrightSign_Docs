import { useState } from 'react'
import { Nav } from './components/Nav'
import { SecondaryNav } from './components/SecondaryNav'
import { introductionSection } from './data/pages.jsx'
import './App.css'


let switchSecondaryMenuControl = true

//Empeiza componente ---------------->

function App() {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState('secondaryMenu--hidden')
  const [currentPage, setCurrentPage] = useState(introductionSection[0].component)

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
        this.style.backgroundColor = "var(--gray-color)"
      })
    })

    setCurrentPage(page)
    switchSecondaryMenu()
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
          introduccion={ introductionSection }
          setPage={ changePage }
          secondaryMenuControl={switchSecondaryMenu}
        />
        { currentPage }
      </main>
    </>
  )
}

export default App
