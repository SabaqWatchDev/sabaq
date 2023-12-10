import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import { checkSignIn } from '@/libs/domain/signIn';
import SignInError from '@/components/SignInError';

export default function SignIn() {
  return (
    <>
      <SignInError />

      <div className='w-screen h-screen flex items-center justify-center bg-slate-100'>

        <form action={checkSignIn} className='w-10/12 sm:w-1/4 px-4 py-8 flex flex-col gap-6 rounded-lg bg-white'>
          <h1 className='text-2xl'>Ingrese sus datos</h1>

          <div className='gap-4 flex flex-col'>
            <Input id='username' name='username' variant='underlined' color='primary' label='Nombre de Usuario' description='Ingrese su primer nombre y su apellido de casado.' />
            <Input id='password' name='password' variant='underlined' color='primary' label='Contraseña' type='password' description='Ingrese la contraseña provista por el encargado del departamento' />
          </div>

          <Button type='submit' color='primary' className='w-full'>Iniciar Sesión</Button>
        </form>
      </div>
    </>
  )
}
