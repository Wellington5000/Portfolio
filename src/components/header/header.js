import React from 'react'
import './header.css'

const Header = () => {
  return(
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label class="logo"> Portifólio </label>
        <ul>
          <li> <a href="mailto:wellingtonsantos5000@gmail.com">Home</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#skills">Skills</a> </li>
          <li> <a href="#projects">Projects</a> </li>
          <li> <a href="#contact">Contact</a> </li>
        </ul>
      </nav>
      <section></section>
    </div>
  )
}

export default Header