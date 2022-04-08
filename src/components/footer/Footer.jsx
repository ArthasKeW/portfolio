import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Arthas Cheng</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#recentproject'>Recent Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/ArthasKeW/'><AiFillFacebook/></a>
        <a href='https://github.com/ArthasKeW'><AiFillGithub/></a>
      </div>

      
    </footer>
  )
}

export default Footer