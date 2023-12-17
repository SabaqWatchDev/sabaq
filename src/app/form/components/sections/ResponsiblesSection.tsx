import { responsiblesToday } from "@/types";
import { getResponsibles } from '../../adapter/getResponsibles';
import ResponsiblesInput from '../clients/ResponsibleInput'

export default async function ResponsiblesSection() {
  const responsiblesToday: responsiblesToday = await getResponsibles()

  return (
    <div className='w-10/12 flex flex-col '>
      <div className='flex justify-between'>
        <div className='text-lg w-[47%]'>Turno 6:00 am - 2:00 pm</div>
        <div className='text-lg w-[47%]'>Turno 2:00 am -  10:00 pm</div>
      </div>

      <ResponsiblesInput responsibleData={responsiblesToday[0]} />
    </div>
  );
}
