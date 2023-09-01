import React, { useEffect, useState } from 'react'
import './agregarTrabajo.css'
import { useForm} from 'react-hook-form'


function AgregarTrabajo() {
  const { register , handleSubmit , formState: {errors}, setValue } = useForm()
  const urlBE = process.env.REACT_APP_URL_BE
  const [datos, setDatos] = useState([])
  const [numeroRep, setNumero] = useState()
  const [spinner, setSpinner]=useState(false)

  const getData=()=>{
    const miDato = JSON.parse(localStorage.getItem('Usuario'))
    const data = miDato.user
    if (!miDato){
      window.location.href='/' 
    }else{
      setDatos(data)
    }
  }
  const getReparaciones= async ()=>{
    const res = await fetch(`${urlBE}reparacion`)
    const json = await res.json()
    const reparaciones = json.reparacion
    const reparacionesOrdenadas = reparaciones.sort(function (a, b) {
      if (a.numero > b.numero) {
        return 1;
      }
      if (a.numero < b.numero) {
        return -1;
      }
      return 0;
    });
    const valorNumero = reparacionesOrdenadas.slice(-1).pop()
    const numeroReparacion = (valorNumero.numero+1)
    setNumero(numeroReparacion)
  }
  
  useEffect(() => {
    getData()
    getReparaciones()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setValue("empresa", datos.nombre)
    setValue("contacto", datos.telefono)
    setValue("direccion", datos.direccion)
    setValue("localidad", datos.localidad)
    setValue("provincia", datos.provincia)
  }, [datos, setValue])
  useEffect(()=>{
    setValue("numero", numeroRep)
  },[numeroRep, setValue])

  const onSubmit = async(data) => {
    setSpinner(true)
    const resp = await fetch( `${urlBE}reparacion`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    alert(json.message)
    window.location.href='/PerfilUsuario'  
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className= "container mt-5 d-flex flex-column">
    <h2 className="text-center py-3">Agregar Nueva Reparación</h2>
      <div>
        <div className='d-flex flex-wrap'>
          <div className="my-1 w-25">
            <input type="number" className="input-registro" id="numero" aria-describedby="numero" placeholder="Numero de reparación" {...register("numero" , {required: true})} maxLength='25' value={`${numeroRep}`} readOnly/>
            {errors.numero?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>
          <div className="my-1 w-25">
            <select type="text" className="input-registro" placeholder="estado" id="estado" aria-describedby="Estado de la reparación" {...register("estado", {required: true})}> 
            {errors.estado?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
              <option value="A Reparar">A Reprar</option>
              <option value="En Reparacion">En Reparación</option>
              <option value="Reapado">Reparado</option>
            </select>
          </div> 
        </div>
        <div className='d-flex flex-wrap'>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" placeholder="empresa" id="empresa" aria-describedby="empresa" value={`${datos.nombre}`}  {...register("empresa", {required: true})}readOnly/> 
            {errors.empresa?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div> 
          <div className='my-1 w-25'>
            <input type="number" className="input-registro" name="contacto" id="contacto" placeholder="contacto" value={`${datos.telefono}`}  {...register("contacto", {required: true})}readOnly/>
            {errors.contacto?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>     
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" id="direccion" placeholder="direccion" value={`${datos.direccion}`}  {...register("direccion", {required: true})}readOnly/>
            {errors.direccion?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>          
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" id="localidad" placeholder="Localidad" value={`${datos.localidad}`}  {...register("localidad", {required: true})}readOnly/>
            {errors.localidad?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" id="provincia" placeholder="Provincia" value={`${datos.provincia}`}  {...register("provincia", {required: true})}readOnly/>
            {errors.provincia?.type === 'required' &&<span className='mensaje-error'>Este campo es obligatorio </span>}
          </div>        
        </div>
        <div className='d-flex flex-wrap'>
          <div className='my-1 w-25'>
              <input type="text" className="input-registro" name="nombre" id="nombre" placeholder="Nombre de cliente" {...register("nombre", {required: true})}/> 
              {errors.nombre?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}           
          </div>
          <div className='my-1 w-25'>
            <input type="number" className="input-registro" name="movil" id="movil" placeholder="Telefono de contacto" {...register("telefono", {required: true})}/>
            {errors.telefono?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}  
          </div>
          <div className='my-1 w-25'>
            <input type="number" className="input-registro" name="cuit" id="cuit" placeholder="DNI o CUIT del cliente" {...register("cuit", {required: true})}/> 
            {errors.cuit?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
          <div className='my-1 w-25'>
            <input type="date" className="input-registro" name="fecha" id="fecha" placeholder="Fecha de recepción" {...register("fecha", {required: true})}/> 
            {errors.fecha?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" name="serie" id="serie" placeholder="Numero de serie o identificación" {...register("serie", {required: true})}/> 
            {errors.serie?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" name="modelo" id="modelo" placeholder="Marca y modelo del Producto" {...register("modelo", {required: true})}/> 
            {errors.modelo?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" name="detalle" id="detalle" placeholder="Detalle del problema" {...register("detalle", {required: true})}/> 
            {errors.detalle?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" name="observaciones" id="observaciones" placeholder="Observaciones" {...register("observaciones", {required: true})}/> 
            {errors.observaciones?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
          <div className='my-1 w-25'>
            <input type="text" className="input-registro" name="reparacion" id="reparacion" placeholder="Trabajo realizado" {...register("reparacion", {required: true})}/> 
            {errors.reparacion?.type === 'required' && <span className='mensaje-error'>Este campo es obligatorio </span>}         
          </div>
        </div>
      </div>
    <div className='my-1 w-25'>
      {
        spinner? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>:<button type="submit" className="buscador-boton">Dar de alta</button>                
      }        
    </div>           
  </form>   )
}

export default AgregarTrabajo