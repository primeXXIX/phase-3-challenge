DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;
\c hotel_db;


DROP TABLE IF EXISTS guests CASCADE;


CREATE TABLE guests (
id  SERIAL   ,
name VARCHAR NOT NULL ,
email VARCHAR,
PRIMARY KEY ("id") 
);

DROP TABLE IF EXISTS rooms CASCADE;
CREATE TABLE rooms (
id  SERIAL  ,
room_number VARCHAR NOT NULL,
capacity INTEGER NOT NULL,
PRIMARY KEY ("id") 
);

DROP TABLE IF EXISTS bookings CASCADE;
CREATE TABLE bookings (
id  SERIAL  ,
guest_id INTEGER NOT NULL ,
room_id INTEGER NOT NULL ,
check_out DATE NOT NULL ,
check_in DATE NOT NULL,
PRIMARY KEY ("id") 
);

ALTER TABLE bookings ADD FOREIGN KEY ("guest_id") REFERENCES "guests" ("id");
ALTER TABLE bookings ADD FOREIGN KEY ("room_id") REFERENCES "rooms" ("id");
