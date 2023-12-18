/*
  Warnings:

  - You are about to drop the column `taskId` on the `TaskStatus` table. All the data in the column will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chargeImplements` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chargeImplements2` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkClean` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkCleanAfterLunch` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkReceived` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleanAfterDinner` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleanAfterLunch` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleanOffices` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeParking` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fixTrash` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fixTrashAfternoon` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openParking` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiveCleanImplements` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiveNightVolunteers` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiveVolunteers` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registerExit` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remindNightClean` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `submitAssistance` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `submitReport` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `takeCounterPhoto` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `washJackets` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `washJacketsNight` to the `TaskStatus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TaskStatus" DROP CONSTRAINT "TaskStatus_taskId_fkey";

-- AlterTable
ALTER TABLE "TaskStatus" DROP COLUMN "taskId",
ADD COLUMN     "chargeImplements" BOOLEAN NOT NULL,
ADD COLUMN     "chargeImplements2" BOOLEAN NOT NULL,
ADD COLUMN     "checkClean" BOOLEAN NOT NULL,
ADD COLUMN     "checkCleanAfterLunch" BOOLEAN NOT NULL,
ADD COLUMN     "checkReceived" BOOLEAN NOT NULL,
ADD COLUMN     "cleanAfterDinner" BOOLEAN NOT NULL,
ADD COLUMN     "cleanAfterLunch" BOOLEAN NOT NULL,
ADD COLUMN     "cleanOffices" BOOLEAN NOT NULL,
ADD COLUMN     "closeParking" BOOLEAN NOT NULL,
ADD COLUMN     "fixTrash" BOOLEAN NOT NULL,
ADD COLUMN     "fixTrashAfternoon" BOOLEAN NOT NULL,
ADD COLUMN     "openParking" BOOLEAN NOT NULL,
ADD COLUMN     "receiveCleanImplements" BOOLEAN NOT NULL,
ADD COLUMN     "receiveNightVolunteers" BOOLEAN NOT NULL,
ADD COLUMN     "receiveVolunteers" BOOLEAN NOT NULL,
ADD COLUMN     "registerExit" BOOLEAN NOT NULL,
ADD COLUMN     "remindNightClean" BOOLEAN NOT NULL,
ADD COLUMN     "submitAssistance" BOOLEAN NOT NULL,
ADD COLUMN     "submitReport" BOOLEAN NOT NULL,
ADD COLUMN     "takeCounterPhoto" BOOLEAN NOT NULL,
ADD COLUMN     "washJackets" BOOLEAN NOT NULL,
ADD COLUMN     "washJacketsNight" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Task";
