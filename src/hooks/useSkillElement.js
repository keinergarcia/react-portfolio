import Frontend from '../assets/Icons/Other/frontend.svg?react'
import Backend from '../assets/Icons/Other/backend.svg?react'
import SoftSkills from '../assets/Icons/Other/softskill.svg?react'

export const useSkillElement = () => {
  const dataToFill = [
    {
      icon: Frontend,
      title: 'Frontend',
      tech: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap'
      ],
    },

    {
      icon: Backend,
      title: 'Backend',
      tech: [
        'Node.js',
        'Laravel',
        'Java',
        'MySQL',
        'Git & GitHub'
      ],
    },

    {
      icon: SoftSkills,
      title: 'Soft Skills',
      tech: [
        'Trabajo en equipo',
        'Pensamiento crítico',
        'Resolución de problemas',
        'Adaptabilidad',
        'Comunicación efectiva'
      ],
    },
  ]

  return { dataToFill }
}