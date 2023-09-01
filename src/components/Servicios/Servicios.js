import React from 'react'
import './servicios.css'
import Mecanico from '../../assest/images/mecanico-servicios.png'

function Servicios() {
  return (
    <div className='W-100 p-4'id='servicios'>
      <div className='container card-servicios'>
        <h1 className='servicios-titulo text-center'>Nuestros servicios</h1>
        <div className="d-flex align-items-center">
          <div className='d-none d-md-block col-md-5 col-lg-6 text-center'>
            <img src={Mecanico} alt="Mecanico" />
          </div>
          <div className='servicios-texto col-12 col-md-7 col-lg-6 pe-md-5'>
            <h3>Con MI TALLER podras:</h3>
            <h4>Como Usuario Particular:</h4>
            <ul>
              <li className='fs-5'>Dar seguimientos a tus reparaciones con tu numero de reparación o tu DNI</li>
              <li className='fs-5'>Buscar a los mecanicos que necesites segun tus necesidades</li>
            </ul>
            <h4>Como Mecánico:</h4>
            <ul>
              <li className='fs-5'>Tener un control personaliza de todos tus clientes y reparaciones</li>
              <li className='fs-5'>Estadisticas sobre el rendimiento de tus trabajos</li>
              <li className='fs-5'>Servicio de asistencia 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios