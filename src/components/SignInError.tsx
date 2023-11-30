"use client"

import { useEffect, useState } from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import { useSearchParams, redirect } from "next/navigation";

export default function SignInError() {
  const searchParams = useSearchParams()

  const errorStatus = searchParams.get('error')

  const [show, setShow] = useState('hidden')

  const hideErrorMessage = () => {
    setShow("hidden")
  }

  useEffect(() => {
    setShow(errorStatus || 'hidden')
  }, [errorStatus])

  return (
    <div className={`w-screen h-screen bg-transparent flex items-center justify-center absolute inset-0 ${show}`}>
      <Card className="max-w-[400px] w-10/12 p-10 bg-slate-100 z-10">
        Usuario o contraseña incorrecta, por favor intente de nuevo.
        <CardFooter>
          <Button onClick={hideErrorMessage} className="w-full" color="primary">Intentar de Nuevo</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
