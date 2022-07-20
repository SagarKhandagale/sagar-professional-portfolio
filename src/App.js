import React from 'react'
import Header from './Component/Head/Header'
import "./App.css"
import Home from './Component/Home/Home'
import Feature from './Component/Features/Feature'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Testimonial from './Component/Testimonial/Testimonial'
import Blog from './Component/Blog/Blog'
import Code from './Component/Code/Code'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Feature />
      <Resume />
      <Portfolio />
      <Code />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App