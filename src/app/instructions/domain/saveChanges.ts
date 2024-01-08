"use server";

import { getStatus } from "../adapter/getStatus";
import { createStatus } from "./createStatus";
import { editStatus } from "./editStatus";

export default async function saveChanges(data: string[]) {
  let res

  try {
    const statusToday = await getStatus();
    const thereIsData = statusToday.length > 0;

    const sentData: any = {};

    for (let i = 0; i < data.length; i++) {
      const [key, value] = data[i].split('=');

      sentData[key] = value === "true";
    }

    if (thereIsData) {
      res = await editStatus(sentData, statusToday[0].id);
    } else {
      res = await createStatus(sentData);
    }
  } catch (error) {
    console.error("Error in saveChanges:", error);
    throw error
  }

  return res
}
