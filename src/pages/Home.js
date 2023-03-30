import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import AboutUs from './AboutUs';
import Services from './Services';
import Products from './Products';
import News from './News';
import Blog from './Blog';
import BuyNow from './BuyNow';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import '../components/home.css'

function Home() {
    return (
        <>
            <div className='class-home-wrapper'>
                <Navbar />
                <Routes>

                    <Route path='/aboutus' Component={AboutUs}></Route>
                    <Route path='/services' Component={Services}></Route>
                    <Route path='/products' Component={Products}></Route>
                    <Route path='/news' Component={News}></Route>
                    <Route path='/blog' Component={Blog}></Route>
                    <Route path='/buynow' Component={BuyNow}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Home