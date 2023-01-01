/*
  Warnings:

  - The primary key for the `Driver` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `Document` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_pkey",
DROP COLUMN "id",
DROP COLUMN "lastName",
DROP COLUMN "name",
ADD COLUMN     "Document" TEXT NOT NULL,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "LastName" TEXT NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD CONSTRAINT "Driver_pkey" PRIMARY KEY ("Id");

-- CreateTable
CREATE TABLE "Passenger" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "Location" TEXT NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "Id" SERIAL NOT NULL,
    "Address" TEXT NOT NULL,
    "Duration" INTEGER NOT NULL,
    "DistanceCoveredKm" DOUBLE PRECISION NOT NULL,
    "Completed" BOOLEAN NOT NULL,
    "Rating" INTEGER NOT NULL,
    "IdDriver" INTEGER NOT NULL,
    "IdPassenger" INTEGER NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "Id" SERIAL NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "IdTrip" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_IdTrip_key" ON "Invoice"("IdTrip");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_IdDriver_fkey" FOREIGN KEY ("IdDriver") REFERENCES "Driver"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_IdPassenger_fkey" FOREIGN KEY ("IdPassenger") REFERENCES "Passenger"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_IdTrip_fkey" FOREIGN KEY ("IdTrip") REFERENCES "Trip"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
