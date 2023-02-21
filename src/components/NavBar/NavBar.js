import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light position-sticky w-100 top-0">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand fw-bold" href="/#">MI TALLER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center d-lg-flex justify-content-lg-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="/#servicios">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/#contacto'>Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/LogIn'>Inicia Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar