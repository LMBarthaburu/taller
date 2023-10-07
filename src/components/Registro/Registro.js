import React, { useEffect } from 'react'
import './registro.css'
import { useForm  } from 'react-hook-form'
import {Rubros} from '../../assest/db/rubros'


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
        <input type="text" className="input-registro" id="nombre" aria-describedby="nombre" placeholder="Nombre/Razón Social" {...register("nombre" )} maxLength='25' required/>
        <input type="number" className="input-registro" placeholder="Telefono" id="telefono" aria-describedby="Telefono" {...register("telefono")} required/> 
        <input type="number" className="input-registro" placeholder="CUIT" id="cuit" aria-describedby="CUIT" {...register("cuit")} required/> 
        <input type="text" className="input-registro" name="direccion" id="direccion" placeholder="Dirección" {...register("direccion")}  maxLength='20' required/>
        <input type="text" className="input-registro" id="exampleInputLocalidad" placeholder="Localidad" {...register("localidad")} maxLength='25' required/>
        <input type="text" className="input-registro" id="exampleInputProvincia" placeholder="Provincia" {...register("provincia")} maxLength='20' required/>
          <select id="rubro" name='rubro' className="input-registro" {...register("rubro")}>
            <option value="#">Seleccione un rubro</option>
            {
              Rubros.map(item=><option key={item.rubro} value={item.rubro}>{item.rubro}</option>)
            }
          </select>
          <input type="text" className="input-registro" name="email" id="email" placeholder="Email" {...register("email")} required/> 
        <input type="password" className="input-registro" name="password" id="password" placeholder="Contraseña" {...register("contrasena")} autoComplete='new-contraseña' required/>
        <input type="password" className="input-registro" name="repeatpassword" id="repeatpassword" placeholder="Repetir Contraseña" {...register("repeatcontrasena")} autoComplete='new-contraseña' required/> 
        <button type="submit" className="buscador-boton w-100">Dar de alta</button>                
      </form> 
    </>
  )
}

export default Registro