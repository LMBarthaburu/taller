import React from 'react'
import './cardOrden.css'

function CardOrden({nombre, telefono, cuit, modelo, serie, fecha, detalle, observaciones, numero, estado, empresa, contacto, localidad, direccion, provincia,reparacion}) {

  return (
    <div className='card-ordenes'>
      <div>
        <h2 className='text-center my-2 buscador-card-categoria'>N° de Reaparación: <span className='fw-normal'>{numero}</span></h2>
        <h4 className='text-center my-3 buscador-card-categoria'>Estado: <span className='fw-normal'>{estado}</span></h4>
      </div>
      <hr />
      <div className="d-md-flex  justify-content-between">
        <div>
        <h5 className='buscador-card-categoria'>Cliente: <span className='fw-normal'>{nombre}</span></h5>
          <h5 className='buscador-card-categoria'>Telefono: <span className='fw-normal'> {telefono}</span></h5>
          <h5 className='buscador-card-categoria'>DNI: <span className='fw-normal'> {cuit}</span></h5>
          <h5 className='buscador-card-categoria'>Fecha ingreso: <span className='fw-normal'> {fecha}</span></h5>
          <h5 className='buscador-card-categoria'>Modelo: <span className='fw-normal'> {modelo}</span></h5>
          <h5 className='buscador-card-categoria'>Número de identificación: <span className='fw-normal'>{serie}</span></h5>
          <h5 className='buscador-card-categoria'>A reparar: <span className='fw-normal'>{detalle}</span></h5>
          <h5 className='buscador-card-categoria'>Observaciónes: <span className='fw-normal'> {observaciones}</span></h5>
          <h5 className='buscador-card-categoria'>Trabajo realizado: <span className='fw-normal'>{reparacion}</span></h5>
          <h5 className='buscador-card-categoria'>Costo: <span className='fw-normal'>$15000</span></h5>
        </div>
        <div>
          <h5 className='buscador-card-categoria'>Empresa: <span className='fw-normal'>{empresa}</span></h5>
          <h5 className='buscador-card-categoria'>Teléfono: <span className='fw-normal'>{contacto}</span></h5>
          <h5 className='buscador-card-categoria'>Dirección: <span className='fw-normal'> {direccion}</span></h5>
          <h5 className='buscador-card-categoria'>Localidad: <span className='fw-normal'>{localidad}</span></h5>
          <h5 className='buscador-card-categoria'>Provincia: <span className='fw-normal'> {provincia}</span></h5>
        </div>
      </div>
    </div>
  )
}

export default CardOrden