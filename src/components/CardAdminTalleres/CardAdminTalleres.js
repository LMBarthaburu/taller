import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../DataEmpresa/dataEmpresa.css'



function CardAdminTalleres({cuit, direccion, localidad, email, nombre, provincia, rubro, telefono, destacado,logo,_id }) {  
  const urlBE = process.env.REACT_APP_URL_BE
  const [editar, setEditar] = useState(false)
  const [contraseña, setContraseña]=useState(false)
  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
    setValue("_id", _id)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const eliminar = async(data)=>{
    const del = await fetch(`${urlBE}registro`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await del.json()
    alert(json.message)
    window.location.reload()
  }

  const cambios = async (data)=>{
    const resp = await fetch(`${urlBE}registro`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    setEditar(false)
    alert(json.message)
    window.location.reload()
  }
  const editarContraseña=async(data)=>{
    const resp = await fetch(`${urlBE}registro/reset`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    setContraseña(false)
    alert(json.message)
    window.location.reload()
  }

  const setEdit=()=>{
    setEditar(true)
    setContraseña(false)
  }

  return (
    <>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${_id}`} aria-expanded="false" aria-controls={`flush-collapse${_id}`}>
          <h5>{nombre} - #{_id}</h5>
        </button>
      </h2>
      <div id={`flush-collapse${_id}`} className="accordion-collapse collapse accordion-bg" data-bs-parent="#accordion">
        <div className="accordion-body">
          {
            editar?
            <input type="text" name='logo' id='logo' {...register("logo")} defaultValue={logo} className='reparacion-input fs-5 fw-normal w-100'/>
            :
            <img src={logo} alt="Logo empresa" className='w-25 img-logo'/>

          }
          <input type="text" value={_id} readOnly="readonly" className='d-none' {...register('_id')}/>
          <h5 className='m-0'> <span className='fw-bold'>Telefono: </span>{telefono}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Email: </span>{email}</h5>
          <h5 className='m-0'> <span className='fw-bold'>DNI/CUIT: </span>{cuit}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Dirección: </span>{direccion}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Localidad: </span>{localidad}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Provincia: </span>{provincia}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Rubro: </span>{rubro}</h5>
          <p className='m-0'>Destacado:</p>
          {
            editar?
              <select id="destacado" name='destacado' className='input-edit' defaultValue={destacado} {...register("destacado")}>
                <option value="No">No</option>
                <option value="Si">Si</option>
              </select>
              :
              <input type="text" value={destacado} readOnly="readonly"  className='input-readonly'/>
          }
          {
            contraseña?
            <div>
              <label className='fs-5 fw-bold'>contraseña:</label>
              <input type="text" name='contraseña' id='contrasena' {...register("contrasena")} className='reparacion-input fs-5 fw-bold w-25 ps-2'required/>
              <label className='fs-5 fw-bold'>Repetir contraseña:</label>
              <input type="text" name='repeatcontrasena' id='repeatcontrasena' {...register("repeatcontrasena")} className='reparacion-input fs-5 fw-normal w-25 ps-2' required/>
            </div>
            :
            null
          }
        </div>
        {
          editar?
            <div>
              <button className='boton guardar ms-2' onClick={handleSubmit(cambios)}><p className='boton-texto'>Guardar cambios</p></button>
              <button className='boton editar ms-2' onClick={()=>(setEditar(false))} ><p className='boton-texto'>Cancelar</p></button>
              <button className='boton eliminar ms-2' onClick={handleSubmit(eliminar)}><p className='boton-texto'>Eliminar Taller</p></button>
            </div>
            :
            <div>
              {
                contraseña?
                <div className='d-flex'>
                <button className='boton editar ms-2' onClick={handleSubmit(editarContraseña)} ><p className='boton-texto'>Guardar contraseña</p></button>
                <button className='boton editar ms-2' onClick={()=>(setContraseña(false))} ><p className='boton-texto'>Cancelar</p></button>
                </div>
                :
                <button className='boton editar ms-2' onClick={()=>(setContraseña(true))} ><p className='boton-texto'>Reestablecer contraseña</p></button>
              }
              <button className='boton editar ms-2 mt-2' onClick={setEdit}><p className='boton-texto'>Editar datos</p></button>
            </div>
          }      
      </div>
    </div>
  </>
  )
}

export default CardAdminTalleres