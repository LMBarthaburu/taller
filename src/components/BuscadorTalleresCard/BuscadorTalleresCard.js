import React from 'react'
import './buscadorTalleresCard.css'

function BuscadorTalleresCard({nombre, telefono, direccion, localidad, provincia, rubro,logo, _id,url}) {
  return (
    <div className='card-buscador-taller d-flex justify-content-center align-items-center'>
      <div className='col-3 text-center'>      
        <img src={logo} alt="Logo empresa" className='w-100 px-2 img-logo'/>
      </div>
      <div className='col-8 text-start ps-3'>
      <h3 className='card-talleres-texto'>{nombre}</h3>
      <h6 className='m-0'>Telefono: {telefono}</h6>
      <h6 className='m-0'>Dirección: {direccion} - {localidad} - {provincia}</h6>
      <h6 className='m-0'>Rubro: {rubro}</h6>
      <a href={url} target='_blank' rel='noreferrer' className='text-decoration-none'><p className='fw-bold'>{url}</p></a>
      </div>
    </div>
  )
}

export default BuscadorTalleresCard