
// function change() {
//     $('[data-toggle="tooltip"]').tooltip()
//   }

let Name = document.getElementById("name")
let Card = document.getElementById("Card")
let Edate = document.getElementById("Edate")
let cvv = document.getElementById("cvv")
let payBtn = document.getElementById("payBtn")

payBtn.addEventListener("click", () => {

  if (Name.value == "" || Card.value == "" || Edate.value == "" || cvv.value == "") {
    already.style.display = "inline"
    setTimeout(() => {
      already.style.display = "none"
    }, 2000)
  } else {
    added.style.display = "inline"
    setTimeout(() => {
      added.style.display = "none";
      localStorage.clear();
      window.location.href = "./index.html"
    }, 2000)
  }
})