import React, { useEffect, useState } from 'react'
import CardReparaciones from '../CardReparaciones/CardReparaciones'
import './misReparaciones.css'

function MisReparaciones() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data, getData]=useState([])

  const getReparaciones= async ()=>{
    const miDato = JSON.parse(localStorage.getItem('Usuario'))
    const data = miDato.user
    const res = await fetch(`${urlBE}reparacion`)
    const json = await res.json()
    const reparaciones = json.reparacion
    const reparacionesFiltradas = (reparaciones.filter(item=>item.empresa===data.nombre))
    const reparacionesOrdenadas = reparacionesFiltradas.sort(function (a, b) {
      if (a.numero > b.numero) {
        return 1;
      }
      if (a.numero < b.numero) {
        return -1;
      }
      return 0;
    });
    getData(reparacionesOrdenadas)
  }

  useEffect(()=>{
    getReparaciones()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container mt-3'>
      <h3>Lista de trabajos realizados/pendientes:</h3>
      {
        data.length===0? <h4>No tienes trabajos pendientes/realizados</h4>:
          <table className='text-center'>
            <tr>
              <th>Numero</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Telefono</th>
              <th>DNI</th>
              <th>Marca</th>
              <th>Serie</th>
              <th>Detalle</th>
              <th>Observaciones</th>
              <th>Trabajo</th>
            </tr>
            {
              data.map(item=><CardReparaciones key={item.numero} cliente={item.nombre} telefono={item.telefono} dni={item.cuit} fecha={item.fecha} serie={item.serie}marca={item.modelo} detalle={item.detalle} observaciones={item.observaciones} trabajo={item.trabajo} numero={item.numero} estado={item.estado} />)
            }
          </table>
      }
    </div>
  )
}

export default MisReparaciones