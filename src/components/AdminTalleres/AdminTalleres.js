import React, { useEffect, useState } from 'react'
import CardAdminTalleres from '../CardAdminTalleres/CardAdminTalleres'

function AdminTalleres() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [talleres, setTalleres]= useState([])
  const [talleresFull, setTalleresFull] = useState([])


  const getTalleres =async ()=>{
    const res = await fetch(`${urlBE}registro`)
    const json = await res.json()
    const registros = json.registros
    setTalleres(registros)
    setTalleresFull(registros)
  }
  useEffect(() => {
    getTalleres()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const filter = async (event) => {
    event.preventDefault();
    const criterio = document.getElementById('criterio-busqueda-taller').value;
    let talleresFiltrados = talleresFull;
    if (criterio !== '') {
      talleresFiltrados = talleresFiltrados.filter(item => {
        const idTaller = item._id.toString();
        const nombreTaller = item.nombre.toLowerCase();
        const criterioLowerCase = criterio.toLowerCase();
  
        return idTaller === criterio || nombreTaller.includes(criterioLowerCase)
      });
    }
    setTalleres(talleresFiltrados);
  };
  const clean =(event)=>{
    event.preventDefault()
    const criterio = document.getElementById('criterio-busqueda-taller');
    criterio.value=''
    setTalleres(talleresFull)
  }
  

  return (
    <div className='container'>
      <h2>Talleres registrados:</h2>
      <form className='my-2'>
        <label>Buscar taller:</label>
        <input type="text" id='criterio-busqueda-taller' placeholder='Ingrese nombre o ID del taller buscado' className='w-100 my-1 filtro-input'/>
        <br />
        <button onClick={filter} className='boton editar'><span className='boton-texto'>Filtrar</span></button>
        <button onClick={clean} className='boton eliminar ms-2'><span className='boton-texto'>Limpiar filtros</span> </button>
      </form>
      { 
        talleres.length===0?
        <h5>No se encontro talleres segun el criterio buscado</h5>
        :
        <div className="accordion accordion-flush mb-2" id="accordion">
        {
          talleres.map(item=>
          <CardAdminTalleres cuit={item.cuit} direccion={item.direccion} localidad={item.localidad} email={item.email} nombre={item.nombre} provincia={item.provincia} rubro={item.rubro} telefono={item.telefono} destacado={item.destacado} _id={item._id} logo={item.logo} key={item._id}/>
          )
        }
      </div>
      }
      <a href="/register">
        <button className='buscador-boton'>Agregar Nuevo Taller</button>
      </a>
    </div>
  )
}

export default AdminTalleres