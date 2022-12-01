/*
  Warnings:

  - A unique constraint covering the columns `[secret]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "HealthProfessional" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "PPIdentifierType" INTEGER NOT NULL,
    "PPIdentifier" TEXT NOT NULL,
    "nationalPPIdentifier" TEXT NOT NULL,
    "practiceCivilityCode" TEXT,
    "practiceCivilityLabel" TEXT,
    "civilityCode" TEXT NOT NULL,
    "civilityLabel" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,

    CONSTRAINT "HealthProfessional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HealthProfessional_PPIdentifier_key" ON "HealthProfessional"("PPIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "HealthProfessional_nationalPPIdentifier_key" ON "HealthProfessional"("nationalPPIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "Account_secret_key" ON "Account"("secret");
