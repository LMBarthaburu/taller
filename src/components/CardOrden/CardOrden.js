import React from 'react'
import './cardOrden.css'
import html2pdf from 'html2pdf.js';

function CardOrden({nombre, telefono, cuit, modelo, serie, fecha, detalle, observaciones, numero, estado, empresa, contacto, localidad, direccion, provincia,trabajoRealizado, costo, idEmpresa, fechaEntrega}) {

  const imprimirSegmento = () => {
    const element = document.getElementById('orden-de-reparacion');

    html2pdf()
      .from(element)
      .save()
  };

  return (
    <>
      <div className='card-ordenes' id='orden-de-reparacion'>
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
            <h5 className='buscador-card-categoria'>Fecha entrega: <span className='fw-normal'> {fechaEntrega}</span></h5>
            <h5 className='buscador-card-categoria'>Modelo: <span className='fw-normal'> {modelo}</span></h5>
            <h5 className='buscador-card-categoria'>Número de identificación: <span className='fw-normal'>{serie}</span></h5>
            <h5 className='buscador-card-categoria'>A reparar: <span className='fw-normal'>{detalle}</span></h5>
            <h5 className='buscador-card-categoria'>Observaciónes: <span className='fw-normal'> {observaciones}</span></h5>
            <h5 className='buscador-card-categoria'>Trabajo realizado: <span className='fw-normal'>{trabajoRealizado}</span></h5>
            <h5 className='buscador-card-categoria'>Costo: <span className='fw-normal'>${costo}</span></h5>
          </div>
          <div>
            <h5 className='buscador-card-categoria'>Empresa: <span className='fw-normal'>{empresa}</span></h5>
            <h5 className='buscador-card-categoria'>Teléfono: <span className='fw-normal'>{contacto}</span></h5>
            <h5 className='buscador-card-categoria'>Dirección: <span className='fw-normal'> {direccion}</span></h5>
            <h5 className='buscador-card-categoria'>Localidad: <span className='fw-normal'>{localidad}</span></h5>
            <h5 className='buscador-card-categoria'>Provincia: <span className='fw-normal'> {provincia}</span></h5>
            <h6 className='buscador-card-categoria'>ID empresa: <span className='fw-normal'>{idEmpresa}</span></h6>
          </div>
        </div>
      </div>
      <button onClick={imprimirSegmento} className='boton editar'><span className=' boton-texto'>Imprimir</span></button>
    </>
  )
}

export default CardOrden