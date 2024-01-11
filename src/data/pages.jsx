import { Ecosistema, Configuracion, GestionDeContenido } from '../pages'

export const sections = [
  {
    titleSection: '⭐ Introduccion',
    subSections: [
      {
        component: <Ecosistema />,
        title:'Ecosistema',
        internalSections: ['Introducción', 'BrightSign Network', 'Tema 3', 'Tema 4']
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

export const firstPage = <Ecosistema />

// sections[0].introduccion.subSections[0].component