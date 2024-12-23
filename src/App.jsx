import React from "react";
import './App.css';
import Navigation from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Menu from "./Components/Menu";
import Home from "./Components/Home";
// import Example from "./Example";

function App() {
  return (
    <>
    <BrowserRouter>
     {/* <Example/> */}
     <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/About' element={ <About/>}/>
    <Route path='/Contact' element={ <Contact/>}/>
   </Routes>
   </BrowserRouter>

    </>
  )
}
export default App; 
