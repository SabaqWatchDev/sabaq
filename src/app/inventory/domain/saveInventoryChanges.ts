"use client"

import { recordInput } from "@/types";
import setTime from "./setTime";
import { createRecord } from "@/libs/domain/submitRecord";
import { editRecord } from "@/libs/domain/editRecord";

export default async function saveInventoryChanges(searchParams: string[]) {
  const rawInput: recordInput = {
    quantity: 1,
    article: "No especificado",
    deliveredTo: "No especificado",
  }

  function prepareNewInput() {
    for (let i = 0; i < searchParams.length; i++) {
      const [inputId, inputFieldAndValue] = searchParams[i].split('-')
      const [inputField, inputValue] = inputFieldAndValue.split('=')

      if (inputId === "new") {
        switch (inputField) {
          case "amount":
            rawInput.quantity = Number(inputValue)
            break

          case "item":
            rawInput.article = inputValue.replace("+", " ")
            break

          case "deliveredTo":
            rawInput.deliveredTo = inputValue.replace("+", " ")
            break

          case "receivedAt":
            rawInput.receivedAt = setTime(inputValue) || null
            break

          case "receiveStatus":
            rawInput.receivedStatus = Boolean(inputValue)
            break
        }
      }
    }

    return rawInput
  }

  const newInputExists = () => {
    for (let i = 0; i < searchParams.length; i++) {
      const inputId = searchParams[i].split('-')[0]

      if (inputId === "new") {
        return true
      } else {
        return false
      }
    }
  }

  if (newInputExists()) {
    const newInput = prepareNewInput()
    createRecord(newInput)
  }

  const hasChanged = "0"

  const existingRawInput: recordInput = {
    quantity: 1,
    article: hasChanged,
    deliveredTo: hasChanged,
  }

  const existingInputArray: recordInput[] = []

  function prepareExistingInput() {
    for (let i = 0; i < searchParams.length; i++) {
      const [inputId, inputFieldAndValue] = searchParams[i].split('-')
      const [inputField, inputValue] = inputFieldAndValue.split('=')

      existingRawInput.id = Number(inputId)

      if (inputId !== "new") {
        switch (inputField) {
          case "amount":
            existingRawInput.quantity = Number(inputValue)
            break

          case "item":
            existingRawInput.article = inputValue
            break

          case "deliveredTo":
            existingRawInput.deliveredTo = inputValue

          case "receivedAt":
            existingRawInput.receivedAt = setTime(inputValue) || null
            break

          case "receiveStatus":
            existingRawInput.receivedStatus = Boolean(inputValue)
            break
        }

        existingInputArray.push(existingRawInput)
      }
    }
  }

  prepareExistingInput()

  for (let i = 0; i < existingInputArray.length; i++) {
    editRecord(existingInputArray[i])
  }
}
