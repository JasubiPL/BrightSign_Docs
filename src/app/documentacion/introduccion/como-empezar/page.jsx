import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PageAside } from "@/components/PageAside";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'
import { sections } from "@/data/pages";


export default function ComoEmpezarPage(){
  const currentSection = sections.find(section => section.titleSection == '🚀 Introduccion')
  const internalSection = currentSection.subSections[1].internalSections

  return(
    <section className="pagesBody">
      <section className="pagesBody--content"> 
        <h1>Cómo Empezar</h1>
        <section className="mt-16">
          <h2>Primeros pasos en BrigthSign</h2>

          <p>Para poder usar BrightSign Network o BrightSign Author para controlar los Players, necesitas tener un usuario, contraseña y una nube.</p>
          <p>Para obtener estos datos necesitarás acudir con algún embajador de la marca dependiendo de tu país. En México tenemos por mencionar algunos a Pixel Window y NewTimes.</p>
          <p>Básicamente, lo que harán será venderte una licencia, el costo variará dependiendo del proveedor y duran 1 año.</p>

          <DialogBox type="info" >
            💡 Se requiere una licencia por player
          </DialogBox>

          <p>
          Cuando compres tu primera licencia, el proveedor pedirá un correo para darlo de alta 
          como <Highlighted>Administrador</Highlighted>, una contraseña y, por 
          supuesto, te preguntará cuál deseas que sea el nombre de la <Highlighted>nube</Highlighted> 
          donde gestionarás a todos los players. <Highlighted>Puedes tener varias nubes usando el mismo correo.</Highlighted>
          </p>
        </section>
        <section className="mt-8">
          <h2>Interfaz de usuario</h2>

          <p>Una vez ya cuentas con tus datos de acceso, ingresa al portar web en <a className="link" href="https://brightsignnetwork.com/" target="_blank">brightsignnetwork.com</a></p>
          <img className="m-auto my-8 w-full md:w-3/4" src="/img/bs-network/login-page-bsnetwork.webp" alt="pagina de brightsign network"  />
          <p>
            Aquí nos pedirán usuario y contraseña, sin embargo, nosotros accederemos en el enlace de la 
            parte inferior derecha que dice New User. <Highlighted>Esto solo es la primera vez que creamos una nube, 
            después podemos acceder con normalidad en la página Sign In.</Highlighted>
          </p>
          <p>
            Al dar clic en <Highlighted>New User</Highlighted> nos mandará a la página de registro y no pedirá 
            el nombre de la nube que dio de alta el proveedor, el correo que le proporcionaste y él te dará 
            el <Highlighted>SUBSCRIPTION CODE</Highlighted> o codigo de subscripcion.
          </p>
          <p>
            Seleccionarás la casilla de Términos y Condiciones y, por último daremos clic en <Highlighted>SUBMIT</Highlighted> para acceder.
          </p>
          <img className="m-auto my-8 w-full md:w-1/2" src="/img/bs-network/register-bsnetwork.webp" alt="pagina de brightsign network"  />
          <p>
            Posteriormente, te aparecerá la pantalla de inicio de BrightSign Network, <Highlighted>la cual revisa revisaremos más en profundidad en otras secciónes.</Highlighted>
          </p>
          <img className="my-8" src="/img/bs-network/home-page-bs-network.webp" alt="BSNetwork Home" />
          <p>
          Al acceder, la primera página que nos muestra es la de <Highlighted>SETTINGS</Highlighted> donde tenemos diferente información como nuestro usuario, los permisos que tenemos y la posibilidad de cambiar la contraseña.
          </p> 
          <p>
            Dentro del portal podemos encontrar varias secciones, las más importantes y las que probablemente más vas a usar son:
          </p>
          <DialogBox className='column-2' type="comment">
            <ul>
              <li>Create</li>
              <li>Edit</li>
              <li>Group</li>
            </ul>
            <ul>
              <li>Curren Usage</li>
              <li>Device Setup</li>
            </ul>
          </DialogBox>
        </section>
        <section>
          <h2 id='Configurando nuestro Player'>Configurando nuestro Player</h2>

          <p>Para configurar nuestro primer Player y empezar a proyectar contenido, necesitamos crear un Grupo.
          <Highlighted>Los grupos pueden contentar a varios players</Highlighted> a los que se les tiene pensado enviar el mismo contenido.</p>
          <p>Para nuestro ejemplo, solo daremos de alta un Player.</p>
          <p>Vamos a entrar en la pestaña de Groups.</p>
          <img className="my-8" src="/img/bs-network/groups-page-bs-network.webp" alt="Pestaña grupos" />
          <p>En esta sección tenemos la lista de todos los Grupos que tenemos creados, 
            así como el número de Players en cada uno, el estatus y la presentación que tiene activa.</p>
          <DialogBox type="info" >
            <p>💡La <Highlighted>Presentación</Highlighted> es el archivo que contiene las imágenes, videos y demás contenido que  mandaremos al Player</p>
          </DialogBox>
          <img className="my-8" src="/img/bs-network/groups-page-2-bs-network.webp" alt="Pestaña grupos con anotaciones" />
          <p>Nosotros precionaremos el boton <Highlighted >Add Group</Highlighted> para crear el grupo donde daremos de alta a nuestro Player y 
            posteriormente agregaremos la Presentación.</p>
          <p>Nos aparecerá una ventana donde vendrán varias secciones, sin embargo, por ahora dejaremos todo como esta y solo le daremos un 
            nombre a nuestro Grupo. Yo le pondré Documentacion BSN para el ejemplo. Tú dale el nombre que gustes</p>
          <p>Es recomendable que nombres los grupos con referencia a la ciudad, nombre del local o algo con el que 
            puedas identificar a dónde pertenece y qué contenido tiene.</p>
          <img className="my-8 m-auto w-full md:w-1/2" src="/img/bs-network/register-group-window-bs-network.webp" alt="Ventana de crear grupo" />
          <p>Presionaremos <Highlighted>Create</Highlighted>, la página se recargará y mandará un cuadro de diálogo en la parte superior, 
          indicándonos que el grupo fue creado, seguido del nombre que le dimos y listo, tenemos nuestro grupo creado.</p>
          <img className="my-8 m-auto w-full md:w-2/3" src="/img/bs-network/register-group-alert-bs-network.webp" alt="Ventana de crear grupo" />
          
        </section>
        <section>
          <h2 id='Presentaciones'>Presentaciones</h2>
          <p>
          Como mencionaba anteriormente, las presentaciones son por llamarlo de alguna forma el archivo donde tenemos cargada y configurada el contenido que vamos a cargar al Player para ser proyectado.
          </p>
          <p>Antes de enseñarte a crearlo, te dejaré un diagrama para que entiendas un poco más cómo funciona la carga de contenido de forma global.
          </p>
          <img className="my-8 m-auto w-full" src="/img/bs-network/bs-diagram.png" alt="Diagrama de funcionamiento de BS" />
          <p>Como se ve en el diagrama, nosotros creamos nuestra presentación, una vez creada, la subimos a nuestra nube en BS Network y una vez arroba, 
          asignamos la presentación a los player donde queramos que BS Network mande el contenido.</p>
          <br />
          <h3>Sistema de archivos</h3>
          <p>Las presentaciones se guardan en formato <Highlighted>.bpf </Highlighted>. Este formato no almacena más que referencia a los archivos que vas a cargar, esto quiere decir que tal cual 
            la presentación no contiene las imágenes y los videos dentro de ella, sino que más bien, los archivos que vas a cargar a los players tienen que estar en la 
            misma carpeta donde se encuentre la presentación.</p>
          <img className="my-8 m-auto w-full" src="/img/bs-network/bs-diagram-file-sistem.png" alt="Diagrama de funcionamiento de BS" />
          <p>En el ejemplo anterior vemos una forma recomendada de manejar tu estructura de archivos.</p>
          
          <DialogBox type="info" >
            💡 Los formatos que se aceptan son variados dependiendo la versión del player para el que se creará la presentación. Los recomendados son MP3, MP4, PNG y JPG.
          </DialogBox>

          <h2 id="Creaundo una Presentación">Creaundo una Presentación</h2>
        </section>

        {/*----------------- Prefooter ------------- */}
        <section className="flex w-full justify-between items-center mt-8">
        <PreviusPage slug='/documentacion/introduccion/ecosistema'> Ecosistema</PreviusPage>
        <NextPage slug='/'>Inicio</NextPage>
        </section>
      </section>

      <PageAside internalSection={internalSection}/>
    </section>
  )
}