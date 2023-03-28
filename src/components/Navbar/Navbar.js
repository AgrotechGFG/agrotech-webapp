import React from 'react'
import './navbar.css'
import Button from '../buttons/Button'
function Navbar() {
  return (
    <>

      <div className='active'>
        <div>
          <img id='logo' src='/logo.jpg'></img>
        </div>
        <nav className='navigation-bar'>

          <ul >
            <li className='class-links'><span><a>About Us</a></span>
              <ul className='about-toggle'>
                <li>works</li>
                <li>works</li>
                <li>works</li>
                <li>works</li>
              </ul>
              <span><img id='toggle' src='/arrow1.png'></img></span>
            </li>
            <li className='class-links'><span><a>Services</a></span>
              <span><img id='toggle' src='/arrow1.png'></img></span> </li>

            <li className='class-links'><span><a>Blogs</a></span>
              <span><img id='toggle' src='/arrow1.png'></img></span> </li>
            <li className='class-links'><span><a>News</a></span>
              <span><img id='toggle' src='/arrow1.png'></img></span> </li>
            <li className='class-links'><span><a>Products</a></span>
              <span><img id='toggle' src='/arrow1.png'></img></span> </li>
          </ul>
        </nav>
        <div className='nav-right'>
          <Button type="Buy Now" />

        </div>


      </div>




    </>
  )
}

export default Navbar