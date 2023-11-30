"use server"

import { prisma } from "@/libs/prisma"
import { recordInput } from "@/types"

export async function editRecord(userInput: recordInput) {
  const id = userInput.id
  const data: any = {}

  if (userInput.quantity !== 0) {
    data.quantity = userInput.quantity
  }

  if (userInput.article !== "0") {
    data.article = userInput.article
  }

  if (userInput.deliveredTo !== "0") {
    data.deliveredTo = userInput.deliveredTo
  }

  if (typeof userInput.receivedStatus === 'boolean') {
    data.receivedStatus = userInput.receivedStatus
  }

  if (userInput.receivedAt) {
    data.receivedAt = userInput.receivedAt
  }

  try {
    const submitResult = await prisma.deliveryRecord.update({
      data: data,
      where: {
        id: id
      }
    })
    return submitResult
  } catch (error) {
    console.log(error)
  }
}
