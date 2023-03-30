import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/buttons/Button';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Products from './pages/Products';
import News from './pages/News';
import Blog from './pages/Blog';

function App() {
  return (

    <Router>

      <Navbar />
      <Routes>
        <Route path='/aboutus' Component={AboutUs}></Route>
        <Route path='/services' Component={Services}></Route>
        <Route path='/products' Component={Products}></Route>
        <Route path='/news' Component={News}></Route>
        <Route path='/blog' Component={Blog}></Route>
      </Routes>

    </Router>

  );
}

export default App;
