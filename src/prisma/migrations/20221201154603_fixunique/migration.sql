/*
  Warnings:

  - A unique constraint covering the columns `[practiceCode]` on the table `Practice` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Practice_practiceLabel_key";

-- CreateIndex
CREATE UNIQUE INDEX "Practice_practiceCode_key" ON "Practice"("practiceCode");
