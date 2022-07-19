const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

// Create function to generate the HTML for the image

function generateHTML([h, v]) {
  return `
<div class = "item h${h} v${v}">
<img src="./images/${randomNumber(7)}.png">
<div class = "item-overlay">
<button class ="viewBtn">View --></button>
</div>
</div>
`;
}

// Create a function to generate a random number for span width and height as well as image #

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

// Grab and display clicked image

// overlayImage.src = src;
// overlay.classList.add("open");

function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  console.log(src);
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}

overlayClose.addEventListener("click", close);

// Create a function for when user clicks image

// Create an array with 50 spots that will generate the random span value

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);
console.log(digits);
// Use map to run the generate html function on each item in the digits array

const html = digits.map(generateHTML).join("");

// Take the gallery and set the innerHTML to the html generated above

gallery.innerHTML = html;

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));
