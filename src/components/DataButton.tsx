"use client"

import { addBulkUsers } from '@/addBulkUsers'
import data from '@/data'
import { Button } from '@nextui-org/react'

export default function DataButton() {
  return (
    <Button onClick={() => { addBulkUsers(data) }}>button</Button>
  )
}
