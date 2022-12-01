/*
  Warnings:

  - The `oldIdentifiers` column on the `Structure` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Structure" ADD COLUMN     "activityId" TEXT,
ADD COLUMN     "registrationAuthorityId" TEXT,
ADD COLUMN     "sectorId" TEXT,
DROP COLUMN "oldIdentifiers",
ADD COLUMN     "oldIdentifiers" TEXT[];

-- CreateTable
CREATE TABLE "HealthProfessionalHasStructure" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "healthProfessionalId" TEXT NOT NULL,
    "structureId" TEXT NOT NULL,
    "practiceId" TEXT NOT NULL,
    "roleId" TEXT,

    CONSTRAINT "HealthProfessionalHasStructure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HealthProfessionalHasStructure_healthProfessionalId_structu_key" ON "HealthProfessionalHasStructure"("healthProfessionalId", "structureId", "practiceId");

-- AddForeignKey
ALTER TABLE "Structure" ADD CONSTRAINT "Structure_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "ActivitySector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Structure" ADD CONSTRAINT "Structure_registrationAuthorityId_fkey" FOREIGN KEY ("registrationAuthorityId") REFERENCES "RegistrationAuthority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Structure" ADD CONSTRAINT "Structure_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasStructure" ADD CONSTRAINT "HealthProfessionalHasStructure_healthProfessionalId_fkey" FOREIGN KEY ("healthProfessionalId") REFERENCES "HealthProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasStructure" ADD CONSTRAINT "HealthProfessionalHasStructure_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "Structure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasStructure" ADD CONSTRAINT "HealthProfessionalHasStructure_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "Practice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasStructure" ADD CONSTRAINT "HealthProfessionalHasStructure_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
