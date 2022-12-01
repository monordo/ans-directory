/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `RegistrationAuthority` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RegistrationAuthority_name_key" ON "RegistrationAuthority"("name");
