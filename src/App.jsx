import './App.css'
import { Nav } from './components/Nav'
import { SecondaryNav } from './components/SecondaryNav'

function App() {

  return (
    <>
      <header>
        <section className='author'>
          <p>Soportado por <a href="https://www.linkedin.com/in/jasubip/" target='blanck'> Jasubi Piñeyro - @jasubip</a></p>
        </section>
        <Nav />
      </header>
      <main>
        <SecondaryNav />
        <div className='bodyTest'></div>
      </main>
    </>
  )
}

export default App
