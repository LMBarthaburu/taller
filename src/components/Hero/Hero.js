import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='hero d-flex flex-column align-items-end justify-content-center'>
      <div className='hero-texto container'>
        <h1 className='hero-titulo'><span className='hero-subtitulo'>Con</span> MI TALLER</h1>
        <h2 className='hero-subtitulo'>Tenes la harremienta perfecta para darle segumiento a todas tus reparaciones!</h2>
        <h2 className='hero-subtitulo'>Además tus clientes podran consultar en todo momento el estado de su orden.</h2>
        <div>
          <a href='www.google.com'><button className='hero-boton'>Consulta aquí con tu numero de reparación!</button></a>
          <a href='www.google.com'><button className='hero-boton'>Conoce más!</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero