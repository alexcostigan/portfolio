import React from 'react'
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Header = () => {
    return (
        <div>
           <h1>Hello, I'm Alex!</h1> 
           <h3>React Developer based in Manchester, UK</h3>
           <a href="#"><FaGithub /></a>
           <a href="#"><FaInstagram /></a>
           <a href="#"><FaTwitter /></a>
           <a href="#"><FaLinkedin /></a>
           <a href="#"><FaYoutube /></a>
           <a href="#"><FaDev /></a>
           
           
        </div>
    )
}

export default Header
