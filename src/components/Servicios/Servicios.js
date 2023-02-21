import React from 'react'
import './servicios.css'
import Mecanico from '../../assest/images/mecanico-servicios.png'

function Servicios() {
  return (
    <div className='W-100 bg-dark pt-5'id='servicios'>
      <div className='container'>
        <h1 className='text-light text-center mt-md-3'>Nuestros servicios</h1>
        <div className="row d-flex align-items-center">
          <div className='d-none d-md-block col-5 text-center'>
            <img src={Mecanico} alt="Mecanico" />
          </div>
          <div className='col-12 col-md-7'>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="px-0 ">
                    <div className="card">
                      <div className="card-body text-light">
                        <h3 className="card-title">Panel Administrativo para mecánicos</h3>
                        <p className="card-text">Podras dar seguimeinto a todas tus reparaciones, mantener actualizado el estado de las mismas y obtener estadisticas sobre el funcionamiento de tu negocio.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="px-0 ">
                    <div className="card">
                      <div className="card-body text-light">
                        <h3 className="card-title">Seguimiento de ordenes para los clientes</h3>
                        <p className="card-text">A traves del numero de reparacion tus clientes podran consultar el estado de su trabajo y el costo de los mismos.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="px-0 ">
                    <div className="card">
                      <div className="card-body text-light">
                        <h3 className="card-title">Soporte especializado las 24 hrs</h3>
                        <p className="card-text">Nuestro equipo tecnico estará disponible las 24hrs para dar repuestas a todas tus necesiadades.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios