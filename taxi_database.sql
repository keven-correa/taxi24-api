-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Driver_Id_seq";

-- Table Definition
CREATE TABLE "public"."Driver" (
    "Age" int4 NOT NULL,
    "Location" text NOT NULL,
    "Avaliable" bool NOT NULL DEFAULT true,
    "Document" text NOT NULL,
    "Id" int4 NOT NULL DEFAULT nextval('"Driver_Id_seq"'::regclass),
    "LastName" text NOT NULL,
    "Name" text NOT NULL,
    PRIMARY KEY ("Id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Invoice_Id_seq";

-- Table Definition
CREATE TABLE "public"."Invoice" (
    "Id" int4 NOT NULL DEFAULT nextval('"Invoice_Id_seq"'::regclass),
    "Price" float8 NOT NULL,
    "IdTrip" int4 NOT NULL,
    CONSTRAINT "Invoice_IdTrip_fkey" FOREIGN KEY ("IdTrip") REFERENCES "public"."Trip"("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY ("Id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Passenger_Id_seq";

-- Table Definition
CREATE TABLE "public"."Passenger" (
    "Id" int4 NOT NULL DEFAULT nextval('"Passenger_Id_seq"'::regclass),
    "name" text NOT NULL,
    "LastName" text NOT NULL,
    "Location" text NOT NULL,
    "Age" int4 NOT NULL,
    PRIMARY KEY ("Id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Trip_Id_seq";

-- Table Definition
CREATE TABLE "public"."Trip" (
    "Id" int4 NOT NULL DEFAULT nextval('"Trip_Id_seq"'::regclass),
    "Address" text NOT NULL,
    "Duration" int4 NOT NULL,
    "DistanceCoveredKm" float8 NOT NULL,
    "Completed" bool NOT NULL DEFAULT false,
    "Rating" int4 NOT NULL,
    "IdDriver" int4 NOT NULL,
    "IdPassenger" int4 NOT NULL,
    "Active" bool NOT NULL DEFAULT true,
    CONSTRAINT "Trip_IdDriver_fkey" FOREIGN KEY ("IdDriver") REFERENCES "public"."Driver"("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Trip_IdPassenger_fkey" FOREIGN KEY ("IdPassenger") REFERENCES "public"."Passenger"("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY ("Id")
);

INSERT INTO "public"."Driver" ("Age", "Location", "Avaliable", "Document", "Id", "LastName", "Name") VALUES
(24, '18.487103249399265,-69.98229864608018', 't', '00123245789', 1, 'Manuel', 'Jose');
INSERT INTO "public"."Driver" ("Age", "Location", "Avaliable", "Document", "Id", "LastName", "Name") VALUES
(24, '18.492266759195015, -69.9907818082903', 't', '00123245000', 2, 'Valerio', 'Michael');
INSERT INTO "public"."Driver" ("Age", "Location", "Avaliable", "Document", "Id", "LastName", "Name") VALUES
(34, '18.48547068528596, -69.99693487437217', 't', '00999245000', 3, 'Jimenez', 'Braulio');
INSERT INTO "public"."Driver" ("Age", "Location", "Avaliable", "Document", "Id", "LastName", "Name") VALUES
(34, '18.48917422309984, -69.97621634646742', 't', '40212745800', 4, 'Jimenez', 'Braulio');

INSERT INTO "public"."Invoice" ("Id", "Price", "IdTrip") VALUES
(1, 135, 1);
INSERT INTO "public"."Invoice" ("Id", "Price", "IdTrip") VALUES
(6, 135, 2);
INSERT INTO "public"."Invoice" ("Id", "Price", "IdTrip") VALUES
(7, 1350, 3);
INSERT INTO "public"."Invoice" ("Id", "Price", "IdTrip") VALUES
(9, 1490, 4);

INSERT INTO "public"."Passenger" ("Id", "name", "LastName", "Location", "Age") VALUES
(1, 'Oscar', 'Matos', '18.487103249399265, -69.98229864608018', 37);


INSERT INTO "public"."Trip" ("Id", "Address", "Duration", "DistanceCoveredKm", "Completed", "Rating", "IdDriver", "IdPassenger", "Active") VALUES
(2, '18.473289855700425, -69.96577712189466', 27, 5, 't', 0, 1, 1, 'f');
INSERT INTO "public"."Trip" ("Id", "Address", "Duration", "DistanceCoveredKm", "Completed", "Rating", "IdDriver", "IdPassenger", "Active") VALUES
(3, '18.473289855700425, -69.96577712189466', 270, 5, 't', 0, 1, 1, 'f');
INSERT INTO "public"."Trip" ("Id", "Address", "Duration", "DistanceCoveredKm", "Completed", "Rating", "IdDriver", "IdPassenger", "Active") VALUES
(1, '18.473289855700425, -69.96577712189466', 27, 5, 't', 0, 1, 1, 'f');
INSERT INTO "public"."Trip" ("Id", "Address", "Duration", "DistanceCoveredKm", "Completed", "Rating", "IdDriver", "IdPassenger", "Active") VALUES
(4, '18.473289855700425, -69.96577712189466', 298, 18, 't', 5, 1, 1, 'f');
