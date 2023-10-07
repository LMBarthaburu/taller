import React, { useEffect } from 'react'
import './logInForm.css'
import { useForm } from 'react-hook-form'

function LogInForm() {
  const urlBE = process.env.REACT_APP_URL_BE
  const {register , handleSubmit} = useForm()

  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    if(!usuarios){
      return
    }else{
      window.location.href='/PerfilUsuario' 
    }
  }
  
  useEffect(() => {
    login()
  }, [])
  

  const onSubmit = async(data) =>{
    const resp = await fetch(`${urlBE}login` , {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    if(resp.ok===false){
      alert(json.message)
      return
    }else{
      const jsonStr = JSON.stringify(json)  
      localStorage.setItem("Usuario" , jsonStr)
      window.location.href='/PerfilUsuario' 
      }
  }

  return (
    <div className='LogIn'>
      <div className='login-fondo'>
        <div className="formulario-contenedor-login">
          <form onSubmit={handleSubmit(onSubmit)} className= "form-className formulario-estilo d-flex flex-column">
              <h1 className="text-center fs-3 py-4 fw-bold">Inicio de sesión:</h1>                    
              <input type="text" className="input-style" name="email" id="email" placeholder="Email" {...register("email" , {required: true})} required/>   
              <input type="password" className="input-style" name="password" id="password" placeholder="Contraseña" {...register("contrasena")} required/>           
              <button type="submit" className="buscador-boton my-5 py-2">Ingresar</button>
              <p className='text-center'>No tenes cuenta? <a  href='/register' className='link-login'>Registrese Aca</a></p>
          </form>
            <a href='/' className='link-login'>volver al inicio</a>
        </div>
      </div>
    </div>
  )
}

export default LogInForm