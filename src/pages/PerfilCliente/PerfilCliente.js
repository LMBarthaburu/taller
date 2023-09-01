import React, { useEffect } from 'react'
import AgregarTrabajo from '../../components/AgregarTrabajo/AgregarTrabajo'
import MisReparaciones from '../../components/MisReparaciones/MisReparaciones'
import NavBar from '../../components/NavBar/NavBar'
import DataEmpresa from '../../components/DataEmpresa/DataEmpresa'


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