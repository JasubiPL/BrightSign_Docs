import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'



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
          <p>
            
          </p>
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