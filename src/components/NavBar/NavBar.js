import React, { useEffect, useState } from 'react'
import './navBar.css'
import { Link,NavLink } from 'react-router-dom'

function NavBar() {
  const [logeado, setlogin] = useState(false)
  const [usuario, setUsuario] = useState({})


  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    const usuariosAdmin = JSON.parse(localStorage.getItem('Admin'))
    if(!usuarios&&!usuariosAdmin){
      return
    }else if(!usuariosAdmin){
      setUsuario(usuarios)
      setlogin(usuarios)
    }else{
      setUsuario(usuariosAdmin)
      setlogin(usuariosAdmin)
    }
  }

  useEffect(()=>{
    login()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  const logout=()=>{
    localStorage.clear('Usuario','Admin')
    window.location.href='/'
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">MI TALLER</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center d-lg-flex justify-content-lg-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/#servicios">Servicios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contacto'>Contacto</NavLink>
              </li>
              <li className="nav-item ">
                {
                  logeado? 
                    <div className="dropdown position-static">
                      <button className="nav-link nav-btn dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {usuario?.user?.nombre}
                        {usuario?.userAdmin?.nombre}
                      </button>
                      <ul className='dropdown-menu text-center' aria-labelledby="dropdownMenuButton1">
                        <li><NavLink className='nav-link' to="/PerfilUsuario">Perfil</NavLink></li>
                        <li><button className='nav-btn nav-link w-100' onClick={logout}>Cerrar Sesión</button></li>
                      </ul>
                    </div>
                    :                  
                    <div>
                      <a className="nav-link" href='/login' name="Iniciar Sesion">Iniciar Sesión</a>
                    </div>
                }      
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar