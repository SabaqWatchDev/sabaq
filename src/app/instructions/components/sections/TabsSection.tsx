"use client"

import { Checkbox, CheckboxGroup, Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function TabsSection(data?: any) {
  const [statuses, setStatuses] = useState(
    data.data
    ||
    [
      { checkReceived: false },
      { checkClean: false },
      { chargeImplements: false },
      { openParking: false },
      { washJackets: false },
      { receiveVolunteers: false },
      { submitAssistance: false },
      { takeCounterPhoto: false },
      { fixTrash: false },
      { cleanAfterLunch: false },
      { cleanOffices: false },
      { checkCleanAfterLunch: false },
      { chargeImplements2: false },
      { receiveCleanImplements: false },
      { registerExit: false },
      { fixTrashAfternoon: false },
      { receiveNightVolunteers: false },
      { closeParking: false },
      { cleanAfterDinner: false },
      { washJacketsNight: false },
      { remindNightClean: false },
      { submitReport: false },
    ]);

  useEffect(() => {
    for (let i = 0; i < statuses.length; i++) {
      const currentStatus = statuses[i];

      const key = Object.keys(currentStatus)[0] as keyof typeof currentStatus;
      const value = currentStatus[key];

      localStorage.setItem(String(key), String(value));
    }
  }, [statuses]);

    const keysConTrue = (data.data as any[])
      .filter((objeto: any) => Object.values(objeto).some((valor: any) => valor === true))
      .map((objeto: any) => Object.keys(objeto))
      .flat();

  const handleStatus = (index: number, id: string, value: boolean) => {
    setStatuses((prevStatuses: any) => {
      const newStatuses = [...prevStatuses];
      newStatuses[index] = { ...newStatuses[index], [id]: value };
      return newStatuses;
    });
  };

  return (
    <Tabs >
      <Tab title="6AM - 2PM" className="w-10/12">
        <CheckboxGroup defaultValue={keysConTrue || []}>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(0, "checkReceived", value) }} id="checkReceived" value="checkReceived">Revisar Los implementos recibidos e indagar <strong> con tacto </strong> en caso de que alguno esté en mal estado</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(1, "checkClean", value) }} id="checkClean" value="checkClean">Revisar el aseo y de ser necesario dar alguna sugerencia <strong>amorosa</strong> al truno anterior</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(2, "chargeImplements", value) }} id="chargeImplements" value="chargeImplements">Cargar linternas y radios</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(3, "openParking", value) }} id="openParking" value="openParking">Abrir el muro de parqueaderos</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(4, "washJackets", value) }} id="washJackets" value="washJackets">Lavar los chalecos</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(5, "receiveVolunteers", value) }} id="receiveVolunteers" value="receiveVolunteers">A las 8:00 a.m. recibir a los voluntarios de las congregaciones y explicarles detalladamente su asigación de mantenimiento</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(6, "submitAssistance", value) }} id="submitAssistance" value="submitAssistance">Registrar asistencia a voluntarios de mantenimiento y entregar chalecos</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(7, "takeCounterPhoto", value) }} id="takeCounterPhoto" value="takeCounterPhoto">De 9:00 a.m. a 9:30 a.m. tomar una foto a los contadores de AAA y CRA. Luego, enviar estas imágenes a la hermana Eugenia Bustamante</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(8, "fixTrash", value) }} id="fixTrash" value="fixTrash">Verificar si están llenas las canecas de administración, cambiar bolsas y lavar canecas si corresponde</Checkbox>
          <ol>
            <li className="text-tiny text-gray-400">1. Los días martes, toda la basura debe quedar en la jaula y debemos asegurarnos de que AAA entre y recoja todos los desperdicios acumulados.
            </li>
            <li className="text-tiny text-gray-400">2. Jueves y sábado, las bolsas serán acumuladas en el tanque verde grande y se coloca en la puerta del Salón de Asambleas para que lo descargue AAA.
            </li>
            <li className="text-tiny text-gray-400">3. Así mismo, coloque una nueva bolsa negra en cada caneca.
            </li>
            <li className="text-tiny text-gray-400">4. Lleve los sacos de hojas al Gehena (parqueadero).</li>
          </ol>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(9, "cleanAfterLunch", value) }} id="cleanAfterLunch" value="cleanAfterLunch">Después de almorzar, limpiar horno y nevera</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(10, "cleanOffices", value) }} id="cleanOffices" value="cleanOffices">Realizar aseo en portería y oficina</Checkbox>
        </CheckboxGroup>
      </Tab>
      <Tab title="2PM - 10PM" className="w-10/12">
        <CheckboxGroup defaultValue={keysConTrue || []}>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(11, "checkCleanAfterLunch", value) }} id="checkCleanAfterLunch" value="checkCleanAfterLunch">Revisar el aseo de oficina y garita y de ser necesario dar alguna sugerencia <strong>amorosa</strong> al truno anterior</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(12, "chargeImplements2", value) }} id="chargeImplements2" value="chargeImplements2">Cargar linternas y radios</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(13, "receiveCleanImplements", value) }} id="receiveCleanImplements" value="receiveCleanImplements">Antes de 5:00 p.m. recibir a los implementos de aseo y ubicarlos en su sitio de los voluntarios de las congregaciones</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(14, "registerExit", value) }} id="registerExit" value="registerExit">Registrar salida de voluntarios de mantenimiento y recibir chalecos</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(15, "fixTrashAfternoon", value) }} id="fixTrashAfternoon" value="fixTrashAfternoon">Verificar si están llenas las canecas de administración, cambiar bolsas y lavar canecas si corresponde</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(16, "receiveNightVolunteers", value) }} id="receiveNightVolunteers" value="receiveNightVolunteers">Recibir a los hermanos de vigilancia y hacerles los recordatorios de seguridad</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(17, "closeParking", value) }} id="closeParking" value="closeParking">Cerrar el muro de parqueaderos</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(18, "cleanAfterDinner", value) }} id="cleanAfterDinner" value="cleanAfterDinner">Realizar aseo en garita y oficina</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(19, "washJacketsNight", value) }} id="washJacketsNight" value="washJacketsNight">Lavar los chalecos</Checkbox>
        </CheckboxGroup>
      </Tab>

      <Tab title="10PM - 6AM" className="w-10/12">
        <CheckboxGroup defaultValue={keysConTrue || []}>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(20, "remindNightClean", value) }} id="remindNightClean" value="remindNightClean">4:00 a.m. Pedir a los voluntarios realizar aseo a los baños y a la portería</Checkbox>
          <Checkbox lineThrough onValueChange={(value) => { handleStatus(21, "submitReport", value) }} id="submitReport" value="submitReport">Enviar reporte de turno al superintendente del departamento</Checkbox>
        </CheckboxGroup>
      </Tab>
    </Tabs>
  )
}
