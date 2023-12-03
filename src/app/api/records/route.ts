import { prisma } from "@/libs/prisma";
import { prismaSearchDates } from "@/libs/utils/prismaSearchDate";

export async function GET() {
  const [currentDate, nextDay] = prismaSearchDates()

  const response = await prisma.deliveryRecord.findMany({
    where: {
      deliveredAt: {
        gte: currentDate,
        lt: nextDay,
      },
    },
  });

  return Response.json(response)
}
