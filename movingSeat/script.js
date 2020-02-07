const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Save selected movie index and price

function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Update total and Count
const updateSelectedCount=() =>{
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => 
    [...seats].indexOf(seat)
  );

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));



  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
   ticketPrice = +e.target.value;
   setMovieData(e.target.selectedIndex, e.target.value);
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

