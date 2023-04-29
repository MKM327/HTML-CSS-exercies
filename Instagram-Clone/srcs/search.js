const searchButton = document.getElementById("searchBtn");
const nav = document.getElementById("nav");
searchButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
