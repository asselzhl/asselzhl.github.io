import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Footer />
      {/* <SideMenu /> */}
    </>
    </BrowserRouter>
  )
}

export default App
