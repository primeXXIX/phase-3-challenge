// alert('here')

// Clicking on Book will open modal

// Users can select checkin

// The total in the "booking" modal shows the total sum
// (formula nightly rate x no. of nights)

// Whenever the number of nights changes, the total is updated
// automatically

// Clikcing on the "X" button in the "booking" modal closes the
// modal





// NOTE: Add item to cart



// addRoom(room, price)
// removeRoom(room, price)
// clearModal()
// totalCart()
// countCart()
// showModal()
//
// var modal = document.getElementById('modal');
// var btns = document.querySelectorAll('.pack.detail');
// var span = document.getElementsByClassName("close")[0];
//
// [].forEach.call(btns, function(el) {
//   el.onclick = function() {
//       modal.style.display = "block";
//   }
// })
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


function bookingModal( rate, room ) {

  const modal = document.getElementById( 'myModal' )
  let numOfNights = modal.querySelector( 'num-of-nights' )

  console.log(modal)

  let hotelRate = []
  let hotelRoom = []


  modal.style.display = "block";

  hotelRoom.push( room )
  hotelRate.push( '$' + hotelRoom + '/night' )


  let totalCost = (numOfNights * rate)
      totalSpan = document.getElementById( 'total-of-nights' )

  totalSpan.innerHTML = totalCost

  bookingInfo()

  let exitModal = document.getElementById( 'close-modal' )
  exitModal.onclick = () => { modal.style.display = "none" }
}

function bookingInfo() {

  // document.getElementById( 'room-number' )[0].innerHTML = ''
  // document.getElementById( 'room-rate' )[0].innerHTML = ''
  //
  // const roomNumberModal = document.getElementById( 'room-number' )
  //       roomRateModal = document.getElementById( 'room-rate' )

        document.getElementById( 'room-number' ).innerHTML = ''
         document.getElementById( 'room-rate' ).innerHTML = ''

         const roomNumberModal = document.getElementById( 'room-number' )
               roomRateModal = document.getElementById( 'room-rate' )
        // total.map((i) => {
        //   let myModal_th = document.createElement('th')
        //   let myModal_hotelRoom = document.createElement('th')
        //
        //   myModal.innerText = total.push[i]
        //   myModal.innerText = hotelRoom.push[i]
        //
        //   roomNumberModal.appendChild(myModal_th)
        //   roomNumberModal.appendChild(myModal_hotelRoom)
        // })

        for (var i = 0; i < hotelRoom.length; i++) {
            let myModal_th = document.createElement('th')
            let myModal_hotelRoom = document.createElement('th')

            myModal_th.innerText = hotelRoom.push[i]
            myModal_Price.innerText = hotelRate.push[i]

            roomNumberModal.appendChild(myModal_th)
            roomRateModal.appendChild(myModal_hotelRoom)
        }

}
