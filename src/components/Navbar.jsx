import React from 'react'
import logo from './logo.png'

const Navbar = () => {
    return (
        <div>
          <nav>
              <a href="#">Home</a> <br />
              <a href="#">About</a> <br />
              <a href="#">Portfolio</a> <br />
              <img src={logo} /> <br />
              <a href="#">Experience</a> <br />
              <a href="#">Contact Me</a>
          </nav>
        </div>
    )
}

export default Navbar
