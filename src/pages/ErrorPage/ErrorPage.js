import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './errorPage.css'

function ErrorPage() {
  return (
    <>
      <NavBar/>
      <div className='d-flex justify-content-center align-items-center contenedor'>
        <div className='text-center'>
          <h2 className='error-page-texto'>PAGINA <br /> NO DISPONIBLE</h2>
          <a href="/" className='error-page-link'>Volver al inicio</a>
        </div>
      </div>
    </>
  )
}

export default ErrorPage