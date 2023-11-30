"use client"

import { recordToday } from "@/types";
import TableInput from "./TableInput";
import TableSwitch from "./TableSwitch";

export default function ItemRow({ rowInformation }: { rowInformation?: recordToday }) {
  const now = getCurrentTime();

  function getCurrentTime(time?: any) {
    if (time) {
      const currentDate = new Date(time);
      const hours = padZero(currentDate.getHours());
      const minutes = padZero(currentDate.getMinutes());
      return `${hours}:${minutes}`;
    } else {
      const currentDate = new Date();
      const hours = padZero(currentDate.getHours());
      const minutes = padZero(currentDate.getMinutes());
      return `${hours}:${minutes}`;
    }
  }

  function getNoTime(time?: any) {
    if (time) {
      const currentDate = new Date(time);
      const hours = padZero(currentDate.getHours());
      const minutes = padZero(currentDate.getMinutes());
      return `${hours}:${minutes}`;
    } else {
      return "";
    }
  }

  function padZero(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  const deliverTime = getCurrentTime(rowInformation?.deliveredAt) || now
  const receiveTime = getNoTime(rowInformation?.receivedAt) || ""

  return (
    <tr id={rowInformation?.id.toString() || "new"}>
      <TableInput type="number" name={rowInformation?.id ? `${rowInformation.id}-amount` : "new-amount"} label="Cantidad" defaultValue={rowInformation?.quantity} />
      <td className='h-2'></td>
      <TableInput type="text" name={rowInformation?.id ? `${rowInformation?.id}-item` : "new-item"} label="Artículo" defaultValue={rowInformation?.article} />
      <td className='h-2'></td>
      <TableInput type="time" name={rowInformation?.id ? `${rowInformation?.id}-deliveredAt` : "new-deliveredAt"} defaultValue={deliverTime} label="Hora de Entrega" />
      <td className='h-2'></td>
      <TableInput type="text" name={rowInformation?.id ? `${rowInformation?.id}-deliveredTo` : "new-deliveredTo"} label="Persona que recibe" defaultValue={rowInformation?.deliveredTo} />
      <td className='h-2'></td>
      <TableInput type="time" name={rowInformation?.id ? `${rowInformation?.id}-receivedAt` : "new-receivedAt"} label="Hora de Recibo" defaultValue={receiveTime} />
      <td className='h-2'></td>
      <TableSwitch name={rowInformation?.id ? `${rowInformation?.id}-receivedStatus` : "new-receivedStatus"} status={rowInformation?.receivedStatus || false} />
    </tr>
  );
}
