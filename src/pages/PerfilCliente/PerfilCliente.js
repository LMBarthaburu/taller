import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import DataEmpresa from '../../components/DataEmpresa/DataEmpresa'
import MisReparaciones from '../../components/MisReparaciones/MisReparaciones'
import AgregarTrabajo from '../../components/AgregarTrabajo/AgregarTrabajo'


function PerfilCliente() {
  const getData=()=>{
    const miDato = JSON.parse(localStorage.getItem('Usuario'))
    if (!miDato){
      window.location.href='/login' 
    }
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <NavBar/>
      <DataEmpresa/>
      <AgregarTrabajo/>
      <MisReparaciones/>
    </>
  )
}

export default PerfilCliente