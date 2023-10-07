import React from 'react'
import Buscador from '../../components/Buscador/Buscador'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import Servicios from '../../components/Servicios/Servicios'
import BuscadorTalleres from '../../components/BuscardorTalleres/BuscadorTalleres'

function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Buscador/>
      <Servicios/>
      <BuscadorTalleres/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Home