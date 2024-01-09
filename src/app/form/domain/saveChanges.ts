import { recordInput } from "@/types";
import setTime from "./setTime";
import { createRecord } from "./createRecord";
import { editRecord } from "./editRecord";

export default async function saveChanges(inventoryStorage: string[]) {
  const rawInput: recordInput = {
    quantity: 1,
    article: "No especificado",
    deliveredTo: "No especificado",
  }

  function prepareNewInput() {
    for (let i = 0; i < inventoryStorage.length; i++) {
      const [inputId, inputFieldAndValue] = inventoryStorage[i].split('-')
      const [inputField, inputValue] = inputFieldAndValue.split('=')

      if (inputId === "new") {
        switch (inputField) {
          case "amount":
            rawInput.quantity = Number(inputValue)
            break

          case "item":
            rawInput.article = inputValue
            break

          case "deliveredTo":
            rawInput.deliveredTo = inputValue
            break

          case "receivedAt":
            rawInput.receivedAt = setTime(inputValue) || ""
            break

          case "receivedStatus":
            rawInput.receivedStatus = inputValue === "true" ? true : false || false
            break
        }
      }
    }

    return rawInput
  }

  const newInputExists = () => {
    for (let i = 0; i < inventoryStorage.length; i++) {
      const inputId = inventoryStorage[i].split('-')[0]

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
    for (let i = 0; i < inventoryStorage.length; i++) {
      const [inputId, inputFieldAndValue] = inventoryStorage[i].split('-')
      const [inputField, inputValue] = inputFieldAndValue.split('=')

      existingRawInput.id = Number(inputId)

      if (inputId !== "new") {
        switch (inputField) {
          case "amount":
            existingRawInput.quantity = Number(inputValue)
            break

          case "item":
            existingRawInput.article = inputValue.replace("+", " ")
            break

          case "deliveredTo":
            existingRawInput.deliveredTo = inputValue.replace("+", " ")

          case "receivedAt":
            existingRawInput.receivedAt = setTime(inputValue) || null
            break

          case "receivedStatus":
            existingRawInput.receivedStatus = inputValue === "true" ? true : false || false
            break
        }

        existingInputArray.push(existingRawInput)
      }
    }
  }

  if (localStorage.getItem('1-amount') !== null) {
    prepareExistingInput()

    for (let i = 0; i < existingInputArray.length; i++) {
      editRecord(existingInputArray[i])
    }
  }
}
