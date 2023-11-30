-- CreateTable
CREATE TABLE "Responsible" (
    "id" SERIAL NOT NULL,
    "morningResponsible" TEXT,
    "afternoonResponsible" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Responsible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryRecord" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "article" TEXT NOT NULL,
    "deliveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveredTo" TEXT NOT NULL,
    "receivedAt" TIMESTAMP(3),
    "receivedStatus" BOOLEAN DEFAULT false,

    CONSTRAINT "DeliveryRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Responsible_createdAt_key" ON "Responsible"("createdAt");
