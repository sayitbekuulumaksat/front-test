const images = [
  "https://cdn.house.kg/house/building-images/29511d4b80bfc091938e503fc2141098.jpg",
  "./images/gallery/img.png",
  "./images/gallery/image.png",
  "./images/gallery/img.png",
  "./images/gallery/image.png",
  "./images//layout/image.png",
  "/images/gallery/image.png",
];

const slidesContainer = document.querySelector(".slides-container");
const leftIcon = document.querySelector(".left-icon");
const rightIcon = document.querySelector(".right-icon");

let currentIndex = 0;

function renderSlides() {
  slidesContainer.innerHTML = "";
  const previousIndex =
    currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;

  const slides = [
    { src: images[previousIndex], class: "slide-left" },
    { src: images[currentIndex], class: "slide" },
    { src: images[nextIndex], class: "slide-right" },
  ];

  slides.forEach(({ src, class: className }) => {
    const slide = document.createElement("div");
    slide.className = `slide ${className}`;
    slide.innerHTML = `<img src="${src}" >`;
    slidesContainer.appendChild(slide);
  });
}

function slideLeft() {
  currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  renderSlides();
}

function slideRight() {
  currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
  renderSlides();
}

renderSlides();

leftIcon.addEventListener("click", slideLeft);
rightIcon.addEventListener("click", slideRight);
