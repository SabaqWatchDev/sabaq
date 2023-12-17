import React, { Suspense } from 'react';

import ResponsiblesSection from './components/sections/ResponsiblesSection';
import SubmitSection from './components/sections/SubmitSection';

import { prismaSearchDates } from '@/libs/utils/prismaSearchDate';

import NavigationBar from '@/components/NavigationBar';
import ResponsibleLoader from './components/loaders/ResponsibleLoader';
import FormTable from './components/table/FormTable';

export default function Inventory() {
  const [currentDate] = prismaSearchDates()

  return (
    <>
      <NavigationBar currentPage='form' />

      <div className="w-screen flex flex-col gap-20 justify-center items-center">
        <div className="flex justify-between items-center w-10/12 pt-6">
          <div className='flex items-center gap-8'>
            <h1 className="text-3xl font-bold">FORMATO ENTREGA Y RECIBIMIENTO DE ARTÍCULOS DE VIGILANCIA</h1>
          </div>

          <div className='h-full flex gap-4'>
            <label className='text-xl font-bold' htmlFor="date">Fecha: </label>
            <input className='h-full' type="date" name="date" id="date" defaultValue={currentDate.toLocaleDateString('en-CA')} />
          </div>
        </div>

        <Suspense fallback={<ResponsibleLoader />}><ResponsiblesSection /></Suspense>

        <div className='w-10/12 overflow-auto'>
          <Suspense fallback={<ResponsibleLoader />}><FormTable /></Suspense>
        </div>

        <SubmitSection />
      </div>
    </>
  );
};
