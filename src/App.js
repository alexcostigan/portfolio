import React from 'react'

//COMPONENTS
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

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
