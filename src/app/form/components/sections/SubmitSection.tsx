"use client"

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import saveChanges from "../../domain/saveChanges";
import clearInputs from "../../domain/clearInputs";
import saveResponsibles from "../../domain/saveResponsibles";

export default function SubmitSection() {
  const router = useRouter();

  const handleSubmit = async () => {
    const storage: any = []

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key !== null && key !== "ally-supports-cache" && key !== "addForm" && key !== "editForm") {
        const value = localStorage.getItem(key);

        if (value !== null) {
          storage.push(`${key}=${value}`);
        }
      }
    }

    let inputResponsibles = {
      morningResponsible: localStorage.getItem("responsible-morning") || "",
      afternoonResponsible: localStorage.getItem("responsible-afternoon") || ""
    }

    // const res = await saveChanges(storage).then(() => { saveResponsibles(inputResponsibles) }).then(() => { clearInputs() }).finally(() => { router.refresh() });

    try {
      const res = await saveChanges(storage)
      const responsibles = await saveResponsibles(inputResponsibles);

      clearInputs()

      router.refresh()


    } catch (error) {
      console.error(error)

      throw new Error
    }
  }

  return (
    <div className='w-10/12 flex justify-between'>
      <Button onClick={handleSubmit} color='primary' size='lg' className='w-full'>
        Guardar Cambios
      </Button>
    </div>
  );
}
