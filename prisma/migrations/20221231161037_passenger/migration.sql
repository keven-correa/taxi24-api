/*
  Warnings:

  - Changed the type of `Age` on the `Passenger` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Passenger" DROP COLUMN "Age",
ADD COLUMN     "Age" INTEGER NOT NULL;
