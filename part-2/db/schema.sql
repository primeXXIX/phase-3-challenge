CREATE TABLE guests (
id  SERIAL PRIMARY KEY  ,
name VARCHAR(255) NOT NULL ,
email VARCHAR(255)
);

CREATE TABLE rooms (
id  SERIAL PRIMARY KEY ,
room_number VARCHAR(255) NOT NULL,
capacity INTEGER NOT NULL
);

CREATE TABLE bookings (
id  SERIAL PRIMARY KEY ,
guest_id VARCHAR(255) NOT NULL ,
room_number_id VARCHAR(255) NOT NULL ,
check_out DATE NOT NULL ,
check_in DATE NOT NULL
);

ALTER TABLE bookings ADD FOREIGN KEY (guest_id) REFERENCES guests (id);
ALTER TABLE bookings ADD FOREIGN KEY (room_number_id) REFERENCES rooms (id);
