import React from 'react'
import logo from './logo.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div class="nav">
            <div class="tc tile">Profile</div>
            <div class="tc tile">Favorites</div>
            <div class="tc center-tile f2">
                <a href="" class="fab">
                    <span><img src={logo} /></span>
                </a>
            </div>
            <div class="tc tile">Orders</div>
            <div class="tc tile">Bag</div>
        </div>
    )
}

export default Navbar
