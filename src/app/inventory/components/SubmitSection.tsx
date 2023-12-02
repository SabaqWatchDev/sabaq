"use client"

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import saveChanges from "../domain/saveChanges";
import clearInputs from "../domain/clearInputs";
import saveResponsibles from "../domain/saveResponsibles";
import { revalidatePath } from "next/cache";

export default function SubmitSection() {
  const router = useRouter();

  const handleSubmit = async () => {
    const storage: any = []

    let inputResponsibles = {
      morningResponsible: localStorage.getItem("responsible-morning"),
      afternoonResponsible: localStorage.getItem("responsible-afternoon")
    }

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key !== null && key !== "ally-supports-cache") {
        const value = localStorage.getItem(key);

        if (value !== null) {
          storage.push(`${key}=${value}`);
        }
      }
    }
    const responsibles = await saveResponsibles(inputResponsibles)
    const records = await saveChanges(storage).then(() => { clearInputs() }).finally(() => { router.push('/inventory') })
    revalidatePath("/inventory")
  }

  return (
    <div className='w-10/12 flex justify-between'>
      <Button onClick={handleSubmit} color='primary' size='lg' className='w-full'>
        Guardar Cambios
      </Button>
    </div>
  );
}
