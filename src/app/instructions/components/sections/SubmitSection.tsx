"use client"

import { useRouter } from "next/navigation"
import saveChanges from "../../domain/saveChanges"
import { Button } from "@nextui-org/react"

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

    const res = await saveChanges(storage).then(() => { localStorage.clear() }).finally(() => { router.refresh })
  }

  return (
    <Button onPress={submitStatus} className="w-10/12" size="lg" color="primary">Guardar Cambios</Button>
  )
}
