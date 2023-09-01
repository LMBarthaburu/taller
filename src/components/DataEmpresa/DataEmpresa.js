import React, { useEffect, useState } from 'react'
import './dataEmpresa.css'

function DataEmpresa() {
  const [datos, setDatos] = useState([])

  const getData=()=>{
    const miDato = JSON.parse(localStorage.getItem('Usuario'))
    const data = miDato.user
    if (!miDato){
      window.location.href='/' 
    }else{
      setDatos(data)
    }
  }
  useEffect(() => {
    getData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  console.log(datos)
  return (
    <div className='container'>
      {
        <div>
          <h5>{datos.nombre}</h5>
          <h5>{datos.telefono}</h5>
        </div>
      }
    </div>
  )
}

export default DataEmpresa