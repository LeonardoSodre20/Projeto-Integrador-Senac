const btnMobile = document.querySelector(".btn");
const listMenu = document.querySelector(".lista-de-navegacao");
const btnTop = document.querySelector(".container-btn-top");

btnMobile.addEventListener("click", () => {
  btnMobile.classList.toggle("active");
  listMenu.classList.toggle("activeMenu");
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
