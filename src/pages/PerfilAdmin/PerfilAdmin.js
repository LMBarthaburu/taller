import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AdminTalleres from '../../components/AdminTalleres/AdminTalleres'
import AdminReparaciones from '../../components/AdminReparaciones/AdminReparaciones'

function PerfilAdmin() {
  const login =()=>{
    const usuariosAdmin = JSON.parse(localStorage.getItem('Admin'))
    if(!usuariosAdmin){
      window.location.href='/LogIn'
    }
  }
  
  useEffect(() => {
    login()
  }, [])


  return (
    <>
      <NavBar/>
      <AdminTalleres/>
      <AdminReparaciones/>
    </>
  )
}

export default PerfilAdmin