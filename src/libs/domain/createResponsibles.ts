"use server"

import { prisma } from "@/libs/prisma"
import { responsibleToday } from "@/types"

export async function createResponsibles(userInput: responsibleToday) {
  try {
    const submitResult = await prisma.responsible.create({
      data: {
        morningResponsible: userInput.morningResponsible,
        afternoonResponsible: userInput.afternoonResponsible,
      }
    })
    return submitResult
  } catch (error) {
    console.log(error)
  }
}
