import { secondMenuContext } from '@/hooks/secondMenuContext'
import { GitHubIcon } from '@/jsxIcons'
import { BurgerMenu } from '@/jsxIcons/BurgerMenu'
import '@/styles/Nav.css'
import Link from 'next/link'
import { useContext } from 'react'


export const Nav = () =>{
  const smContext = useContext(secondMenuContext)
  const { setStateSecondMenu } = smContext
  return(
    <nav className='principalMenu'>
      <div className='principalMenu__logo'>
        <button className='btnSecondaryMenu' onClick={() => setStateSecondMenu('secondaryMenu--show')}>
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