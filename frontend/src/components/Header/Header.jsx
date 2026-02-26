import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
            <img src={assets.header_img} alt="luxury watch" className="header-image" />
            <div className='header-contents'>
                <h2>Layers ~ watch</h2>
                <p>Be Smarter Look Sharper</p>
            </div>
        </div>
    )
}

export default Header
