import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'
import { sections } from "@/data/pages";


export default function ComoEmpezarPage(){

  return(
    <section className="pagesBody">
      <section className="pagesBody--content"> 
        <h1>Primeros pasos en BrigthSign</h1>
        <section className="mt-16">

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

        {/*----------------- Prefooter ------------- */}
        <section className="flex w-full justify-between items-center mt-8">
        <PreviusPage slug='/documentacion/introduccion/01-ecosistema'> Ecosistema</PreviusPage>
        <NextPage slug='/documentacion/introduccion/03-instalacion-bright-author'>Instalacion BrightAuthor</NextPage>
        </section>
      </section>
    </section>
  )
}