import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/ArthasKeW" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/ArthasKeW" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials