"use server"

import { prisma } from "@/libs/prisma"
import { StatusObject } from "@/types"

export async function createStatus(userInput: StatusObject) {
  try {
    const submitResult = await prisma.taskStatus.create({
      data: {
        chargeImplements: userInput.chargeImplements,
        chargeImplements2: userInput.chargeImplements,
        checkClean: userInput.checkClean,
        checkCleanAfterLunch: userInput.checkCleanAfterLunch,
        checkReceived: userInput.checkReceived,
        cleanAfterDinner: userInput.cleanAfterDinner,
        cleanAfterLunch: userInput.cleanAfterLunch,
        cleanOffices: userInput.cleanOffices,
        closeParking: userInput.closeParking,
        fixTrash: userInput.fixTrash,
        fixTrashAfternoon: userInput.fixTrashAfternoon,
        openParking: userInput.openParking,
        receiveCleanImplements: userInput.receiveCleanImplements,
        receiveNightVolunteers: userInput.receiveNightVolunteers,
        receiveVolunteers: userInput.receiveVolunteers,
        registerExit: userInput.registerExit,
        remindNightClean: userInput.remindNightClean,
        submitAssistance: userInput.submitAssistance,
        submitReport: userInput.submitReport,
        takeCounterPhoto: userInput.takeCounterPhoto,
        washJackets: userInput.washJackets,
        washJacketsNight: userInput.washJacketsNight,
      }
    })
    return submitResult
  } catch (error) {
    console.log(error)
  }
}
