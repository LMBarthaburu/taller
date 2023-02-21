import React from 'react'

function CardOrden() {
  return (
    <div className='container py-3'>
      <h1 className='text-center my-2'>N° de Reaparación: 000000000</h1>
      <h3 className='text-center my-3'>Estado: Reparado</h3>
      <div className='d-md-flex justify-content-evenly m-3'>
        <div>
          <h4>Empresa: CamPoder SRL</h4>
          <h5>Rubro: Jardinería</h5>
          <h5>Teléfono: 3814010691</h5>
          <h5>Dirección: Av. Gobernador del campo 918</h5>
          <h5>Localidad: San Miguel de Tucumán</h5>
          <h5>Provincia: Tucumán</h5>
        </div>
        <div>
          <h4>Cliente: Luis Barthaburu</h4>
          <h5>Fecha ingreso: 15/2/2023</h5>
          <h5>Marca: Stihl</h5>
          <h5>Modelo: FS450</h5>
          <h5>Número de identificación: 75895845</h5>
          <h5>A reparar: Service</h5>
          <h5>Observaciónes: --</h5>
          <h5>Trabajo realizado:--</h5>
          <h5>Costo: $15000</h5>
        </div>
      </div>
    </div>
  )
}

export default CardOrden