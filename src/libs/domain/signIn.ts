'use server'

import { prisma } from '@/libs/prisma'
import { redirect } from 'next/navigation'


export async function checkSignIn(userInput: FormData) {
  const username = userInput.get('username')?.toString()
  const password = userInput.get('password')

  const userData = await prisma.volunteer.findUnique({
    where: {
      username: username,
    }
  })

  if (userData && userData.phoneNumber && userData.phoneNumber.toString() === String(password)) {
    redirect('/inventory')
  } else {
    redirect('/?error=true')
  }

}
