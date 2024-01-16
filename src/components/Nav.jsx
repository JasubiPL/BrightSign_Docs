import { GitHubIcon } from '@/jsxIcons'
import { BurgerMenu } from '@/jsxIcons/BurgerMenu'
import '@/styles/Nav.css'
import Link from 'next/link'
import { onSecondMenu } from '@/hooks/useSecondMenu'
import { useContext } from 'react'


export const Nav = () =>{
  const { SecondMenuContext, showSecondMenu, } = onSecondMenu()
  const stateSecondMenu = useContext(SecondMenuContext)
  console.log(stateSecondMenu)

  return(
    <nav className='principalMenu'>
      <div className='principalMenu__logo'>
        <button className='btnSecondaryMenu' onClick={ showSecondMenu }>
          <BurgerMenu />
        </button>
        <Link href='/'>Bright<span>Sign</span></Link>
        <img src='/img/icons/doc.png' alt='Bandea mexico' />
      </div>
      <section className='principalMenu__socialNetwork'>
        <a href="https://github.com/JasubiPL/BrightSign_Docs" target='blanck'>
          <GitHubIcon width={30} height={30} fill="#fff"/>
        </a>
      </section>
    </nav>
  )
}