import { Ecosistema } from '../pages/Ecosistema' 
import { Configuracion } from '../pages/Ecosistema' 
import { GestionDeContenido } from '../pages/Ecosistema' 
 

export const sections = [
  {
    titleSection: '⭐ Introduccion',
    subSections: [
      {
        component: <Ecosistema />,
        title:'Ecosistema',
        internalSections: ['Introducción', 'Qué es un Players', 'BrightSign Network']
      },
      {
        component: <Configuracion />,
        title:'Configuracion',
        internalSections: ['Tema 5', 'Tema 6', 'Tema 7', 'Tema 8']
      },
      {
        component: <GestionDeContenido />,
        title:'Gestion de contenido',
        internalSections: ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4']
      },
    ] 
  },

]


// sections[0].introduccion.subSections[0].component