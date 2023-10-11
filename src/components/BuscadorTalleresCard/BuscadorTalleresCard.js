import React from 'react'
import './buscadorTalleresCard.css'

function BuscadorTalleresCard({nombre, telefono, direccion, localidad, provincia, rubro, _id}) {
  return (
    <div className='card-buscador-taller d-flex justify-content-center align-items-center'>
      {/* <div className='col-3 text-center'>      
        <img src="https://img.freepik.com/vector-premium/vector-icono-logotipo-mecanico-llave-engranaje_304830-274.jpg" alt=""/>
      </div> */}
      <div className='col-12 text-center'>
      <h3 className='card-talleres-texto'>{nombre}</h3>
      <h6 className='m-0'>Telefono: {telefono}</h6>
      <h6 className='m-0'>Dirección: {direccion} - {localidad} - {provincia}</h6>
      <h6 className='m-0'>Rubro: {rubro}</h6>
      </div>
    </div>
  )
}

export default BuscadorTalleresCard