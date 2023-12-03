"use client"

import { responsibleToday } from "@/types";
import { Input } from "@nextui-org/react";

export default function ResponsiblesSection({ responsibleData }: { responsibleData?: responsibleToday }) {
  let inputResponsibles: responsibleToday = {
    morningResponsible: responsibleData?.morningResponsible || "",
    afternoonResponsible: responsibleData?.afternoonResponsible || ""
  }

  const handleChange = () => {
    const morningValue = (document.getElementById("responsible-morning") as HTMLInputElement)?.value || "";
    const afternoonValue = (document.getElementById("responsible-afternoon") as HTMLInputElement)?.value || "";

    localStorage.setItem("responsible-morning", morningValue);
    localStorage.setItem("responsible-afternoon", afternoonValue);

    inputResponsibles = {
      morningResponsible: localStorage.getItem("responsible-morning"),
      afternoonResponsible: localStorage.getItem("responsible-afternoon")
    }
  };

  return (
    <div className='flex justify-between'>
      <div className='w-[47%]'><Input onChange={handleChange} defaultValue={responsibleData?.morningResponsible || ""} id="responsible-morning" size='sm' variant='underlined' placeholder="Nombre del encargado del turno de la mañana" /></div>
      <div className='w-[47%]'><Input onChange={handleChange} defaultValue={responsibleData?.afternoonResponsible || ""} id="responsible-afternoon" size='sm' variant='underlined' placeholder="Nombre del encargado del turno de la tarde" /></div>
    </div>
  );
}
