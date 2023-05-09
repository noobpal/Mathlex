// toggle class active
const navbNar = document.querySelector(".navbar-nav");

// menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbNar.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbNar.contains(e.target)) {
    navbNar.classList.remove("active");
  }
});
// jawaban
const betul = document.getElementById("a");
const salah = document.getElementById("b", "c", "D");
const answer = document.getElementById("answer");

betul.addEventListener("click", function () {
  answer.textContent = "Jawaban anda benar";
});

salah.addEventListener("click", function () {
  answer.textContent = "Jawaban anda salah";
});
