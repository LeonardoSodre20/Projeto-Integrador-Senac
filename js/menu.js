const btnMobile = document.querySelector(".btn");
const listMenu = document.querySelector(".lista-de-navegacao");


btnMobile.addEventListener("click", () => {
  btnMobile.classList.toggle("active");
  listMenu.classList.toggle("activeMenu");
});


