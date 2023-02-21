import React from 'react'
// import CardOrden from '../CardOrden/CardOrden'
import './buscador.css'

function Buscador() {
  return (
    <div className='buscador container'>
      <h2>Consulta aquí el estado de tu orden:</h2>
      <input type="text" placeholder='Ingresa aquí tu numero de reparación'/>
      <button className='buscador-boton'>Buscar</button>
      {/* <CardOrden/> */}
    </div>
  )
}

export default Buscador