import React, { useEffect } from 'react'
import './registro.css'
import { useForm  } from 'react-hook-form'


function Registro() {
  const { register , handleSubmit} = useForm()
  const urlBE = process.env.REACT_APP_URL_BE

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

  const onSubmit = async(data) => {
    const resp = await fetch( `${urlBE}registro`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()      
    alert(json.message)
    window.location.href='/login' 
  
}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className= "container d-flex flex-column">
        <h2 className="text-center fw-bold">Alta De Usuarios</h2>
          <div className="my-1">
            <input type="text" className="input-registro" id="nombre" aria-describedby="nombre" placeholder="Nombre/Razón Social" {...register("nombre" , {required: true})} maxLength='25' required/>
          </div>
          <div className="my-1">
            <input type="number" className="input-registro" placeholder="Telefono" id="telefono" aria-describedby="Telefono" {...register("telefono", {required: true})} required/> 
          </div> 
          <div className='my-1'>
            <input type="number" className="input-registro" placeholder="CUIT" id="cuit" aria-describedby="CUIT" {...register("cuit", {required: true})} required/> 
          </div> 
          <div className='my-1'>
            <input type="text" className="input-registro" name="direccion" id="direccion" placeholder="Dirección" {...register("direccion", {required: true})}  maxLength='20' required/>
          </div>               
          <div className='my-1'>
            <input type="text" className="input-registro" id="exampleInputLocalidad" placeholder="Localidad" {...register("localidad", {required: true})} maxLength='25' required/>
          </div>
          <div className='my-1'>
            <input type="text" className="input-registro" id="exampleInputProvincia" placeholder="Provincia" {...register("provincia", {required: true})} maxLength='20' required/>
          </div>        
          <div className='my-1'>           
              <input type="text" className="input-registro" name="email" id="email" placeholder="Email" {...register("email", {required: true})} required/> 
          </div>
          <div className='my-1'>
            <input type="password" className="input-registro" name="password" id="password" placeholder="Contraseña" {...register("contrasena", {required: true})} required/>
          </div>
          <div className='my-1'>
            <input type="password" className="input-registro" name="repeatpassword" id="repeatpassword" placeholder="Repetir Contraseña" {...register("repeatcontrasena", {required: true})} required/> 
          </div>
        <div className='my-1'>             
          <button type="submit" className="buscador-boton">Dar de alta</button>                
        </div>           
      </form> 
    </>
  )
}

export default Registro