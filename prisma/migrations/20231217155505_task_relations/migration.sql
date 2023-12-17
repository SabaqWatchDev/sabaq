/*
  Warnings:

  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[createdAt]` on the table `TaskStatus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `taskId` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "TaskStatus" ADD COLUMN     "taskId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TaskStatus_createdAt_key" ON "TaskStatus"("createdAt");

-- AddForeignKey
ALTER TABLE "TaskStatus" ADD CONSTRAINT "TaskStatus_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
