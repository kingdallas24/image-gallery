const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const imageOverlay = overlay.querySelector("img");
const closerOverlay = overlay.querySelector(".close");

// Create function to generate HTML

function generateHTML([h, v]) {
  return `
  <div class = "item h${h} v${v}">
    <img src = "images/${randomNumber(10)}.jpg">
    <div class= "item-overlay">
  <button>View</button>
    </div>
  </div>
  `;
}

// create function to generate random number for item span value and image number

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

// Create an array of arrays of span values (vertical and horizontal )

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
]);

// Connect array and generateHTML() using map to fill in arguements for generateHTML, then covert HTML to string using join method

const html = digits.map(generateHTML).join("");

// Fill gallery with random images by setting innerHTML to the string created above

gallery.innerHTML = html;

// Create a open function to be activated when item is clicked by grabbing the currentTarget's img source. Set the overlayed image source to the currentTarget image source. Add open class to display item in the center of the page

function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  imageOverlay.src = src;
  overlay.classList.add("open");
}

// Create close function that will remove the open class to remove image from page center

function close() {
  overlay.classList.remove("open");
}

// Create an eventListener for when item is clicked and run the open function

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

// Create an eventlistener for when close button is clicked and run the close function

closerOverlay.addEventListener("click", close);
