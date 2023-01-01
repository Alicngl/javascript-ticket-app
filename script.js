const container = document.querySelector(".container");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved) ");
const count = document.getElementById("count");
const amount = document.getElementById("amount");

getLocalStorage();
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});
select.addEventListener("change", function (e) {
  calculateTotal();
});
function calculateTotal() {
  let selectedSeat = container.querySelectorAll(".seat.selected");

  let seatArr = [];
  let selectedArr = [];

  seats.forEach(function (seat) {
    seatArr.push(seat);
  });
  selectedSeat.forEach(function (seat) {
    selectedArr.push(seat);
  });
  let selectedSeatIndex = selectedArr.map(function (seat) {
    return seatArr.indexOf(seat);
  });
  let selectedSeatCount = selectedSeat.length;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * select.value;

  saveLocalStorage(selectedSeatIndex);
}

function getLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"));
  const selectedMovieIndex = localStorage.getItem("selectedMovie");

  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  console.log(selectedSeats, "iiiii");

  if (selectedMovieIndex != null) {
    select.selectedIndex = selectedMovieIndex;
  }
}

function saveLocalStorage(indexs) {
  localStorage.setItem("selectedSeat", JSON.stringify(indexs));
  localStorage.setItem("selectedMovie", select.selectedIndex);
}
