import React from 'react'
import '../../styles/About.css'
import AboutImg from '../../assets/Images/Keiner/PROFILE IMG.jpeg'
import ExperienceElement from '../../components/ExperienceElement/ExperienceElement'
import { useExperienceElement } from '../../hooks/useExperienceElement'


const About = () => {
	const { dataToFill } = useExperienceElement()

	return (
		<div className='section'>
			<div className='name-section'>
				<p className='section-subtitle'>
					Conoce más
				</p>
				<p className='section-title'>
					Sobre Mí
				</p>
			</div>
			<div className='about-cont'>
				<div className='top-row'>
					<div className='about-img-section'>
						<img src={AboutImg} className='about-img' alt='about-img'/>
					</div>
						<div className='about-text-section'>
							<div className='experience-elements'>
								{dataToFill.map((element, index) => (
									<ExperienceElement 
										key={index}
										icon={element.icon}
										title={element.title}
										description={element.description}
										descriptionBold={element.descriptionBold}
										button={element.button}
										onclick={element.onclick}
									/>
								))}
							</div>
						</div>
					</div>
				<div className='bot-row'>
					<div className='experience-text'>
						<p className='text'>
								Soy <b>Keiner Garcia</b>, desarrollador web en formación, enfocado tanto en el desarrollo frontend como backend, con experiencia y aprendizaje continuo en React, JavaScript, MySQL, SQL y Node.js. Me interesa crear soluciones funcionales, desarrollar aplicaciones completas, aprender nuevas tecnologías y seguir creciendo profesionalmente. Me caracterizo por el trabajo en equipo, el pensamiento analítico y la resolución de problemas.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
