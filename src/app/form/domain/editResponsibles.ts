"use server"

import { prisma } from "@/libs/prisma"
import { responsibleToday } from "@/types"
import { error } from "console"

export async function editResponsibles(userInput: responsibleToday, responsibleToday: responsibleToday) {
  if (userInput.afternoonResponsible !== null && userInput.morningResponsible !== null) {
    try {
      const submitResult = await prisma.responsible.update({
        data: {
          morningResponsible: userInput.morningResponsible,
          afternoonResponsible: userInput.afternoonResponsible,
        }, where: {
          id: responsibleToday.id
        }
      })
      return submitResult
    } catch (error) {
      console.log(error)
    }
  } else if (userInput.afternoonResponsible === null && userInput.morningResponsible !== null) {
    try {
      const submitResult = await prisma.responsible.update({
        data: {
          morningResponsible: userInput.morningResponsible,
        }, where: {
          id: responsibleToday.id
        }
      })
      return submitResult
    } catch (error) {
      console.log(error)
    }
  } else if (userInput.afternoonResponsible !== null && userInput.morningResponsible === null) {
    try {
      const submitResult = await prisma.responsible.update({
        data: {
          afternoonResponsible: userInput.afternoonResponsible,
        }, where: {
          id: responsibleToday.id
        }
      })
      return submitResult
    } catch (error) {
      console.log(error)
    }
  } else {
    console.error(error)
  }
}
