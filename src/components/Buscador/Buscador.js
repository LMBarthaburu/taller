import React, { useEffect, useState, useRef  } from 'react'
import CardOrden from '../CardOrden/CardOrden'
import './buscador.css'

function Buscador() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data , getData] = useState([])
  const [buscado,getBuscado]=useState([])
  const buscadorRef = useRef(null)
  

  const getReparaciones= async ()=>{
    const res = await fetch(`${urlBE}reparacion`)
    const json = await res.json()
    getData(json.reparacion)
  }

  useEffect(()=>{
    getReparaciones()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  const buscar =(event)=>{
    event.preventDefault()
    const valor = buscadorRef.current.value
    const valorBuscado = data.filter(item =>
      item.numero.toString() === valor ||
      item.cuit.toString() === valor
    );
    document.getElementById('buscador-texto').classList.remove('d-none')
    if(valorBuscado.length===0){
      getBuscado([])
    }else{
      getBuscado(valorBuscado)
    }
  }

  return (
    <div className='buscador container' id='buscador-section'>
      <h2 className='text-center buscador-titulo'>Consulta aquí el <br /><span className='buscador-titulo-span'>estado de tu trabajo:</span></h2>
      <form action="" onSubmit={buscar} className='d-flex flex-column justify-conten-center align-items-center mb-4'>
        <input type="text" placeholder='Ingresa aquí tu numero de reparación'  ref={buscadorRef}/>
        <button className='buscador-boton mt-2' type='submit'>Buscar</button>
      </form>
      <div className='d-none' id='buscador-texto'>
        { buscado.length>0?
          buscado.map(item=>
          <CardOrden key={item.serie} nombre={item.nombre} telefono={item.telefono} cuit={item.cuit} modelo={item.modelo} fecha={item.fecha} serie={item.serie} detalle={item.detalle} observaciones={item.observaciones} empresa={item.empresa} contacto={item.contacto} localidad={item.localidad} direccion={item.direccion} provincia={item.provincia} trabajoRealizado={item.trabajoRealizado} estado={item.estado} numero={item.numero} costo={item.costo} idEmpresa={item.idEmpresa} fechaEntrega={item.fechaEntrega}/>
          ):<h4 className='text-center  buscador-taller-error'>No se encontraron resultados</h4>
        }
      </div>
    </div>
  )
}

export default Buscador