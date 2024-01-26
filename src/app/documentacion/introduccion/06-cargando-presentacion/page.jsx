import { DialogBox } from "@/components/DialogBox";
import { NextPage } from "@/components/NextPage";
import { PreviusPage } from "@/components/PreviusPage";
import { Highlighted } from '@/components/Highlighted'



export default function CargandoPredentacionPage(){

  return(
    <section className="pagesBody">
      <section className="pagesBody--content"> 
        <h1>Cargando Presentacion</h1>

        {/*----------------- Prefooter ------------- */}
        <section className="flex w-full justify-between items-center mt-8">
        <PreviusPage slug='/documentacion/introduccion/05-creando-presentacion'>Creando Presentación</PreviusPage>

        </section>
      </section>
    </section>
  )
}