import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>   
      <a href='#' className='footer__logo'>AMIT</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><BsFacebook /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><FaTwitterSquare /></a>

      </div>
     
         
      <div  className="footer__copyright">
      <small>&copy; Amit. All rights reversed</small>
      </div>
    </footer>
  )
}

export default Footer