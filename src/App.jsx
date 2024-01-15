import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { SecondaryNav } from './components/SecondaryNav'
import { Ecosistema } from './pages/Ecosistema'
import { Home } from './pages/Home'
import './App.css'


let switchSecondaryMenuControl = true

//Empeiza componente ---------------->

function App() {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState('secondaryMenu--hidden')
  const [displaySecondaryMenu, setDisplaySecondaryMenu] = useState('display-none')
  const [currentPage, setCurrentPage] = useState(<Home  />)

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
    //⚠️ Corregir problema de la primera ejecucion
    const acordionMenuItem = document.querySelectorAll('.acordionMenu__item')

    acordionMenuItem.forEach((item) => {
      item.addEventListener('click', function() {
        // console.log('Click')
        acordionMenuItem.forEach((item) => {
          item.className = "acordionMenu__item"
          
        })
        this.className = "acordionMenu__item selected"

      })
    })

    setCurrentPage(page)
    switchSecondaryMenu()
  }

  const startBtn = () =>{
    setCurrentPage(<Ecosistema />)
    setDisplaySecondaryMenu('')
  }

  useEffect(() =>{
    setCurrentPage(<Home setPage={startBtn} />)
  },[])

  return (
    <>
      <header>
        <Nav secondaryMenuControl={switchSecondaryMenu} />
      </header>
      <main>
        <SecondaryNav
          stateSecondaryMenu={showSecondaryMenu}
          setPage={ changePage }
          secondaryMenuControl={switchSecondaryMenu}
          displayOnDescktop={displaySecondaryMenu}
        />
        { currentPage }
      </main>
      <footer>
      <a className='footer--center' href="https://www.linkedin.com/in/jasubip/" target='blanck'>
          Powered By
          <img src="./img/author.png" alt="" />
        </a>
      </footer>
    </>
  )
}

export default App
