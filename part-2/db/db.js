const pgp = require('pg-promise')(options)
      connectionString = 'postgres://localhost:5432/hotel_db'
      db = pgp(connectionString)


const getAllGuests = () => {
  db.any(`SELECT * FROM  guests`)
}

const roomAvail = () => {
  db.any(`SELECT room_number, capacity, available`)
}
