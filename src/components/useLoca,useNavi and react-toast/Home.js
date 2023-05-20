import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './index';
import About from './About';
import Nav from './Nav';
import Login from './Login';

const Home = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/index' element={<Index/>}/>
    <Route path='/about/:username' element={<About/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Home
