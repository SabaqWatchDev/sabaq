import { recordsToday } from "@/types"

export async function getStatus() {
  const recordsTodayRes: any = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/tasks`, { cache: "no-cache" })

  const statusToday: any = await recordsTodayRes.json()

  return statusToday
}
