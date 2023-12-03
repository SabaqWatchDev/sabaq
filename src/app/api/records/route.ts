import { prisma } from "@/libs/prisma";
import { prismaSearchDates } from "@/libs/utils/prismaSearchDate";

// export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [currentDate, nextDay] = prismaSearchDates();

    const response = await prisma.deliveryRecord.findMany({
      where: {
        deliveredAt: {
          gte: currentDate,
          lt: nextDay,
        },
      },
    });

    return Response.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error: "An error occurred while fetching data" }, { status: 500 });
  }
}
