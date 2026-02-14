const colours = [
  { name: "Black", img: "../../image/colour/colour_black.webp" },
  { name: "White", img: "../../image/colour/colour_white.webp" },
  { name: "Red", img: "../../image/colour/colour_red.webp" },
  { name: "Green", img: "../../image/colour/colour_green.jpeg" },
  { name: "Blue", img: "../../image/colour/colour_blue.png" },
  { name: "Purple", img: "../../image/colour/colour_purple.webp" },
  { name: "Yellow", img: "../../image/colour/colour_yellow.jpg" },
  { name: "Brown", img: "../../image/colour/colour_brown.jpg" },
  { name: "Orange", img: "../../image/colour/colour_orange.jpg" },
  { name: "Pink", img: "../../image/colour/colour_pink.jpeg" }
];

const container = document.getElementById('colour-container');

colours.forEach(colour => {
  const box = document.createElement('div');
  box.classList.add('sub-box');

  const img = document.createElement('img');
  img.src = colour.img;
  img.alt = colour.name;

  const name = document.createElement('p');
  name.innerText = colour.name;

  box.appendChild(img);
  box.appendChild(name);

  container.appendChild(box);
});


document.getElementById("logout-btn").addEventListener("click", () => {

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully!");

    window.location.href = "../../index.html";
  });
