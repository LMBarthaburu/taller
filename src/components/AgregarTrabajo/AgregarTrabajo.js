import React, { useEffect,useState } from 'react'
import './agregarTrabajo.css'
import { useForm} from 'react-hook-form'
import html2pdf from 'html2pdf.js';


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

  const getReparaciones = async () => {
    const res = await fetch(`${urlBE}reparacion`);
    const json = await res.json();
    const reparaciones = json.reparacion;
    let numeroAleatorio = generarNumeroAleatorio();
    if(reparaciones.length===0){
      setNumero(numeroAleatorio)
    }else{
      reparaciones.forEach((reparacion) => {
        if (reparacion.numero === numeroAleatorio) {
          numeroAleatorio = generarNumeroAleatorio()
        } else {
          setNumero(numeroAleatorio);
        }
      });
    }
  };
  
  function generarNumeroAleatorio() {
    const min = 10000000;
    const max = 99999999;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
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
    setValue("url", datos.url)
  }, [datos, setValue])

  useEffect(()=>{
    setValue("numero", numeroRep)
  },[numeroRep, setValue])

  const onSubmit = async(data) => {
    imprimirSegmento()
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

  const imprimirSegmento = () => {
    const element = document.getElementById('alta-de-reparacion')
    html2pdf().from(element).save()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className= "container mb-2 d-flex flex-column agregar-trabajo">
    <h2 className="text-center py-3">Agregar Nueva Reparación</h2>
      <div className='d-flex flex-column' id='alta-de-reparacion'>
        <h5 className='mb-1 mt-2'>Numero de orden:</h5>
        <div className='d-flex flex-wrap justify-content-evenly'>
            <input type="number" className="input-trabajo" id="numero" aria-describedby="numero" placeholder="Numero de reparación" {...register("numero")} maxLength='25' value={`${numeroRep}`} readOnly/>
            <select type="text" className="input-trabajo" placeholder="estado" id="estado" aria-describedby="Estado de la reparación" {...register("estado")}> 
              <option value="A Reparar">A Reprar</option>
              <option value="Garantia">Garantía</option>
            </select>
        </div>
        <h5 className='mb-1 mt-2'>Datos de la empresa:</h5>
        <div className='d-flex flex-wrap justify-content-evenly'>
            <input type="text" className="input-trabajo" placeholder="idEmpresa" id="idEmpresa" aria-describedby="idEmpresa" value={`${datos._id}`}  {...register("idEmpresa")}readOnly/> 
            <input type="text" className="input-trabajo" placeholder="empresa" id="empresa" aria-describedby="empresa" value={`${datos.nombre}`}  {...register("empresa")}readOnly/> 
            <input type="number" className="input-trabajo" name="contacto" id="contacto" placeholder="contacto" value={`${datos.telefono}`}  {...register("contacto")}readOnly/>
            <input type="text" className="input-trabajo" id="direccion" placeholder="direccion" value={`${datos.direccion}`}  {...register("direccion")}readOnly/>
            <input type="text" className="input-trabajo" id="localidad" placeholder="Localidad" value={`${datos.localidad}`}  {...register("localidad")}readOnly/>
            <input type="text" className="input-trabajo" id="provincia" placeholder="Provincia" value={`${datos.provincia}`}  {...register("provincia")}readOnly/>
            <input type="text" className="input-trabajo" id="url" placeholder="url" value={`${datos.url}`}  {...register("url")}readOnly/>
        </div>
        <h5 className='mb-1 mt-2'>Datos del cliente:</h5>
        <div className='d-flex flex-wrap justify-content-evenly'>
              <input type="text" className="input-trabajo" name="nombre" id="nombre" placeholder="Nombre de cliente" {...register("nombre")} required/>           
            <input type="number" className="input-trabajo" name="movil" id="movil" placeholder="Telefono de contacto" {...register("telefono")}required/>
            <input type="number" className="input-trabajo" name="cuit" id="cuit" placeholder="DNI o CUIT del cliente" {...register("cuit")}required/> 
            <input type="date" className="input-trabajo" name="fecha" id="fecha" placeholder="Fecha de recepción" {...register("fecha")}required/> 
            <input type="text" className="input-trabajo" name="serie" id="serie" placeholder="Numero de serie o identificación" {...register("serie")}required/> 
            <input type="text" className="input-trabajo" name="modelo" id="modelo" placeholder="Marca y modelo del Producto" {...register("modelo")}required/> 
            <input type="text" className="input-trabajo" name="detalle" id="detalle" placeholder="Detalle del problema" {...register("detalle")}required/> 
            <input type="text" className="input-trabajo" name="observaciones" id="observaciones" placeholder="Observaciones" {...register("observaciones")}required/> 
        </div>
        <p className='px-md-2'>Da seguimiento a todas tus reparaciones en {datos.nombre} con tu numero de reparaciÓn a traves de www.mitaller.com</p>
      </div>
    <div className='text-center'>
      {
        spinner? 
        <div className="spinner-border mt-2" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        :
        <button type="submit" className="buscador-boton mt-2" >Agregar reparación</button>                
      }        
    </div>           
  </form>   )
}

export default AgregarTrabajo