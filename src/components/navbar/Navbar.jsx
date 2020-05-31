import React from 'react'
import logo from './logo.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div class="nav">
            <div class="tc tile">About</div>
            <div class="tc tile">Portfolio</div>
            <div class="tc center-tile f2">
                <a href="" class="fab">
                    <span><img src={logo} /></span>
                </a>
            </div>
            <div class="tc tile">Experience</div>
            <div class="tc tile">Contact Me!</div>
        </div>
    )
}

export default Navbar
