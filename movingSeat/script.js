const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//Update total and Count
const updateSelectedCount=() =>{
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => {
    return [...seats].indexOf(seat)
  });

  console.log(seatsIndex)

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
   ticketPrice = +e.target.value;
  updateSelectedCount();
})

//Seat click event
container.addEventListener('click', (e) => {
 let classTarget = e.target.classList;

 if(classTarget.contains('seat') && 
 !classTarget.contains('occupied')) {
   classTarget.toggle('selected');
   updateSelectedCount();
 }
})

