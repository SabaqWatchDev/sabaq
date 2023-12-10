"use client"

import { useState, useEffect } from "react";

import { Button, ButtonGroup } from "@nextui-org/react";
import { PlusCircleIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Icon } from "@tremor/react";

export default function ActionButtons() {
  const [isAddOpen, setIsAddOpen] = useState("hidden")
  const [isEditOpen, setIsEditOpen] = useState("hidden")

  useEffect(() => {
    localStorage.setItem("addForm", isAddOpen)
    localStorage.setItem("editForm", isEditOpen)
  }, [isAddOpen, isEditOpen])

  const showEditForm = () => {
    if (isEditOpen === "hidden") {
      setIsEditOpen("flex")
    } else {
      setIsEditOpen("hidden")
    }
  }

  const showAddForm = () => {
    if (isAddOpen === "hidden") {
      setIsAddOpen("flex")
    } else {
      setIsAddOpen("hidden")
    }
  }

  return (
    <ButtonGroup size="lg" className="w-10/12">
      <Button className="w-1/3 text-white" color="danger" startContent={<Icon icon={TrashIcon} />}>
        Eliminar
      </Button>
      <Button onClick={showEditForm} className="w-1/3 text-white" color="warning" startContent={<Icon icon={PencilSquareIcon} />}>
        Editar
      </Button>
      <Button onClick={showAddForm} className="w-1/3" color="primary" startContent={<Icon icon={PlusCircleIcon} />}>
        Añadir
      </Button>
    </ButtonGroup>
  )
}
