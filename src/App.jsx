import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { SecondaryNav } from './components/SecondaryNav'

let switchSecondaryMenuControl = true

function App() {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState('secondaryMenu--hidden')

  const switchSecondaryMenu = () =>{
    
    if(switchSecondaryMenuControl){
      setShowSecondaryMenu('secondaryMenu--show')
      switchSecondaryMenuControl = false
    }else{
      setShowSecondaryMenu('secondaryMenu--hidden')
      switchSecondaryMenuControl = true
    }
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
        <SecondaryNav stateSecondaryMenu={showSecondaryMenu}/>
        <div className='bodyTest'>Test</div>
      </main>
    </>
  )
}

export default App
