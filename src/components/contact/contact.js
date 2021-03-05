import React from 'react'
import './contact.css'
import iconLinkedin from '../../images/linkedin.png'
import iconGithub from '../../images/github.png'
import iconGmail from '../../images/gmail.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h2>Contact</h2>
      <div className='contactPanel'>
      <div className='icon'>
          <a href="mailto:wellingtonsantos5000@gmail.com">
            <img src={iconGmail} alt="" />
          </a>
        </div>
        <div className='icon'>
          <a href="https://github.com/Wellington5000?tab=repositories">
            <img src={iconGithub} alt="" />
          </a>
        </div>
        <div className='icon'>
          <a href="https://www.linkedin.com/in/wellington-teixeira-6a383a188/">
            <img src={iconLinkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact