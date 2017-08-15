COPY guests(id, name, email) from '/Users/aaronboatwright/Desktop/LG/phase-3-challenge/part-2/db/guests.csv'

COPY rooms(id, name, capacity) from '/Users/aaronboatwright/Desktop/LG/phase-3-challenge/part-2/db/rooms.csv'

COPY bookings(id, room_id, guest_id, check_in, check_out) from '/Users/aaronboatwright/Desktop/LG/phase-3-challenge/part-2/db/bookings.csv'
