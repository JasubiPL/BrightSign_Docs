import { GitHubIcon } from '../jsxIcons/GitHubIcon'
import '../styles/Nav.css'

export const Nav = () =>{
  return(
    <nav className='principalMenu'>
      <div className='principalMenu__logo'>
        <h1>Bright<span>Sign.doc</span></h1>
        <img src='./img/icons/flag-mx.svg' alt='Bandea mexico' />
      </div>
      <form className='principalMenu__search'>
        <input type="text" placeholder='🔎 Buscar' />
      </form>
      <section className='principalMenu__socialNetwork'>
        <a href="https://github.com/JasubiPL/BrightSign_Docs" target='blanck'>
          <GitHubIcon width={30} height={30} fill="#fff"/>
        </a>
      </section>
    </nav>
  )
}