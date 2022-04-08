import React from 'react'
import './about.css'
import Me_from_tournment from '../../assets/Me_from_tournment.jpg'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me_from_tournment} alt="About Image"/>
          </div>
        </div>
        <div className='about_content'>
          <p>
      I'm a student studying Computing at PolyU. I've been learning lots of different programming 
      languages by myself such as Java, C#, C, etc. Although it seems like I understand many programming 
      languages, not one of them can be considered perfection for me, therefore, I'm still trying to 
      learn whenever possible. Besides programming languages, I can speak and write three human languages, 
      they are English, Chinese, and Cantonese. One more thing, this website is my first website created using 
      React, and I finished this website by following a guide on Youtube by someone called EGATOR. I hope that 
      I can understand React better and try to make a newer version of this portfolio with my own personality and creativity.
          </p>
          <a href="#contact" className="btn btn-primary about_content_button">Contact Me</a>
        </div>
        
      </div>

      


    </section>
  )
}

export default About