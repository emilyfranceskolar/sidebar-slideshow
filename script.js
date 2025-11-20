window.addEventListener("DOMContentLoaded", main);
const images = [
  "./images/paris.jpg ",
  "./images/dancing.jpg",
  "./images/biking.png",
];
let i = 0;

function main() {
  renderImage();
  setInterval(renderImage, 6000);
}

function renderImage() {
  const container = document.querySelector(".container");
  const image = new Image(900, 600);
  image.src = images[i];

  container.innerHTML = ""; //null funkar med
  container.append(image);

  i++;
  if (i >= images.length) {
    i = 0;
  }
}
