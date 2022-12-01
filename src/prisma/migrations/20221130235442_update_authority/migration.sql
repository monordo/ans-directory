/*
  Warnings:

  - You are about to drop the column `activityCode` on the `RegistrationAuthority` table. All the data in the column will be lost.
  - You are about to drop the column `activityLabel` on the `RegistrationAuthority` table. All the data in the column will be lost.
  - Added the required column `name` to the `RegistrationAuthority` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "RegistrationAuthority_activityCode_activityLabel_key";

-- AlterTable
ALTER TABLE "RegistrationAuthority" DROP COLUMN "activityCode",
DROP COLUMN "activityLabel",
ADD COLUMN     "name" TEXT NOT NULL;
