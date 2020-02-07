const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

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

//Get data from local storage and populate UI
function populateUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected');
      }
    });
  }

  
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


// Ininital count and total set
updateSelectedCount()

