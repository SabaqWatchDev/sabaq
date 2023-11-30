"use client"

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function TableSwitch({ status, name }: { status?: boolean, name?: string }) {
  const [isSwitchOn, setIsSwitchOn] = useState(status || false);

  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);

    const params = new URLSearchParams(searchParams)

    let term = isSwitchOn

    if (term !== undefined) {
      params.set(name || "not-working", String(term))
    } else {
      params.delete(name || "not-working")
    }

    replace(`${pathname}?${params.toString()}`)
  };

  const getCellStyle = () => {
    if (isSwitchOn) {
      return "h-[56px] min-w-[125px] rounded-xl flex items-center justify-center bg-primary-100 text-primary-900 cursor-pointer";
    } else {
      return "h-[56px] min-w-[125px] rounded-xl flex items-center justify-center bg-danger-100 text-danger-900 cursor-pointer";
    }
  };

  return (
    <td
      className={getCellStyle()}
      onClick={toggleSwitch}
      id={name}
    >
      {isSwitchOn ? 'ENTREGADO' : 'NO ENTREGADO'}
    </td>
  );
}
