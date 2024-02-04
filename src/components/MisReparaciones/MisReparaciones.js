import React, { useEffect, useState } from 'react'
import CardReparaciones from '../CardReparaciones/CardReparaciones'
import './misReparaciones.css'

function MisReparaciones() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data, getData]=useState([])
  const [dataFull, setDataFull] = useState([])

  const getReparaciones= async ()=>{
    const miDato = JSON.parse(localStorage.getItem('Usuario'))
    const data = miDato.user
    const res = await fetch(`${urlBE}reparacion`)
    const json = await res.json()
    const reparaciones = json.reparacion
    const reparacionesFiltradas = (reparaciones.filter(item=>item.idEmpresa===data._id))
    const reparacionesOrdenadas = reparacionesFiltradas.sort(function (a, b) {
      if (a.numero > b.numero) {
        return 1;
      }
      if (a.numero < b.numero) {
        return -1;
      }
      return 0;
    });
    getData(reparacionesOrdenadas.reverse())
    setDataFull(reparacionesFiltradas)
  }

  useEffect(()=>{
    getReparaciones()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
const filter = async (event) => {
  event.preventDefault();
  const criterio = document.getElementById('filtro').value;
  const estado = document.getElementById('estado-opciones').value;

  let reparacionesFiltradas = dataFull;

  if (criterio !== '') {
    reparacionesFiltradas = reparacionesFiltradas.filter(item => {
      const numeroReparacion = item.numero.toString();
      const dniReparacion = item.cuit.toString();
      const nombreReparacion = item.nombre.toLowerCase();
      const criterioLowerCase = criterio.toLowerCase();

      return numeroReparacion === criterio || nombreReparacion.includes(criterioLowerCase) || dniReparacion===criterio;
    });
  }

  if (estado !== 'todas') {
    reparacionesFiltradas = reparacionesFiltradas.filter(item => item.estado.toLowerCase().includes(estado.toLowerCase()));
  }

  getData(reparacionesFiltradas);
};
const clean =(event)=>{
  event.preventDefault()
  const criterio = document.getElementById('filtro');
  const estado = document.getElementById('estado-opciones');
  criterio.value=''
  estado.value='todas'
  getData(dataFull)
}

  return (
    <div className='container mt-3 data-empresa'>
      <h3>Lista de trabajos realizados/pendientes:</h3>
      <form className='mb-2'>
        <input type="text" placeholder='Ingrese Nombre, Numero de reparacion o DNI/CUIT' id='filtro' className='filtro-input'/>
        <div className='py-2'>
          <label>Filtrar por estado de reparación: </label>
          <select className='buscador-taller-select' placeholder="estado" id="estado-opciones" aria-describedby="Estado de la reparación">
            <option value="todas">Ver todas las reparacion</option> 
            <option value="A Reparar">A Reprar</option>
            <option value="Garantia">Garantía</option>
            <option value="En revisión">En revisión</option>
            <option value="Reparada">Reparada</option>
          </select>
        </div>
        <button onClick={filter} className='boton editar'><span className='boton-texto'>Filtrar</span></button>
        <button onClick={clean} className='boton eliminar ms-2'><span className='boton-texto'>Limpiar filtros</span> </button>
      </form>
      {
        data.length===0? <h4 className='buscador-taller-error my-3'>No tienes trabajos segun el criterio buscado</h4>:
        <div className="accordion accordion-flush mb-5" id="accordion">
            {
              data.map(item=><CardReparaciones key={item.numero} cliente={item.nombre} telefono={item.telefono} dni={item.cuit} fecha={item.fecha} serie={item.serie}marca={item.modelo} detalle={item.detalle} observaciones={item.observaciones} trabajoRealizado={item.trabajoRealizado} numero={item.numero} estado={item.estado} costo={item.costo} id={item._id} fechaEntrega={item.fechaEntrega} empresa={item.empresa} idEmpresa={item.idEmpresa}/>)
            }
        </div>
      }
    </div>
  )
}

export default MisReparaciones