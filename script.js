const container = document.querySelector(".container");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved) ");
let count;

container.addEventListener("click", function (e) {
  e.target.classList.toggle("selected");
  calculateTotal();
});
select.addEventListener("change", function (e) {
  calculateTotal();
});
function calculateTotal() {
  let selectedSeat = container.querySelectorAll(".seat.selected");
  count = selectedSeat.length;
  let value = select.value;
  let price = count * value;

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
  console.log(selectedSeatIndex);

  document.querySelector("#amount").textContent = price;
  document.getElementById("count").textContent = selectedSeat.length;
  saveLocalStorage(selectedSeatIndex);
}

function saveLocalStorage(index) {
  localStorage.setItem("selectedSeat", JSON.stringify(index));
  localStorage.setItem("selectedMovie",select.selectedIndex)
}
