"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@nextui-org/react";

export default function InventoryTable() {
  return (
    <Table selectionMode="single" className="w-10/12" aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ARTICULO</TableColumn>
        <TableColumn>FECHA DE INGRESO</TableColumn>
        <TableColumn>ESTADO</TableColumn>
        <TableColumn>NOTAS</TableColumn>
        <TableColumn>FOTO</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Gorra</TableCell>
          <TableCell>06/12/2023 23:00:03</TableCell>
          <TableCell>Bueno</TableCell>
          <TableCell>a</TableCell>
          <TableCell><Image src="./logo.jpg" width={100} height={1} alt="Imagen de inventario" /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
