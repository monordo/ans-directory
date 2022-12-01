/*
  Warnings:

  - You are about to drop the `PharmacistTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PharmacistTable";

-- CreateTable
CREATE TABLE "Pharmacist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectionCode" TEXT NOT NULL,
    "sectionLabel" TEXT NOT NULL,

    CONSTRAINT "Pharmacist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacist_sectionCode_sectionLabel_key" ON "Pharmacist"("sectionCode", "sectionLabel");
