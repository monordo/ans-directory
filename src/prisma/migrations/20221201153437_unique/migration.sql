/*
  Warnings:

  - A unique constraint covering the columns `[activityCode]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sectorCode]` on the table `ActivitySector` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sectionCode]` on the table `PharmacistInformation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[practiceLabel]` on the table `Practice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roleCode]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Activity_activityCode_activityLabel_key";

-- DropIndex
DROP INDEX "ActivitySector_sectorCode_sectorLabel_key";

-- DropIndex
DROP INDEX "PharmacistInformation_sectionCode_sectionLabel_key";

-- DropIndex
DROP INDEX "Practice_practiceCode_practiceLabel_key";

-- DropIndex
DROP INDEX "Role_roleCode_roleLabel_key";

-- CreateIndex
CREATE UNIQUE INDEX "Activity_activityCode_key" ON "Activity"("activityCode");

-- CreateIndex
CREATE UNIQUE INDEX "ActivitySector_sectorCode_key" ON "ActivitySector"("sectorCode");

-- CreateIndex
CREATE UNIQUE INDEX "PharmacistInformation_sectionCode_key" ON "PharmacistInformation"("sectionCode");

-- CreateIndex
CREATE UNIQUE INDEX "Practice_practiceLabel_key" ON "Practice"("practiceLabel");

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleCode_key" ON "Role"("roleCode");
