import React, { useState } from 'react'
import './navbar.css'
import Button from '../buttons/Button'
import { navItems } from './NavItems'
import { Link } from "react-router-dom"
import DropMenu from './DropMenu'
function Navbar() {

  const [aboutDropmenu, setaboutDropmenu] = useState(false);
  const [serviceDropmenu, setserviceDropmenu] = useState(false);
  const [productsDropmenu, setproductsDropmenu] = useState(false);
  const [newDropmenu, setnewDropmenu] = useState(false);
  const [blogDropmenu, setblogDropmenu] = useState(false);

  return (
    <>

      <div className='active'>
        <div>
          <img id='logo' src='/logo.jpg'></img>
        </div>
        <nav className='navigation-bar'>
          <ul>
            {navItems.map((item) => {

              if (item.tittle === 'About Us') {
                return (
                  <li key={item.id} className={item.cName}>
                    <span><Link to={item.path} style={{ textDecoration: 'none', color: 'Black' }}>{item.tittle}</Link></span>
                    <span onClick={() => setaboutDropmenu(!aboutDropmenu)}><img id='toggle' src='/arrow1.png'></img></span>
                    {aboutDropmenu && <DropMenu type={item.code} />}

                  </li>


                )
              }
              else if (item.tittle === 'Services') {
                return (
                  <li key={item.id} className={item.cName}>
                    <span><Link to={item.path} style={{ textDecoration: 'none', color: 'Black' }}>{item.tittle}</Link></span>
                    <span onClick={() => setserviceDropmenu(!serviceDropmenu)}><img id='toggle' src='/arrow1.png'></img></span>
                    {serviceDropmenu && <DropMenu type={item.code} />}

                  </li>


                )
              }
              else if (item.tittle === 'Products') {
                return (
                  <li key={item.id} className={item.cName}>
                    <span><Link to={item.path} style={{ textDecoration: 'none', color: 'Black' }}>{item.tittle}</Link></span>
                    <span onClick={() => setproductsDropmenu(!productsDropmenu)}><img id='toggle' src='/arrow1.png'></img></span>
                    {productsDropmenu && <DropMenu type={item.code} />}
                  </li>


                )
              }
              else if (item.tittle === 'News') {
                return (
                  <li key={item.id} className={item.cName}>
                    <span><Link to={item.path} style={{ textDecoration: 'none', color: 'Black' }}>{item.tittle}</Link></span>
                    <span onClick={() => setnewDropmenu(!newDropmenu)}><img id='toggle' src='/arrow1.png'></img></span>
                    {newDropmenu && <DropMenu type={item.code} />}
                  </li>


                )
              }
              else if (item.tittle === 'Blog') {
                return (

                  <li key={item.id} className={item.cName}>
                    <span><Link to={item.path} style={{ textDecoration: 'none', color: 'Black' }}>{item.tittle}</Link></span>
                    <span onClick={() => setblogDropmenu(!blogDropmenu)}><img id='toggle' src='/arrow1.png'></img></span>
                    {blogDropmenu && <DropMenu type={item.code} />}
                  </li>


                )
              }

            })
            }

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

