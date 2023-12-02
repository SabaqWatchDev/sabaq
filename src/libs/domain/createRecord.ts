"use server"

import { prisma } from "@/libs/prisma"
import { recordInput } from "@/types"

export async function createRecord(userInput: recordInput) {
  const quantity = userInput.quantity
  const article = userInput.article
  const deliveredTo = userInput.deliveredTo
  const receivedStatus = Boolean(userInput.receivedStatus)
  const receivedAt = userInput.receivedAt

  try {
    const submitResult = await prisma.deliveryRecord.create({
      data: {
        quantity: Number(quantity),
        article: article,
        deliveredTo: deliveredTo,
        receivedStatus: receivedStatus,
        receivedAt: receivedAt
      }
    })
    return submitResult
  } catch (error) {
    console.log(error)
  }
}
