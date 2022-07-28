import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsSkype} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='linkedin.com/in/amit-kumar-401025205' target="_blank"><BsLinkedin /></a>

      <a href='https://github.com/AmitKr8030' target="_blank"><FaGithub/></a>

      <a href='live:.cid.9234a52902fb452e' target="_blank"><BsSkype/></a>

    </div>
  )
}

export default HeaderSocials