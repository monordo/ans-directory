-- CreateTable
CREATE TABLE "HealthProfessionalHasPharmacistInformation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "healthProfessionalId" TEXT NOT NULL,
    "pharmacistInformationId" TEXT NOT NULL,

    CONSTRAINT "HealthProfessionalHasPharmacistInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HealthProfessionalHasPharmacistInformation_healthProfession_key" ON "HealthProfessionalHasPharmacistInformation"("healthProfessionalId", "pharmacistInformationId");

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasPharmacistInformation" ADD CONSTRAINT "HealthProfessionalHasPharmacistInformation_healthProfessio_fkey" FOREIGN KEY ("healthProfessionalId") REFERENCES "HealthProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasPharmacistInformation" ADD CONSTRAINT "HealthProfessionalHasPharmacistInformation_pharmacistInfor_fkey" FOREIGN KEY ("pharmacistInformationId") REFERENCES "PharmacistInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
