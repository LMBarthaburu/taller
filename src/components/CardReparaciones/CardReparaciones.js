import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './cardReparaciones.css'

function CardReparaciones({cliente,telefono,dni,fecha,serie,marca,detalle,observaciones, trabajoRealizado, numero, estado, costo, id }) {  
  const urlBE = process.env.REACT_APP_URL_BE
  const [editar, setEditar] = useState(false)
  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
    setValue("_id", id)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const eliminar = async(data)=>{
    const del = await fetch(`${urlBE}reparacion`, {
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
    const resp = await fetch(`${urlBE}reparacion`, {
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

  return (
    <>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${numero}`} aria-expanded="false" aria-controls={`flush-collapse${numero}`}>
          <h5>#{numero} - {cliente} - {fecha} - {estado}</h5>
        </button>
      </h2>
      <div id={`flush-collapse${numero}`} className="accordion-collapse collapse" data-bs-parent="#accordion">
        <div className="accordion-body">
          <input type="text" value={id} readOnly="readonly" className='d-none' {...register('_id')}/>
          <p className='m-0'>Estado: {estado}</p>
          <p className='m-0'>Telefono: {telefono}</p>
          <p className='m-0'>DNI/CUIT: {dni}</p>
          <p className='m-0'>Marca, modelo: {marca}</p>
          <p className='m-0'>Numero de identificación: {serie}</p>
          <p className='m-0'>Areparar: {detalle}</p>
          <p className='m-0'>Observaciones: {observaciones}</p>
          <p className='m-0'>Trabajo realizado: {trabajoRealizado}</p>
          <p className='m-0'>Costo de la reparación: ${costo}</p>
          {
            editar?
              <div>
                <div className='d-flex align-items-center'>
                  <label className='color-red'>Trabajo realizado:</label>
                  <input type="text" {...register('trabajoRealizado')} className='boton-reparacion-editar ms-2' />
                </div>
                <div className='d-flex align-items-center'>
                  <label className='color-red'>Costo de la reparación:</label>
                  <input type="number" {...register('costo')}  className='boton-reparacion-editar ms-2'/>
                </div>
              </div>
              :
              <div>
                <div className='d-flex align-items-center'>
                  <label>Trabajo realizado:</label>
                  <input type="text"  value={trabajoRealizado}  className='border-0 ms-2'/>
                </div>
                <div className='d-flex align-items-center'>
                  <label>Costo de la reparación:</label>
                  <input type="number"  value={costo}  className='border-0 ms-2'/>
                </div>
              </div>
          }     

        </div>
        {
          editar?
            <div>
              <button className='boton guardar ms-2' onClick={handleSubmit(cambios)}><p className='boton-texto'>Guardar cambios</p></button>
              <button className='boton editar ms-2' onClick={setEdit=>(setEditar(false))} ><p className='boton-texto'>Cancelar</p></button>
              <button className='boton eliminar ms-2' onClick={handleSubmit(eliminar)}><p className='boton-texto'>Eliminar reparacion</p></button>
            </div>
            :
            <button className='boton editar' onClick={setEdit=>(setEditar(true))}><p className='boton-texto'>Editar datos</p></button>
          }      
      </div>
    </div>
  </>
  )
}

export default CardReparaciones