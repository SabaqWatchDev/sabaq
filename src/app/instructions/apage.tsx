"use client"

import NavigationBar from "@/components/NavigationBar";
import { Checkbox, CheckboxGroup, Tabs, Tab } from "@nextui-org/react";
import React from "react";

export default function Instructions() {
  return (
    <div className="w-screen h-screen">
      <NavigationBar currentPage="instructions" />

      <div className="flex flex-col h-5/6 items-center justify-center gap-4">
        <Tabs >
          <Tab title="6AM - 2PM" className="w-10/12">
            <CheckboxGroup>
              <Checkbox value={"1"}>Revisar Los implementos recibidos e indagar <strong> con tacto </strong> en caso de que alguno esté en mal estado</Checkbox>
              <Checkbox value="2">Revisar el aseo y de ser necesario dar alguna sugerencia <strong>amorosa</strong> al truno anterior</Checkbox>
              <Checkbox value="3">Cargar linternas y radios</Checkbox>
              <Checkbox value="4">Abrir el muro de parqueaderos</Checkbox>
              <Checkbox value="5">Lavar los chalecos</Checkbox>
              <Checkbox value="6">A las 8:00 a.m. recibir a los voluntarios de las congregaciones y explicarles detalladamente su asignación de mantenimiento</Checkbox>
              <Checkbox value="7">Registrar asistencia a voluntarios de mantenimiento y entregar chalecos</Checkbox>
              <Checkbox value="8">De 9:00 a.m. a 9:30 a.m. tomar una foto a los contadores de AAA y CRA. Luego, enviar estas imágenes a la hermana Eugenia Bustamante</Checkbox>
              <Checkbox value="9">Verificar si están llenas las canecas de administración, cambiar bolsas y lavar canecas si corresponde</Checkbox>
              <ol>
                <li className="text-tiny text-gray-400">1. Los días martes, toda la basura debe quedar en la jaula y debemos asegurarnos de que AAA entre y recoja todos los desperdicios acumulados.
                </li>
                <li className="text-tiny text-gray-400">2. Jueves y sábado, las bolsas serán acumuladas en el tanque verde grande y se coloca en la puerta del Salón de Asambleas para que lo descargue AAA.
                </li>
                <li className="text-tiny text-gray-400">3. Así mismo, coloque una nueva bolsa negra en cada caneca.
                </li>
                <li className="text-tiny text-gray-400">4. Lleve los sacos de hojas al Gehena (parqueadero).</li>

              </ol>
              <Checkbox value="10">Después de almorzar, limpiar horno y nevera</Checkbox>
              <Checkbox value="11">Realizar aseo en portería y oficina</Checkbox>
            </CheckboxGroup>
          </Tab>
          <Tab title="2PM - 10PM" className="w-10/12">
            <CheckboxGroup>
              <Checkbox value="2">Revisar el aseo de oficina y garita y de ser necesario dar alguna sugerencia <strong>amorosa</strong> al truno anterior</Checkbox>
              <Checkbox value="3">Cargar linternas y radios</Checkbox>
              <Checkbox value="6">Antes de 5:00 p.m. recibir a los implementos de aseo y ubicarlos en su sitio de los voluntarios de las congregaciones</Checkbox>
              <Checkbox value="7">Registrar salida de voluntarios de mantenimiento y recibir chalecos</Checkbox>
              <Checkbox value="9">Verificar si están llenas las canecas de administración, cambiar bolsas y lavar canecas si corresponde</Checkbox>
              <Checkbox value="29">Recibir a los hermanos de vigilancia y hacerles los recordatorios de seguridad</Checkbox>
              <Checkbox value="4">Cerrar el muro de parqueaderos</Checkbox>
              <Checkbox value="11">Realizar aseo en garita y oficina</Checkbox>
              <Checkbox value="5">Lavar los chalecos</Checkbox>
            </CheckboxGroup>
          </Tab>

          <Tab title="10PM - 6AM" className="w-10/12">
            <CheckboxGroup>
              <Checkbox value="2">4:00 a.m. Pedir a los voluntarios realizar aseo a los baños y a la portería</Checkbox>
              <Checkbox value="3">Enviar reporte de turno al superintendente del departamento</Checkbox>
            </CheckboxGroup>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}