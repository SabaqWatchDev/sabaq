"use client"

export default function clearInputs() {
  const newAmount = document.querySelector<HTMLInputElement>('#new-amount');
  const newItem = document.querySelector<HTMLInputElement>('#new-item');
  const deliveredAt = document.querySelector<HTMLInputElement>('#new-deliveredAt');
  const deliveredTo = document.querySelector<HTMLInputElement>('#new-deliveredTo');
  const receivedAt = document.querySelector<HTMLInputElement>('#new-receivedAt');
  const receivedStatus = document.querySelector<HTMLInputElement>('#new-receivedStatus');

  const inputElements: (HTMLInputElement | null)[] = [
    newAmount,
    newItem,
    deliveredAt,
    deliveredTo,
    receivedAt,
    receivedStatus
  ];

  function inputsClearer(input: HTMLInputElement | null) {
    if (input) {
      input.value = "";
    }
  }

  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i]) {
      let input = inputElements[i];

      if (input?.id.includes("deliveredAt")) {
        console.log("Saved", input.id)
      } else {
        inputsClearer(input)
      }
    }
  }

  localStorage.clear();
}
