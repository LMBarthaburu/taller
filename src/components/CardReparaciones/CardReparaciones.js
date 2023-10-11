import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './cardReparaciones.css'

function CardReparaciones({cliente,telefono,dni,fecha,serie,marca,detalle,observaciones, trabajoRealizado, numero, estado, costo, id, fechaEntrega }) {  
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
      <div id={`flush-collapse${numero}`} className="accordion-collapse collapse accordion-bg" data-bs-parent="#accordion">
        <div className="accordion-body">
          <input type="text" value={id} readOnly="readonly" className='d-none' {...register('_id')}/>
          {
            editar?
            <div>
              <label className='fs-5 fw-bold'>Estado: </label>
              <select placeholder="estado" id="estado" aria-describedby="Estado de la reparación" defaultValue={estado}{...register("estado")}> 
                <option value="A Reparar">A Reprar</option>
                <option value="Garantia">Garantía</option>
                <option value="En revisión">En revisión</option>
                <option value="Reparada">Reparada</option>
              </select>
            </div>
            :
            <h5 className='m-0'> <span className='fw-bold'>Estado: </span>{estado}</h5>
          }
          <h5 className='m-0'> <span className='fw-bold'>Telefono: </span>{telefono}</h5>
          <h5 className='m-0'> <span className='fw-bold'>DNI/CUIT: </span>{dni}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Marca, modelo: </span>{marca}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Numero de identificación: </span>{serie}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Areparar: </span>{detalle}</h5>
          <h5 className='m-0'> <span className='fw-bold'>Observaciones: </span>{observaciones}</h5>
          {
            editar?
              <div>
                <div className='d-md-flex align-items-center'>
                  <label className='color-red fs-5 fw-bold'>Trabajo realizado:</label>
                  <input type="text" {...register('trabajoRealizado')} defaultValue={trabajoRealizado} className='reparacion-input ms-2 fs-5 fw-normal' />
                </div>
                <div className='d-md-flex align-items-center'>
                  <label className='color-red fs-5 fw-bold'>Fevha de entrega:</label>
                  <input type="date" {...register('fechaEntrega')} defaultValue={fechaEntrega} className='reparacion-input ms-2 fs-5 fw-normal'/>
                </div>
                <div className='d-md-flex align-items-center'>
                  <label className='color-red fs-5 fw-bold'>Costo de la reparación:$</label>
                  <input type="number" {...register('costo')} defaultValue={costo} className='reparacion-input ms-2 fs-5 fw-normal'/>
                </div>
              </div>
              :
              <div>
                <h5 className='m-0'> <span className='fw-bold'>Trabajo realizado: </span>{trabajoRealizado}</h5>
                <h5 className='m-0'> <span className='fw-bold'>Fecha de entrega: </span>{fechaEntrega}</h5>
                <h5 className='m-0'> <span className='fw-bold'>Costo de la reparación: </span>${costo}</h5>
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