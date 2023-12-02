"use server"

import { prisma } from '@/libs/prisma'

export async function addBulkUsers(data: any) {
  for (let i = 0; i < data.length; i++) {
    const dataEntry = data[i]

    const userData = await prisma.volunteer.create({
      data: {
        firstName: dataEntry.firstName,
        lastName: dataEntry.lastName,
        phoneNumber: dataEntry.phoneNumber,
        email: dataEntry.email,
        username: dataEntry.username
      }
    })
  }
}
