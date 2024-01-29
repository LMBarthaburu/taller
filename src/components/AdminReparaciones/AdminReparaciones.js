import React, { useEffect, useState } from 'react'
import CardReparaciones from '../CardReparaciones/CardReparaciones'

function AdminReparaciones() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data, getData]=useState([])
  const [dataFull, setDataFull] = useState([])

  const getReparaciones= async ()=>{
    const res = await fetch(`${urlBE}reparacion`)
    const json = await res.json()
    const reparaciones = json.reparacion
    const reparacionesOrdenadas = reparaciones.sort(function (a, b) {
      if (a.numero > b.numero) {
        return 1;
      }
      if (a.numero < b.numero) {
        return -1;
      }
      return 0;
    });
    getData(reparacionesOrdenadas.reverse())
    setDataFull(reparaciones)
  }

  useEffect(()=>{
    getReparaciones()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
const filter = async (event) => {
  event.preventDefault();
  const criterio = document.getElementById('filtro').value;
  const estado = document.getElementById('estado-opciones').value;
  console.log(criterio)
  let reparacionesFiltradas = dataFull;
  console.log(reparacionesFiltradas)

  if (criterio !== '') {
    reparacionesFiltradas = reparacionesFiltradas.filter(item => {
      const idempresa = item.idEmpresa;
      const numeroReparacion = item.numero.toString();
      const dniReparacion = item.cuit.toString();
      const nombreReparacion = item.nombre.toLowerCase();
      const empresaReparacion = item.empresa.toLowerCase();
      const criterioLowerCase = criterio.toLowerCase();

      return numeroReparacion === criterio || nombreReparacion.includes(criterioLowerCase) || dniReparacion===criterio || idempresa===criterioLowerCase || empresaReparacion.includes(criterioLowerCase)
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
    <div className='container mt-3'>
      <h3>Lista de reparaciones:</h3>
      <form className='mb-2'>
        <input type="text" placeholder='Ingrese Nombre, Numero de reparacion o DNI/CUIT' id='filtro' className='filtro-input w-100'/>
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

export default AdminReparaciones