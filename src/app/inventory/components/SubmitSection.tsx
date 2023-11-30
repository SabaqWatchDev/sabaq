"use client"

import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import saveInventoryChanges from "../domain/saveInventoryChanges";

export default function SubmitSection() {
  const router = useRouter();
  const searchParams = useSearchParams()

  const searchParamsArray = searchParams.toString().split("&")

  const handleSubmit = async () => {
    const newAmount = document.querySelector<HTMLInputElement>('#new-amount');
    const newItem = document.querySelector<HTMLInputElement>('#new-item');
    const deliveredAt = document.querySelector<HTMLInputElement>('#new-deliveredAt');
    const deliveredTo = document.querySelector<HTMLInputElement>('#new-deliveredTo');
    const receivedAt = document.querySelector<HTMLInputElement>('#new-receivedAt');
    const receivedStatus = document.querySelector<HTMLInputElement>('#new-receivedStatus');

    const inputElements: (HTMLInputElement | null)[] = [
      newAmount,
      newItem,
      deliveredAt,
      deliveredTo,
      receivedAt,
      receivedStatus
    ];

    function inputsClearer(input: HTMLInputElement | null) {
      if (input) {
        input.value = "";
      }
    }

    function clearInputs() {
      for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i]) {
          let input = inputElements[i];

          if (input?.id.includes("deliveredAt")) {
            console.log("Saved", input.id)
          } else {
            inputsClearer(input)
          }
        }
      }

      router.push('/inventory')
      router.refresh();
    }

    const res = await saveInventoryChanges(searchParamsArray).then(() => { clearInputs() })
  }

  return (
    <div className='w-10/12 flex justify-between'>
      <Button onClick={handleSubmit} color='primary' size='lg' className='w-full'>
        Guardar Cambios
      </Button>
    </div>
  );
}
