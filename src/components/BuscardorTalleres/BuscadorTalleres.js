import React, { useEffect, useState } from 'react'
import { useForm  } from 'react-hook-form'
import {Rubros} from '../../assest/db/rubros'
import BuscadorTalleresCard from '../BuscadorTalleresCard/BuscadorTalleresCard'
import './buscadorTalleres.css'

function BuscadorTalleres() {
  const urlBE = process.env.REACT_APP_URL_BE
  const { register , handleSubmit} = useForm()
  const [talleres, setTalleres]=useState([])
  const [isLoading, setIsLoading] = useState(false);

  const filtrarTalleres=async()=>{
    document.getElementById('buscador-talleres-box').classList.remove('d-none')
    setIsLoading(true)
    const res = await fetch(`${urlBE}registro`)
    const json = await res.json()
    const registros = json.registros
    const criterioTaller = document.getElementById('rubroTaller').value
    const registroFiltrado = (registros.filter(item=>
      item.rubro.toLowerCase()===criterioTaller.toLowerCase() || item.destacado===criterioTaller
    ))
    setTalleres(registroFiltrado)
    setIsLoading(false)
  }
  useEffect(() => {
    filtrarTalleres()
  }, [ ])  // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className='container buscador text-center' id='talleres'>
      <h2 className='buscador-titulo'>Buscador de talleres:</h2>
      <form className='d-lg-flex justify-content-center align-items-center mb-3'>
        <label className='buscador-taller-label'>Elegí el rubro:</label>
        <select id="rubroTaller" name='rubro' {...register("rubro")} className='buscador-taller-select'>
          <option value="Si">Destacados</option>
          { 
            Rubros.map(item=><option key={item.rubro} value={item.rubro}>{item.rubro}</option>)
          }
        </select>
        <button onClick={handleSubmit(filtrarTalleres)} className='buscador-boton'>Buscar</button>
      </form>
      <div className='d-none' id='buscador-talleres-box'>
        {
          isLoading? 
            <h4 className="my-4 buscador-taller-error">Cargando...</h4>
          : 
          talleres.length===0?
            <h4 className='my-4 buscador-taller-error'>No hay Talleres segun el rubro buscado</h4>
            :
            talleres.map(item=>
              <div>
                <BuscadorTalleresCard key={item._id} nombre={item.nombre} telefono={item.telefono} localidad={item.localidad} direccion={item.direccion} provincia={item.provincia} rubro={item.rubro} logo={item.logo}/>
              </div>
              )
        }
      </div>
    </div>
  )
}

export default BuscadorTalleres