CREATE TABLE "guests" (
"id"  SERIAL NOT NULL ,
"name" VARCHAR(255) 'NOT NULL' ,
PRIMARY KEY ("id")
);

CREATE TABLE "rooms" (
"id"  SERIAL ,
"room_number" INTEGER ,
"availability " BOOLEAN ,
PRIMARY KEY ("id")
);

CREATE TABLE "bookings" (
"id"  SERIAL ,
"name" VARCHAR(255) NOT NULL ,
"room_number" INTEGER NOT NULL ,
PRIMARY KEY ("id")
);

ALTER TABLE "bookings" ADD FOREIGN KEY ("name") REFERENCES "guests" ("id");
ALTER TABLE "bookings" ADD FOREIGN KEY ("room_number") REFERENCES "rooms" ("id");

-- Fix schema to add checkin/checkout times, email isn't needed
