import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'



export default function ConfigurandoPlayerPage(){

  return(
    <section className="pagesBody">
      <section className="pagesBody--content"> 
        <h1>Configurando nuestro Player</h1>
        <section>
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

        {/*----------------- Prefooter ------------- */}
        <section className="flex w-full justify-between items-center mt-8">
        <PreviusPage slug='/documentacion/introduccion/03-instalacion-bright-author'>Instalacion BrigthAuthor</PreviusPage>
        <NextPage slug='/documentacion/introduccion/05-creando-presentacion'>Creando una Presentación</NextPage>
        </section>
      </section>
    </section>
  )
}