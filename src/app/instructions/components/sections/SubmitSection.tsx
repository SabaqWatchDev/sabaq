"use client"

import { useRouter } from "next/navigation"
import saveChanges from "../../domain/saveChanges"
import { Button } from "@nextui-org/react"
import { NextResponse } from "next/server"

export default function SubmitSection() {
  const router = useRouter()

  const submitStatus = async () => {
    const storage: any = []

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)

      if (key !== "ally-supports-cache" && key !== null) {
        const value = localStorage.getItem(key)

        if (value !== null) {
          storage.push(`${key}=${value}`)
        }
      }
    }

    try {
      const res = await saveChanges(storage);
      localStorage.clear();
      router.refresh();

      console.log(res)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button onPress={submitStatus} className="w-10/12" size="lg" color="primary">Guardar Cambios</Button>
  )
}
