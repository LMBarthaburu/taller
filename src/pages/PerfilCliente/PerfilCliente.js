import React from 'react'
import AgregarTrabajo from '../../components/AgregarTrabajo/AgregarTrabajo'
import MisReparaciones from '../../components/MisReparaciones/MisReparaciones'
import NavBar from '../../components/NavBar/NavBar'


function PerfilCliente() {
  return (
    <>
      <NavBar/>
      <AgregarTrabajo/>
      <MisReparaciones/>
    </>
  )
}

export default PerfilCliente