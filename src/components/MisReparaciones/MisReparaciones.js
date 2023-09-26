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
    const reparacionesFiltradas = (reparaciones.filter(item=>item.idEmpresa===data._id))
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
        <div className="accordion accordion-flush mb-5" id="accordion">
            {
              data.map(item=><CardReparaciones key={item.numero} cliente={item.nombre} telefono={item.telefono} dni={item.cuit} fecha={item.fecha} serie={item.serie}marca={item.modelo} detalle={item.detalle} observaciones={item.observaciones} trabajoRealizado={item.trabajoRealizado} numero={item.numero} estado={item.estado} costo={item.costo} id={item._id}/>)
            }
        </div>
      }
    </div>
  )
}

export default MisReparaciones