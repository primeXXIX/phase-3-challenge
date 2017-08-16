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
  let total = []
  let price = []

  let noOfNights = document.querySelector( <> )
}
