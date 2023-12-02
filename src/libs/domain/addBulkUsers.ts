"use server"

import { prisma } from '@/libs/prisma'
import data from '../../../../data'

export async function addBulkUsers() {
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
