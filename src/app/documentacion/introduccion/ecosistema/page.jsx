import { sections } from '@/data/pages'
import { PageAside } from '@/components/PageAside'
import { DialogBox } from '@/components/DialogBox'
import '@/styles/pages/pagesStyles.css'
import '@/styles/pages/ecosistema.css'


export default function EcosistemaPage() {
  const currentSection = sections.find(section => section.titleSection == '⭐ Introduccion')
  const internalSection = currentSection.subSections[0].internalSections

  return(
    <section className="pagesBody ecosistema">
      <section className='pagesBody--content'>
        <h1 id='Introducción'>Introducción</h1>
        <section className='__introduccion'>
          <p>
            BrightSign es un sistema de gestión de contenido con mucho potencial que nos permite proyectar imágenes, 
            videos he incluso archivos HTML5, dependiendo el modelo del Player.
            <br /><br />
            Este es un manual de usuario básico en el cual encontraras los fundamentos para poder gestionar el 
            contenido adecuadamente. Siempre podrás ir a la página oficial <a className='link' href="https://brightsign.biz" target='blanck'>BrightSign.biz</a> para mas informacion, cabe mencionar que dicho contenido esta en inglés.
            <br /><br />        
            También puedes acceder a los cursos especializados que ofrece BrightSign, en <a className='link' href="https://www.brightsign.biz/resources/brightsign-academy/" target='blanck'> BrightSign Academy </a> solo que estos cursos son de igual manera en ingles y son del su nueva Network.
          </p>

          <DialogBox type='comment'>
            <label>El sistema de BrightSign está formado de 3 partes:</label>
            
            <ul>
              <li>Los Dispositivos llamados Players</li>
              <li>La nube o red llamada BrightSign Network</li>
              <li>El programa de escritorio BrightAuthor</li>
            </ul>
          </DialogBox>
        </section>
        <section id='Qué es un Players' className='__players'>
          <h2>¿Qué es un Player?</h2>
          <p>
            El Player es el dispositivo a través del cual se transmite el contenido a una pantalla, panel led, proyector, etc.
            <br /><br />
            Estos dispositivos cuentan con varias entradas y características dependiendo el modelo, ofreciéndonos diferentes soluciones.
          </p>
          <DialogBox type='comment'>
          <label>Algunas de las entradas con las que cuentan estos dispositivos  son:</label>
          <ul>
            <li>USB-C</li>
            <li>USB-A</li>
            <li>HDMI</li>
            <li>Mini Jack</li>
            <li>IR</li>
            <li>GPIO</li>
          </ul>            
          
          </DialogBox>
          <p>
            Actualmente, estamos en la 5ª generación, sin embargo, debido a que las generaciones 1 -3 ya están descontinuadas
            y sin soporte, aremos referencia a los modelos de la 4ª y 5ª generación.
          </p>

          <section className='__playersModels'>
            <div className='__item'>
              <img src="/img/players-models/LS5-1.webp" alt="Player modelo LS" />
              <span>Gama LS</span>
            </div>
            <div className='__item'>
              <img src="/img/players-models/HD5-1.webp" alt="Player modelo HD" />
              <span>Gama HD</span>
            </div>
            <div className='__item'>
              <img src="/img/players-models/XD5-1.webp" alt="Player modelo XD" />
              <span>Gama XD</span>
            </div>
            <div className='__item'>
              <img src="/img/players-models/XT5-1.webp" alt="Player modelo XT" />
              <span>Gama XT</span>
            </div>
            <div className='__item'>
              <img src="/img/players-models/XC5-1.webp" alt="Player modelo XC" />
              <span>Gama XC</span>
            </div>
          </section>
        </section>
        <section className='__bsNetwork'>
          <h2 id='BrightSign Network'>BrightSign Network</h2>
          <p>
            BrightSign Network es el nombre que tiene el ecosistema de BrightSign, la suma del portal de internet, la aplicación de
            escritorio, la nube y los Players.
            <br /><br />
            Cuenta con portal de internet en <a className='link' href="https://www.brightsignnetwork.com" target='blanck'>brightsignnetwork.com</a> donde deberás ingresar tus credenciales para poder acceder. 
            <br /><br />
            En la sección Portal Web encontrarás más información sobre cómo obtener tus credenciales.

            La aplicación de escritorio es <span className='highlighted'>BrigthSign Author</span>, la cual está disponible solo en Windows.
            En ambas plataformas podrás controlar las licencias, cargar los contenidos, monitorear los players en tiempo real, recibir
             los reportes de errores, administrar a los usuarios, así como sus permisos.
          </p>
          <img src="/img/ecosistema.webp" alt="ecosistema Brightsign" />
        </section>

      </section>
      <PageAside internalSection={ internalSection }/>
    </section>
  )
}