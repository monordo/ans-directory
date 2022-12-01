/*
  Warnings:

  - A unique constraint covering the columns `[healthProfessionalId,knowHowId]` on the table `HealthProfessionalHasKnowHow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HealthProfessionalHasKnowHow_healthProfessionalId_knowHowId_key" ON "HealthProfessionalHasKnowHow"("healthProfessionalId", "knowHowId");
