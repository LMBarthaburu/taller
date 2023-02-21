import React from 'react'
import './agregarTrabajo.css'

function AgregarTrabajo() {
  return (
    <div className='container agregar-box pt-5'>
      <h2>Agragar Orden de Trabajo:</h2>
      <h5>Orden N°:00000000</h5>
      <div className='agregar-input-box'>
        <label>Nombre del Cliente:</label>
        <input type="text" className='agregar-input w-100'/>
      </div>
      <div className='agregar-input-box'>
        <label>Fecha de ingreso:</label>
        <input type="date" className='agregar-input w-100'/>
      </div>
      <div className='agregar-input-box'>
        <label>Modelo de maquina:</label>
        <input type="text" className='agregar-input w-100'/>
      </div>
      <div className='agregar-input-box'>
        <label>Numero de identificación:</label>
        <input type="text" className='agregar-input w-100'/>
      </div>
      <div className='agregar-input-box d-flex flex-column'>
        <label>Trabajo a realizar:</label>
        <textarea name="" id="" rows="5" className='agregar-input'></textarea>
      </div>
      <button className='buscador-boton mt-3'>Agregar</button>
    </div>
  )
}

export default AgregarTrabajo