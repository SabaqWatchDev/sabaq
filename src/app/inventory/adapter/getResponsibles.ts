import { responsiblesToday } from "@/types"

export async function getResponsibles() {
  const responsiblesTodayRes: any = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/responsibles`, { cache: "no-cache" })

  const responsiblesToday: responsiblesToday = await responsiblesTodayRes.json()

  return responsiblesToday
}
