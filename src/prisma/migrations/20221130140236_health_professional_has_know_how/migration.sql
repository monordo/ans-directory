/*
  Warnings:

  - You are about to drop the `_HealthProfessionalToKnowHow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HealthProfessionalToKnowHow" DROP CONSTRAINT "_HealthProfessionalToKnowHow_A_fkey";

-- DropForeignKey
ALTER TABLE "_HealthProfessionalToKnowHow" DROP CONSTRAINT "_HealthProfessionalToKnowHow_B_fkey";

-- DropTable
DROP TABLE "_HealthProfessionalToKnowHow";

-- CreateTable
CREATE TABLE "HealthProfessionalHasKnowHow" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "healthProfessionalId" TEXT NOT NULL,
    "knowHowId" TEXT NOT NULL,

    CONSTRAINT "HealthProfessionalHasKnowHow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasKnowHow" ADD CONSTRAINT "HealthProfessionalHasKnowHow_healthProfessionalId_fkey" FOREIGN KEY ("healthProfessionalId") REFERENCES "HealthProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasKnowHow" ADD CONSTRAINT "HealthProfessionalHasKnowHow_knowHowId_fkey" FOREIGN KEY ("knowHowId") REFERENCES "KnowHow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
