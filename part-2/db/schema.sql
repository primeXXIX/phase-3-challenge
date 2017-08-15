CREATE TABLE "guests" (
"id"  SERIAL NOT NULL ,
"name" VARCHAR(255) NOT NULL ,
"email" VARCHAR(255) ,
PRIMARY KEY ("id")
);

CREATE TABLE "rooms" (
"id"  SERIAL ,
"room_number" INTEGER ,
"capacity" INTEGER NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "bookings" (
"id"  SERIAL ,
"guest_id" VARCHAR(255) NOT NULL ,
"room_number_id" INTEGER NOT NULL ,
"check_out" DATE NOT NULL ,
"check_in" DATE NOT NULL ,
PRIMARY KEY ("id")
);

ALTER TABLE "bookings" ADD FOREIGN KEY ("guest_id") REFERENCES "guests" ("id");
ALTER TABLE "bookings" ADD FOREIGN KEY ("room_number_id") REFERENCES "rooms" ("id");
