import { useState } from 'react'
import { GitHubIcon } from '../jsxIcons/GitHubIcon'
import { SearchIcon } from '../jsxIcons/SearchIcon'
import '../styles/Nav.css'

export const Nav = () =>{
  const [switchSearch, setSwitchSearch] = useState('__MovileSearch-hidden')
  
  return(
    <nav className='principalMenu'>
      <div className='principalMenu__logo'>
        <h1>Bright<span>Sign.doc</span></h1>
        <img src='./img/icons/flag-mx.svg' alt='Bandea mexico' />
      </div>
      <form className={`${screen.width > 500 ? 'principalMenu__search' : `principalMenu__MovileSearch ${switchSearch}` }`}>
        <input type="text" placeholder='🔎 Buscar' />
      </form>
      <section className='principalMenu__socialNetwork'>
        <button onClick={() => setSwitchSearch('__MovileSearch-show')}>
          <SearchIcon width={30} height={30} fill='#fff' />          
        </button>
        <a href="https://github.com/JasubiPL/BrightSign_Docs" target='blanck'>
          <GitHubIcon width={30} height={30} fill="#fff"/>
        </a>
      </section>
    </nav>
  )
}