const nav = document.querySelector(".header__navbar--menu");
const navLink = nav.querySelectorAll(".header__navbar-link");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
