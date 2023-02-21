import React from 'react'
import './registro.css'
import { useForm  } from 'react-hook-form'


function Registro() {
  const { register , handleSubmit , formState: {errors} } = useForm()
  const urlBE = process.env.REACT_APP_URL_BE

  const onSubmit = async(data) => {
    const resp = await fetch( `${urlBE}/register`, {
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
      <form onSubmit={handleSubmit(onSubmit)} className= "container mt-5 d-flex flex-column">
        <h2 className="text-center py-3">Alta De Usuarios</h2>
          <div className="my-1">
            <input type="text" className="input-registro" id="nombre" aria-describedby="nombre" placeholder="Nombre/Razón Social" {...register("nombre" , {required: true})} maxLength='25'/>
            {errors.nombre?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>
          <div className="my-1">
            <input type="number" className="input-registro" placeholder="Telefono" id="telefono" aria-describedby="Telefono" {...register("telefono", {required: true})}/> 
            {errors.dni?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div> 
          <div className='my-1'>
            <input type="number" className="input-registro" placeholder="CUIT" id="cuit" aria-describedby="CUIT" {...register("cuit", {required: true})}/> 
            {errors.dni?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div> 
          <div className='my-1'>
            <input type="text" className="input-registro" name="direccion" id="direccion" placeholder="Dirección" {...register("direccion", {required: true})}  maxLength='20'/>
            {errors.direccion?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>               
          <div className='my-1'>
            <input type="text" className="input-registro" id="exampleInputLocalidad" placeholder="Localidad" {...register("localidad", {required: true})} maxLength='25'/>
            {errors.localidad?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>
          <div className='my-1'>
            <input type="text" className="input-registro" id="exampleInputProvincia" placeholder="Provincia" {...register("provincia", {required: true})} maxLength='20'/>
            {errors.provincia?.type === 'required' &&<span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>        
          <div className='my-1'>           
              <input type="text" className="input-registro" name="email" id="email" placeholder="Email" {...register("email", {required: true})}/> 
              {errors.email?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}           
          </div>
          <div className='my-1'>
            <input type="password" className="input-registro" name="password" id="password" placeholder="Contraseña" {...register("contrasena", {required: true})}/>
            {errors.contrasena?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}  
          </div>
          <div className='my-1'>
            <input type="password" className="input-registro" name="repeatpassword" id="repeatpassword" placeholder="Repetir Contraseña" {...register("repeatcontrasena", {required: true})}/> 
            {errors.repeatcontrasena?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
        <div className='my-1'>             
          <button type="submit" className="buscador-boton">Dar de alta</button>                
        </div>           
      </form> 
    </>
  )
}

export default Registro