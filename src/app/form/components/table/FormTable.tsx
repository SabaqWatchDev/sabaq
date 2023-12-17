
import React from "react"

import { recordToday, recordsToday } from "@/types"

import { getRecords } from "../../adapter/getRecords"

import ItemRow from "./ItemRow"

export default async function FormTable () {
  const recordsToday: recordsToday = await getRecords()

  return  (
    <table className='w-full border-spacing-4' >
    <thead>
      <tr>
        <th >Cantidad</th>
        <td className='h-2'></td>
        <th >Artículo</th>
        <td className='h-2'></td>
        <th >Hora Entrega</th>
        <td className='h-2'></td>
        <th >Entregado a</th>
        <td className='h-2'></td>
        <th >Hora Recibido</th>
        <td className='h-2'></td>
        <th >Recibido</th>
        <td className='h-2'></td>
      </tr>
    </thead>

    <tbody>
      {recordsToday && recordsToday.map((recordToday: recordToday) => (
        <React.Fragment key={recordToday.id + "fragment"}>
          <ItemRow key={recordToday.id + "row"} rowInformation={recordToday} />
          <tr key={recordToday.id + "space"}>
            <td key={recordToday.id + "blank"} className='h-2'></td>
          </tr>

        </React.Fragment>
      ))}

      <ItemRow />
    </tbody>
  </table>
  )
}