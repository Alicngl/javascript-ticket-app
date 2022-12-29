const container = document.querySelector(".container");
const selected = document.querySelectorAll(".selected");
const select = document.getElementById("movie");
let count;

container.addEventListener("click", function (e) {
  e.target.classList.toggle("selected");
  calculateTotal();
});
select.addEventListener("change", function (e) {
  calculateTotal();
});
function calculateTotal() {
  let selectedSeat = container.querySelectorAll(".seat.selected").length;
  count = selectedSeat;
  let value = select.value;
  let price = count * value;
  if (value != selected.value) {
    console.log("puh");
  }
  document.querySelector("#amount").textContent = price;
}
