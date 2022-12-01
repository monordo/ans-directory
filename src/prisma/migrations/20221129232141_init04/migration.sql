-- AlterTable
ALTER TABLE "HealthProfessional" ALTER COLUMN "PPIdentifierType" DROP NOT NULL,
ALTER COLUMN "PPIdentifierType" SET DATA TYPE TEXT;
