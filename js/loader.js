const screenLoader = document.querySelector(
  ".container-container-carregamento"
);

function ActiveScreenLoader(url) {
  screenLoader.style.display = "flex";

  setTimeout(() => {
    window.location = `${url}`;
  }, 3000);
}
