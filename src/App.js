import React from 'react'

//COMPONENTS
import About from './components/About'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
