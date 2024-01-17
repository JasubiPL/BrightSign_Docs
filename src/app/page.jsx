'use client'
import Link from 'next/link'
import { GitHubIcon } from '@/jsxIcons'
import { DialogBox } from '@/components/DialogBox'
import '@/styles/pages/homePage.css'


//Empeiza componente ---------------->

function HomePage() {
  return (
    <main className="homePage">
      <section className='presentation'>
        <article className='presentation__title'>
          <h1>
            La documentación en español sobre el sistema de señalización digital más usado.
          </h1>
          <p>
            La única sobre el ecosistema BrigthSign.
          </p>
          <div className='__buttons'>
            <Link className='btnPrimary' href='/documentacion/introduccion/ecosistema' >🚀 Comenzar</Link>
            <a href="https://github.com/JasubiPL/BrightSign_Docs" target="_blank" >
              <GitHubIcon width={20} height={20} fill='currentColor'/>
              Github
            </a>
          </div>
        </article>
        <img src="./img/wallpaper-players.webp" alt="" />
      </section>
      <section className='topics'>
        <DialogBox type='info' >
          <h2>🪐 Ecosistema</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eveniet accusantium aliquam illum qui molestias. Doloribus, odio a dolor eum repudiandae, laudantium iure reiciendis enim aliquam temporibus, aut dolorem quidem!</p>
        </DialogBox>
        <DialogBox type='info' >
          <h2>🌐 BrigthSign Network</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eveniet accusantium aliquam illum qui molestias. Doloribus, odio a dolor eum repudiandae, laudantium iure reiciendis enim aliquam temporibus, aut dolorem quidem!</p>
        </DialogBox>
        <DialogBox type='info' >
          <h2>💻 Players</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eveniet accusantium aliquam illum qui molestias. Doloribus, odio a dolor eum repudiandae, laudantium iure reiciendis enim aliquam temporibus, aut dolorem quidem!</p>
        </DialogBox>
        <DialogBox type='info' >
          <h2>⚠️ Errores Frecuentes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eveniet accusantium aliquam illum qui molestias. Doloribus, odio a dolor eum repudiandae, laudantium iure reiciendis enim aliquam temporibus, aut dolorem quidem!</p>
        </DialogBox>
      </section>
    </main>
  )
}

export default HomePage
