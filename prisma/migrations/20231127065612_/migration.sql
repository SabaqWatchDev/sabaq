/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Volunteer` will be added. If there are existing duplicate values, this will fail.
  - Made the column `username` on table `Volunteer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Volunteer" ALTER COLUMN "username" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_username_key" ON "Volunteer"("username");
