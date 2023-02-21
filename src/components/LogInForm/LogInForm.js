import React from 'react'
import './logInForm.css'

function LogInForm() {
  return (
    <div className='LogIn'>
      <div className='login-fondo'>
        <div className="formulario-contenedor-login">
          <form className= "formulario-estilo d-flex flex-column align-items-center">
            <h1 className="text-center fs-3 py-4 fw-bold">Iniciar Sesión</h1>                    
            <input type="text" className="input-style my-3" name="email" id="email" placeholder="Email" />   
            <input type="password" className="input-style my-3" name="password" id="password" placeholder="Contraseña" />           
            <button type="submit" className="boton-contacto-login my-5 py-2">Iniciar</button>
          </form>      
        </div>  
      </div>
    </div>
  )
}

export default LogInForm