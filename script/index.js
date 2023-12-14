const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("nav-bar");
const navigation = document.querySelectorAll("nav a");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("-right-full");
  navbar.classList.toggle("right-0");
});

for (let i of navigation) {
  i.addEventListener("click", () => {
    navbar.classList.add("-right-full");
    navbar.classList.remove("right-0");
  });
}

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.add("-right-full");
    navbar.classList.remove("right-0");
  }
});
