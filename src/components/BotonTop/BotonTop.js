import React from 'react'
import './botonTop.css'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

function BotonTop() {
  const top =()=>{
    window.scrollTo(0,0)
  }
  return (
    <button className='boton-top' onClick={top}>
      <BsFillArrowUpSquareFill className='boton-top-logo'/>
    </button>
  )
}

export default BotonTop