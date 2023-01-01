/*
  Warnings:

  - Made the column `Duration` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Rating` on table `Trip` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "Duration" SET NOT NULL,
ALTER COLUMN "Rating" SET NOT NULL;
