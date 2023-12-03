"use server"

import { prisma } from "@/libs/prisma"
import { prismaSearchDates } from "@/libs/utils/prismaSearchDate"
import { createResponsibles } from "@/libs/domain/createResponsibles"
import { responsibleToday, responsiblesToday } from "@/types"
import { editResponsibles } from "@/libs/domain/editResponsibles"

export default async function saveResponsibles(inputResponsibles: responsibleToday) {
  const [currentDate, nextDay] = prismaSearchDates()

  const responsiblesToday: responsiblesToday = await prisma.responsible.findMany({
    where: {
      createdAt: {
        gte: currentDate,
        lt: nextDay,
      }
    }
  })

  if (responsiblesToday.length > 0) {
    const responsibleToday: responsibleToday = responsiblesToday[0]
    editResponsibles(inputResponsibles, responsibleToday)
  } else {
    createResponsibles(inputResponsibles)
  }
}
