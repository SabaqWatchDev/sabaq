import { recordsToday } from "@/types"

export async function getRecords() {
  const recordsTodayRes: any = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/records`, { cache: "no-cache" })

  const recordsToday: recordsToday = await recordsTodayRes.json()
  
  return recordsToday
}
