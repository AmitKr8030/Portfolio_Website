import React from 'react'
import './services.css'

import {FaHandPointRight} from 'react-icons/fa'
function Services() {
  return (
    <section id='services'>
      <h5>Tools and technoloty used in</h5>
      <h2>Projects</h2>

    <div className='container services__container'>

        <article className='service'>
           <div className='service__head'>
             <h3>Gym exercise website</h3>
           </div>
           <ul className='service__list'>
              
              <li>
              <FaHandPointRight className='service__list-icon' size={45}/> 
              <p>It recommend you for different types of exercise for different body part. It also guide you so that you can do exercise in right way.</p>
             
              </li>
               
                
              
              <li>
              <FaHandPointRight className='service__list-icon' size={15}/> 
                <p><b>Technology used</b> - HTML, CSS, JavaScript, React.</p>
              </li>
              
              <li>
              <FaHandPointRight className='service__list-icon' size={15}/> 
                <p><b>Other Technology used</b> - Rapid Api, Material Ui.</p>
              </li>
              

              
           </ul>
           
        </article>

        
        <article className='service'>
           <div className='service__head'>
             <h3>Portfolio Website</h3>
           </div>
           <ul className='service__list'>
           <li>
              <FaHandPointRight className='service__list-icon' size={38}/> 
                <p>This portfolio website provides professional information about me. It contains all the information about my academics and my skills.</p>
              </li>
             
              <li>
              <FaHandPointRight className='service__list-icon' size={15}/> 
                <p><b>Technology used</b> - HTML, CSS, JavaScript, React.</p>
              </li>
              <li>
              <FaHandPointRight className='service__list-icon' size={23}/> 
                <p><b>Other Features</b> - useState Hook, React Icons, Multiple Contact Options.</p>
              </li>
           </ul>
           
        </article> 

        
        <article className='service'>
           <div className='service__head'>
             <h3>Keeper App</h3>
           </div>
           <ul className='service__list'>
           <li>
              <FaHandPointRight className='service__list-icon' size={38}/> 
                <p>Keeper app keeps your notes. User can add and delete the notes</p>
              </li>
             
              <li>
              <FaHandPointRight className='service__list-icon' size={20}/> 
                <p><b>Technology used</b> - HTML, CSS, JavaScript, React.</p>
              </li>
             
           </ul>
           
        </article>


    </div>

    </section>
  )
}

export default Services

