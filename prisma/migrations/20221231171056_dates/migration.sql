/*
  Warnings:

  - Added the required column `DateEnd` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DateStart` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "DateEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "DateStart" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "Duration" DROP NOT NULL;
