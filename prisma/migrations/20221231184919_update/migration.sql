/*
  Warnings:

  - You are about to drop the column `DateEnd` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `DateStart` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "DateEnd",
DROP COLUMN "DateStart";
