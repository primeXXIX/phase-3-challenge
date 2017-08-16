take an arg from process.argv[]
based on argv

three args:
- guests { return all guest }
- rooms {retruns lists rooms and current availability }
- bookings {lists the room bookings (room # and guest name) }

$ node hotel.js {var} {option}

const command = argv[2]
      option = argv[3]

/*
    function getGuests() {
      return db.query(sqlString)
  }
*/


const processCommand = (command, option) => {
  let commandFunc = null
  switch command
    case guests:
      commandFunc = getGuests
      break;
    case: rooms { commandFunc = getRooms }
    case: bookings { commandFunc = getbookings }

  commandFunc()
    .then(data => {
      return formatData(data)
    })
    then( data => {
      return printData(data)
    })
  }

handleGuests:
  GET guests:
    SELECT * FROM guests

handleRooms:
  getRooms()



formatData:
    take an [] => [ 'formatted strings' ]
    .map =>  `|  ${id}  |  ${name}  |  ${email}  |`
    .amp => resultItem => key => `|  ${id}`.padEnd(8, ' ')
                                 `|  ${name}`.padEnd(26, ' ')

    return ['|  id  |  name  |  email  |']

printData:

bookings:
SELECT rooms.room_number, guests.name, bookings.check_in, bookings.check_out
FROM
bookings JOIN guests ON bookings.guest_id = guests.id
JOIN rooms ON bookings.room_id = rooms.id;



result = formatted string displaying data in table (id, guest name, email)
