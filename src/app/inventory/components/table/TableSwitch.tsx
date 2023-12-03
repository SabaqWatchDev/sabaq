"use client"

import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

export default function TableSwitch({ status, name }: { status?: boolean, name: string }) {
  const [isSwitchOn, setIsSwitchOn] = useState(status || false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);

    let term = !isSwitchOn

    localStorage.setItem(name, String(term))
  };

  const getCellStyle = () => {
    if (isSwitchOn) {
      return "h-[56px] w-full rounded-xl flex items-center justify-center bg-primary-100 text-primary-900 cursor-pointer";
    } else {
      return "h-[56px] w-full rounded-xl flex items-center justify-center bg-danger-100 text-danger-900 cursor-pointer";
    }
  };

  return (
    <td
      className='min-w-[125px]'
    >
      <Button className={getCellStyle()}
        onPress={toggleSwitch}
        id={name} >
        {isSwitchOn ? 'RECIBIDO' : 'NO RECIBIDO'}
      </Button>
    </td>
  );
}
