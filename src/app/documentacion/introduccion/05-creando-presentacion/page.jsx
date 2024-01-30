import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'
import Link from "next/link";



export default function CreandoPresentacionPage(){

  return(
    <section className="pagesBody">
      <section className="pagesBody--content"> 
        <h1>Creando una Presentación</h1>
        <section>
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
        </section>
        <section>
          <p>Las presentaciones se crean desde BrightAuthor, asi que vamos a abrir el programa para comenzar.</p>
          <p>Una vez abierto, vamos a ir a la pestaña <Highlighted>FILE » New Presentation</Highlighted></p>
        
          <img className="my-8 m-auto w-full lg:w-3/5" src="/img/bs-author/bsa-newpresentation-menu.webp" alt="Diagrama de funcionamiento de BS" />

          <p>Se nos desplegará una ventana donde configuraremos los parámetros de la presentación.</p>

          <img className="my-8 m-auto w-full lg:w-3/5" src="/img/bs-author/bsa-presentation-parameters.png" alt="Diagrama de funcionamiento de BS" />

          <p>Como puedes observar en la parte superior tenemos 2 pestañas, <Highlighted>Main</Highlighted> y <Highlighted>Advanced</Highlighted>. Nosotros 
          trabajaremos para este ejemplo en Main, al menos que requieras algo muy especial en la presentación, no usaras prácticamente la pestaña de Advanced.</p>
          <p>En la primera seccion de la pestaña Main, pondremos el nombre de nuestra presentación en Save As, seguido de la ruta en donde guardaremos nuestro archivo. </p>
          <p>En este caso yo le he puesto Presentación de Prueba y lo guardaré en una carpeta que cree en Documentos llamada BS-Curso.</p>
          <DialogBox type="info">
           💡 Recuerda que en la carpeta donde guardes tu presentación deberás guardar también tus Imágenes, videos y archivos que vayas a utilizar.
          </DialogBox>

          <p>En la sección siguiente tenemos <Highlighted>BrightSign Model</Highlighted>, donde colocaremos entre la lista de opciones el modelo del Player que 
          tenemos, debido a que los Players tienen diferentes características dependiendo el modelo.</p>
          <p>El modelo viene en la parte inferior del player. En mi caso usare un <Highlighted>LS424</Highlighted> para este ejemplo.</p>

          <img className="my-8 m-auto w-full lg:w-3/5" src="/img/players-models/pyr-bottom.png" alt="Modelo del player" />

          <p>Después tenemos <Highlighted>Connector type</Highlighted>, aquí lo más probable es que sea HDMI, sin embargo, si pensamos conectar el Player por VGA o DVI, debemos cambiar esta opción.</p>
          <p>La tercera opción es <Highlighted>Screen Resolution</Highlighted>, aquí de igual forma podemos seleccionar la resolución de nuestro contenido dependiendo la pantalla donde lo proyectaremos y los FPS.</p>
          <p>Los Players de 5ta generación ya son capaces de soportar hasta 4k y 8k usando las versiones de BrightAuthor 5.0 en adelante.</p>

          <DialogBox>
            💡 En este caso, que estoy usando la versión 4.7.2.18, solo soporta players de hasta 4ta generación y presentaciones 1080p a 60fps
          </DialogBox>

          <p>Por último, tenemos <Highlighted>Monitor Orintation</Highlighted>, que es para poner la presentación en modo vertical en caso de requerirlo.</p>
          <p>Una vez configurados todos los parámetros, presionaremos en <Highlighted>Create</Highlighted>.</p>
          <p>Se nos desplegará una ventana donde nos dará una serie de opciones de plantillas predefinidas que podemos usar para acomodar nuestro contenido.</p>
          <p>Seleccionemos <Highlighted>FullScreen</Highlighted> para este ejemplo. Recuerda que puedes encontrar todo sobre las plantillas y cómo crear las nuestras 
          en la sección <Link className='link' href='/'>PLANTILLAS</Link> más adelante.</p>

          <img className="my-8 m-auto w-full lg:w-3/5" src="/img/bs-author/bsa-layout-template-window.png" alt="Plantillas de presentacion" />

          <p>Una vez haciendo esto, se nos abrirá el programa en la pestaña de <Highlighted>Edit</Highlighted>, aquí será donde agregaremos el contenido a la presentación, tanto al crear 
            una nueva como al editar una existente.</p>
          
          <img className="my-8 m-auto w-full " src="/img/bs-author/bsa-edit-zones.png" alt="zonas de la pestaña edit" />

          <p>En esta pestaña tenemos 3 zonas principales.</p>

          <DialogBox type="comment">
            <ul>
              <li className="pb-3">
                Imágenes y videos de la presentación 🖼️🎞️: <br />
                <div className="ml-12 mb-2 mt-0">Aquí es la zona donde colocaremos las imágenes y videos que deseamos añadir a la presentación.</div>
              </li>
              
              <li className="pb-3">
                Raíz del proyecto 📂:
                <div className="ml-6 mb-2 mt-0">Aquí están los elementos que tenemos en la carpeta donde guardamos la presentación.</div>
              </li>
              
              <li className="pb-3">
                Zona de plantilla 📐:
                <div className="ml-6 mb-2 mt-0">Aquí podemos ver el área que ocupa y el tipo de contenido que recibe. En este caso solo añadiremos imagen y video y la 
              etiqueta correspondiente es de color verde.</div>
              </li>
              
            </ul>
          </DialogBox>
        </section>

        {/*----------------- Prefooter ------------- */}
        <section className="flex w-full justify-between items-center mt-8">
        <PreviusPage slug='/documentacion/introduccion/04-configurando-player'> Configurando Player</PreviusPage>
        <NextPage slug='/documentacion/introduccion/06-cargando-presentacion'>Cargando Presentación</NextPage>
        </section>
      </section>
    </section>
  )
}