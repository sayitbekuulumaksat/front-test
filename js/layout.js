const layoutShow = document.querySelector(".layout__show_img");
const showButton = document.querySelector(".layout__button");

showButton.addEventListener("click", () => {
  layoutShow.innerHTML = `
    <button class="layout__show_close">Закрыть</button>
    <img class="layout__img_drawing" src="./images/layout/Triumph.png" alt="" />
  `;
});

layoutShow.addEventListener("click", () => {
  layoutShow.innerHTML = null;
});
