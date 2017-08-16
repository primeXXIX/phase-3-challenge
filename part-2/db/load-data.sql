\COPY guests(id,name,email) from '/Users/aaronboatwright/Desktop/LG/phase-3-challenge/part-2/db/guests.csv' DELIMITER ',' CSV HEADER;

\COPY rooms(id,room_number,capacity) from '/Users/aaronboatwright/Desktop/LG/phase-3-challenge/part-2/db/rooms.csv' DELIMITER ',' CSV HEADER;

\COPY bookings(id,room_id,guest_id,check_in,check_out) from '/Users/aaronboatwright/Desktop/LG/phase-3-challenge/part-2/db/bookings.csv' DELIMITER ',' CSV HEADER;
