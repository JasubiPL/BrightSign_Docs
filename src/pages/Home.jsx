import { GitHubIcon } from '../jsxIcons'
import { Ecosistema } from './Ecosistema'
import '../styles/pages/homePage.css'

export const Home = ({ setPage }) =>{

  return(
    <section className="homePage">
      <section className='presentation'>
        <article className='presentation__title'>
          <h1>
            La documentación en español sobre el sistema de señalización digital más usado.
          </h1>
          <button onClick={() => setPage(<Ecosistema />)}>Comenzar</button>
          <a href="https://github.com/JasubiPL/BrightSign_Docs" target="_blank" >
            <GitHubIcon width={20} height={20} fill='currentColor'/>
            Github
          </a>
        </article>
        <article className='presentation__img'>
          <img src="./img/wallpaper-players.png" alt="" />
        </article>
      </section>
    </section>
  )
}