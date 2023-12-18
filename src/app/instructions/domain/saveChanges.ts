"use server";

import { getStatus } from "../adapter/getStatus";
import { createStatus } from "./createStatus";
import { editStatus } from "./editStatus";

export default async function saveChanges(data: any) {
  const statusToday = await getStatus();
  const thereIsData = statusToday.length > 0;

  let sentData: any = {};

  for (let i = 0; i < data.length; i++) {
    const [key, value] = data[i].split('=');

    sentData[key] = value === "true" ? true : false;
  }

  if (thereIsData) {
    editStatus(sentData, statusToday[0].id);
  } else {
    createStatus(sentData);
  }
}
