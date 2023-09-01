import React from 'react'

function CardReparaciones({cliente,telefono,dni,fecha,serie,marca,detalle,observaciones, trabajo, numero, estado }) {
  return (
    <tr>
      <td>{numero}</td>
      <td>{estado}</td>
      <td>{fecha}</td>
      <td>{cliente}</td>
      <td>{telefono}</td>
      <td>{dni}</td>
      <td>{marca}</td>
      <td>{serie}</td>
      <td>{detalle}</td>
      <td>{observaciones}</td>
      <td>{trabajo}</td>
    </tr>
  )
}

export default CardReparaciones