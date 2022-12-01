-- CreateTable
CREATE TABLE "Profession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "professionCategoryCode" TEXT NOT NULL,
    "professionCategoryLabel" TEXT NOT NULL,
    "professionCode" TEXT NOT NULL,
    "professionLabel" TEXT NOT NULL,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthProfessionalHasProfession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "healthProfessionalId" TEXT NOT NULL,
    "professionId" TEXT NOT NULL,

    CONSTRAINT "HealthProfessionalHasProfession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profession_professionCategoryCode_professionCode_key" ON "Profession"("professionCategoryCode", "professionCode");

-- CreateIndex
CREATE UNIQUE INDEX "HealthProfessionalHasProfession_healthProfessionalId_profes_key" ON "HealthProfessionalHasProfession"("healthProfessionalId", "professionId");

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasProfession" ADD CONSTRAINT "HealthProfessionalHasProfession_healthProfessionalId_fkey" FOREIGN KEY ("healthProfessionalId") REFERENCES "HealthProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthProfessionalHasProfession" ADD CONSTRAINT "HealthProfessionalHasProfession_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
