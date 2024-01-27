import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'
import Link from "next/link";



export default function InstalacionBrightAuthorPage(){

  return(
    <section className="pagesBody">
      <section className="pagesBody--content"> 
        <h1>Instalación de BrightAuthor</h1>
        <section>
          
          <p>Ahora exploremos BrightAuthor, el sistema de gestión de players y contenidos para escritorio. </p>
          <p>Con este Software, vamos a crear, cargar y asignar las presentaciones a nuestra nube, además de otras cosas más que aprenderás en profundidad 
            en la sección <Link className="link" href='/brightAuthor'>BrightAuthor</Link>.</p>
          
          <h2 className="mt-8">Instalación</h2>
          <p>Para descargar el software, dirígete a 
          <a className='link' href="https://www.brightsign.biz/resources/software-downloads/" target='blanck'>brightsign.biz/resources/software-downloads/</a></p>
          <p>En esta página te aparecerán las siguientes opciones.</p> 
          <img className="m-auto my-8 w-full md:w-3/4" src="/img/bs-author/bsa-download.png" alt="pantalla de descarga de brigthAuthor" />
          
          <p>Como podrás observar, te aparecerán 3 opciones:</p>
          <DialogBox type="comment" >

            <ul>
              <li>BrightAuthor:connected - Disponible para Mac y Windows</li>
              <li>BrightSignOS - Es el Firmware o sistema operativo de los Players</li>
              <li>BrightAuthor - Disponible solo para Windows.</li>
            </ul>

          </DialogBox>

          <p>Te estarás preguntando, cuál es la diferencia entre <Highlighted>BrightAuthor y BrightAuthor:connect.</Highlighted> <br />
          La diferencia yace en que BrightAuthor:connect, es una alternativa recién incorporada para el manejo del cloud, además de que se incorpora la compatibilidad con MacOS.</p>
          <p>Nosotros vamos a usar BrightAuthor en su versión <Highlighted>4.7.18 </Highlighted>, sin embargo, te dejamos el link con más información sobre 
          
          <a className='link' href="https://www.brightsign.biz/resources/tutorial-videos/" target='blanck'>BrightAuthor:connect</a></p>
          
          <p>Una vez que descargues el software, te aparecerá la siguiente venta de instalación, solo tenemos que presionar el botón <Highlighted>INSTALL</Highlighted> y el asistente de 
          instalación ara todo. Cuando haya finalizado la instalación, el botón <Highlighted>INSTALL</Highlighted> cambiará a <Highlighted>FINISH</Highlighted> y podremos
          cerrar el instaladro con el boton <Highlighted>Exit</Highlighted>.</p>

          <img className="m-auto my-8 w-4/5 md:w-3/5" src="/img/bs-author/bsa-install-window.png" alt="ventana de instalacion brigthAuthor" />

          <p>Una vez instalado, abriremos el programa desde el icono generado en el escritorio, o desde el menú de Inicio de Windows.</p>
          <p>Cuando abrimos el programa, nos lanzara un error que nos indica que no tenemos instalado <Highlighted>Bonjour</Highlighted> y que es una instalación necesaria para poder
          cargar el contenido y las presentaciones de forma local a nuestros players, sin embargo, solo daremos en aceptar ya que nos concentraremos en la carga a travez del la nube.</p>

          <img className="m-auto my-8 w-4/5 md:w-3/5" src="/img/bs-author/bsa-error-bonjour.png" alt="ventana de eror Bounjor" />

          <p>Este error aparecerá cada que abramos el programa, sin embargo, no es necesaria la instalación, ya que no afecta en nada el funcionamiento del programa.</p>

          <h2 className="mt-8">Interfaz</h2>
          <p>Al abrir por primera vez el programa, nos lanzará una venta para abrir o crear una presentación, sin embargo, nosotros presionaremos <Highlighted>Cancelar</Highlighted>.</p>
          
          <img className="m-auto my-8 w-full" src="/img/bs-author/bsa-first-open-1.png" alt="ventana inicio" />
          <img className="m-auto my-8 w-3/5" src="/img/bs-author/bsa-first-open-2.png" alt="ventana de inicio 2" />

          <p>El programa nos abrirá en la pestaña Create y como podrás notar, tenemos en la parte superior 4 pestañas: <Highlighted>Create</Highlighted>, <Highlighted>Edit</Highlighted>, <Highlighted>Publish</Highlighted>, <Highlighted>Manage</Highlighted> y 
          en la parte superior tenemos otras más pequeñas, las cuales son: <Highlighted>File</Highlighted>, <Highlighted>Edit</Highlighted> <Highlighted>Tools</Highlighted>, Help.</p>
          <DialogBox type="info">
            💡Todas estas pestañas y opciones las veremos superficialmente en esta sección de introducción.
          </DialogBox>
          
          <img className="m-auto my-8 w-3/4 md:w-3/4" src="/img/bs-author/bsa-options.png" alt="prestañas de opciones" />

          <p>Para finalizar esta sección y proseguir a configurar nuestro primer player, tenemos que habilitar la conexión a BrightSign Network, ya que está deshabilitada por defecto.</p>
          <p>Para esto iremos a <Highlighted>Edit » Preferences</Highlighted></p>

          <img className="m-auto my-8 w-3/4 md:w-3/4" src="/img/bs-author/bsa-preferences-window.png" alt="ventana preferencias" />

          <p>Se nos abrirá una pequeña ventana con varias opciones que revisaremos más adelante, por lo mientras nos dirigiremos a <Highlighted>Network</Highlighted>,
           seleccionaremos la casilla <Highlighted>Enable BrightSign Network</Highlighted> y presionaremos OK</p>
          
          <img className="m-auto my-8 w-3/4 md:w-3/4" src="/img/bs-author/bsa-preferences-network-window.png" alt="ventana preferencias y opcion Network" />
          
          <p>Para verificar que se habilitó el uso de la BS Network, se nos tendrá que habilitar un mensaje en la esquina superior derecha, arriba del botón <Highlighted>Upload to network</Highlighted>, 
          que diga <Highlighted>No Signed In</Highlighted>.</p>
          <p>Seguiremos con BrightAuthor en la lección de <Link className="link" href='/documentacion/introduccion/05-creando-presentacion'>Crear Presentación</Link></p>
        </section>

        {/*----------------- Prefooter ------------- */}
        <section className="flex w-full justify-between items-center mt-8">
        <PreviusPage slug='/documentacion/introduccion/02-primeros-pasos'>Primeros Pasos</PreviusPage>
        <NextPage slug='/documentacion/introduccion/04-configurando-player'>Configurando Player</NextPage>
        </section>
      </section>
    </section>
  )
}