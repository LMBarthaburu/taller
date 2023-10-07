import React, { useEffect, useState } from 'react'
import './agregarTrabajo.css'
import { useForm} from 'react-hook-form'


function AgregarTrabajo() {
  const { register , handleSubmit , setValue } = useForm()
  const urlBE = process.env.REACT_APP_URL_BE
  const [datos, setDatos] = useState([])
  const [numeroRep, setNumero] = useState()
  const [spinner, setSpinner]=useState(false)

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
    setValue("idEmpresa", datos._id)
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
            <input type="number" className="input-trabajo" id="numero" aria-describedby="numero" placeholder="Numero de reparación" {...register("numero")} maxLength='25' value={`${numeroRep}`} readOnly/>
            <select type="text" className="input-trabajo" placeholder="estado" id="estado" aria-describedby="Estado de la reparación" {...register("estado")}> 
              <option value="A Reparar">A Reprar</option>
              <option value="Garantia">Garantía</option>
            </select>
        </div>
        <div className='d-flex flex-wrap'>
            <input type="text" className="input-trabajo" placeholder="idEmpresa" id="idEmpresa" aria-describedby="idEmpresa" value={`${datos._id}`}  {...register("idEmpresa")}readOnly/> 
            <input type="text" className="input-trabajo" placeholder="empresa" id="empresa" aria-describedby="empresa" value={`${datos.nombre}`}  {...register("empresa")}readOnly/> 
            <input type="number" className="input-trabajo" name="contacto" id="contacto" placeholder="contacto" value={`${datos.telefono}`}  {...register("contacto")}readOnly/>
            <input type="text" className="input-trabajo" id="direccion" placeholder="direccion" value={`${datos.direccion}`}  {...register("direccion")}readOnly/>
            <input type="text" className="input-trabajo" id="localidad" placeholder="Localidad" value={`${datos.localidad}`}  {...register("localidad")}readOnly/>
            <input type="text" className="input-trabajo" id="provincia" placeholder="Provincia" value={`${datos.provincia}`}  {...register("provincia")}readOnly/>
        </div>
        <div className='d-flex flex-wrap'>
              <input type="text" className="input-trabajo" name="nombre" id="nombre" placeholder="Nombre de cliente" {...register("nombre")} required/>           
            <input type="number" className="input-trabajo" name="movil" id="movil" placeholder="Telefono de contacto" {...register("telefono")}required/>
            <input type="number" className="input-trabajo" name="cuit" id="cuit" placeholder="DNI o CUIT del cliente" {...register("cuit")}required/> 
            <input type="date" className="input-trabajo" name="fecha" id="fecha" placeholder="Fecha de recepción" {...register("fecha")}required/> 
            <input type="text" className="input-trabajo" name="serie" id="serie" placeholder="Numero de serie o identificación" {...register("serie")}required/> 
            <input type="text" className="input-trabajo" name="modelo" id="modelo" placeholder="Marca y modelo del Producto" {...register("modelo")}required/> 
            <input type="text" className="input-trabajo" name="detalle" id="detalle" placeholder="Detalle del problema" {...register("detalle")}required/> 
            <input type="text" className="input-trabajo" name="observaciones" id="observaciones" placeholder="Observaciones" {...register("observaciones")}required/> 
            <input type="text" className="input-trabajo" name="trabajoRealizado" id="trabajoRealizado" placeholder="Trabajo realizado" {...register("trabajoRealizado")}required/> 
            <input type="text" className="input-trabajo" name="costo" id="costo" placeholder="Costo de la reparación" {...register("costo")}required/> 
        </div>
      </div>
    <div>
      {
        spinner? 
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        :
        <button type="submit" className="buscador-boton">Dar de alta</button>                
      }        
    </div>           
  </form>   )
}

export default AgregarTrabajo