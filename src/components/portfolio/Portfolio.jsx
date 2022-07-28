import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port_3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title:'Gym exercise website',
    github: 'https://github.com/AmitKr8030/Gym_Exercises_Website',
    demo:'https://dribbble.com/alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title:'Portfolio Website',
    github: 'http://github.com',
    demo:'https://dribbble.com/alien_pixels'
  },
  
  {
    id: 2,
    image: IMG2,
    title:'Keeper App',
    github: 'http://github.com',
    demo:'https://dribbble.com/alien_pixels'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent </h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
            {
              data.map(({id,image,title,github,demo}) => {
                 return (
                      <article key={id} className='portfolio__item'>
                      <div className='portfolio__item-image'>
                      <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                     <div className='portfolio__item-cta'>
                     <a href={github} className='btn' target='_blank'>Github</a>
                     <a href={demo}  className='btn btn-primary'  target='_blank'>Live Demo</a>
                   </div>
                   </article>
                 )
              })
            }

       </div>
    </section>
  )
}

export default Portfolio