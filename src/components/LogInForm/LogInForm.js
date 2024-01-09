import React, { useEffect, useState } from 'react'
import './logInForm.css'
import { useForm } from 'react-hook-form'

function LogInForm() {
  const urlBE = process.env.REACT_APP_URL_BE
  const {register , handleSubmit} = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    const usuariosAdmin = JSON.parse(localStorage.getItem('Admin'))
    if(!usuarios&&!usuariosAdmin){
      return
    }else if(!usuariosAdmin){
      window.location.href='/PerfilUsuario' 
    }else{
      window.location.href='/administracion'
    }
  }
  
  useEffect(() => {
    login()
  }, [])
  

  const onSubmit = async(data) =>{
    setIsLoading(true)
    const resp = await fetch(`${urlBE}login` , {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()

    const respAdmin = await fetch(`${urlBE}adminLogin` , {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    if(respAdmin.ok===true){
      const jsonAdmin = await respAdmin.json()
      console.log(jsonAdmin)
      const jsonStrAdm = JSON.stringify(jsonAdmin)  
      localStorage.setItem("Admin" , jsonStrAdm)
      window.location.href='/administracion' 
      return
    }else if(respAdmin.ok===false){
      const jsonStr = JSON.stringify(json)  
      localStorage.setItem("Usuario" , jsonStr)
      window.location.href='/PerfilUsuario' 
    }else{
      alert(json.message)
      setIsLoading(false)
      return
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
              {
                isLoading?
                <div className='my-5 py-2'>
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                :
                <button type="submit" className="buscador-boton my-5 py-2">Ingresar</button>
              }          
          </form>
            <a href='/' className='link-login'>volver al inicio</a>
        </div>
      </div>
    </div>
  )
}

export default LogInForm