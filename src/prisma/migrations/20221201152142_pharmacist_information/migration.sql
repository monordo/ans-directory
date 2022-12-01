/*
  Warnings:

  - You are about to drop the `Pharmacist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pharmacist";

-- CreateTable
CREATE TABLE "PharmacistInformation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectionCode" TEXT NOT NULL,
    "sectionLabel" TEXT NOT NULL,

    CONSTRAINT "PharmacistInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PharmacistInformation_sectionCode_sectionLabel_key" ON "PharmacistInformation"("sectionCode", "sectionLabel");
