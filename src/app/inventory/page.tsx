import React from 'react';

import { recordToday, recordsToday, responsiblesToday } from '@/types';

import ItemRow from './components/table/ItemRow';
import ResponsiblesSection from './components/sections/ResponsiblesSection';
import SubmitSection from './components/sections/SubmitSection';

import { prismaSearchDates } from '@/libs/utils/prismaSearchDate';

import { getRecords } from './adapter/getRecords';
import { getResponsibles } from './adapter/getResponsibles';

import { prisma } from '@/libs/prisma';

export default async function Inventory() {
  const [currentDate, nextDay] = prismaSearchDates()

  const recordsToday: recordsToday = await getRecords()

  // const responsiblesToday: responsiblesToday = await getResponsibles()
  const responsiblesToday: responsiblesToday = await await prisma.responsible.findMany({
    where: {
      createdAt: {
        gte: currentDate,
        lt: nextDay,
      },
    },
  });

  return (
    <div className="w-screen flex flex-col gap-8 justify-center items-center">
      <div className="flex justify-between w-10/12 pt-6">
        <h1 className="text-3xl font-bold">FORMATO ENTREGA Y RECIBIMIENTO DE ARTÍCULOS DE VIGILANCIA</h1>

        <div className='h-full flex gap-4'>
          <label className='text-xl font-bold' htmlFor="date">Fecha: </label>
          <input className='h-full' type="date" name="date" id="date" defaultValue={currentDate.toLocaleDateString('en-CA')} />
        </div>
      </div>

      <div className='w-10/12 flex flex-col '>
        <div className='flex justify-between'>
          <div className='text-lg w-[47%]'>Turno 6:00 am - 2:00 pm</div>
          <div className='text-lg w-[47%]'>Turno 2:00 am -  10:00 pm</div>
        </div>
        {responsiblesToday && <ResponsiblesSection responsibleData={responsiblesToday[0]} />}
      </div>

      <div className='w-10/12 overflow-auto'>
        <table className='w-full border-spacing-4' >
          <thead>
            <tr>
              <th >Cantidad</th>
              <td className='h-2'></td>
              <th >Artículo</th>
              <td className='h-2'></td>
              <th >Hora Entrega</th>
              <td className='h-2'></td>
              <th >Entregado a</th>
              <td className='h-2'></td>
              <th >Hora Recibido</th>
              <td className='h-2'></td>
              <th >Recibido</th>
              <td className='h-2'></td>
            </tr>
          </thead>

          <tbody>
            {recordsToday && recordsToday.map((recordToday: recordToday) => (
              <React.Fragment key={recordToday.id + "fragment"}>
                <ItemRow key={recordToday.id + "row"} rowInformation={recordToday} />
                <tr key={recordToday.id + "space"}>
                  <td key={recordToday.id + "blank"} className='h-2'></td>
                </tr>

              </React.Fragment>
            ))}

            <ItemRow />
          </tbody>
        </table>
      </div>

      <SubmitSection />
    </div>
  );
};
