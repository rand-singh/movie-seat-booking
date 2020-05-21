const container = document.querySelector(".container"),
  seats = document.querySelectorAll(".row .seat:not(.occupied)"),
  count = document.getElementById("count"),
  total = document.getElementById("total"),
  movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; // converts the string value to a number

// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// update total and price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected"),
    selectedSeatsCount = selectedSeats.length;

  // copy selected seats in arr
  // map throgh array
  // return a new array of indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
