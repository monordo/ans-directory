-- CreateTable
CREATE TABLE "KnowHow" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "knowHowTypeCode" TEXT NOT NULL,
    "knowHowTypeLabel" TEXT NOT NULL,
    "knowHowCode" TEXT NOT NULL,
    "knowHowLabel" TEXT NOT NULL,

    CONSTRAINT "KnowHow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HealthProfessionalToKnowHow" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "KnowHow_knowHowTypeCode_knowHowCode_key" ON "KnowHow"("knowHowTypeCode", "knowHowCode");

-- CreateIndex
CREATE UNIQUE INDEX "_HealthProfessionalToKnowHow_AB_unique" ON "_HealthProfessionalToKnowHow"("A", "B");

-- CreateIndex
CREATE INDEX "_HealthProfessionalToKnowHow_B_index" ON "_HealthProfessionalToKnowHow"("B");

-- AddForeignKey
ALTER TABLE "_HealthProfessionalToKnowHow" ADD CONSTRAINT "_HealthProfessionalToKnowHow_A_fkey" FOREIGN KEY ("A") REFERENCES "HealthProfessional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HealthProfessionalToKnowHow" ADD CONSTRAINT "_HealthProfessionalToKnowHow_B_fkey" FOREIGN KEY ("B") REFERENCES "KnowHow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
