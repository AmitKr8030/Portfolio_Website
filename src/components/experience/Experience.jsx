import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
            <div className='experience__frontend'>
              <h3>Frontend Development</h3>
                <div className='experience__content'>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>HTML</h4>
                      <small className='text-light'>Intermediate</small>
                        </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>CSS</h4>
                      <small className='text-light'>Intermediate</small>
                     </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>JavaScript</h4>
                      <small className='text-light'>Intermediate</small>
                     </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>Bootstrap</h4>
                      <small className='text-light'>Intermediate</small>
                       </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>React</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                </div>
            </div>
            
            <div className='experience__backend'>
            <h3>Backend Development</h3>
                <div className='experience__content'>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Node Js</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>MongoDB</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                  
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>MySQL</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                   </article>
                  
                </div>
            </div>

        
            
            
            <div className='experience__backend'>
            <h3>Programming Language</h3>
                <div className='experience__content'>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>C</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>C++</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Java</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Phyton</h4>
                      <small className='text-light'>Begginer</small>
                        </div>
                   </article>
                </div>
            </div>
            <div className='experience__backend'>
            <h3>Area of Interest</h3>
                <div className='experience__content'>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Data structure and algorithm</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Comptetive Programming</h4>
                      <small className='text-light'>Begginer</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Operating System</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>DBMS</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Web development</h4>
                      <small className='text-light'>Intermediate</small>
                      </div>
                   </article>
                   
                </div>
            </div>
           
     
     
     
     
      </div>
      
      

    </section>
  )
}

export default Experience