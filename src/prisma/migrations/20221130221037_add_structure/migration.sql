-- CreateTable
CREATE TABLE "Practice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "practiceCode" TEXT NOT NULL,
    "practiceLabel" TEXT NOT NULL,

    CONSTRAINT "Practice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Structure" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "SIRET" TEXT NOT NULL,
    "SIREN" TEXT,
    "FINESS" TEXT,
    "legalFINESS" TEXT,
    "technicalId" TEXT,
    "companyName" TEXT,
    "comercialSign" TEXT,
    "oldIdentifiers" TEXT,

    CONSTRAINT "Structure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivitySector" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectorCode" TEXT NOT NULL,
    "sectorLabel" TEXT NOT NULL,

    CONSTRAINT "ActivitySector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmacistTable" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectionCode" TEXT NOT NULL,
    "sectionLabel" TEXT NOT NULL,

    CONSTRAINT "PharmacistTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roleCode" TEXT NOT NULL,
    "roleLabel" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "activityCode" TEXT NOT NULL,
    "activityLabel" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistrationAuthority" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "activityCode" TEXT NOT NULL,
    "activityLabel" TEXT NOT NULL,

    CONSTRAINT "RegistrationAuthority_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Practice_practiceCode_practiceLabel_key" ON "Practice"("practiceCode", "practiceLabel");

-- CreateIndex
CREATE UNIQUE INDEX "Structure_SIRET_key" ON "Structure"("SIRET");

-- CreateIndex
CREATE UNIQUE INDEX "ActivitySector_sectorCode_sectorLabel_key" ON "ActivitySector"("sectorCode", "sectorLabel");

-- CreateIndex
CREATE UNIQUE INDEX "PharmacistTable_sectionCode_sectionLabel_key" ON "PharmacistTable"("sectionCode", "sectionLabel");

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleCode_roleLabel_key" ON "Role"("roleCode", "roleLabel");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_activityCode_activityLabel_key" ON "Activity"("activityCode", "activityLabel");

-- CreateIndex
CREATE UNIQUE INDEX "RegistrationAuthority_activityCode_activityLabel_key" ON "RegistrationAuthority"("activityCode", "activityLabel");
