import React, { useEffect, useState } from 'react'
import './dataEmpresa.css'
import {useForm} from 'react-hook-form'
import {Rubros} from '../../assest/db/rubros'


function DataEmpresa() {
const urlBE = process.env.REACT_APP_URL_BE
  const [datos, setDatos] = useState([])
  const [editar, setEditar] = useState(false)
  const {register, handleSubmit, setValue} = useForm()
  const [password, setpassword] = useState(false)

  const getData=async ()=>{
    const miDato = JSON.parse(localStorage.getItem('Usuario'))
    const data = miDato.user
    const res = await fetch(`${urlBE}registro`)
    const json = await res.json()
    const registros = json.registros
    const registroFiltrado = (registros.find(item=>item._id===data._id))
    if (!miDato){
      window.location.href='/' 
    }else{
      setDatos(registroFiltrado)
    }
  }
  useEffect(() => {
    getData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setValue("_id", datos._id)
  }, [datos, setValue])

  const setEdit=(e)=>{
    setEditar(true)
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

  // const eliminar = async(data)=>{
  //   const del = await fetch(`${urlBE}registro`, {
  //     method: 'DELETE',
  //     body: JSON.stringify(data),
  //     headers:{
  //       'content-type': 'application/json'
  //     }
  //   })
  //   const json = await del.json()
  //   localStorage.clear('Usuario')
  //   alert(json.message)
  //   window.location.reload()
  // }

  const changePasword = async (data)=>{
    const resp = await fetch(`${urlBE}registro/change`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    setpassword(false)
    alert(json.message)
    window.location.reload()
  }

  return (
    <div className='container data-empresa'>
        <div className='d-flex flex-column align-items-center'>
          <img src={datos.logo} alt="Logo empresa" className='w-25 img-logo'/>  
          <div className='d-lg-flex justify-content-evenly my-3'>
            <div>
                {
                  editar?
                    <input type="text"  className='input-edit fs-1'{...register('nombre')}/>
                    :
                    <input type="text" value={datos.nombre} readOnly="readonly"  className='input-readonly fs-1'/>
                }
                <p className='m-0'>ID de sistema</p>
                <input type="text" value={datos._id} readOnly="readonly" className='input-readonly fs-6' {...register('_id')}/>
                <p className='m-0'>CUIT/DNI:</p>
                {
                  editar?
                    <input type="number" className='input-edit'  {...register('cuit')} />
                    :
                    <input type="text" value={datos.cuit} readOnly="readonly"  className='input-readonly'/>
                }     
                <p className='m-0'>Telefono:</p>
                {
                  editar?
                    <input type="number"  className='input-edit' {...register('telefono')} />
                    :
                    <input type="text" value={datos.telefono} readOnly="readonly"  className='input-readonly'/>
                }
                <p className='m-0'>Email:</p>
                {
                  editar?
                    <input type="email"  className='input-edit' {...register('email')} />
                    :
                    <input type="text" value={datos.email} readOnly="readonly"  className='input-readonly'/>
                }   
              </div>
              <div>
                <p className='m-0'>Dirección:</p>
                {
                  editar?
                    <input type="text"   className='input-edit' {...register('direccion')}/>
                    :
                    <input type="text" value={datos.direccion} readOnly="readonly"  className='input-readonly'/>
                }     
                <p className='m-0'>Localidad:</p>
                {
                  editar?
                    <input type="text"  className='input-edit' {...register('localidad')}/>
                    :
                    <input type="text" value={datos.localidad} readOnly="readonly"  className='input-readonly'/>
                }         
                <p className='m-0'>Provincia:</p>
                {
                  editar?
                    <input type="text"  className='input-edit'  {...register('provincia')}/>
                    :
                    <input type="text" value={datos.provincia} readOnly="readonly"  className='input-readonly'/>
                }
                <p className='m-0'>Pagina Web:</p>
                {
                  editar?
                    <input type="text"  className='input-edit'  {...register('url')}/>
                    :
                    <input type="text" value={datos.url} readOnly="readonly"  className='input-readonly'/>
                }
                <p className='m-0'>Rubro:</p>
                {
                  editar?
                    <select id="rubro" name='rubro' className='input-edit' defaultValue={datos.rubro} {...register("rubro")}>
                      {
                        Rubros.map(item=><option value={item.rubro}>{item.rubro}</option>)
                      }
                    </select>
                    :
                    <input type="text" value={datos.rubro} readOnly="readonly"  className='input-readonly'/>
                }
              </div>
          </div>
        </div>
        <div className='w-100 my-2 text-md-center'>
        {
          password?
          <>
            <input type="text" className='input-edit mx-md-2 ps-md-2 fs-5' placeholder='Contraseña Actual' id='contrasena' name='contrasena'{...register ("contrasena")}/>
            <input type="text" className='input-edit mx-md-2 ps-md-2 fs-5' placeholder='Nueva contraseña' id='newcontrasena' name='newcontrasena' {...register("newcontrasena")}/>
            <input type="text" className='input-edit mx-md-2 ps-md-2 fs-5' placeholder='Repetir nueva contraseña' id='repeatcontrasena' name='repeatcontrasena' {...register("repeatcontrasena")}/>
          </>
            :
            null
          }
        </div>
        <div className='w-100 text-center mt-1'>
          {
          editar?
            <div>
              <button className='boton guardar me-2' onClick={handleSubmit(cambios)}><p className='boton-texto'>Guardar cambios</p></button>
              <button className='boton editar ms-2' onClick={setEdit=>(setEditar(false))} ><p className='boton-texto'>Cancelar</p></button>
              {/* <button className='boton eliminar ms-2' onClick={handleSubmit(eliminar)}><p className='boton-texto'>Eliminar cuenta</p></button> */}
            </div>
            :
            <div>
            {password?
              <>
                <button className='boton guardar' onClick={handleSubmit(changePasword)}><p className='boton-texto'>Guardar contraseña</p></button>
                <button className='boton editar ms-2' onClick={setEdit=>(setpassword(!password))} ><p className='boton-texto'>Cancelar</p></button>
              </>
              :
              <>
                <button className='boton editar' onClick={setEdit}><p className='boton-texto'>Editar datos</p></button>
                <button className='boton eliminar ms-2' onClick={()=>setpassword(!password)}><p className='boton-texto'>Cambiar Contraseña</p></button>
              </>
            }
            </div>
          }
        </div>
    </div>
  )
}

export default DataEmpresa