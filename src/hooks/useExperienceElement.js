import Practicas from '../assets/Icons/Other/folder-code.svg?react'
import Modelista from '../assets/Icons/Other/clipboard-list.svg?react'
import Estudios from '../assets/Icons/Other/graduation-cap.svg?react'

export const useExperienceElement = () => {
  const dataToFill = [
    {
      icon: Practicas,
      title: 'Certificación en Programación Web',
      description: 'Bootcamp intensivo de 159 horas en',
      descriptionBold: 'Desarrollo Web ',
      button: 'Ver Certificado',
      onclick: () =>
        window.open(
          '/Documents/Bootcamp Programación.pdf'
        ),
    },
    {
      icon: Modelista,
      title: 'Experiencia en Formación',
      description: 'En preparación en el tecnólogo de',
      descriptionBold: 'Análisis y Desarrollo de Software (ADSO)',
      button: 'ADSO',
      onclick: () =>
        window.open(
          '/Documents/'
        ),
    },
    {
      icon: Estudios,
      title: 'Educación',
      description: 'Curso Especial en',
      descriptionBold: 'Diseñar Páginas Web con HTML y JavaScript',
      button: 'Certificado',
      onclick: () =>
        window.open(
          '/Documents/DISEÑAR_PÁGINAS_WEB_HTML_JAVASCRIP.pdf'
        ),
    },
  ]

  return { dataToFill }
}
