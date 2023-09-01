import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='hero d-flex flex-column align-items-end justify-content-center '>
      <div className='fondo'></div>
      <div className='fondo2'></div>
      <div className='hero-texto container position-relative'>
        <h1 className='hero-titulo'>MI TALLER</h1>
        <h2 className='hero-subtitulo'>La herramienta ideal para dar seguimeinto a tus reparaciones y encontrar a los mecanicos perfectos para tu reparación!</h2>
        <div>
          <a href='/#buscador-section'><button className='hero-boton'>Consultar estado de reparación</button></a>
          <a href='/#talleres'><button className='hero-boton'>Buscar talleres</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero