/*
  Warnings:

  - Added the required column `permissions` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secret` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "isActivated" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "permissions" TEXT NOT NULL,
ADD COLUMN     "secret" TEXT NOT NULL;
