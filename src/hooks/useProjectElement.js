import WorkImg from '../assets/Images/Projects/project-work-in-progress.webp'
import Css from '../assets/Icons/Logos/css.svg?react'
import ExpressDark from '../assets/Icons/Logos/Express.js_dark.svg?react'
import ExpressLight from '../assets/Icons/Logos/Express.js_light.svg?react'
import Html from '../assets/Icons/Logos/html5.svg?react'
import JavaScript from '../assets/Icons/Logos/javascript.svg?react'
import MongoDb from '../assets/Icons/Logos/mongodb.svg?react'
import MySql from '../assets/Icons/Logos/mysql.svg?react'
import NodeJs from '../assets/Icons/Logos/nodejs.svg?react'
import ReactDark from '../assets/Icons/Logos/React_dark.svg?react'
import ReactLight from '../assets/Icons/Logos/React_light.svg?react'
import Sass from '../assets/Icons/Logos/sass.svg?react'
import Supabase from '../assets/Icons/Logos/supabase.svg?react'
import TypeScript from '../assets/Icons/Logos/typescript.svg?react'
import SocketDark from '../assets/Icons/Logos/Socket.io_dark.svg?react'
import SocketLigth from '../assets/Icons/Logos/Socket.io_light.svg?react'
import GithubIcon from '../assets/Icons/Other/github.svg?react'
import GithubIconLight from '../assets/Icons/Other/github-white.svg?react'
import LinkIcon from '../assets/Icons/Other/link.svg?react'
import LinkIconWhite from '../assets/Icons/Other/link-white.svg?react'
import Php from '../assets/Icons/Logos/php-original.svg?react'
import Laravel from '../assets/Icons/Logos/laravel-original.svg?react'

export const useProjectElement = () => {
  const techIcon = (icon) => ({ light: icon, dark: icon })

  const dataToFill = [
 
   
    
   
    {
      image: WorkImg,
      title: 'Mini Tienda Laravel (WIP)',
      description:
        'Proyecto en desarrollo de una mini tienda en Laravel. Incluirá gestión de productos, carrito de compras, autenticación de usuarios y panel administrativo. Actualmente se encuentra en fase de construcción (Work In Progress).',
   technologies: [
  techIcon(Laravel),
  techIcon(Php),
  techIcon(MySql),
  techIcon(JavaScript),
  techIcon(Html),
  techIcon(Css),
],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open(''),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open(''),
    },








  ]

  const reverseData = dataToFill.reverse()

  return { reverseData }
}
