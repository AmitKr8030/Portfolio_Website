import React from 'react'
import './testimonials.css'


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
   {
      
      name : 'Mark Zuckerberg',
      review:  '“ The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”'
    },

    {
      
      name : 'Swami Vivekananda',
      review:  'Arise! Awake! and stop not until the goal is reached.'
      
    },

    {
     
      name : 'Matt Mullenweg',
      review:  'Technology is best when it brings people together.'
    },

    
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      
      <h2>My Inspiration</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true } }>
      {
           data.map(({ name, review}, index) => {
          return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                 
              </div>
              <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                  {review}
                  </small>
          </SwiperSlide>
             )
           })  
      }  
      </Swiper>
    </section>
  )
}

export default Testimonials